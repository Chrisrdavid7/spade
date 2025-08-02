<template>
  <Navbar />

  <div class="about-content">
    <!-- Slide-down overlay -->
    <div class="slide-overlay" v-if="showOverlay"></div>

    <!-- ───────── Hero ───────── -->
    <section class="about-hero" :class="{ 'image-loaded': imageLoaded }">
      <img
        class="hero-image"
        src="/images/spadeAbout.jpg"
        alt="DJ Spade About"
        @load="imageLoaded = true"
      />
      <div class="overlay"></div>
      <div class="about-text">ABOUT</div>
    </section>

    <!-- ───────── Quote row ───────── -->
    <section class="about-quote-row">
      <div class="quote-author-left">SPADE</div>
      <div class="quote-body">
        <p>
          Spade isn’t just a DJ — he’s a cultural architect. From NYC’s underground to the global
          stage, he blends sound, style, and vision to reshape nightlife and beyond.
        </p>
      </div>
    </section>

    <!-- ───────── Auto-scroll carousel ───────── -->
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

    <!-- ───────── Tagline ───────── -->
    <section class="about-bottom-tagline">
      Bridging Borders<br />With Basslines
    </section>
  </div>
</template>

<script setup>
/* ───────── Imports (all relative) ───────── */
import { ref, onMounted } from 'vue'
import Navbar    from '../components/NavBar.vue'
import AboutCard from '../components/AboutCard.vue'
import { useSeo } from '../composables/useSeo'

/* ───────── SEO metadata ───────── */
useSeo({
  title: 'ABOUT',
  description:
    'Discover how DJ Spade blends sound, style, and vision to reshape nightlife and culture.',
  ogImage: '/images/spadeAbout.jpg',
  canonical: 'https://spadedj.com/about'
})

/* ───────── State & lifecycle ───────── */
const showOverlay = ref(true)
const imageLoaded = ref(false)

const carouselImages = [
  { src: '/images/spade1.jpg',    label: 'Berkshire', sublabel: '2025', desc: 'Nocta Manor' },
  { src: '/images/spadeRoom.jpg', label: 'New York',  sublabel: '2025', desc: 'Amber Room' },
  { src: '/images/spadeAus.jpg',  label: 'Australia', sublabel: '2025', desc: 'Anita Max Win Tour' },
  { src: '/images/spadeMiami.jpg',label: 'Miami',     sublabel: '2025', desc: 'LIV Miami' },
  { src: '/images/spade5.jpg',    label: 'Boston',    sublabel: '2023', desc: 'Big Night Live' },
  { src: '/images/spade6.jpg',    label: 'London',    sublabel: '2024', desc: 'Tape London' },
  { src: '/images/spadeBlur.jpg', label: 'Chicago',   sublabel: '2023', desc: 'It Was All A Blur' }
]
const loopedImages = [...carouselImages, ...carouselImages]

onMounted(() => {
  setTimeout(() => (showOverlay.value = false), 2500)
})
</script>

<style scoped>
/* (styles unchanged) */
.about-content { position: relative; z-index: 1; padding-bottom: 8rem; background: #fff; }

.slide-overlay { position: fixed; inset: 0; background: #000; z-index: 9999;
  animation: slideDown 2.5s ease forwards; }
@keyframes slideDown { from { transform: translateY(0%); } to { transform: translateY(100%); } }

.about-hero { position: relative; width: 100%; height: 100vh; overflow: hidden; }
.hero-image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  transform: scale(1.1); opacity: 0; transition: opacity 2s ease, transform 3s ease; }
.about-hero.image-loaded .hero-image { opacity: 1; transform: scale(1); }
.overlay { position: absolute; inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,.7), transparent 60%, rgba(0,0,0,.7)); z-index: 1; }
.about-text { position: absolute; bottom: 7%; left: 50%; transform: translateX(-50%);
  z-index: 2; font: 600 6.25rem/0.9 'Neue Montreal', sans-serif; color: #fff;
  text-transform: uppercase; letter-spacing: .125rem; }
@media (max-width: 768px) { .about-text { font-size: 2rem; } }

.about-quote-row { display: flex; align-items: center; justify-content: center;
  height: 60vh; max-width: 1500px; margin: 13rem auto 6rem; padding: 0 2rem; gap: 2rem; }
.quote-author-left { flex: 1; font: 600 .9rem 'Neue Montreal', sans-serif;
  text-transform: uppercase; color: #888; }
.quote-body { flex: 4; font: 500 3.25rem/1.2 'Soehne', sans-serif; color: #000; }
@media (max-width: 768px) { .about-quote-row { flex-direction: column; text-align: center; }
  .quote-body { font-size: 1.5rem; } }

.card-carousel-container { height: 80vh; display: flex; align-items: center; justify-content: center;
  padding: 4rem 0; overflow: hidden; background: #000; }
.card-carousel-track { display: flex; gap: 1rem; width: max-content;
  animation: scrollLeft 60s linear infinite; }
@keyframes scrollLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }

.about-bottom-tagline { margin: 8rem 0 4rem; text-align: center; text-transform: uppercase; color: #111;
  font: 600 6.25rem/0.9 'Neue Montreal', sans-serif; letter-spacing: .125rem; }
@media (max-width: 768px) { .about-bottom-tagline { font-size: 2rem; } }
</style>
