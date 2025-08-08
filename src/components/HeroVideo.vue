<template>
  <div class="hero-wrapper">
    <video
      autoplay
      muted
      loop
      playsinline
      class="hero-video"
    >
      <source :src="isMobile ? '/videos/spadeMobile2.mp4' : '/videos/spadeShow2.mp4'" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay for darkening -->
    <div class="hero-overlay"></div>

    <!-- Tagline text -->
    <div class="hero-text">
      Culture in Motion
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(false)

const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIsMobile)
})
</script>

<style scoped>
.hero-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

/* Tagline styling */
.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: clamp(2rem, 5vw, 4rem);
  font-family: 'Neue Montreal', sans-serif;

  font-weight: 100;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  z-index: 2;
}
</style>
