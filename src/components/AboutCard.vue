<template>
    <div class="card">
      <div class="image-overlay"></div>
      <img :src="src" :alt="alt" class="card-img" />
  
      <!-- Top label overlay (without card-year) -->
      <div class="card-overlay-top">
        <div class="card-name">
          <span class="card-title">{{ title }}</span>
          <span class="card-subtitle">{{ subtitle }}</span>
        </div>
      </div>
  
      <!-- Bottom overlay caption -->
      <div class="card-caption">
        {{ desc }}
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    src: String,
    alt: String,
    title: String,
    subtitle: String,
    desc: String,
  })
  </script>
  
  <style scoped>
  .card {
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;
    width: 32em;
    height: 42em;
    flex-shrink: 0;
    background: #000;
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);
    margin: .5rem;
  }
  
  .image-overlay {
    z-index: 5;
    background-color: #0003;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0%;
  }
  
  .card-img {
    width: 100%;
    height: 100%;
    max-height: 42em;
    object-fit: cover;
    display: block;
  }
  
  /* Top Overlay */
  .card-overlay-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  color: #fff;
  display: flex;
  justify-content: flex-start; /* 👈 push content to the left */
  align-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent);
  font-family: 'Neue Montreal', sans-serif;
  font-weight: 100;
  z-index: 10;
}

.card-name {
  text-align: left; /* 👈 align text left */
  display: flex;
  flex-direction: column;
  font-family: 'Neue Montreal', sans-serif;
  font-weight: 400;
  line-height: 1.1;
  white-space: nowrap;
}

  
  .card-title {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 100;
  }
  
  .card-subtitle {
    font-size: 0.8rem;
    opacity: 0.85;
    margin-top: 0.15rem;
  }
  
  /* Bottom Caption */
  .card-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.25rem 1.5rem;
    color: #fff;
    font-size: 1.1rem;
    line-height: 1.4;
    font-family: 'Neue Montreal', sans-serif;
    font-weight: 500;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.55), transparent);
    box-sizing: border-box;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    white-space: normal;
    word-break: break-word;
    overflow-wrap: break-word;
    text-align: left;
  }
  </style>
  