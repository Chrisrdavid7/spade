<template>
  <nav :class="['nav-bar', isBlackPage ? 'navbar-black' : '']">
    <RouterLink to="/" class="nav-left">
      <img src="/images/spadeLogoWhite.png" alt="Spade Logo" class="spade-logo" />
    </RouterLink>
    <div class="nav-right">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/tour">Tour</RouterLink>
      <RouterLink to="/bookings">Bookings</RouterLink>
    </div>
  </nav>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isBlackPage = computed(() => route.path === '/bookings')
</script>

<style scoped>
.nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 3rem;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 0.95rem;
  font-weight: 300;
  text-transform: uppercase;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

.navbar-black {
  background-color: black;
}

.nav-left {
  font-size: 1rem;
  letter-spacing: 2px;
}

.nav-right {
  display: flex;
  gap: 2rem;
}

.nav-right a {
  color: white;
  text-decoration: none;
  transition: opacity 0.2s;
}

.nav-right a:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .nav-bar {
    padding: 1rem 1.5rem;
    font-size: 0.85rem;
  }

  .nav-right {
    gap: 1rem;
  }
}
.spade-logo {
  height: 50px;
  width: auto;
}

</style>
