<template>
  <div class="home-page">
    <!-- Elevator Door Panels -->
    <div v-if="showOverlay" class="overlay-wrapper">
      <div class="overlay-panel left-panel">
        <img src="/images/spadeLogoWhite.png" alt="Logo Left" class="half-logo align-right" />
      </div>
      <div class="overlay-panel right-panel">
        <img src="/images/spadeLogoWhite.png" alt="Logo Right" class="half-logo align-left" />
      </div>
    </div>

    <!-- Hero Video Behind -->
    <HeroVideo />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeroVideo from '../components/HeroVideo.vue'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'SPADE',
  description: 'DJ SPADE',
  ogImage: '/images/spadeLogoWhite.png',
  canonical: 'https://spadedj.com'
})

const showOverlay = ref(true)

onMounted(() => {
  setTimeout(() => {
    showOverlay.value = false
  }, 3000) // Total duration (0.5s delay + 2.5s animation)
})
</script>

<style scoped>
.home-page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: black;
}

/* === Overlay container === */
.overlay-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 9999;
}

/* === Panels === */
.overlay-panel {
  width: 50%;
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.left-panel {
  justify-content: flex-end;
  animation: slideLeftPanel 2.5s ease forwards;
  animation-delay: 0.5s;
}

.right-panel {
  justify-content: flex-start;
  animation: slideRightPanel 2.5s ease forwards;
  animation-delay: 0.5s;
}

/* === Logo Image === */
.half-logo {
  width: 180px;
  height: auto;
  object-fit: contain;
}

.align-right {
  transform: translateX(50%);
}

.align-left {
  transform: translateX(-50%);
}

/* === Animations === */
@keyframes slideLeftPanel {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slideRightPanel {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
