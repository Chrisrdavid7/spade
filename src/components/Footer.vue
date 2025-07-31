<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-left">
        <img src="/images/spadeLogoWhite.png" alt="Spade Logo" class="footer-logo" />
        <p class="footer-tagline">Curating the soundtrack of culture.</p>
      </div>
      <div class="footer-right">
        <nav class="footer-nav">
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/tour">Tour</RouterLink>
          <RouterLink to="/bookings">Bookings</RouterLink>
        </nav>
        <a
          href="https://www.instagram.com/spademuzik/"
          target="_blank"
          rel="noopener"
          class="instagram-icon"
          aria-label="Instagram"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <p class="footer-copy">© 2025 Spademuzik. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.site-footer {
  background-color: #000;
  color: #fff;
  padding: 3rem 2rem;
  font-family: 'Helvetica Neue', sans-serif;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
}

.footer-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-logo {
  width: 50px;
  height: auto;
  margin-bottom: 1rem;
}

.footer-tagline {
  font-size: 1rem;
  color: #aaa;
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
  }

  .footer-nav {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
