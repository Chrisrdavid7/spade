<template>
  <div class="bookings-page">
    <h1 class="title">BOOKINGS</h1>
    <div class="forms-container">
      <div class="form-section">
        <h2>Book Spade</h2>
        <p class="subtitle">Book Spade For Your Event</p>

        <form @submit.prevent="submitBooking">
          <input v-model="form.name" type="text" name="name" placeholder="Your Name" required />
          <input v-model="form.email" type="email" name="email" placeholder="Your Email" required />
          <input v-model="form.organization" type="text" name="organization" placeholder="Organization / Company / Private Event" />
          <input v-model="form.date" type="date" name="date" placeholder="Event Date" required />
          <input v-model="form.hours" type="number" name="hours" placeholder="Hours" required />
          <input v-model="form.offer" type="number" name="offer" placeholder="Offer ($ amount)" required />
          <textarea v-model="form.message" name="message" placeholder="Tell us about the opportunity" rows="5" required></textarea>
          <button type="submit">Submit Booking Request</button>
        </form>

        <p v-if="successMessage" class="success-msg">{{ successMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  organization: '',
  date: '',
  hours: '',
  offer: '',
  message: ''
})

const successMessage = ref('')

async function submitBooking() {
  try {
    const res = await fetch('https://formspree.io/f/xkgzbbbq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (res.ok) {
      successMessage.value = 'Booking request sent! We’ll be in touch shortly.'
      Object.keys(form).forEach(key => form[key] = '') // reset form
    } else {
      alert('There was an issue submitting your request.')
    }
  } catch (err) {
    console.error(err)
    alert('Network error. Please try again later.')
  }
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

.success-msg {
  margin-top: 1rem;
  color: green;
  font-weight: bold;
}

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
