<template>
  <div class="home-page">
    <!-- Slide Down Overlay -->
    <div class="slide-overlay" v-if="showOverlay">
      <img src="/images/spadeLogoWhite.png" alt="Spade Logo" class="overlay-logo" />
    </div>

    <!-- Fullscreen Hero Video -->
    <HeroVideo />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeroVideo from '../components/HeroVideo.vue'
import { useSeo } from '../composables/useSeo'

/* ───────── SEO metadata ───────── */
useSeo({
  title: 'SPADE',
  description: 'DJ SPADE',
  ogImage: '/images/dj-spade-official-portrait.jpg',
  canonical: 'https://spadedj.com'
})
const showOverlay = ref(true)

onMounted(() => {
  setTimeout(() => {
    showOverlay.value = false
  }, 2500) // 2.5s delay before it disappears
})
</script>

<style scoped>
.home-page {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: black;
  position: relative;
}

/* Overlay styles */
.slide-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: slideDown 3.5s ease forwards;
}

@keyframes slideDown {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(100%);
  }
}

.overlay-logo {
  width: 180px;
  max-width: 60%;
  opacity: 1;
}
</style>
