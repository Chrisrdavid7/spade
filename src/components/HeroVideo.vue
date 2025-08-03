<template>
    <div class="hero-wrapper">
      <video autoplay muted loop playsinline class="hero-video">
        <source src="/videos/spadeShow.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="hero-overlay" />
    </div>
  </template>
  
  <script setup>
  // No script needed yet
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
    background: rgba(0,0,0,0.4);
    z-index: 1;
  }
  </style>
  