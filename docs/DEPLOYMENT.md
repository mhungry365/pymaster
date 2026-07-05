# PyMaster Deployment

## Repository

GitHub repo: https://github.com/mhungry365/pymaster

## Vercel Deployment Steps

1. Sign in to Vercel with the owner account.
2. Choose **Add New Project**.
3. Import the `mhungry365/pymaster` GitHub repository.
4. Keep the default framework preset as **Next.js**.
5. Use the default commands:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `.next`
6. Deploy the project.
7. After deployment, open the Vercel preview URL and check:
   - `/`
   - `/dashboard`
   - `/curriculum`
   - `/lessons/python-variables`
   - `/playground`
   - `/practice`
   - `/projects`
   - `/notes`

## Pre-Deployment Checks

Run these commands locally before deploying:

```bash
npm run lint
npm run build
```

## Ownership Note

All code, hosting, database, domain, and API keys should stay under the owner’s own accounts.
