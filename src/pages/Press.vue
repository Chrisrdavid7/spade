<!-- src/views/Press.vue -->
<template>
    <div class="press-content">
      <!-- ========== HERO (same sizing as About) ========== -->
      <section class="press-hero" :class="{ 'image-loaded': imageLoaded }">
        <img
          class="hero-image"
          src="/images/dj-spade-official-portrait.jpg"  
          alt="DJ Spade press hero"
          @load="imageLoaded = true"
        />
        <div class="overlay"></div>
        <div class="press-text">PRESS</div>
      </section>
  
      <!-- ========== NEWS SECTION ========== -->
      <section class="news-section">
        <!-- Page Header -->
  
        <!-- News Grid -->
        <div class="news-grid">
          <div v-for="(article, index) in news" :key="index" class="news-card">
            <div class="news-image-container">
              <img :src="article.image" :alt="article.title" class="news-image" />
            </div>
            <div class="news-content">
              <h3>{{ article.category }}</h3>
              <h2>{{ article.title }}</h2>
              <a :href="article.link" target="_blank" class="read-more">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  /* Hero fade-in */
  const imageLoaded = ref(false)
  
  /* Dummy data — replace or fetch dynamically */
  const news = ref([
  {
      image: '/images/billboard.jpg',
      category: 'NEWS',
      title: 'Spade, Vice, DJ Ruckus & More Announced for Annual Tao Group Birthday Event',
      link: 'https://www.billboard.com/music/music-news/tao-group-jon-schwartz-birthday-8448736/',
    },
    {
      image: '/images/timeout.png',
      category: 'NEWS',
      title: 'See PARTYNEXTDOOR live at SKY2.0 this April',
      link: 'https://www.timeoutdubai.com/things-to-do/see-partynextdoor-live-at-sky2-0-this-april',
    },
    {
      image: '/images/nyWeekly.png',
      category: 'NEWS',
      title: 'Inside DRAKE NYC Private Party Hosted By DJ Spade',
      link: 'https://nyweekly.com/entertainment/inside-drake-nyc-private-party-hosted-by-ovo-dj-spade-and-naesketchie/?utm_source=chatgpt.com',   // example
    },
  
    {
      image: '/images/enews.png',
      category: 'NEWS',
      title: 'Drake Tells Rihanna to Drop Her New Album in Hilarious Instagram Live Exchange',
      link: 'https://www.eonline.com/news/1134477/drake-tells-rihanna-to-drop-her-new-album-in-hilarious-instagram-live-exchange',
    },
    {
      image: '/images/vibe.png',
      category: 'NEWS',
      title: 'Travis Scott Performs At Coney Island Art Walls’ Independence Day Concert',
      link: 'https://www.vibe.com/news/entertainment/travis-scott-coney-island-independence-day-concert-1234673996/',
    },
    
    {
      image: '/images/billboard.jpg',
      category: 'NEWS',
      title: 'Drake and Virgil Abloh throwing NYC party at Brooklyn Mirage',
      link: 'https://www.brooklynvegan.com/drake-and-virgil-abloh-throwing-nyc-party-at-brooklyn-mirage-this-weekend/',
    },
    // …add more
  ])
  </script>
  
  <style scoped>
  /* ===== HERO (copied from About.vue) ===== */
  .press-hero {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  .hero-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1);
    opacity: 0;
    transition: opacity 2s ease, transform 3s ease;
    z-index: 0;
  }
  .press-hero.image-loaded .hero-image {
    opacity: 1;
    transform: scale(1);
  }
  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      transparent 60%,
      rgba(0, 0, 0, 0.7)
    );
    z-index: 1;
  }
  .press-text {
    position: absolute;
    bottom: 7%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    font-size: 6.25rem;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    font-family: 'Neue Montreal', sans-serif;
    letter-spacing: 0.125rem;
    line-height: 0.9;
  }
  @media (max-width: 768px) {
    .press-text { font-size: 2rem; }
  }
  
  /* ===== NEWS SECTION (identical style to your Latest News page) ===== */
  .news-section {
    font-family: 'Avenir Next', sans-serif;
    background-color: #121212;
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
      url('/images/press2.png') center/cover no-repeat;
    color: #ffffff;
    padding: 40px 20px 80px;
    text-align: center;
  }
  
  .news-header h1 {
    font-size: 3rem;
    color: #f39c12;
    margin-top: 10vh;
    margin-bottom: 10px;
  }
  .news-header p {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 50px;
  }
  
  .news-grid {
  margin: 5rem auto 0;                     /* top 10 rem, left/right auto, bottom 0 */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1200px;
}

  
  .news-card {
    background-color: #1e1e1e;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  .news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
  
  .news-image-container { width: 100%; height: 180px; background: #000; }
  .news-image { width: 100%; height: 100%; object-fit: cover; }
  
  .news-content {
    padding: 20px;
    text-align: left;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .news-content h3 {
    font-size: 0.9rem;
    color: #f39c12;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .news-content h2 {
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 10px;
  }
  .read-more {
    color: #007bff;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  .read-more:hover { color: #0056b3; }
  
  @media (max-width: 768px) {
    .news-header h1 { font-size: 2.5rem; }
    .news-header p  { font-size: 1rem; }
  }
  </style>
  