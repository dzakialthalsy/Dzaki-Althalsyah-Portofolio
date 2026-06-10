# Dzaki Althalsyah — Portfolio

Personal portfolio website built with **React + Vite + Tailwind CSS + Framer Motion**.

## Run locally

```bash
npm install
npm run dev      # development server at http://localhost:5173
npm run build    # production build into dist/
```

## Contact form (important — one-time setup)

The contact form sends messages straight to **dz4ic7@gmail.com** via [FormSubmit](https://formsubmit.co) — no backend or account needed.

**One-time activation:** the very first time someone submits the form, FormSubmit sends a confirmation email to dz4ic7@gmail.com. Open that email and click **Activate** — after that, every submission lands directly in the inbox.

> Tip: after deploying, submit the form once yourself to trigger the activation email.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Vite. Click **Deploy** — done.

## Editing content

All text content (profile, experience, projects, skills, certifications) lives in one file: [`src/data.js`](src/data.js). Edit it and the whole site updates.
