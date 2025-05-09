<template>
  <div class="campus-services">
    <header class="hero-section">
      <h1>校园生活服务</h1>
      <p>便捷校园生活指南</p>
    </header>

    <div class="services-container">
      <div class="service-category">
        <h2><i class="icon-dorm"></i> 住宿服务</h2>
        <div class="service-grid">
          <div class="service-card">
            <h3>宿舍报修</h3>
            <p>在线提交报修申请，快速响应</p>
            <div class="contact">
              <span>电话：8516xxxx</span>
              <a href="#">在线报修</a>
            </div>
          </div>
          <!-- 更多住宿服务卡片 -->
        </div>
      </div>

      <div class="service-category">
        <h2><i class="icon-dining"></i> 餐饮服务</h2>
        <div class="dining-map">
          <div class="dining-card" v-for="canteen in canteens" :key="canteen.id">
            <h3>{{ canteen.name }}</h3>
            <p>营业时间：{{ canteen.hours }}</p>
            <p>特色窗口：{{ canteen.special }}</p>
          </div>
        </div>
      </div>

      <div class="quick-links">
        <h2>常用链接</h2>
        <div class="links-grid">
          <a v-for="link in links" :key="link.text" :href="link.url">
            <i :class="link.icon"></i>
            <span>{{ link.text }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const canteens = [
  {
    id: 1,
    name: '莘子园食堂',
    hours: '6:30-20:00',
    special: '东北风味、面食'
  },
  // 更多食堂数据
]

const links = [
  { text: '校车时刻表', url: '#', icon: 'icon-bus' },
  { text: '图书馆预约', url: '#', icon: 'icon-library' },
  // 更多链接
]
</script>

<style scoped>
.dining-map {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.dining-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
}

.quick-links {
  margin-top: 40px;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}

.links-grid a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
}
</style>