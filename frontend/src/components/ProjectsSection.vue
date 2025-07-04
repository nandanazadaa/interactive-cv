<template>
  <section id="projects" class="projects">
    <h2 class="section-title">My Projects</h2>
    <div class="project-grid">
      <div class="project-card" v-for="i in 3" :key="i">
        <h3>Project {{ i }}</h3>
        <p>Short description about project {{ i }}.</p>
        <button class="cta">View Details</button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.projects {
  padding: 80px 20px;
  text-align: center;
  background-color: #f4f4f4;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.project-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.cta {
  background-color: #4caf50;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
