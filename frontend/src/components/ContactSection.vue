<template>
  <section id="contact" class="contact">
    <h2 class="section-title">Contact Me</h2>
    <form @submit.prevent="submitForm" class="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit" class="cta">Send Message</button>
    </form>
  </section>
</template>

<script setup>
function submitForm() {
  alert('Form submitted!');
}
</script>

<style scoped>
.contact {
  padding: 80px 20px;
  text-align: center;
  background-color: #fff;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  gap: 20px;
}

input, textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  background-color: #4caf50;
  padding: 12px;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}
</style>
