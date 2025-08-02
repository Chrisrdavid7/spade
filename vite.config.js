import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { SitemapPlugin } from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),
    SitemapPlugin({
      hostname: 'https://spadedj.com',
      // simple list of routable paths
      urls: [
        '/',
        '/about',
        '/tour',
        '/bookings',
        '/press'
      ]
      // you can also pass a function to fetch Vite router routes automatically
    })
  ]
})
