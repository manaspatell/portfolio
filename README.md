# Deploying to Vercel

This project is a static SPA with a small serverless contact endpoint. Follow these steps to deploy on Vercel:

1. Sign in to Vercel and create a new project.
2. Connect your GitHub/GitLab/Bitbucket repository (push this repo first).
3. Ensure `vercel.json` is present at the repository root (it rewrites SPA routes to `templates/index.html`).
4. The contact form posts to `/api/contact` — the serverless function is in `api/contact.js`.
5. Deploy. Vercel will detect the static files and the `api` folder automatically.

Local testing:

Install deps:

```
npm install
```

You can run a simple local server for preview (optional):

```
npm run dev
```

Notes:
- `server.js` is for local Node usage only and is not used by Vercel. You may remove it if you prefer a purely static deploy.
- If you add backend integrations (email/db), update `api/contact.js` accordingly.
