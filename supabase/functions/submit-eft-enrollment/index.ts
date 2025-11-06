import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

// Securely create a pending EFT enrollment using the service role key
// This bypasses client-side RLS issues and ensures admin sees the request instantly
// Body: { userId, userEmail, courseId, courseTitle?, paymentRef }

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const body = await req.json()
    const userId = String(body.userId || '').trim()
    const userEmail = String(body.userEmail || '').trim()
    const courseId = String(body.courseId || '').trim()
    const courseTitle = String(body.courseTitle || courseId || 'Course').trim()
    const paymentRef = String(body.paymentRef || '').trim()

    if (!userId || !courseId) {
      throw new Error('Missing required fields userId or courseId')
    }

    const insertPayload = {
      user_id: userId,
      user_email: userEmail || null,
      course_id: courseId,
      course_title: courseTitle,
      status: 'pending',
      enrolled_at: new Date().toISOString(),
      progress: 0,
      payment_ref: paymentRef || null,
      payment_method: 'eft'
    }

    const { data, error } = await supabaseAdmin
      .from('enrollments')
      .insert([insertPayload])
      .select()
      .single()

    if (error) throw error

    return new Response(JSON.stringify({ success: true, enrollment: data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || String(error) }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

interface EnrollmentData {
  user_id: string;
  user_email: string;
  course_id: string;
  course_title: string;
  payment_ref: string;
}

Deno.serve(async (req) => {
  // This is needed if you're deploying functions from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const {
      user_id,
      user_email,
      course_id,
      course_title,
      payment_ref,
    }: EnrollmentData = await req.json();

    // The admin client has the service_role key and bypasses RLS.
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // First, check if a pending enrollment already exists to prevent duplicates.
    const { data: existing, error: existingError } = await supabaseAdmin
      .from('enrollments')
      .select('id')
      .eq('user_id', user_id)
      .eq('course_id', course_id)
      .eq('status', 'pending')
      .limit(1);

    if (existingError) {
      console.error('Edge Function: Error checking for existing enrollment.', existingError);
      throw existingError;
    }

    if (existing && existing.length > 0) {
      console.warn('Edge Function: A pending enrollment already exists.', { userId: user_id, courseId: course_id });
      // Return the existing enrollment to indicate success without creating a duplicate.
      return new Response(JSON.stringify({ enrollment: existing[0] }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });
    }

    // Insert the new pending enrollment record.
    const { data: newEnrollment, error: insertError } = await supabaseAdmin
      .from('enrollments')
      .insert({
        user_id,
        user_email,
        course_id,
        course_title,
        status: 'pending',
        payment_ref,
        enrolled_at: new Date().toISOString(),
        progress: 0,
        completed_lessons: [],
      })
      .select()
      .single();

    if (insertError) {
      console.error('Edge Function: CRITICAL - Failed to insert enrollment.', insertError);
      throw insertError;
    }

    return new Response(JSON.stringify({ enrollment: newEnrollment }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
