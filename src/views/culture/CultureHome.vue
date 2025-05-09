<template>
  <div class="culture-view">
    <!-- 全屏背景图部分 -->
    <div class="hero-background">
      <div class="gradient-overlay"></div>
      <!-- 背景图仍需外部图片 -->
      <img 
        src="../../assets/imgs/culturehome/campus-life-hero.jpg" 
        alt="吉大校园文化背景"
        class="background-image"
      >
    </div>

    <!-- 内容区域 -->
    <div class="content-container">
      <header class="page-header">
        <h1 class="title">吉大文化生态</h1>
        <p class="subtitle">在学术殿堂中感受人文温度</p>
        <div class="divider"></div>
      </header>

      <section class="intro-section">
        <p class="intro-text">
          吉林大学六校区共同构建的多元文化生态圈，<br>
          既有北国春城的开阔气象，又有百年学府的深厚底蕴。
        </p>
      </section>

      <!-- 功能卡片网格 -->
      <div class="card-grid">
        <!-- 活动日历卡片 -->
        <router-link 
          to="/culture/events" 
          class="culture-card event-card"
        >
          <div class="card-content">
            <div class="icon-wrapper">
              <div class="css-icon academic-icon"></div>
            </div>
            <h2 class="card-title">学术活动</h2>
            <p class="card-desc">
              前沿讲座 · 学科竞赛 · 学术沙龙
            </p>
            <div class="hover-indicator">
              <span class="arrow">→</span>
            </div>
          </div>
          <div class="card-image">
            <img 
              src="../../assets/imgs/culturehome/event-preview.jpg" 
              alt="活动预览"
            >
          </div>
        </router-link>

        <!-- 学生社团卡片 -->
        <router-link 
          to="/culture/clubs" 
          class="culture-card club-card"
        >
          <div class="card-content">
            <div class="icon-wrapper">
              <div class="css-icon club-icon"></div>
            </div>
            <h2 class="card-title">社团天地</h2>
            <p class="card-desc">
              兴趣社群 · 技能发展 · 领导力培养
            </p>
            <div class="hover-indicator">
              <span class="arrow">→</span>
            </div>
          </div>
          <div class="card-image">
            <img 
              src="../../assets/imgs/culturehome/club-preview.jpg" 
              alt="社团预览"
            >
          </div>
        </router-link>

        <!-- 生活服务卡片 -->
        <router-link 
          to="/culture/services" 
          class="culture-card service-card"
        >
          <div class="card-content">
            <div class="icon-wrapper">
              <div class="css-icon service-icon"></div>
            </div>
            <h2 class="card-title">生活指南</h2>
            <p class="card-desc">
              校园设施 · 便捷服务 · 实用信息
            </p>
            <div class="hover-indicator">
              <span class="arrow">→</span>
            </div>
          </div>
          <div class="card-image">
            <img 
              src="../../assets/imgs/culturehome/service-preview.jpg" 
              alt="服务预览"
            >
          </div>
        </router-link>

        <!-- 文化传承卡片 -->
        <router-link 
          to="/culture/heritage" 
          class="culture-card heritage-card"
        >
          <div class="card-content">
            <div class="icon-wrapper">
              <div class="css-icon heritage-icon"></div>
            </div>
            <h2 class="card-title">文化传承</h2>
            <p class="card-desc">
              校史沿革 · 精神谱系 · 传统活动
            </p>
            <div class="hover-indicator">
              <span class="arrow">→</span>
            </div>
          </div>
          <div class="card-image">
            <img 
              src="../../assets/imgs/culturehome/heritage-preview.jpg" 
              alt="文化预览"
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 基础图标样式 */
.css-icon {
  width: 40px;
  height: 40px;
  position: relative;
  margin: 0 auto;
}

/* 学术活动图标 */
.academic-icon::before,
.academic-icon::after {
  content: "";
  position: absolute;
  background-color: #3498db;
}

.academic-icon::before {
  /* 书本主体 */
  width: 24px;
  height: 18px;
  border: 2px solid #3498db;
  border-radius: 2px 4px 4px 2px;
  top: 5px;
  left: 8px;
}

.academic-icon::after {
  /* 书页线 */
  width: 12px;
  height: 0;
  border-top: 2px solid #3498db;
  border-bottom: 2px solid #3498db;
  top: 13px;
  left: 14px;
}

.academic-icon .podium {
  /* 讲台 */
  position: absolute;
  width: 20px;
  height: 6px;
  background: #3498db;
  bottom: 0;
  left: 10px;
}

/* 社团图标 */
.club-icon {
  background-color: #2ecc71;
  border-radius: 50%;
}

.club-icon::before,
.club-icon::after {
  content: "";
  position: absolute;
  background-color: white;
  border-radius: 50%;
}

.club-icon::before {
  /* 人物1 */
  width: 12px;
  height: 12px;
  top: 8px;
  left: 6px;
}

.club-icon::after {
  /* 人物2 */
  width: 10px;
  height: 10px;
  top: 10px;
  left: 20px;
}

/* 生活服务图标 */
.service-icon {
  background-color: #e67e22;
}

.service-icon::before,
.service-icon::after {
  content: "";
  position: absolute;
  background-color: white;
}

.service-icon::before {
  /* 建筑轮廓 */
  width: 16px;
  height: 12px;
  top: 10px;
  left: 12px;
  border: 2px solid white;
}

.service-icon::after {
  /* 床铺 */
  width: 14px;
  height: 6px;
  bottom: 8px;
  left: 13px;
  border-radius: 2px;
}

/* 文化传承图标 */
.heritage-icon {
  background-color: #e74c3c;
}

.heritage-icon::before,
.heritage-icon::after {
  content: "";
  position: absolute;
  background-color: white;
}

.heritage-icon::before {
  /* 传统屋顶 */
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 8px solid white;
  top: 8px;
  left: 8px;
}

.heritage-icon::after {
  /* 柱子 */
  width: 4px;
  height: 12px;
  bottom: 8px;
  left: 18px;
}

/* 原有样式保持不变 */
.culture-view {
  position: relative;
  min-height: 100vh;
}

.hero-background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%);
  z-index: 1;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-container {
  position: relative;
  z-index: 2;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(255,255,255,0.9);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-top: -100px;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.divider {
  height: 2px;
  width: 80px;
  background-color: #3498db;
  margin: 1rem auto;
}

.intro-section {
  text-align: center;
  margin-bottom: 3rem;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.culture-card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.culture-card:hover {
  transform: translateY(-5px);
}

.card-content {
  padding: 1.5rem;
  flex: 1;
}

.icon-wrapper {
  margin-bottom: 1rem;
  text-align: center;
}

.card-title {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.card-desc {
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 1rem;
}

.hover-indicator {
  text-align: right;
}

.arrow {
  font-size: 1.2rem;
  color: #3498db;
  transition: transform 0.3s ease;
}

.culture-card:hover .arrow {
  transform: translateX(5px);
}

.card-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
</style>