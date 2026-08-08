# jh-portfolio-2026

Personal site for John Huang — a warm, editorial single-page landing plus a
markdown blog. Content is intentionally empty for now; it will be filled from
the `8_2026_master.pdf` resume once the copy is written.

## Stack

- [Astro](https://astro.build) — static site, content collections for the blog
- Decap CMS — write blog posts from the browser at `/admin`
- GitHub Pages — automatic deploy from `main` via GitHub Actions

## Development

```bash
npm install
npm run dev        # local dev server
npm run check      # astro typecheck
npm test           # unit tests (date utils)
npm run build      # production build → dist/
npm run preview    # preview the built site locally
```

## Deploying

1. Rename the repository to `johnlhuangP.github.io` (turns the repo into a
   GitHub Pages *user site*, so the URL becomes `https://johnlhuangP.github.io`
   with no subpath).
2. In the repo settings: **Settings → Pages → Build and deployment → Source:
   GitHub Actions**.
3. Push to `main`. The `deploy.yml` workflow builds and publishes `dist/`.

## Blog editing

Posts live in `src/content/blog/*.md` with frontmatter:

```yaml
---
title: Post title
description: One-line summary
pubDate: 2026-08-07
tags: [notes, engineering]
---
```

The easiest way to write posts is the CMS: open `https://johnlhuangP.github.io/admin`,
log in, and publish. That writes the markdown file to the repo and triggers a
deploy — no terminal needed.

One-time CMS setup: Decap's GitHub backend needs an OAuth provider. The default
config uses Netlify's external auth (`base_url: https://api.netlify.com/auth`),
which requires a free Netlify account and registering the site once. If you'd
rather self-host, swap `base_url` for your own OAuth proxy.

## Content status

- Experience entries (Google, AWS, Brown ML research, AbbVie, TA) are real,
  pulled from the August 2026 resume; summaries are placeholders.
- About copy, project rows, and the hero one-liner are placeholders.
- The design reference lives in `mockup/landing.html`.
