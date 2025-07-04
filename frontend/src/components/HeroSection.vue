<template>
  <section id="home" class="hero">
    <div class="overlay">
      <div class="profile-image">
        <img src="@/assets/profile.jpg" alt="John Doe" class="profile-pic" />
      </div>
      <div class="text-content">
        <h1 class="title">Hallo, Saya Nandana Zada Abiproya</h1>
        <p class="subtitle">Fullstack Developer</p>
        <button class="cta" @click="scrollToContact">About Me</button>
      </div>
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
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 64, 128, 0.7));

  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
}

.overlay {
  text-align: center;
  padding: 30px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  animation: float 4s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-image {
  margin-bottom: 20px;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #4CAF50;
  animation: fadeIn 1.5s ease-out;
}

.text-content {
  padding: 0 20px;
}

.title {
  font-size: 3rem;
  margin-bottom: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeInDown 1.5s ease-out;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #d3d3d3;
  animation: fadeInUp 2s ease-out;
}

.cta {
  background-color: #4caf50;
  padding: 12px 30px;
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
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.4);
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
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

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1.3rem;
  }
  .cta {
    padding: 10px 25px;
    font-size: 1rem;
  }
  .profile-pic {
    width: 120px;
    height: 120px;
  }
}
</style>