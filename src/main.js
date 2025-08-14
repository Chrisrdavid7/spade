// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { inject } from '@vercel/analytics'

/* 1️⃣  import the plugin factory */
import { createHead } from '@vueuse/head'

// ✅ Run Vercel Analytics only in production
if (import.meta.env.PROD) {
  inject()
}

const app = createApp(App)

/* 2️⃣  create an instance of “head” and register it */
const head = createHead()
app.use(head)

/* 3️⃣  register any other plugins (router, pinia, etc.) */
app.use(router)

/* 4️⃣  mount the app */
app.mount('#app')
