# Deploying to Vercel (quick guide)

This guide helps you deploy the `bone-cadets-next` Next.js app to Vercel quickly.

Prerequisites
- Your project pushed to a Git provider (GitHub, GitLab, Bitbucket) OR you can deploy directly from the local machine using the Vercel CLI.
- Node.js & npm installed locally for local testing.

1) Deploy via Vercel (recommended — UI, fastest)
- Go to https://vercel.com and sign up / log in with your GitHub/GitLab/Bitbucket account.
- Click "New Project" → Import Git Repository → select `bone-cadets-next`.
- Vercel should auto-detect Next.js. Build command: `npm run build` (auto). Output directory: managed by Vercel (no change needed).
- Environment variables: add any secrets under Settings → Environment Variables.
- Click Deploy. Vercel will build and provide a preview URL (your-project.vercel.app). Configure a custom domain if desired.

2) Deploy via Vercel CLI (from your machine)
Open PowerShell in the repository root and run:

```powershell
npm install -g vercel
vercel login
# run this once to link an account. Then, from repo root:
vercel --prod
```

The CLI walk-through will ask for project name, scope (personal/team), and link the project to Vercel. Use `vercel --prod` when you're ready to publish the production build.

3) After deploy — update site metadata
- Replace the placeholder URL `https://bone-cadets.example` used in `app/layout.tsx`, `public/robots.txt` and `public/sitemap.xml` with your production domain (example: `https://bone-cadets.vercel.app` or your custom domain).

4) Optional: Add an OG image and update metadata
- Add `public/og-image.png` (1200x630 recommended) and change the OpenGraph/Twitter `images` entries in `app/layout.tsx` to point to `/og-image.png`.

5) Automatic deploys
- When connected to Git, every push to branches will create deployments. Configure protected branch (like `main`) for production.

6) Troubleshooting
- If build fails on Vercel, open the project → Deployments → Latest build log. Common fixes:
  - Node version mismatch: set `engines.node` in `package.json` or set Node version in Vercel project settings.
  - Missing environment variables: add them in project settings.
- If `npm run dev` fails locally due to port lock, ensure no other node processes are running on port 3000 or run `vercel dev` to preview locally.

7) Optional vercel.json (example)
You generally don't need a `vercel.json` for a default Next app. If you want to pin settings, create `vercel.json` like:

```json
{
  "version": 2,
  "builds": [{ "src": "package.json", "use": "@vercel/next" }],
  "routes": []
}
```

8) Security & next steps
- Add domain and verify ownership in Vercel settings.
- Update SEO metadata and JSON-LD with the real domain.
- Submit sitemap URL to Google Search Console: `https://yourdomain/sitemap.xml`.

If you want, I can:
- Create a small `og-image` placeholder in `public/` and update `app/layout.tsx` to use it.
- Add a `vercel.json` for you.
- Prepare a minimal GitHub Actions workflow to run `npm run build` on push (not necessary if you use Vercel's Git integration).

Pick one next step and I'll implement it.
