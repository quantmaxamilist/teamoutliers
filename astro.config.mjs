// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { oldUrls } from './src/data/redirects.mjs';

export default defineConfig({
  site: 'https://teamoutliers.com',
  trailingSlash: 'ignore',
  build: { format: 'file' },
  scopedStyleStrategy: 'class',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  server: { port: 4346 },
  redirects: oldUrls,
  vite: { optimizeDeps: { include: ['gsap', 'gsap/ScrollTrigger', 'lenis', 'three'] } },
  integrations: [
    sitemap({
      filter: (p) => !p.includes('/404') && !Object.keys(oldUrls).some((o) => p.replace(/\/$/, '').endsWith(o)),
    }),
  ],
});
