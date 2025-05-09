<template>
  <div class="culture-view">
    <!-- 背景图 -->
    <div class="hero-background">
      <div class="gradient-overlay"></div>
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
    </div>

    <!-- 功能卡片网格 -->
    <div class="card-container">
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
.culture-view {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f5f7fa 0%, #e6ecf2 100%);
}

/* 背景图样式 */
.hero-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, 
    rgba(0,0,0,0.3) 0%, 
    rgba(0,0,0,0.15) 50%, 
    rgba(0,0,0,0) 100%);
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* 内容区域 - 视觉中心定位 */
.content-container {
  position: relative;
  z-index: 2;
  width: 80%;
  max-width: 800px;
  margin: 30vh auto 0;
  padding: 2.5rem;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  text-align: center;
  transform: translateY(-50%);
}

.page-header {
  margin-bottom: 1.5rem;
}

.title {
  font-size: 2.8rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.subtitle {
  font-size: 1.4rem;
  color: #5d6d7e;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.divider {
  height: 2px;
  width: 80px;
  background: linear-gradient(90deg, #3498db, #3a7bd5);
  margin: 1.5rem auto;
  border: none;
  opacity: 0.8;
}

.intro-section {
  margin-bottom: 0.5rem;
}

.intro-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #34495e;
  letter-spacing: 0.3px;
}

/* 卡片容器 - 悬浮于底部 */
.card-container {
  position: relative;
  z-index: 3;
  width: 90%;
  max-width: 1200px;
  margin: -80px auto 80px;
  padding: 0 1rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 0;
}

@media (max-width: 1100px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
  
  .content-container {
    width: 90%;
    margin-top: 25vh;
    padding: 1.8rem;
  }
  
  .title {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
}

/* 玻璃拟态卡片样式 */
.culture-card {
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.3);
  box-shadow: 
    0 8px 32px rgba(0,0,0,0.1),
    inset 0 0 0 1px rgba(255,255,255,0.4);
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.4, 1);
  text-decoration: none;
  color: inherit;
  min-width: 0;
}

.culture-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 12px 40px rgba(52,152,219,0.15),
    inset 0 0 0 1px rgba(255,255,255,0.5);
  background: rgba(255,255,255,0.85);
}

.card-content {
  padding: 1.8rem 1.5rem 1.2rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.icon-wrapper {
  margin-bottom: 1.2rem;
  text-align: center;
  width: 100%;
}

/* 图标样式 */
.css-icon {
  width: 48px;
  height: 48px;
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
  width: 28px;
  height: 20px;
  border: 2px solid #3498db;
  border-radius: 2px 6px 6px 2px;
  top: 6px;
  left: 10px;
}

.academic-icon::after {
  width: 14px;
  height: 0;
  border-top: 2px solid #3498db;
  border-bottom: 2px solid #3498db;
  top: 15px;
  left: 16px;
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
  width: 14px;
  height: 14px;
  top: 10px;
  left: 7px;
}

.club-icon::after {
  width: 12px;
  height: 12px;
  top: 12px;
  left: 22px;
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
  width: 18px;
  height: 14px;
  top: 12px;
  left: 14px;
  border: 2px solid white;
}

.service-icon::after {
  width: 16px;
  height: 7px;
  bottom: 9px;
  left: 15px;
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
  width: 0;
  height: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 10px solid white;
  top: 10px;
  left: 10px;
}

.heritage-icon::after {
  width: 5px;
  height: 14px;
  bottom: 9px;
  left: 20px;
}

.card-title {
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
  color: #2c3e50;
  font-weight: 600;
  width: 100%;
  text-align: center;
}

.card-desc {
  font-size: 0.95rem;
  color: #7f8c8d;
  margin-bottom: 1.2rem;
  line-height: 1.6;
  width: 100%;
  text-align: center;
}

.hover-indicator {
  text-align: right;
  width: 100%;
}

.arrow {
  font-size: 1.3rem;
  color: #3498db;
  transition: all 0.3s ease;
}

.culture-card:hover .arrow {
  transform: translateX(8px);
  color: #2980b9;
}

.card-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.4, 1);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.culture-card:hover .card-image img {
  transform: scale(1.05);
}
</style>