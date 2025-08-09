// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://spadedj.com',
      // simple list of routable paths
      urls: [
        '/',
        '/about',
        '/tour',
        '/bookings',
        '/press', 
        '/shop', 
      ]
      // you can also pass a function to fetch Vite router routes automatically
    })
  ]
})
