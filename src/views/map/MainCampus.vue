
<template>
  <div class="campus-detail">
    <header class="campus-hero" style="background-image: url('../../src/assets/imgs/map/center-campus.jpg')">
      <div class="hero-overlay">
        <h1>中心校区</h1>
        <p>吉林大学的核心校区，学术与行政中心</p>
      </div>
    </header>

    <main class="campus-content">
      <section class="campus-overview">
        <h2>校区概况</h2>
        <p>吉林大学中心校区位于长春市朝阳区，占地面积约150万平方米，是学校的行政管理和文理科教学科研中心。校区环境优美，设施完善，拥有现代化的教学楼、图书馆和实验中心。</p>
        
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">1956</span>
            <span class="stat-label">建校年份</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">20+</span>
            <span class="stat-label">院系数量</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50,000+</span>
            <span class="stat-label">在校学生</span>
          </div>
        </div>
      </section>

      <section class="landmarks-section">
        <h2>标志性建筑</h2>
        <div class="landmarks-grid">
          <div class="landmark-card">
            <img src="../../assets/imgs/map/dixing-lou.jpg" alt="鼎新楼">
            <h3>鼎新楼</h3>
            <p>学校行政中心，建筑造型独特，是吉大的标志性建筑之一。</p>
          </div>
          <div class="landmark-card">
            <img src="../../assets/imgs/map/library.jpg" alt="中心图书馆">
            <h3>中心图书馆</h3>
            <p>藏书量超过500万册，是东北地区最大的高校图书馆之一。</p>
          </div>
        </div>
      </section>

      <section class="map-section">
        <h2>校区地图</h2>
        <div class="mini-map">
          <img src="../../assets/imgs/map/center-map.jpg" alt="中心校区地图">
          <router-link to="/map/main" class="back-link">← 返回总地图</router-link>
        </div>
      </section>

      <section class="navigation-section">
        <h2>校园导航</h2>
        <div class="navigation-grid">
          <router-link to="/map" class="nav-card">
            <div class="nav-icon">🗺️</div>
            <h3>校区总览</h3>
            <p>查看所有校区分布</p>
          </router-link>
          <router-link to="/map/south" class="nav-card">
            <div class="nav-icon">🏗️</div>
            <h3>南岭校区</h3>
            <p>工科重镇</p>
          </router-link>
          <router-link to="/map/transportation" class="nav-card">
            <div class="nav-icon">🚌</div>
            <h3>交通指南</h3>
            <p>校区间交通方式</p>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// 可以添加校区特定的逻辑或数据
</script>

<style scoped>
.campus-detail {
  max-width: 1200px;
  margin: 0 auto;
}

.campus-hero {
  position: relative;
  height: 60vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.hero-overlay {
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  max-width: 80%;
}

.campus-content {
  padding: 40px 20px;
}

.campus-overview, .landmarks-section, .map-section, .navigation-section {
  margin-bottom: 50px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 30px 0;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.stat-number {
  display: block;
  font-size: 2.5em;
  font-weight: bold;
  color: #3182CE;
}

.stat-label {
  font-size: 1.1em;
  color: #4a5568;
}

.landmarks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.landmark-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.landmark-card:hover {
  transform: translateY(-5px);
}

.landmark-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.landmark-card h3 {
  margin: 15px;
  color: #2d3748;
}

.landmark-card p {
  margin: 0 15px 15px;
  color: #4a5568;
}

.mini-map {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.mini-map img {
  width: 100%;
  height: auto;
  display: block;
}

.back-link {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: white;
  padding: 8px 15px;
  border-radius: 20px;
  text-decoration: none;
  color: #3182CE;
  font-weight: bold;
}

.navigation-section {
  margin-top: 60px;
}

.navigation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.nav-card {
  display: block;
  padding: 25px;
  background-color: #f8f9fa;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s, box-shadow 0.3s;
}

.nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.nav-icon {
  font-size: 2.5em;
  margin-bottom: 15px;
}

.nav-card h3 {
  margin: 10px 0;
  color: #2b6cb0;
}

.nav-card p {
  color: #718096;
  font-size: 0.9em;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .campus-hero {
    height: 50vh;
  }
  
  .navigation-grid {
    grid-template-columns: 1fr;
  }
}
</style>