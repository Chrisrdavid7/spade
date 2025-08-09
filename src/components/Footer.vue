<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-left">
        <RouterLink to="/" class="footer-logo-btn" aria-label="Back to homepage">
          <img src="/images/spadeLogoWhite.png" alt="Spade Logo" class="footer-logo" />
        </RouterLink>
        <p class="footer-tagline">Connecting Cultures Through Vibrations</p>

        <!-- Subscribe Form -->
        <form class="subscribe-form" @submit.prevent="subscribe">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="subscribe-input"
          />
          <button type="submit" class="subscribe-btn" :disabled="loading">
            {{ loading ? 'Subscribing...' : 'Subscribe' }}
          </button>
        </form>
        <p class="subscribe-note">
          Exclusive ticket & merch giveaways.
        </p>
      </div>

      <div class="footer-right">
        <nav class="footer-nav">
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/tour">Tour</RouterLink>
          <RouterLink to="/bookings">Bookings</RouterLink>
          <RouterLink to="/press">Press</RouterLink>
        </nav>

        <a
          href="https://www.instagram.com/spade/"
          target="_blank"
          rel="noopener"
          class="instagram-icon"
          aria-label="Instagram"
        >
          <i class="fab fa-instagram"></i>
        </a>

        <p class="footer-copy">© 2025 All Spade LLC. All rights reserved.</p>
      </div>
    </div>

    <!-- Bottom-center Culse logo -->
    <div class="culse-logo-wrapper" aria-hidden="true">
      <img src="/images/culseLogo.png" alt="" class="culse-logo" />
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const loading = ref(false)

const subscribe = async () => {
  if (!email.value) return alert('Please enter an email')
  loading.value = true

  try {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value }),
    })

    if (!res.ok) throw new Error()

    alert('🎉 Subscribed successfully!')
    email.value = ''
  } catch (err) {
    alert('❌ Something went wrong. Please try again.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.site-footer {
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 3rem 2rem 4.25rem;
  font-family: 'Helvetica Neue', sans-serif;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
}

.footer-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-right {
  flex: 1.3; /* slightly larger than left */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.footer-logo {
  width: 50px;
  height: auto;
  margin-bottom: 1rem;
}

.footer-tagline {
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 1rem;
}

/* Subscribe form */
.subscribe-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  width: 50%;
}
.subscribe-input {
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #888;
  flex: 1;
  font-size: 0.9rem;
}
.subscribe-btn {
  background-color: #ffffffa9;
  color: #000;
  font-weight: bold;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}
.subscribe-btn:hover {
  background-color: #ccc;
}
.subscribe-note {
  font-size: 0.75rem;
  color: #888;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.footer-nav {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}
.footer-nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
  transition: opacity 0.2s;
}
.footer-nav a:hover {
  opacity: 0.6;
}

.instagram-icon {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
  text-decoration: none;
  transition: opacity 0.3s;
}
.instagram-icon:hover {
  opacity: 0.7;
}

.footer-copy {
  font-size: 0.8rem;
  color: #888;
}

/* Bottom-center Culse logo */
.culse-logo-wrapper {
  position: absolute;
  left: 50%;
  bottom: 1.25rem;
  transform: translateX(-50%);
  display: grid;
  place-items: center;
  pointer-events: none;
}
.culse-logo {
  width: 28px;
  height: auto;
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .footer-left,
  .footer-right {
    align-items: center;
    width: 100%;
  }
  .footer-nav {
    flex-direction: column;
    gap: 1rem;
  }
  .subscribe-form {
    flex-direction: column;
    align-items: center;
  }
  .subscribe-input {
    width: 100%;
  }
  .subscribe-btn {
    width: 100%;
  }
}
</style>
