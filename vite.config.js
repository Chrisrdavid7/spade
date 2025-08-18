import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteSitemapPlugin } from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),
    ViteSitemapPlugin({
      hostname: 'https://allspade.com',
      routes: [
        '/', 
        '/about',
        '/bookings',
        '/tour',
        '/press',
        '/shop'
      ]
    })
  ]
})
