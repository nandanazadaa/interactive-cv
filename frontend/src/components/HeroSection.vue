<template>
  <section id="home" class="hero">
    <div class="overlay">
      <h1 class="title">Hi, I'm John Doe</h1>
      <p class="subtitle">A Passionate Frontend Developer</p>
      <button class="cta" @click="scrollToContact">Let's Work Together</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const scrollToContact = () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/hero.jpg') no-repeat center center/cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
}

.overlay {
  text-align: center;
  backdrop-filter: blur(5px);
  padding: 30px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  animation: float 4s ease-in-out infinite;
}

.title {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeInDown 1.5s ease-out;
}

.subtitle {
  font-size: 1.8rem;
  margin-bottom: 40px;
  font-style: italic;
  color: #d3d3d3;
  animation: fadeInUp 2s ease-out;
}

.cta {
  background-color: #4caf50;
  padding: 15px 40px;
  font-size: 1.2rem;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.4s ease;
  border-radius: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta:hover {
  background-color: #45a049;
  transform: scale(1.15) rotate(2deg);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.4);
}

@keyframes fadeInDown {
  0% { opacity: 0; transform: translateY(-50px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(50px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

/* Responsivitas */
@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1.3rem;
  }
  .cta {
    padding: 12px 30px;
    font-size: 1rem;
  }
}
</style>