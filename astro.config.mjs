// @ts-check
import { defineConfig } from 'astro/config'; 
import partytown from "@astrojs/partytown"; 
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({ 
  site: 'https://polisync.de',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      changefreq: 'daily',
      priority: 0.7,  
      lastmod: new Date()
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
