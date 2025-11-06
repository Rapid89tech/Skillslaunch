# 🚀 Next Steps: Deploy to Netlify

## ✅ What's Done:

1. ✅ **Supabase Edge Functions Deployed**:
   - `process-payment` - Creates iKhokha payment links
   - `ikhokha-webhook` - Handles payment callbacks
   
2. ✅ **Environment Variables Set in Supabase**:
   - `IKHOKHA_APPLICATION_ID`
   - `IKHOKHA_APPLICATION_SECRET`
   - `IKHOKHA_MERCHANT_ID`
   - `IKHOKHA_API_ENDPOINT`
   - `BASE_URL`

3. ✅ **Frontend Code Complete**:
   - Payment form redesigned (no card inputs)
   - Redirects to iKhokha payment page
   - Success/Failed pages created
   - Routes configured

4. ✅ **Production Build Complete**:
   - Built successfully in `dist/` folder
   - No linter errors
   - Ready for deployment

---

## 🎯 Remaining Steps:

### 1. Deploy to Netlify

Run these commands:

```bash
# Login to Netlify (if not already)
netlify login

# Deploy to production
netlify deploy --prod
```

When prompted:
- **Publish directory**: `dist`
- Confirm deployment

### 2. Set Netlify Environment Variables

After deployment, set these environment variables in Netlify Dashboard:

1. Go to: **https://app.netlify.com** → Your Site → **Site settings** → **Environment variables**

2. Add these variables:
   ```
   VITE_SUPABASE_URL = https://jpafcmixtchvtrkhltst.supabase.co
   VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwYWZjbWl4dGNodnRya2hsdHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MzIzODYsImV4cCI6MjA2OTEwODM4Nn0.dR0-DW8_ekftD9DZjGutGuyh4kiPG338NQ367tC8Pcw
   ```

3. **Redeploy** to apply environment variables:
   ```bash
   netlify deploy --prod
   ```

### 3. Update BASE_URL (If Netlify URL is Different)

If your Netlify URL is NOT `https://betaskilltraining.netlify.app`, update the Supabase secret:

```bash
supabase secrets set BASE_URL="https://your-actual-netlify-url.netlify.app"
```

### 4. Test the Payment Flow

1. Go to your deployed site
2. Select a course (e.g., Plumbing 101)
3. Click "Enroll Now"
4. Click "Pay Now"
5. Verify redirect to iKhokha payment page
6. Use test card: **4111 1111 1111 1111**
   - Expiry: 12/25
   - CVV: 123
7. Complete payment
8. Verify you're redirected back to success page
9. Check enrollment is approved in dashboard

---

## 🔍 Verify Everything Works:

### Check Supabase Function Logs:
https://supabase.com/dashboard/project/jpafcmixtchvtrkhltst/functions

Look for:
- Payment link creation logs
- Webhook callback logs
- Any errors

### Check Database:
1. Go to Supabase → Table Editor → `payments`
2. Verify payment record created with `status = 'pending'`
3. After webhook, verify `status = 'completed'`

4. Go to `enrollments` table
5. Verify enrollment status changed to `'approved'`

---

## 🐛 Troubleshooting:

### If Payment Link Not Created:
1. Check browser console for errors
2. Check Supabase function logs
3. Verify iKhokha credentials are correct

### If Webhook Not Called:
1. Verify BASE_URL matches your actual deployed URL
2. Check if iKhokha can reach your webhook (must be public HTTPS)
3. Check webhook signature in logs

### If Enrollment Not Approved:
1. Check webhook function logs in Supabase
2. Verify payment status is `'completed'` in database
3. Check enrollments table for status

---

## 📊 What Happens When User Pays:

```
1. User clicks "Pay Now"
   ↓
2. Frontend calls Supabase Edge Function: process-payment
   ↓
3. Edge Function creates iKhokha payment link
   ↓
4. Frontend redirects user to: https://securepay.ikhokha.red/xxxxx
   ↓
5. User enters card details on iKhokha's page (secure, PCI compliant)
   ↓
6. iKhokha processes payment
   ↓
7a. SUCCESS → iKhokha calls webhook → Updates payment & enrollment
7b. FAILURE → Redirects to /payment-failed
   ↓
8. User sees success page with transaction reference
   ↓
9. Admin sees approved enrollment in dashboard
```

---

## 📝 Important Notes:

- **Card details are NEVER sent to our servers** ✅
- **iKhokha handles all card processing** ✅
- **Webhook auto-approves enrollments** ✅
- **All communication is over HTTPS** ✅
- **PCI DSS compliant** ✅

---

## 📞 Support Resources:

- **iKhokha Support**: 087 222 7000
- **iKhokha Docs**: https://developer.ikhokha.com/overview
- **Supabase Dashboard**: https://supabase.com/dashboard/project/jpafcmixtchvtrkhltst
- **Netlify Dashboard**: https://app.netlify.com

---

## ✨ Ready to Deploy!

Everything is prepared and ready. Just run:

```bash
netlify deploy --prod
```

Then test the payment flow with a real R1.00 test payment!

**Good luck! 🎉**

