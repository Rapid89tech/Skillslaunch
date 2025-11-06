// Netlify Function: Create iKhokha Payment Link
// Uses iKhokha Payment Link API per docs: https://developer.ikhokha.com/overview

import type { Handler } from '@netlify/functions'
import { createClient } from '@supabase/supabase-js'

interface PaymentLinkRequest {
  amount: number
  currency: string
  description: string
  customer_email: string
  customer_name: string
  course_id: string
  user_id: string
}

function generateHmacSha256(path: string, body: string, secret: string): string {
  const crypto = require('crypto') as typeof import('crypto')
  return crypto.createHmac('sha256', secret).update(path + body).digest('hex')
}

const handler: Handler = async (event) => {
  try {
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: 'ok'
      }
    }

    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, headers: corsHeaders, body: 'Method Not Allowed' }
    }

    const IKHOKHA_API_ENDPOINT = process.env.IKHOKHA_API_ENDPOINT || 'https://api.ikhokha.com'
    const IKHOKHA_APP_ID = process.env.IKHOKHA_APPLICATION_ID
    const IKHOKHA_APP_SECRET = process.env.IKHOKHA_APPLICATION_SECRET
    const BASE_URL = process.env.BASE_URL || process.env.URL || ''

    if (!IKHOKHA_APP_ID || !IKHOKHA_APP_SECRET) {
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({ success: false, error: 'MISSING_CREDENTIALS', message: 'iKhokha credentials not configured' })
      }
    }

    const payload = JSON.parse(event.body || '{}') as PaymentLinkRequest

    // Build iKhokha payload
    const externalTransactionID = `SKILL-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    const ikPayload = {
      entityID: IKHOKHA_APP_ID,
      externalEntityID: payload.user_id,
      amount: Math.round((payload.amount || 0) * 100),
      currency: 'ZAR',
      requesterUrl: BASE_URL || 'https://example.com',
      mode: 'live',
      description: payload.description,
      externalTransactionID,
      urls: {
        callbackUrl: `${BASE_URL}/.netlify/functions/ikhokha-webhook`,
        successPageUrl: `${BASE_URL}/payment-success?course=${payload.course_id}&ref=${externalTransactionID}`,
        failurePageUrl: `${BASE_URL}/payment-failed?course=${payload.course_id}`,
        cancelUrl: `${BASE_URL}/courses/${payload.course_id}`
      }
    }

    const path = '/public-api/v1/api/payment'
    const bodyString = JSON.stringify(ikPayload)
    const signature = generateHmacSha256(path, bodyString, IKHOKHA_APP_SECRET)

    // Call iKhokha API
    const response = await fetch(`${IKHOKHA_API_ENDPOINT}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'IK-APPID': IKHOKHA_APP_ID,
        'IK-SIGN': signature,
        'Accept': 'application/json'
      },
      body: bodyString
    })

    const json = await response.json().catch(async () => ({ raw: await response.text() }))

    if (response.ok && json?.responseCode === '00') {
      // Store a pending payment record in Supabase (if env is provided)
      try {
        const supabaseUrl = process.env.SUPABASE_URL
        const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        if (supabaseUrl && supabaseServiceRoleKey) {
          const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)
          await supabase.from('payments').insert({
            user_id: payload.user_id,
            course_id: payload.course_id,
            amount: payload.amount,
            currency: 'ZAR',
            status: 'pending',
            payment_method: 'card',
            transaction_reference: externalTransactionID,
            payment_gateway: 'ikhokha',
            gateway_response: json
          })
        }
      } catch (dbErr) {
        console.warn('Failed to write pending payment to Supabase:', dbErr)
      }
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({
          success: true,
          payment_link_url: json.paylinkUrl,
          payment_link_id: json.paylinkID,
          transaction_reference: externalTransactionID
        })
      }
    }

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        success: false,
        error: 'PAYMENT_LINK_FAILED',
        message: json?.message || 'Failed to create payment link',
        details: json,
      })
    }
  } catch (e: any) {
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ success: false, error: 'SERVER_ERROR', message: e?.message || 'Unexpected error' })
    }
  }
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

export { handler }


