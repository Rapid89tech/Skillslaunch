# GitHub + Netlify Deployment (Quick)

## 1) Push to GitHub

PowerShell at project root:

```powershell
# If Git missing
winget install --id Git.Git -e

# Initialize and commit
powershell -ExecutionPolicy Bypass -File .\scripts\init-git.ps1 -RemoteUrl "https://github.com/YOUR_USER/YOUR_REPO.git"
```

> Replace the RemoteUrl with your actual empty GitHub repo URL.

## 2) Deploy to Netlify (Production)

```powershell
# Install CLI if needed
npm i -g netlify-cli

# Run guided deployment (will open browser to login)
powershell -ExecutionPolicy Bypass -File .\scripts\deploy-netlify.ps1 `
  -SiteName "betaskill-training" `
  -BaseUrl "https://YOUR-SITE.netlify.app" `
  -SupabaseUrl "https://jpafcmixtchvtrkhltst.supabase.co" `
  -SupabaseServiceRoleKey "YOUR_SERVICE_ROLE_KEY" `
  -IkhokhaAppId "IKW31E1I5WP1HT2KIIB2XZMBXJOFDX5D" `
  -IkhokhaAppSecret "455rtQjghdOHzLN3YZ3AQ81H3KEf7OeS"
```

This sets the required env vars and deploys with `netlify deploy --build --prod`.

## Notes
- Test payments only on the Netlify URL (or `netlify dev`), not Vite’s `localhost:3002`.
- Webhook path is `/.netlify/functions/ikhokha-webhook` and updates Supabase payments/enrollments.
- If you need to re-link a different site: `netlify unlink` then rerun the script.


