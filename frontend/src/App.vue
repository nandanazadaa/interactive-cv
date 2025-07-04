<template>
  <div id="app">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue' 
import ContactSection from './components/ContactSection.vue'
// import Footer from './components/Footer.vue'
</script>


<style>
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background-color: #f9f9f9;
  color: #333;
}
</style>
