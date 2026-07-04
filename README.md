# Maximiliano Borgoglio — Portfolio

Portfolio built with Next.js (App Router) + TypeScript, no external UI
libraries — plain CSS matching the approved dark, technical design.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
app/
  layout.tsx      — fonts (IBM Plex Sans/Mono) + page metadata
  page.tsx        — assembles all sections
  globals.css     — all design tokens and styles
components/
  Nav.tsx
  Hero.tsx        — includes the terminal signature element
  About.tsx
  Experience.tsx  — edit the `jobs` array here to update your work history
  Project.tsx     — currently a placeholder, replace once you pick a project
  Skills.tsx      — edit the `groups` array to update your stack
  Contact.tsx
  Footer.tsx
  Reveal.tsx      — scroll-reveal animation wrapper (client component)
```

## Editing content

- **Experience:** open `components/Experience.tsx` and edit the `jobs` array
  (dates, bullets, certifications).
- **Skills:** open `components/Skills.tsx` and edit the `groups` array.
- **Contact info:** open `components/Contact.tsx`.

## Deploying

The easiest option is [Vercel](https://vercel.com) (made by the creators of
Next.js, free for personal projects):

1. Push this project to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Vercel auto-detects Next.js — just click Deploy.

Alternatives: Netlify, Cloudflare Pages (both also support Next.js).
