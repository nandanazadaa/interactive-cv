<template>
  <section id="about" class="about">
    <h2 class="section-title">About Me</h2>
    <p class="description">
      I am a passionate frontend developer with a love for creating beautiful, 
      interactive, and responsive websites. I specialize in Vue.js and modern web
      technologies.
    </p>
  </section>
</template>

<script setup></script>

<style scoped>
.about {
  padding: 80px 20px;
  text-align: center;
  background-color: #fff;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeUp 1s forwards;
}

.description {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 20px auto;
  opacity: 0;
  animation: fadeUp 1.5s forwards;
  animation-delay: 0.5s;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
