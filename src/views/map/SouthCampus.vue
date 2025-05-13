
<template>
  <div class="campus-detail">
    <header class="campus-hero" style="background-image: url('../src/assets/imgs/map/south-campus.jpg')">
      <div class="hero-overlay">
        <h1>南岭校区</h1>
        <p>吉林大学工科重镇，工程师的摇篮</p>
      </div>
    </header>

    <main class="campus-content">
      <section class="campus-overview">
        <h2>校区概况</h2>
        <p>南岭校区前身为吉林工业大学，以工科见长，占地面积约110万平方米。校区内绿树成荫，建筑风格庄重大气，拥有多个国家级重点实验室和工程训练中心。</p>
        
        <div class="feature-list">
          <div class="feature-item">
            <span class="feature-icon">🏭</span>
            <div>
              <h3>工科优势</h3>
              <p>机械、汽车、材料等学科在全国享有盛誉</p>
            </div>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🔧</span>
            <div>
              <h3>实践基地</h3>
              <p>拥有东北地区最大的工程训练中心</p>
            </div>
          </div>
        </div>
      </section>

      <section class="colleges-section">
        <h2>主要院系</h2>
        <ul class="college-list">
          <li v-for="college in colleges" :key="college">
            {{ college }}
          </li>
        </ul>
      </section>

      <section class="transport-section">
        <h2>交通指南</h2>
        <div class="transport-methods">
          <div class="method">
            <h3>公交线路</h3>
            <p>6路、66路、306路至"吉林大学南岭校区"站</p>
          </div>
          <div class="method">
            <h3>地铁</h3>
            <p>地铁1号线至"工农广场"站，步行约15分钟</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const colleges = [
  '机械与航空航天工程学院',
  '汽车工程学院',
  '材料科学与工程学院',
  '交通学院',
  '生物与农业工程学院',
  '管理学院'
];
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

.feature-list {
  margin: 30px 0;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.feature-icon {
  font-size: 2em;
  margin-right: 20px;
}

.college-list {
  columns: 2;
  list-style-type: none;
  padding: 0;
}

.college-list li {
  padding: 10px 0;
  border-bottom: 1px solid #e2e8f0;
}

.transport-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.method {
  padding: 20px;
  background-color: #ebf8ff;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .college-list {
    columns: 1;
  }
  
  .campus-hero {
    height: 50vh;
  }
}
</style>