# Md. Shahariar Nahin — Portfolio

Personal portfolio website for **Md. Shahariar Nahin**, Full-Stack Developer
(Python, Django & React). Built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production-ready static site is generated in `dist/`, which you can
deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Project structure

```
src/
  components/    Reusable, presentational React components (one per section)
  data/          content.js — single source of truth for all real content
  hooks/         useScrollReveal.js — IntersectionObserver-based reveal hook
  App.jsx        Assembles all sections in the required order
  main.jsx       React entry point
  index.css      Tailwind directives + global styles
```

## Editing content

All real content (profile info, skills, projects, publications, education,
experience, leadership) lives in `src/data/content.js`. Update that file to
change what appears on the site — no need to touch the components themselves.

## Email functionality

Clicking any "Email Me" / email link opens Gmail's compose view in a new tab
with `nahinshahariar27@gmail.com` pre-filled as the recipient. If the popup is
blocked, it falls back to a standard `mailto:` link. This logic lives in
`src/components/EmailLink.jsx`.

## Contact form

The contact form is frontend-only and is not wired to a live email service.
It's structured so a backend endpoint or a form service (e.g. Formspree,
Resend, a custom API route) can be plugged in later.
