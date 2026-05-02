# TU Brothers Academy

World-class hospitality training, on demand. Built with Astro, Tailwind CSS, and TypeScript.

## Tech stack

- **[Astro 5](https://astro.build)** — content-driven, ships zero JS by default
- **[Tailwind CSS 4](https://tailwindcss.com)** — design tokens via `@theme`
- **TypeScript (strict)** — for component props and data layers
- **Content Collections** — articles authored in Markdown
- **Sharp** — image optimization (WebP/AVIF, responsive `srcset`)
- **Sitemap** — generated automatically at build time

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
src/
├── assets/             Brand images (logos, photos)
├── components/
│   ├── layout/         Header, Footer
│   ├── sections/       Hero, About, Pricing, FinalCTA, etc.
│   ├── seo/            SEO meta + JSON-LD
│   └── ui/             Button, Container, Section, ...
├── content/
│   └── articles/       Markdown articles (Content Collection)
├── data/               site.ts, pricing.ts, courses.ts, ...
├── layouts/            BaseLayout
├── pages/              File-based routing
└── styles/             global.css (Tailwind + tokens)
public/                 favicon, robots, manifest, OG image
```

## Adding an article

Drop a Markdown file into `src/content/articles/`:

```markdown
---
title: "Your headline"
excerpt: "Short summary used in cards and meta."
publishedAt: 2026-05-02
tags: ["Service", "Wine"]
readingMinutes: 6
featured: false
---

Body in Markdown…
```

The slug is the filename (without `.md`).

## Layout structure

`BaseLayout` renders, in order:

1. `<Header />` (sticky pill, can hide via `hideHeader`)
2. `<main>{slot}</main>` (page-specific sections)
3. `<FinalCTA />` (gradient CTA strip — can hide via `hideFinalCTA`)
4. `<Footer />` (can hide via `hideFooter`)

Pages like `/contact`, `/privacy`, `/terms`, `/404` set `hideFinalCTA={true}` so the
gradient strip doesn't appear in already-CTA-heavy contexts.

## Deployment

Configured for **Netlify** out of the box:

- `netlify.toml` sets the build command, publish dir, security headers, and a 404 redirect
- Push to your default branch → Netlify auto-deploys

## Brand colors

The `--color-brand-*` palette in `src/styles/global.css` is derived from the academy logo (violet `#6149E8`). Adjust the `@theme` block to retune the brand.

## Notes

- The contact form currently posts client-side and shows a success state. Wire it to a real handler (Web3Forms, Formspree, or your own) by editing `src/components/sections/Contact.astro`.
- The `_archive/` directory holds the previous static site for reference and is ignored by Git.

---

© TU Brothers Academy
