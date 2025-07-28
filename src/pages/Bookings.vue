<template>
  <div class="bookings-page">
    <h1 class="title">BOOKINGS</h1>
    <div class="forms-container">
      <!-- Book Spade Section -->
      <div class="form-section">
        <h2>Book Spade</h2>
        <p class="subtitle">Book Spade For Your Event</p>

        <form @submit.prevent="submitBooking">
          <input v-model="booking.name" type="text" placeholder="Your Name" required />
          <input v-model="booking.email" type="email" placeholder="Your Email" required />
          <input v-model="booking.organization" type="text" placeholder="Organization / Company / Private Event" />
          <input v-model="booking.date" type="date" placeholder="Event Date" required />
          <input v-model="booking.hours" type="number" min="1" placeholder="Hours (how long is your event)" required />
          <input v-model="booking.offer" type="number" placeholder="Offer ($ amount)" required />
          <textarea v-model="booking.message" placeholder="Tell us about the opportunity" rows="5" required></textarea>
          <button type="submit">Submit Booking Request</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const booking = reactive({
  name: '',
  email: '',
  organization: '',
  date: '',
  hours: '',
  offer: '',
  message: ''
})

function submitBooking() {
  alert(`Booking Request Sent!
To: chris@culsecreative.com
From: ${booking.name} <${booking.email}>
Date: ${booking.date}
Hours: ${booking.hours}
Offer: $${booking.offer}
Message: ${booking.message}`)
}
</script>

<style scoped>
.bookings-page {
  background-color: #fcfaf5;
  padding: 12rem 2rem 6rem;
  font-family: 'Helvetica Neue', sans-serif;
  color: #000;
  min-height: 100vh;
}

.title {
  font-size: clamp(2.5rem, 6vw, 6.25rem);
  letter-spacing: 0.25rem;
  line-height: 1;
  font-weight: 600;
  text-align: center;
  margin-bottom: 6rem;
  text-transform: uppercase;
  font-family: 'Rework Display Regular', sans-serif;
}

.subtitle {
  font-size: 1rem;
  margin-top: -1rem;
  margin-bottom: 1.5rem;
  color: #555;
  font-family: 'Helvetica Neue', sans-serif;
}

.forms-container {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
}

.form-section {
  flex: 1 1 400px;
  max-width: 600px;
  background-color: #fff;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.form-section h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Rework Display Regular', sans-serif;
  color: #111;
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.25rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Helvetica Neue', sans-serif;
}

textarea {
  resize: vertical;
}

button {
  background-color: #000;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #333;
}

/* Responsive */
@media (max-width: 768px) {
  .forms-container {
    flex-direction: column;
    align-items: center;
  }

  .form-section {
    width: 100%;
    max-width: 90%;
  }
}
</style>
