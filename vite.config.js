// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'   // <-- default import

export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://allspade.com',
      // add any non-router pages here if needed
      dynamicRoutes: ['/', '/about', '/bookings', '/tour', '/press', '/shop'],
    }),
  ],
})
