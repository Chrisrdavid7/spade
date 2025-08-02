<template>
    <Navbar />
  
    <div class="about-content">
      <div class="slide-overlay" v-if="showOverlay"></div>
  
      <!-- Hero Section -->
      <section class="about-hero" :class="{ 'image-loaded': imageLoaded }">
        <img
          class="hero-image"
          src="/images/spadeAbout.jpg"
          alt="Spade About"
          @load="imageLoaded = true"
        />
        <div class="overlay"></div>
        <div class="about-text">ABOUT</div>
      </section>
  
      <!-- Quote -->
      <section class="about-quote-row">
        <div class="quote-author-left">SPADE</div>
        <div class="quote-body">
          <p>
            Spade isn’t just a DJ — he’s a cultural architect. From NYC’s underground to the global stage, he blends sound, style, and vision to reshape nightlife and beyond.
          </p>
        </div>
      </section>
  
      <!-- Carousel -->
      <section class="card-carousel-container">
        <div class="card-carousel-track">
          <AboutCard
            v-for="(image, index) in loopedImages"
            :key="index"
            :src="image.src"
            :alt="image.alt"
            :metric="image.metric"
            :title="image.label"
            :subtitle="image.sublabel"
            :desc="image.desc"
          />
        </div>
      </section>
  
      <!-- Tagline -->
      <section class="about-bottom-tagline">
        Bridging Borders<br />With Basslines
      </section>
    </div>
  
    <Footer />
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import Navbar from '../components/NavBar.vue'

  import AboutCard from '../components/AboutCard.vue'
  
  const showOverlay = ref(true)
  const imageLoaded = ref(false)
  
  const carouselImages = [
    {
      src: '/images/spade1.jpg',
      alt: 'DJing',
     
      label: 'Berkshire',
      sublabel: '2025',
      desc: 'Nocta Manor',
    },
    {
      src: '/images/spadeRoom.jpg',
   
      label: 'New York',
      sublabel: '2025',
      desc: 'Amber Room',
    },
    {
      src: '/images/spadeAus.jpg',
      alt: 'Brand Collab',

    
      label: 'Australia',
      sublabel: '2025',
      desc: 'Anita Max Win Tour',
    },
    {
      src: '/images/spadeMiami.jpg',
      alt: 'DJing',
     
      label: 'Miami',
      sublabel: '2025',
      desc: 'LIV Miami',
    },
    {
      src: '/images/spade5.jpg',
      alt: 'Crowd',
      metric: 'Influence',
      label: 'Boston',
      sublabel: '2023',
      desc: 'Big Night Live',
    },
    {
      src: '/images/spade6.jpg',
      alt: 'Brand Collab',
  
      label: 'London',
      sublabel: '2024',
      desc: 'Tape London',
    },
    {
      src: '/images/spadeBlur.jpg',
      alt: 'Brand Collab',
  
      label: 'Chicago',
      sublabel: '2023',
      desc: 'It Was All A Blur',
    },
  ]
  
  const loopedImages = [...carouselImages, ...carouselImages]
  
  onMounted(() => {
    setTimeout(() => (showOverlay.value = false), 2500)
  })
  </script>
  
  <style scoped>
  .about-content {
    position: relative;
    z-index: 1;
    padding-bottom: 8rem;
    background-color: white;
  }
  
  .slide-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    z-index: 9999;
    animation: slideDown 2.5s ease forwards;
  }
  
  @keyframes slideDown {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(100%);
    }
  }
  
  .about-hero {
    position: relative;
    height: 100vh;
    width: 100%;
 
    overflow: hidden;
  }
  
  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scale(1.1);
    opacity: 0;
    transition: opacity 2s ease, transform 3s ease;
    z-index: 0;
  }
  
  .about-hero.image-loaded .hero-image {
    opacity: 1;
    transform: scale(1);
  }
  
  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent 60%, rgba(0, 0, 0, 0.7));
    z-index: 1;
  }
  
  .about-text {
    position: absolute;
    bottom: 7%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    font-size: 6.25rem;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    font-family: 'Neue Montreal', sans-serif;
    letter-spacing: 0.125rem;
    line-height: 0.9;
  }
  
  @media (max-width: 768px) {
    .about-text {
      font-size: 2rem;
    }
  }
  
  .about-quote-row {
    display: flex;
    justify-content: center;
    
  align-items: center;  
    height: 60vh;
    max-width: 1500px;
    margin: 13rem auto 6rem;
    padding: 0 2rem;
    gap: 2rem;
  }
  
  .quote-author-left {
    flex: 1;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #888282;
    font-family: 'Neue Montreal', sans-serif;
  }
  
  .quote-body {
    flex: 4;
    font-size: 3.25rem;
    font-family: 'Soehne', sans-serif;
    font-weight: 500;
    color: black;
    line-height: 1.2;
  }
  
  @media (max-width: 768px) {
    .about-quote-row {
      flex-direction: column;
      text-align: center;
    }
  
    .quote-author-left {
      margin-bottom: 1rem;
    }
  
    .quote-body {
      font-size: 1.5rem;
    }
  }
  
  .card-carousel-container {
    overflow: hidden;
    padding: 4rem 0;
    height: 80vh;
    justify-content: center;
    
    align-items: center;  
    background-color: black;
  }
  
  .card-carousel-track {
    display: flex;
    gap: 1rem;
    width: max-content;
    animation: scrollLeft 60s linear infinite;
  }
  
  @keyframes scrollLeft {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }
  
  .about-bottom-tagline {
    font-size: 6.25rem;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Neue Montreal', sans-serif;
    font-weight: 600;
    color: #111;
    line-height: 0.9;
    letter-spacing: 0.125rem;
    margin: 8rem 0 4rem;
  }
  
  @media (max-width: 768px) {
    .about-bottom-tagline {
      font-size: 2rem;
    }
  }
  </style>
  