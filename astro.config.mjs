import { defineConfig } from 'astro/config';

// Site lives at https://johnlhuangP.github.io after the repo is renamed
// from johnhuang.dev to johnlhuangP.github.io (user site, no subpath).
export default defineConfig({
  site: 'https://johnlhuangP.github.io',
  base: '/',
});
