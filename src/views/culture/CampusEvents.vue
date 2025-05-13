<template>
  <div class="campus-events-simple">
    <!-- 顶部横幅区域 - 需要替换为吉林大学校园图片 -->
    <div class="banner">
      <img src="../../assets/imgs/culturehome/campus-life-hero.jpg" alt="吉林大学校园风光">
      <div class="banner-text">
        <h1>吉林大学校园活动</h1>
        <p>精彩学术生活 · 丰富校园文化</p>
      </div>
    </div>

    <!-- 活动分类导航 -->
    <div class="event-categories">
      <h2><i class="icon-calendar"></i> 近期活动</h2>
      <div class="category-tabs">
        <div 
          v-for="type in eventTypes" 
          :key="type.value"
          class="category-tab"
          :class="{ active: activeType === type.value }"
        >
          {{ type.label }}
        </div>
      </div>
    </div>

    <!-- 活动展示区域 -->
    <div class="events-showcase">
      <!-- 学术活动 -->
      <div class="event-section">
        <div class="section-header">
          <h3><i class="icon-book"></i> 学术活动</h3>
          <p>前沿讲座 · 学术研讨 · 学科竞赛</p>
        </div>
        <div class="event-cards">
          <div class="event-card">
            <div class="event-image">
              <!-- 需要替换为学术活动相关图片 -->
              <img src="../../assets/imgs/culturehome/lecture.jpg" alt="学术讲座">
            </div>
            <div class="event-content">
              <h4>人工智能前沿讲座</h4>
              <div class="event-meta">
                <span><i class="icon-date"></i> 10月15日 14:00</span>
                <span><i class="icon-location"></i> 计算机楼报告厅</span>
              </div>
              <p>特邀清华大学AI研究院张教授分享大语言模型最新研究成果与应用前景...</p>
            </div>
          </div>
          
          <div class="event-card">
            <div class="event-image">
              <!-- 需要替换为数学建模相关图片 -->
              <img src="../../assets/imgs/culturehome/math.jpg" alt="数学建模">
            </div>
            <div class="event-content">
              <h4>数学建模竞赛培训</h4>
              <div class="event-meta">
                <span><i class="icon-date"></i> 10月25日 13:30</span>
                <span><i class="icon-location"></i> 数学楼105</span>
              </div>
              <p>全国大学生数学建模竞赛赛前培训，由往届获奖团队分享经验...</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 文艺活动 -->
      <div class="event-section">
        <div class="section-header">
          <h3><i class="icon-music"></i> 文艺活动</h3>
          <p>音乐盛宴 · 艺术展览 · 文化演出</p>
        </div>
        <div class="event-cards">
          <div class="event-card">
            <div class="event-image">
              <!-- 需要替换为音乐会相关图片 -->
              <img src="../../assets/imgs/culturehome/sing.jpg" alt="校园音乐会">
            </div>
            <div class="event-content">
              <h4>校园歌手大赛初赛</h4>
              <div class="event-meta">
                <span><i class="icon-date"></i> 10月18日 18:30</span>
                <span><i class="icon-location"></i> 学生活动中心</span>
              </div>
              <p>第25届校园歌手大赛初赛，欢迎热爱音乐的同学报名参加...</p>
            </div>
          </div>
          
          <div class="event-card">
            <div class="event-image">
              <!-- 需要替换为古典音乐相关图片 -->
              <img src="../../assets/imgs/culturehome/music.jpg" alt="古典音乐会">
            </div>
            <div class="event-content">
              <h4>古典音乐会</h4>
              <div class="event-meta">
                <span><i class="icon-date"></i> 10月28日 19:00</span>
                <span><i class="icon-location"></i> 音乐厅</span>
              </div>
              <p>校交响乐团秋季古典音乐会，演奏贝多芬、莫扎特等经典作品...</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 体育活动 -->
      <div class="event-section">
        <div class="section-header">
          <h3><i class="icon-sports"></i> 体育活动</h3>
          <p>竞技比赛 · 运动健身 · 团队活动</p>
        </div>
        <div class="event-cards">
          <div class="event-card">
            <div class="event-image">
              <!-- 需要替换为篮球比赛相关图片 -->
              <img src="../../assets/imgs/culturehome/basketball.jpg" alt="篮球联赛">
            </div>
            <div class="event-content">
              <h4>校篮球联赛决赛</h4>
              <div class="event-meta">
                <span><i class="icon-date"></i> 10月20日 16:00</span>
                <span><i class="icon-location"></i> 中心体育馆</span>
              </div>
              <p>年度校篮球联赛决赛，计算机学院vs机械工程学院...</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部宣传语 -->
    <div class="footer-slogan">
      <p>吉林大学 - 追求卓越，创造精彩校园生活</p>
      <div class="slogan-image-container">
      <!-- 需要替换为吉林大学标志性建筑图片 -->
      <img src="../../assets/imgs/culturehome/campus-life-hero.jpg" alt="吉林大学">
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeType = ref('all')

const eventTypes = [
  { value: 'all', label: '全部活动' },
  { value: 'academic', label: '学术活动' },
  { value: 'art', label: '文艺活动' },
  { value: 'sports', label: '体育活动' }
]
</script>

<style scoped>
.campus-events-simple {
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

/* 横幅样式 */
.banner {
  position: relative;
  height: 400px;
  overflow: hidden;
  margin-bottom: 40px;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 30px;
  text-align: center;
}

.banner-text h1 {
  font-size: 2.8rem;
  margin-bottom: 10px;
}

.banner-text p {
  font-size: 1.4rem;
  opacity: 0.9;
}

/* 活动分类导航 */
.event-categories {
  text-align: center;
  margin-bottom: 40px;
}

.event-categories h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.category-tab {
  padding: 10px 25px;
  background: #f5f7fa;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: default;
}

.category-tab.active {
  background: #2c3e50;
  color: white;
}

/* 活动展示区域 */
.events-showcase {
  margin-bottom: 50px;
}

.event-section {
  margin-bottom: 50px;
}

.section-header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
}

.section-header h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.section-header p {
  font-size: 1.1rem;
  color: #7f8c8d;
}

.event-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 30px;
}

.event-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.event-card:hover {
  transform: translateY(-5px);
}

.event-image {
  height: 250px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.event-card:hover .event-image img {
  transform: scale(1.05);
}

.event-content {
  padding: 20px;
  background: white;
}

.event-content h4 {
  font-size: 1.4rem;
  margin: 0 0 15px 0;
  color: #2c3e50;
}

.event-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  color: #7f8c8d;
  font-size: 0.95rem;
}

.event-meta i {
  margin-right: 5px;
}

.event-content p {
  line-height: 1.6;
  color: #555;
}

/* 底部宣传语 */
.footer-slogan {
  text-align: center;
  padding: 40px 0;
  background: #f9f9f9;
  margin-top: 50px;
}

.footer-slogan p {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
}
.slogan-image-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
}

.footer-slogan img {
  max-width: 600px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .banner {
    height: 300px;
  }
  
  .banner-text h1 {
    font-size: 2rem;
  }
  
  .banner-text p {
    font-size: 1.1rem;
  }
  
  .category-tabs {
    flex-wrap: wrap;
  }
  
  .event-cards {
    grid-template-columns: 1fr;
  }
  
  .footer-slogan p {
    font-size: 1.2rem;
  }
}

/* 图标样式 - 实际项目中应使用真实的图标库 */
.icon-calendar:before { content: "📅"; }
.icon-book:before { content: "📚"; }
.icon-music:before { content: "🎵"; }
.icon-sports:before { content: "⚽"; }
.icon-date:before { content: "🗓️"; }
.icon-location:before { content: "📍"; }
</style>