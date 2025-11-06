import { corsHeaders } from '../_shared/cors.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create a Supabase client with the admin role
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Fetch profiles and pending enrollments in parallel (from both potential tables)
    const [profilesResponse, lowerEnrollResp, upperEnrollResp] = await Promise.all([
      supabaseAdmin.from('profiles').select('*').order('created_at', { ascending: false }).limit(100),
      supabaseAdmin.from('enrollments').select('*').eq('status', 'pending').order('enrolled_at', { ascending: false }).limit(50),
      supabaseAdmin.from('Enrollment').select('*').eq('status', 'pending').order('enrolled_at', { ascending: false }).limit(50)
    ]);

    if (profilesResponse.error) throw profilesResponse.error;
    if (lowerEnrollResp.error && upperEnrollResp.error) throw (lowerEnrollResp.error || upperEnrollResp.error);

    const mergedPending = [
      ...(lowerEnrollResp.data ?? []),
      ...(upperEnrollResp.data ?? [])
    ];

    const data = {
      users: profilesResponse.data,
      pendingEnrollments: mergedPending,
    };

    return new Response(JSON.stringify(data), {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
      },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
      },
      status: 400,
    })
  }
})