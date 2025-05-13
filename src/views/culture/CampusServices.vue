<template>
  <div class="campus-services-simple">
    <!-- 顶部横幅区域 - 需要替换为吉林大学校园生活图片 -->
    <div class="banner">
      <img src="../../assets/imgs/culturehome/campus-life-hero.jpg" alt="吉林大学校园生活服务">
      <div class="banner-text">
        <h1>吉林大学校园生活服务</h1>
        <p>一站式解决校园生活需求</p>
      </div>
    </div>

    <!-- 服务分类导航 -->
    <div class="service-categories">
      <h2><i class="icon-services"></i> 校园生活指南</h2>
      <div class="category-tabs">
        <div 
          v-for="category in serviceCategories" 
          :key="category.value"
          class="category-tab"
          :style="{ backgroundColor: getCategoryColor(category.value) }"
        >
          {{ category.label }}
        </div>
      </div>
    </div>

    <!-- 服务展示区域 -->
    <div class="services-showcase">
      <!-- 住宿服务 -->
      <div class="service-section">
        <div class="section-header">
          <h3><i class="icon-dorm"></i> 住宿服务</h3>
          <p>舒适生活 · 便捷服务 · 安全保障</p>
        </div>
        <div class="service-cards">
          <div class="service-card">
            <div class="service-icon dorm-icon">
              <i class="icon-repair"></i>
            </div>
            <div class="service-content">
              <h4>宿舍报修</h4>
              <p>在线提交报修申请，维修人员将在24小时内响应处理</p>
              <div class="service-contact">
                <span><i class="icon-phone"></i> 报修电话: 8516xxxx</span>
                <a href="#" class="service-link">在线报修入口 →</a>
              </div>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-icon dorm-icon">
              <i class="icon-electric"></i>
            </div>
            <div class="service-content">
              <h4>水电充值</h4>
              <p>线上水电费查询与充值，支持微信、支付宝支付</p>
              <div class="service-contact">
                <span><i class="icon-time"></i> 服务时间: 全天</span>
                <a href="#" class="service-link">立即充值 →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 餐饮服务 -->
      <div class="service-section">
        <div class="section-header">
          <h3><i class="icon-dining"></i> 餐饮服务</h3>
          <p>美食天地 · 健康饮食 · 多样选择</p>
        </div>
        <div class="dining-grid">
          <div 
            v-for="canteen in canteens" 
            :key="canteen.id" 
            class="dining-card"
          >
            <div class="dining-image">
              <!-- 需要替换为食堂图片 -->
              <img :src="canteen.image" :alt="canteen.name">
              <span class="dining-hours"><i class="icon-clock"></i> {{ canteen.hours }}</span>
            </div>
            <div class="dining-info">
              <h4>{{ canteen.name }}</h4>
              <p class="dining-special"><i class="icon-star"></i> {{ canteen.special }}</p>
              <p class="dining-location"><i class="icon-location"></i> {{ canteen.location }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 便捷服务 -->
      <div class="service-section">
        <div class="section-header">
          <h3><i class="icon-quick"></i> 便捷服务</h3>
          <p>一键直达 · 高效办理 · 省时省力</p>
        </div>
        <div class="quick-links-grid">
          <a 
            v-for="link in quickLinks" 
            :key="link.text" 
            :href="link.url" 
            class="quick-link"
          >
            <div class="link-icon" :style="{ backgroundColor: getLinkColor(link.type) }">
              <i :class="link.icon"></i>
            </div>
            <div class="link-text">
              <h4>{{ link.text }}</h4>
              <p>{{ link.desc }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- 底部宣传语 -->
    <div class="footer-slogan">
      <p>吉林大学 - 全方位服务学生校园生活</p>
      <div class="slogan-image-container">
      <!-- 需要替换为校园服务场景图片 -->
      <img src="../../assets/imgs/culturehome/campus-life-hero.jpg" alt="吉林大学校园服务">
    </div>
  </div>
  </div>
</template>


<script setup>
const serviceCategories = [
  { value: 'dorm', label: '住宿服务' },
  { value: 'dining', label: '餐饮服务' },
  { value: 'transport', label: '交通服务' },
  { value: 'study', label: '学习服务' },
  { value: 'health', label: '健康服务' }
]

const canteens = [
  {
    id: 1,
    name: '莘子园食堂',
    hours: '6:30-20:00',
    special: '东北风味、特色面食',
    location: '中心校区学生生活区',
    image: "./../src/assets/imgs/culturehome/shenziyuan.jpg"
  },
  {
    id: 2,
    name: '湖畔餐厅',
    hours: '6:30-21:00',
    special: '川湘风味、小火锅',
    location: '南湖校区湖畔',
    image: "./../src/assets/imgs/culturehome/hupan.jpg"
  },
  {
    id: 3,
    name: '留学生餐厅',
    hours: '6:30-22:00',
    special: '国际风味、西式餐点',
    location: '友谊会馆旁',
    image: "./../src/assets/imgs/culturehome/liuxuesheng.jpg"
  }
]

const quickLinks = [
  { 
    text: '校车时刻表', 
    desc: '六校区班车实时查询', 
    url: '#', 
    icon: 'icon-bus',
    type: 'transport'
  },
  { 
    text: '图书馆预约', 
    desc: '座位、研讨间预约', 
    url: '#', 
    icon: 'icon-library',
    type: 'study'
  },
  { 
    text: '校医院挂号', 
    desc: '在线预约挂号服务', 
    url: '#', 
    icon: 'icon-hospital',
    type: 'health'
  },
  { 
    text: '网络服务', 
    desc: '校园网登录与报修', 
    url: '#', 
    icon: 'icon-network',
    type: 'study'
  },
  { 
    text: '失物招领', 
    desc: '校园失物查询平台', 
    url: '#', 
    icon: 'icon-lost',
    type: 'service'
  },
  { 
    text: '活动场地预约', 
    desc: '教室、场馆预约', 
    url: '#', 
    icon: 'icon-calendar',
    type: 'service'
  }
]

function getCategoryColor(category) {
  const colors = {
    dorm: '#3498db',
    dining: '#e74c3c',
    transport: '#2ecc71',
    study: '#9b59b6',
    health: '#f39c12',
    service: '#1abc9c'
  }
  return colors[category] || '#95a5a6'
}

function getLinkColor(type) {
  return getCategoryColor(type)
}
</script>

<style scoped>
.campus-services-simple {
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
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

/* 服务分类导航 */
.service-categories {
  text-align: center;
  margin-bottom: 40px;
}

.service-categories h2 {
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

/* 服务展示区域 */
.services-showcase {
  margin-bottom: 50px;
}

.service-section {
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

/* 服务卡片样式 */
.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
}

.service-card {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  background: white;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 100px;
  background: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.dorm-icon {
  background: #3498db;
}

.dining-icon {
  background: #e74c3c;
}

.service-content {
  flex: 1;
  padding: 20px;
}

.service-content h4 {
  font-size: 1.4rem;
  margin: 0 0 15px 0;
  color: #2c3e50;
}

.service-content p {
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
}

.service-contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  color: #7f8c8d;
}

.service-link {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.service-link:hover {
  color: #2980b9;
  transform: translateX(5px);
}

/* 餐饮服务网格 */
.dining-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.dining-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  background: white;
}

.dining-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.dining-image {
  height: 180px;
  position: relative;
}

.dining-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dining-hours {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
}

.dining-info {
  padding: 15px;
}

.dining-info h4 {
  font-size: 1.3rem;
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.dining-special {
  color: #e74c3c;
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.dining-location {
  color: #7f8c8d;
  font-size: 0.9rem;
}

/* 快捷链接网格 */
.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.quick-link {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s;
}

.quick-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.link-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.link-text h4 {
  font-size: 1.2rem;
  margin: 0 0 5px 0;
  color: #2c3e50;
}

.link-text p {
  font-size: 0.9rem;
  color: #7f8c8d;
  margin: 0;
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
  border-radius: 10px;
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
  
  .service-cards,
  .dining-grid,
  .quick-links-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card {
    flex-direction: column;
  }
  
  .service-icon {
    width: 100%;
    height: 80px;
  }
  
  .footer-slogan p {
    font-size: 1.2rem;
  }
}

/* 图标样式 - 实际项目中应使用真实的图标库 */
.icon-services:before { content: "🏫"; }
.icon-dorm:before { content: "🏠"; }
.icon-dining:before { content: "🍽️"; }
.icon-quick:before { content: "⚡"; }
.icon-repair:before { content: "🔧"; }
.icon-electric:before { content: "💡"; }
.icon-phone:before { content: "📞"; }
.icon-time:before { content: "⏰"; }
.icon-clock:before { content: "🕒"; }
.icon-star:before { content: "⭐"; }
.icon-location:before { content: "📍"; }
.icon-bus:before { content: "🚌"; }
.icon-library:before { content: "📚"; }
.icon-hospital:before { content: "🏥"; }
.icon-network:before { content: "🌐"; }
.icon-lost:before { content: "🔍"; }
.icon-calendar:before { content: "📅"; }
</style>