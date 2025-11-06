#Requires -Version 5.1
param(
  [string]$RemoteUrl
)

Write-Host "==> Checking Git..." -ForegroundColor Cyan
$gitExists = (Get-Command git -ErrorAction SilentlyContinue) -ne $null
if (-not $gitExists) {
  Write-Host "Git not found. Installing via winget..." -ForegroundColor Yellow
  try {
    winget install --id Git.Git -e --source winget -h 0
  } catch {
    Write-Error "Failed to install Git automatically. Please install Git and re-run the script."
    exit 1
  }
}

Write-Host "==> Initializing repository" -ForegroundColor Cyan
git init | Out-Null
git add -A
git commit -m "Initial commit: Netlify functions + iKhokha payment links" | Out-Null
git branch -M main

if ($RemoteUrl) {
  Write-Host "==> Adding remote: $RemoteUrl" -ForegroundColor Cyan
  git remote remove origin 2>$null
  git remote add origin $RemoteUrl
  Write-Host "==> Pushing to origin main" -ForegroundColor Cyan
  git push -u origin main
} else {
  Write-Host "Skipped remote add (no --RemoteUrl provided)." -ForegroundColor Yellow
}

Write-Host "Done." -ForegroundColor Green



