#Requires -Version 5.1
param(
  [string]$SiteName,
  [string]$BaseUrl,
  [string]$SupabaseUrl,
  [string]$SupabaseServiceRoleKey,
  [string]$IkhokhaAppId,
  [string]$IkhokhaAppSecret,
  [string]$IkhokhaMerchantId,
  [string]$IkhokhaApiEndpoint = 'https://api.ikhokha.com'
)

function Ensure-NetlifyCLI {
  $has = (Get-Command netlify -ErrorAction SilentlyContinue) -ne $null
  if (-not $has) {
    Write-Host "==> Installing Netlify CLI globally" -ForegroundColor Cyan
    npm i -g netlify-cli | Out-Null
  }
}

Ensure-NetlifyCLI

Write-Host "==> Logging into Netlify (a browser window may open)" -ForegroundColor Cyan
netlify login

Write-Host "==> Linking/creating site" -ForegroundColor Cyan
if ($SiteName) {
  netlify init --manual --name $SiteName
} else {
  netlify init --manual
}

Write-Host "==> Setting environment variables" -ForegroundColor Cyan
if ($BaseUrl) { netlify env:set BASE_URL $BaseUrl }
if ($SupabaseUrl) { netlify env:set SUPABASE_URL $SupabaseUrl }
if ($SupabaseServiceRoleKey) { netlify env:set SUPABASE_SERVICE_ROLE_KEY $SupabaseServiceRoleKey }
if ($IkhokhaAppId) { netlify env:set IKHOKHA_APPLICATION_ID $IkhokhaAppId }
if ($IkhokhaAppSecret) { netlify env:set IKHOKHA_APPLICATION_SECRET $IkhokhaAppSecret }
if ($IkhokhaMerchantId) { netlify env:set IKHOKHA_MERCHANT_ID $IkhokhaMerchantId }
if ($IkhokhaApiEndpoint) { netlify env:set IKHOKHA_API_ENDPOINT $IkhokhaApiEndpoint }
if ($BaseUrl) { netlify env:set VITE_NETLIFY_SITE_URL $BaseUrl }

Write-Host "==> Building and deploying (production)" -ForegroundColor Cyan
netlify deploy --build --prod

Write-Host "Done." -ForegroundColor Green



