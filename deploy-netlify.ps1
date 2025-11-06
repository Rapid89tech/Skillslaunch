# Deploy SkillsLaunch to Netlify
# Run this script in PowerShell

Write-Host "🚀 Deploying SkillsLaunch to Netlify" -ForegroundColor Green
Write-Host ""

# Check if Netlify CLI is installed
Write-Host "Checking Netlify CLI..." -ForegroundColor Yellow
$netlify = Get-Command netlify -ErrorAction SilentlyContinue

if (-not $netlify) {
    Write-Host "❌ Netlify CLI not found. Installing..." -ForegroundColor Red
    npm install -g netlify-cli
    Write-Host "✅ Netlify CLI installed!" -ForegroundColor Green
} else {
    Write-Host "✅ Netlify CLI found!" -ForegroundColor Green
}

Write-Host ""

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please fix errors and try again." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green
Write-Host ""

# Deploy to Netlify
Write-Host "📤 Deploying to Netlify..." -ForegroundColor Yellow
netlify deploy --prod

Write-Host ""
Write-Host "✅ Deployment Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "⚠️  IMPORTANT: Set Environment Variables in Netlify Dashboard" -ForegroundColor Yellow
Write-Host ""
Write-Host "Go to: https://app.netlify.com → Your Site → Site settings → Environment variables" -ForegroundColor Cyan
Write-Host ""
Write-Host "Add these variables:" -ForegroundColor Cyan
Write-Host "  VITE_SUPABASE_URL=https://fcefzdcfurkfxswrtloi.supabase.co" -ForegroundColor White
Write-Host "  VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -ForegroundColor White
Write-Host "  VITE_IKHOKHA_APPLICATION_ID=IKW31E1I5WP1HT2KIIB2XZMBXJOFDX5D" -ForegroundColor White
Write-Host "  VITE_IKHOKHA_MERCHANT_ID=MID467135" -ForegroundColor White
Write-Host "  VITE_IKHOKHA_API_ENDPOINT=https://api.ikhokha.com" -ForegroundColor White
Write-Host ""
Write-Host "Then redeploy: netlify deploy --prod" -ForegroundColor Yellow
Write-Host ""

