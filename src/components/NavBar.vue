<!-- NavBar.vue -->
<template>
  <nav :class="['nav-bar', isBlackPage ? 'navbar-black' : '']" role="navigation" aria-label="Main">
    <RouterLink to="/" class="nav-left" aria-label="Home">
      <img src="/images/spadeLogoWhite.png" alt="Spade Logo" class="spade-logo" />
    </RouterLink>

    <div class="nav-right">
      <RouterLink
        to="/about"
        class="nav-link"
        :class="{ active: route.path.startsWith('/about') }"
      >
        About
      </RouterLink>

      <RouterLink
        to="/tour"
        class="nav-link"
        :class="{ active: route.path.startsWith('/tour') }"
      >
        Tour
      </RouterLink>

      <RouterLink
        to="/bookings"
        class="nav-link"
        :class="{ active: route.path.startsWith('/bookings') }"
      >
        Bookings
      </RouterLink>

      <RouterLink
        to="/press"
        class="nav-link"
        :class="{ active: route.path.startsWith('/press') }"
      >
        Press
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

/* Routes that flip the navbar to black */
const blackRoutes = ['/bookings']
const isBlackPage = computed(() =>
  blackRoutes.some(p => route.path.startsWith(p))
)
</script>

<style scoped>
/* ===== Layout ===== */
.nav-bar {
  position: absolute;             /* swap to fixed if you want sticky */
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 3rem;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Neue Montreal', sans-serif;
  font-size: 0.95rem;
  font-weight: 300;
  text-transform: uppercase;
  color: white;
  transition: background-color 0.3s ease;
}

.navbar-black { background-color: #000; }

.nav-left { font-size: 1rem; letter-spacing: 2px; }

.nav-right { display: flex; gap: 2rem; }

/* ===== Links ===== */
.nav-link {
  position: relative;            /* anchor for ::after bar */
  color: white;
  text-decoration: none;
  padding-bottom: 0.35rem;
  transition: opacity 0.2s;
}

.nav-link:hover { opacity: 0.7; }

/* Base underline (hidden) + animation settings */
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  width: 100%;
  background: currentColor;
  transform: scaleX(0);                 /* start hidden */
  transform-origin: left;               /* animate L→R */
  transition: transform 0.35s ease;     /* timing curve */
}

/* Slide-in on hover or keyboard focus */
.nav-link:hover::after,
.nav-link:focus-visible::after {
  transform: scaleX(1);
}

/* Persist underline on active route */
.nav-link.active::after {
  transform: scaleX(1);
}

/* ===== Logo ===== */
.spade-logo { height: 50px; width: auto; }

/* ===== Mobile tweaks ===== */
@media (max-width: 768px) {
  .nav-bar   { padding: 1rem 1.5rem; font-size: 0.85rem; }
  .nav-right { gap: 1rem; }
}
</style>
