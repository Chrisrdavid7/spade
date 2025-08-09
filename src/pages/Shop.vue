<template>
    <div class="shop-page">
      <!-- Announcement -->
      <div class="announce">
        <span>{{ announceText }}</span>
      </div>
  
      <!-- Grid -->
      <section class="grid">
        <article
          v-for="(p, i) in products"
          :key="i"
          class="card"
          :class="{ 'is-sold': p.soldOut }"
        >
          <a
            v-if="p.url"
            :href="p.url"
            target="_blank"
            rel="noopener"
            class="block"
          >
            <div class="media">
              <img :src="p.image" :alt="p.title" loading="lazy" />
              <div v-if="p.soldOut" class="sold-overlay"><span>SOLD OUT</span></div>
            </div>
          </a>
          <div v-else class="media">
            <img :src="p.image" :alt="p.title" loading="lazy" />
            <div v-if="p.soldOut" class="sold-overlay"><span>SOLD OUT</span></div>
          </div>
  
          <div class="meta">
            <h3 class="title">{{ p.title }}</h3>
            <p class="price" v-if="!p.soldOut">{{ formatPrice(p.price) }}</p>
            <p class="sold" v-else>SOLD OUT</p>
          </div>
        </article>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useSeo } from '../composables/useSeo'
  
  useSeo({
    title: 'Shop',
    description: 'Limited drops from Spade — apparel, vinyl, and packs.',
    canonical: 'https://allspade.com/shop'
  })
  
  const announceText = 'LIMITED QUANTITIES AVAILABLE'
  
  const products = ref([
    {
      title: 'Spade OG Snapback White',
      price: 55,
      soldOut: false,
      image: '/images/shop/pack-a1.jpg',
      url: '#',
    },
    {
      title: 'Spade OG Snapback Black',
      price: 55,
      soldOut: false,
      image: '/images/shop/pack-b2.jpg',
      url: '#',
    },
    {
      title: 'PACK B3',
      price: 55,
      soldOut: true,
      image: '/images/shop/pack-b3.jpg',
    },
    {
      title: 'VINYL (MASK COVER)',
      price: 35,
      soldOut: true,
      image: '/images/shop/vinyl-mask.jpg',
    },
    {
      title: 'PACK A2',
      price: 55,
      soldOut: false,
      image: '/images/shop/pack-a2.jpg',
      url: '#',
    },
    {
      title: 'PACK A3',
      price: 55,
      soldOut: true,
      image: '/images/shop/pack-a3.jpg',
    },
  ])
  
  const formatPrice = (n) =>
    n?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  </script>
  
  <style scoped>
  .shop-page {
    min-height: 100vh;
    background: #0a0a0a;
    color: #eaeaea;
    padding-top: 96px; /* header offset */
  }
  
  /* Announcement */
  .announce {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #ffb089;
    border-bottom: 1px solid #1a1a1a;
    background: #0f0f0f;
  }
  
  /* Grid */
  .grid {
    max-width: 1200px;
    margin: 40px auto 80px;
    padding: 0 16px;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 36px 28px;
  }
  @media (min-width: 700px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
  
  /* Card */
  .card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: transform .2s ease;
  }
  .card:hover { transform: translateY(-2px); }
  
  .media {
    position: relative;
    background: #0f0f0f;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #1b1b1b;
  }
  .media img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    transition: transform .35s ease;
  }
  .card:hover .media img { transform: scale(1.02); }
  
  /* SOLD OUT overlay */
  .sold-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,.55);
    display: grid;
    place-items: center;
    font-weight: 700;
    letter-spacing: .2em;
    color: #ffb089;
    text-transform: uppercase;
  }
  
  /* Meta */
  .meta {
    display: grid;
    justify-items: center;
    text-align: center;
    gap: 6px;
  }
  .title {
    margin: 0;
    font-size: 14px;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: #e6e6e6;
  }
  .price, .sold {
    margin: 0;
    font-size: 13px;
    color: #d0d0d0;
  }
  .is-sold .price { visibility: hidden; }
  
  .block { text-decoration: none; color: inherit; }
  </style>
  