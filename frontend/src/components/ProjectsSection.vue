<template>
  <section id="projects" class="projects">
    <h2 class="section-title">My Projects</h2>
    <div class="project-grid">
      <div class="project-card">
        <div class="project-image">
          <img src="@/assets/cetaphil.png" alt="Project 1" class="profile-pic" />
          <div class="overlay">
            <button class="view-btn" @click="viewDetails(1)">View Details</button>
          </div>
        </div>
        <div class="project-content">
          <h3>Project 1</h3>
          <p>Short description about project 1.</p>
        </div>
      </div>
      <div class="project-card">
        <div class="project-image">
          <img src="@/assets/vistore.png" alt="Project 2" class="profile-pic" />
          <div class="overlay">
            <button class="view-btn" @click="viewDetails(2)">View Details</button>
          </div>
        </div>
        <div class="project-content">
          <h3>Project 2</h3>
          <p>Short description about project 2.</p>
        </div>
      </div>
      <div class="project-card">
        <div class="project-image">
          <img src="@/assets/simemberjlb.png" alt="Project 3" class="profile-pic" />
          <div class="overlay">
            <button class="view-btn" @click="viewDetails(3)">View Details</button>
          </div>
        </div>
        <div class="project-content">
          <h3>Project 3</h3>
          <p>Short description about project 3.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const viewDetails = (id) => {
  alert(`Viewing details for Project ${id}`);
};
</script>

<style scoped>
.projects {
  padding: 80px 20px;
  text-align: center;
  background: linear-gradient(135deg, #f4f4f4, #e0e0e0);
  overflow: hidden;
}

.section-title {
  font-size: 2.8rem;
  margin-bottom: 40px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
}

.section-title::after {
  content: '';
  width: 50px;
  height: 4px;
  background-color: #4caf50;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.project-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.project-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .overlay {
  opacity: 1;
}

.view-btn {
  background-color: #4caf50;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.view-btn:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.project-content {
  padding: 20px;
  text-align: center;
}

.project-content h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.project-content p {
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .project-image {
    height: 150px;
  }
  .project-content h3 {
    font-size: 1.2rem;
  }
  .project-content p {
    font-size: 0.9rem;
  }
}
</style>