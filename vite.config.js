import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),
    viteSitemap({
      hostname: 'https://allspade.com',
      dynamicRoutes: ['/', '/about', '/bookings', '/tour', '/press', '/shop'],
      generateRobotsTxt: false   // 👈 disable robots.txt creation
    }),
  ],
})
