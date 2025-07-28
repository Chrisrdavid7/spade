<template>
  <div class="tour-page">
    <!-- Slide Down Overlay -->
    <div class="slide-overlay" v-if="showOverlay"></div>

    <!-- Hero Section -->
    <section class="tour-hero" :class="{ 'image-loaded': imageLoaded }">
      <img
        class="hero-image"
        src="/images/spadeTour.jpg"
        alt="Spade Tour"
        @load="imageLoaded = true"
      />
      <div class="overlay"></div>
      <div class="tour-text">TOUR</div>
    </section>

    <!-- Tour Table Section -->
    <section class="tour-table-section">
      <div class="table-wrapper">
        <table class="tour-table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>CITY</th>
              <th>VENUE</th>
              <th>TICKETS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(show, index) in shows" :key="index">
              <td>{{ show.date }}</td>
              <td>{{ show.city }}</td>
              <td>{{ show.venue }}</td>
              <td><a :href="show.link" class="ticket-link" target="_blank">TICKETS</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showOverlay = ref(true)
const imageLoaded = ref(false)

onMounted(() => {
  setTimeout(() => (showOverlay.value = false), 2500)
})

const ticketURL = 'https://drakerelated.com/pages/tour'

const shows = [
  { date: 'July 20', city: 'Birmingham, UK', venue: 'Utilita Arena', link: ticketURL },
  { date: 'July 21', city: 'Birmingham, UK', venue: 'Utilita Arena', link: ticketURL },
  { date: 'July 23', city: 'Birmingham, UK', venue: 'Utilita Arena', link: ticketURL },
  { date: 'July 25', city: 'Manchester, UK', venue: 'Co-op Live', link: ticketURL },
  { date: 'July 26', city: 'Manchester, UK', venue: 'Co-op Live', link: ticketURL },
  { date: 'July 28', city: 'Manchester, UK', venue: 'Co-op Live', link: ticketURL },
  { date: 'July 30', city: 'Amsterdam, Netherlands', venue: 'Ziggo Dome', link: ticketURL },
  { date: 'July 31', city: 'Amsterdam, Netherlands', venue: 'Ziggo Dome', link: ticketURL },
  { date: 'August 2', city: 'Amsterdam, Netherlands', venue: 'Ziggo Dome', link: ticketURL },
  { date: 'August 4', city: 'Manchester, UK', venue: 'Co-op Live', link: ticketURL },
  { date: 'August 7', city: 'Antwerp, Belgium', venue: 'Sportpaleis', link: ticketURL },
  { date: 'August 9', city: 'Zurich, Switzerland', venue: 'Hallenstadion', link: ticketURL },
  { date: 'August 11', city: 'Zurich, Switzerland', venue: 'Hallenstadion', link: ticketURL },
  { date: 'August 12', city: 'Zurich, Switzerland', venue: 'Hallenstadion', link: ticketURL },
  { date: 'August 15', city: 'Cologne, Germany', venue: 'Lanxess Arena', link: ticketURL },
  { date: 'August 16', city: 'Cologne, Germany', venue: 'Lanxess Arena', link: ticketURL },
  { date: 'August 18', city: 'Cologne, Germany', venue: 'Lanxess Arena', link: ticketURL },
  { date: 'August 21', city: 'Stockholm, Sweden', venue: 'Avicii Arena', link: ticketURL },
  { date: 'August 22', city: 'Stockholm, Sweden', venue: 'Avicii Arena', link: ticketURL },
  { date: 'August 24', city: 'Copenhagen, Denmark', venue: 'Royal Arena', link: ticketURL },
  { date: 'August 25', city: 'Copenhagen, Denmark', venue: 'Royal Arena', link: ticketURL },
  { date: 'August 29', city: 'Milan, Italy', venue: 'Unipol Forum', link: ticketURL },
  { date: 'August 30', city: 'Milan, Italy', venue: 'Unipol Forum', link: ticketURL },
  { date: 'September 1', city: 'Milan, Italy', venue: 'Unipol Forum', link: ticketURL },
  { date: 'September 2', city: 'Milan, Italy', venue: 'Unipol Forum', link: ticketURL },
  { date: 'September 7', city: 'Paris, France', venue: 'Accor Arena', link: ticketURL },
  { date: 'September 8', city: 'Paris, France', venue: 'Accor Arena', link: ticketURL },
  { date: 'September 11', city: 'Berlin, Germany', venue: 'Uber Arena', link: ticketURL },
  { date: 'September 12', city: 'Berlin, Germany', venue: 'Uber Arena', link: ticketURL },
  { date: 'September 14', city: 'Berlin, Germany', venue: 'Uber Arena', link: ticketURL },
  { date: 'September 16', city: 'Munich, Germany', venue: 'Olympiahalle', link: ticketURL },
  { date: 'September 18', city: 'Munich, Germany', venue: 'Olympiahalle', link: ticketURL },
  { date: 'September 19', city: 'Munich, Germany', venue: 'Olympiahalle', link: ticketURL },
  { date: 'September 22', city: 'Hamburg, Germany', venue: 'Barclays Arena', link: ticketURL },
  { date: 'September 23', city: 'Hamburg, Germany', venue: 'Barclays Arena', link: ticketURL }
]

</script>



<style scoped>
.tour-page {
  position: relative;
  background-color: rgb(16, 2, 1);
  color: white;
  font-family: 'Helvetica Neue', sans-serif;
  padding-bottom: 6rem;
}

/* Slide Overlay */
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

/* Hero */
.tour-hero {
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

.tour-hero.image-loaded .hero-image {
  opacity: 1;
  transform: scale(1);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent 60%, rgba(0, 0, 0, 0.7));
  z-index: 1;
}

.tour-text {
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  font-size: 6.25rem;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Rework Display Regular', sans-serif;
  letter-spacing: 0.125rem;
  line-height: 0.9;
}

@media (max-width: 768px) {
  .tour-text {
    font-size: 2.5rem;
  }
}

/* Table Section */
.tour-table-section {
  padding: 4rem 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.tour-table {
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
  font-size: 1rem;
  color: white;
}

.tour-table th,
.tour-table td {
  padding: 1.2rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  text-align: left;
  text-transform: uppercase;
}

.tour-table th {
  font-weight: 700;
  font-size: 0.85rem;
  opacity: 0.8;
  letter-spacing: 0.05rem;
}

.ticket-link {
  color: white;
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.9rem;
}

.ticket-link:hover {
  color: #d9ff00;
}
</style>
