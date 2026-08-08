import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const title = process.argv.slice(2).join(' ').trim();

if (!title) {
  console.error('Usage: npm run new-post -- "Your Post Title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

const root = fileURLToPath(new URL('..', import.meta.url));
const postsDir = join(root, 'src', 'content', 'blog');
const filePath = join(postsDir, `${slug}.md`);

if (existsSync(filePath)) {
  console.error(`A post already exists at ${filePath}`);
  process.exit(1);
}

const pubDate = new Date().toISOString().slice(0, 10);
const frontmatter = `---
title: "${title.replaceAll('"', '\\"')}"
description: ""
pubDate: ${pubDate}
tags: []
---

Write your post here.
`;

mkdirSync(postsDir, { recursive: true });
writeFileSync(filePath, frontmatter);
console.log(`Created ${filePath}`);
