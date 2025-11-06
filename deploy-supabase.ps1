# Deploy Supabase Edge Function for iKhokha Payments
# Run this script in PowerShell

Write-Host "🚀 Deploying SkillsLaunch iKhokha Payment Integration" -ForegroundColor Green
Write-Host ""

# Check if Supabase CLI is installed
Write-Host "Checking Supabase CLI..." -ForegroundColor Yellow
$supabase = Get-Command supabase -ErrorAction SilentlyContinue

if (-not $supabase) {
    Write-Host "❌ Supabase CLI not found. Installing..." -ForegroundColor Red
    npm install -g supabase
    Write-Host "✅ Supabase CLI installed!" -ForegroundColor Green
} else {
    Write-Host "✅ Supabase CLI found!" -ForegroundColor Green
}

Write-Host ""

# Deploy Edge Function
Write-Host "📦 Deploying process-payment Edge Function..." -ForegroundColor Yellow
supabase functions deploy process-payment --no-verify-jwt

Write-Host ""

# Set secrets
Write-Host "🔐 Setting environment secrets..." -ForegroundColor Yellow
supabase secrets set IKHOKHA_APPLICATION_ID=IKW31E1I5WP1HT2KIIB2XZMBXJOFDX5D
supabase secrets set IKHOKHA_APPLICATION_SECRET=455rtQjghdOHzLN3YZ3AQ81H3KEf7OeS
supabase secrets set IKHOKHA_MERCHANT_ID=MID467135
supabase secrets set IKHOKHA_API_ENDPOINT=https://api.ikhokha.com

Write-Host ""
Write-Host "✅ Deployment Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "🎉 iKhokha payment integration is now live!" -ForegroundColor Cyan
Write-Host "   Payments will now be processed through your iKhokha account." -ForegroundColor Cyan
Write-Host ""
Write-Host "📊 Monitor payments at: https://my.ikhokha.com" -ForegroundColor Yellow
Write-Host ""

