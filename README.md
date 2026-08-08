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

## Blog editing (markdown + push)

Posts live in `src/content/blog/*.md` with frontmatter:

```yaml
---
title: Post title
description: One-line summary
pubDate: 2026-08-07
tags: [notes, engineering]
---
```

The fast path is a scaffold command so you never have to remember the
frontmatter:

```bash
npm run new-post -- "My First Post"
```

That creates `src/content/blog/my-first-post.md` with today's date and empty
frontmatter fields. Edit it, preview with `npm run dev`, then publish with:

```bash
git add src/content/blog && git commit -m "post: My First Post" && git push
```

The GitHub Actions workflow builds and deploys automatically — no CMS or OAuth
involved.

There is also an optional Decap CMS admin at `/admin` (still configured in
`public/admin/`) for browser-based writing, but it requires a one-time OAuth
provider setup (e.g., Netlify's external auth) and isn't needed for this
workflow.

## Content status

- Experience entries (Google, AWS, Brown ML research, AbbVie, TA) are real,
  pulled from the August 2026 resume; summaries are placeholders.
- About copy, project rows, and the hero one-liner are placeholders.
- The design reference lives in `mockup/landing.html`.
