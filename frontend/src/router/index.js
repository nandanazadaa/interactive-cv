import { createRouter, createWebHistory } from 'vue-router';
import HeroSection from '../components/HeroSection.vue'; // Sesuaikan path jika perlu

const routes = [
  { path: '/', component: HeroSection }, // Rute default
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;