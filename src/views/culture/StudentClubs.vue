<template>
  <div class="student-clubs-simple">
    <!-- 顶部横幅区域 - 需要替换为吉林大学学生活动图片 -->
    <div class="banner">
      <img src="../../assets/imgs/culturehome/campus-life-hero.jpg" alt="吉林大学社团活动">
      <div class="banner-text">
        <h1>吉林大学学生社团</h1>
        <p>探索兴趣 · 结交伙伴 · 丰富生活</p>
      </div>
    </div>

    <!-- 社团分类导航 -->
    <div class="club-categories">
      <h2><i class="icon-group"></i> 热门社团</h2>
      <div class="category-tabs">
        <div 
          v-for="category in categories" 
          :key="category.value"
          class="category-tab"
          :style="{ backgroundColor: getCategoryColor(category.value) }"
        >
          {{ category.label }}
        </div>
      </div>
    </div>

    <!-- 社团展示区域 -->
    <div class="clubs-showcase">
      <!-- 学术科技类社团 -->
      <div class="club-section">
        <div class="section-header">
          <h3><i class="icon-science"></i> 学术科技</h3>
          <p>科技创新 · 学术研究 · 学科竞赛</p>
        </div>
        <div class="club-cards">
          <div class="club-card">
            <div class="club-image">
              <!-- 需要替换为机器人社团相关图片 -->
              <img src="../../assets/imgs/culturehome/robot.jpg" alt="机器人创新协会">
              <span class="member-count"><i class="icon-user"></i> 128人</span>
            </div>
            <div class="club-content">
              <h4>机器人创新协会</h4>
              <div class="club-meta">
                <span><i class="icon-calendar"></i> 成立于2015年</span>
                <span><i class="icon-trophy"></i> 12个奖项</span>
              </div>
              <p>专注于机器人技术研究与应用开发，多次代表学校参加全国大学生机器人大赛并获奖...</p>
              <div class="club-activity">
                <i class="icon-activity"></i> 近期活动: 2023全国机器人大赛备战
              </div>
            </div>
          </div>
          
          <div class="club-card">
            <div class="club-image">
              <!-- 需要替换为AI社团相关图片 -->
              <img src="../../assets/imgs/culturehome/AI.jpg" alt="人工智能研究会">
              <span class="member-count"><i class="icon-user"></i> 215人</span>
            </div>
            <div class="club-content">
              <h4>人工智能研究会</h4>
              <div class="club-meta">
                <span><i class="icon-calendar"></i> 成立于2018年</span>
                <span><i class="icon-trophy"></i> 8个奖项</span>
              </div>
              <p>探索人工智能前沿技术，组织机器学习、深度学习研讨会，与校内实验室合作开展AI项目研究...</p>
              <div class="club-activity">
                <i class="icon-activity"></i> 近期活动: 机器学习实战训练营
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 创新创业类社团 -->
      <div class="club-section">
        <div class="section-header">
          <h3><i class="icon-idea"></i> 创新创业</h3>
          <p>创业孵化 · 创新实践 · 商业竞赛</p>
        </div>
        <div class="club-cards">
          <div class="club-card featured">
            <div class="club-image">
              <!-- 需要替换为创新创业社团相关图片 -->
              <img src="../../assets/imgs/culturehome/inovation.jpg" alt="创新创业联盟">
              <span class="member-count"><i class="icon-user"></i> 198人</span>
            </div>
            <div class="club-content">
              <h4>创新创业联盟</h4>
              <div class="club-meta">
                <span><i class="icon-calendar"></i> 成立于2015年</span>
                <span><i class="icon-trophy"></i> 18个奖项</span>
              </div>
              <p>培育创新创业项目，提供创业指导与资源对接，孵化多个学生创业团队并获得投资...</p>
              <div class="club-activity">
                <i class="icon-activity"></i> 近期活动: 创业计划大赛
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 文艺类社团 -->
      <div class="club-section">
        <div class="section-header">
          <h3><i class="icon-art"></i> 文艺体育</h3>
          <p>艺术表演 · 体育运动 · 文化交流</p>
        </div>
        <div class="club-cards">
          <div class="club-card">
            <div class="club-image">
              <!-- 需要替换为音乐社团相关图片 -->
              <img src="../../assets/imgs/culturehome/yinyue.jpg" alt="音乐协会">
              <span class="member-count"><i class="icon-user"></i> 156人</span>
            </div>
            <div class="club-content">
              <h4>音乐协会</h4>
              <div class="club-meta">
                <span><i class="icon-calendar"></i> 成立于2016年</span>
              </div>
              <p>聚集音乐爱好者，组织各类音乐表演和比赛，定期举办校园音乐会...</p>
            </div>
          </div>
          
          <div class="club-card">
            <div class="club-image">
              <!-- 需要替换为篮球社团相关图片 -->
              <img src="../../assets/imgs/culturehome/basket.jpg" alt="篮球协会">
              <span class="member-count"><i class="icon-user"></i> 210人</span>
            </div>
            <div class="club-content">
              <h4>篮球协会</h4>
              <div class="club-meta">
                <span><i class="icon-calendar"></i> 成立于2014年</span>
              </div>
              <p>组织篮球训练和比赛，培养篮球运动人才，代表学校参加各类篮球赛事...</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部宣传语 -->
    <div class="footer-slogan">
      <p>加入社团，开启你的精彩大学生活</p>
      <div class="slogan-image-container">
      <!-- 需要替换为吉林大学社团活动集体照 -->
      <img src="../../assets/imgs/culturehome/campus-life-hero.jpg" alt="吉林大学社团活动">
    </div>
  </div>
  </div>
</template>

<script setup>
const categories = [
  { value: 'academic', label: '学术科技' },
  { value: 'innovation', label: '创新创业' },
  { value: 'art', label: '文艺体育' },
  { value: 'science', label: '自然科学' },
  { value: 'humanities', label: '人文社科' }
]

function getCategoryColor(category) {
  const colors = {
    academic: '#3498db',
    science: '#2ecc71',
    engineering: '#e74c3c',
    medical: '#9b59b6',
    humanities: '#f39c12',
    innovation: '#1abc9c',
    art: '#e91e63'
  }
  return colors[category] || '#95a5a6'
}
</script>

<style scoped>
.student-clubs-simple {
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

/* 社团分类导航 */
.club-categories {
  text-align: center;
  margin-bottom: 40px;
}

.club-categories h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.category-tab {
  padding: 10px 25px;
  color: white;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: default;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

/* 社团展示区域 */
.clubs-showcase {
  margin-bottom: 50px;
}

.club-section {
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

.club-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
}

.club-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  background: white;
}

.club-card.featured {
  border: 3px solid #e74c3c;
}

.club-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.club-image {
  height: 220px;
  overflow: hidden;
  position: relative;
}

.club-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.club-card:hover .club-image img {
  transform: scale(1.05);
}

.member-count {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
}

.club-content {
  padding: 20px;
}

.club-content h4 {
  font-size: 1.4rem;
  margin: 0 0 15px 0;
  color: #2c3e50;
}

.club-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  color: #7f8c8d;
  font-size: 0.95rem;
}

.club-meta i {
  margin-right: 5px;
}

.club-content p {
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
}

.club-activity {
  padding: 8px 12px;
  background: #f5f7fa;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #3498db;
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
  max-width: 800px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
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
  
  .club-cards {
    grid-template-columns: 1fr;
  }
  
  .footer-slogan p {
    font-size: 1.2rem;
  }
}

/* 图标样式 - 实际项目中应使用真实的图标库 */
.icon-group:before { content: "👥"; }
.icon-science:before { content: "🔬"; }
.icon-idea:before { content: "💡"; }
.icon-art:before { content: "🎨"; }
.icon-user:before { content: "👤"; }
.icon-calendar:before { content: "📅"; }
.icon-trophy:before { content: "🏆"; }
.icon-activity:before { content: "🔔"; }
</style>