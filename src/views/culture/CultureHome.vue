<template>
  <div class="culture-showcase">
    <!-- 顶部横幅区域 -->
    <div class="culture-banner">
      <img src="../../assets/imgs/culturehome/campus-life-hero.jpg" alt="吉林大学文化生态" />
      <div class="banner-overlay">
        <h1>吉大文化生态</h1>
        <p>在学术殿堂中感受人文温度</p>
      </div>
    </div>

    <!-- 文化介绍区域 -->
    <div class="culture-intro">
      <p class="intro-text">
        吉林大学六校区共同构建的多元文化生态圈，<br />
        既有北国春城的开阔气象，又有百年学府的深厚底蕴。
      </p>
      <div class="divider-line"></div>
    </div>

    <!-- 文化特色板块 -->
    <div class="culture-features">
      <!-- 学术文化 -->
      <div class="feature-section">
        <div class="feature-image">
          <img src="../../assets/imgs/culturehome/event-preview.jpg" alt="吉大学术文化" />
        </div>
        <div class="feature-content">
          <h2><span class="icon academic-icon"></span> 学术文化</h2>
          <p>前沿讲座 · 学科竞赛 · 学术沙龙</p>
          <ul class="feature-list">
            <li>每年举办300+场学术讲座</li>
            <li>覆盖文理工医各学科领域</li>
            <li>师生互动交流的学术平台</li>
          </ul>
          <router-link to="/culture/events" class="view-more"> 查看更多学术活动 → </router-link>
        </div>
      </div>

      <!-- 社团文化 -->
      <div class="feature-section reverse">
        <div class="feature-image">
          <img src="../../assets/imgs/culturehome/club-preview.jpg" alt="吉大社团文化" />
        </div>
        <div class="feature-content">
          <h2><span class="icon club-icon"></span> 社团文化</h2>
          <p>兴趣社群 · 技能发展 · 领导力培养</p>
          <ul class="feature-list">
            <li>100+学生社团组织</li>
            <li>涵盖学术、文艺、体育等类别</li>
            <li>展示个性与才华的舞台</li>
          </ul>
          <router-link to="/culture/clubs" class="view-more"> 查看更多社团信息 → </router-link>
        </div>
      </div>

      <!-- 生活服务 -->
      <div class="feature-section">
        <div class="feature-image">
          <img src="../../assets/imgs/culturehome/rixin-lou.jpg" alt="吉大生活服务" />
        </div>
        <div class="feature-content">
          <h2><span class="icon service-icon"></span> 生活服务</h2>
          <p>校园设施 · 便捷服务 · 实用信息</p>
          <ul class="feature-list">
            <li>六校区一体化服务体系</li>
            <li>数字化校园生活平台</li>
            <li>全方位学生支持网络</li>
          </ul>
          <router-link to="/culture/services" class="view-more"> 查看更多服务信息 → </router-link>
        </div>
      </div>

      <!-- 文化传承 -->
      <div class="feature-section reverse">
        <div class="feature-image">
          <img src="../../assets/imgs/culturehome/heritage-preview.jpg" alt="吉大文化传承" />
        </div>
        <div class="feature-content">
          <h2><span class="icon heritage-icon"></span> 文化传承</h2>
          <p>校史沿革 · 精神谱系 · 传统活动</p>
          <ul class="feature-list">
            <li>百年学府的历史积淀</li>
            <li>红色基因的精神传承</li>
            <li>独具特色的校园传统</li>
          </ul>
          <router-link to="/culture/heritage" class="view-more"> 查看更多文化传承 → </router-link>
        </div>
      </div>
    </div>

    <!-- 底部宣传语 -->
    <div class="culture-footer">
      <p>吉林大学 - 融汇古今文化，培育时代新人</p>
      <div class="footer-image-container">
        <img src="../../assets/imgs/culturehome/campus-life-hero.jpg" alt="吉林大学" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CultureView',
}
</script>

<style scoped>
.culture-showcase {
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
  color: #333;
  max-width: 100%;
  overflow-x: hidden;
}

/* 顶部横幅 */
.culture-banner {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.culture-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  text-align: center;
}

.banner-overlay h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.banner-overlay p {
  font-size: 1.8rem;
  max-width: 800px;
  line-height: 1.5;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

/* 文化介绍 */
.culture-intro {
  max-width: 1000px;
  margin: 50px auto;
  text-align: center;
  padding: 0 20px;
}

.intro-text {
  font-size: 1.4rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 30px;
}

.divider-line {
  height: 3px;
  width: 150px;
  background: linear-gradient(to right, #3498db, #2c3e50);
  margin: 0 auto;
}

/* 特色板块 */
.culture-features {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.feature-section {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  gap: 40px;
}

.feature-section.reverse {
  flex-direction: row-reverse;
}

.feature-image {
  flex: 1;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.feature-image:hover img {
  transform: scale(1.05);
}

.feature-content {
  flex: 1;
}

.feature-content h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.feature-content p {
  font-size: 1.2rem;
  color: #5d6d7e;
  margin-bottom: 25px;
}

.feature-list {
  margin-bottom: 30px;
  padding-left: 20px;
}

.feature-list li {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 12px;
  color: #444;
  position: relative;
}

.feature-list li:before {
  content: '•';
  color: #3498db;
  font-size: 1.5rem;
  position: absolute;
  left: -20px;
  top: -3px;
}

.view-more {
  display: inline-block;
  color: #3498db;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.view-more:hover {
  color: #2980b9;
  transform: translateX(5px);
}

/* 图标样式 */
.icon {
  display: inline-block;
  width: 36px;
  height: 36px;
  margin-right: 15px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.academic-icon {
  background-image: url('../../assets/icons/academic-icon.svg');
}

.club-icon {
  background-image: url('../../assets/icons/club-icon.svg');
}

.service-icon {
  background-image: url('../../assets/icons/service-icon.svg');
}

.heritage-icon {
  background-image: url('../../assets/icons/heritage-icon.svg');
}

/* 底部宣传语 */
.culture-footer {
  text-align: center;
  padding: 60px 20px;
  background: #f9f9f9;
  margin-top: 50px;
}

.culture-footer p {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 30px;
  font-weight: 500;
}

.footer-image-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
}

.culture-footer img {
  max-width: 1000px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

/* 响应式设计 */
@media (max-width: 992px) {
  .feature-section,
  .feature-section.reverse {
    flex-direction: column;
    gap: 30px;
  }

  .feature-image {
    width: 100%;
  }

  .banner-overlay h1 {
    font-size: 2.8rem;
  }

  .banner-overlay p {
    font-size: 1.4rem;
  }
}

@media (max-width: 768px) {
  .culture-banner {
    height: 400px;
  }

  .banner-overlay h1 {
    font-size: 2.2rem;
  }

  .banner-overlay p {
    font-size: 1.2rem;
  }

  .intro-text {
    font-size: 1.2rem;
  }

  .culture-footer p {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .culture-banner {
    height: 300px;
  }

  .banner-overlay h1 {
    font-size: 1.8rem;
  }

  .feature-content h2 {
    font-size: 1.6rem;
  }

  .feature-content p {
    font-size: 1.1rem;
  }

  .feature-list li {
    font-size: 1rem;
  }
}
</style>
