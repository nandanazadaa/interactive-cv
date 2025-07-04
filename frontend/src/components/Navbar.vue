<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">NANDANA ZADA ABIPROYA</div>
      <div class="menu-toggle" @click="isOpen = !isOpen">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="nav-links" :class="{ 'active': isOpen }">
        <li><a href="#home"><i class="fas fa-home"></i> Home</a></li>
        <li><a href="#about"><i class="fas fa-user"></i> About</a></li>
        <li><a href="#projects"><i class="fas fa-project-diagram"></i> Projects</a></li>
        <li><a href="#contact"><i class="fas fa-envelope"></i> Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 64, 128, 0.7));
  color: white;
  padding: 15px 20px;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background 0.3s ease;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #4CAF50;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.logo:hover {
  color: #ffffff;
}

.nav-links {
  display: flex;
  gap: 25px;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: transform 0.3s ease;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-links li a:hover {
  background-color: rgba(76, 175, 80, 0.2);
  color: #4CAF50;
  transform: translateY(-2px);
}

.nav-links.active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 20px;
  transform: translateY(0);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
  }

  .nav-links.active {
    display: flex;
  }

  .bar {
    width: 25px;
    height: 3px;
  }

  .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
  .bar:nth-child(2) { opacity: 0; }
  .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
}
</style>