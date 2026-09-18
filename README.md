# SolveAI

A polished AI problem-solving SaaS MVP built with Next.js, TypeScript, Tailwind CSS, and the OpenAI SDK.

## Run locally

```bash
npm install
cp .env.example .env.local
# Add OPENAI_API_KEY to .env.local
npm run dev
```

Open http://localhost:3000.

## Environment

- `OPENAI_API_KEY`: server-only OpenAI API key. Never expose it as a `NEXT_PUBLIC_` variable.
- `OPENAI_MODEL`: optional model override, defaults to `gpt-4o-mini`.

The app includes local browser history for a zero-setup MVP and is structured for replacing it with Supabase auth/database. Payment actions are intentionally placeholders.

## Deploy to Vercel

Import this repository into Vercel and add `OPENAI_API_KEY` in Project Settings → Environment Variables.
