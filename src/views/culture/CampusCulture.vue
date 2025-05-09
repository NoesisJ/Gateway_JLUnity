<template>
  <div class="campus-culture">
    <header class="hero-section">
      <h1>吉大文化传承</h1>
      <p>百年学府的精神底蕴与文化积淀</p>
    </header>

    <div class="culture-container">
      <section class="history-section">
        <h2><i class="icon-history"></i> 校史沿革</h2>
        <div class="timeline">
          <div v-for="item in history" :key="item.year" class="timeline-item">
            <div class="year">{{ item.year }}</div>
            <div class="content">{{ item.event }}</div>
          </div>
        </div>
      </section>

      <section class="spirit-section">
        <h2><i class="icon-spirit"></i> 吉大精神</h2>
        <div class="spirit-content">
          <div class="motto">
            <h3>校训</h3>
            <p>"求实创新 励志图强"</p>
          </div>
          <div class="values">
            <h3>核心价值观</h3>
            <ul>
              <li v-for="value in coreValues" :key="value">{{ value }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="tradition-section">
        <h2><i class="icon-tradition"></i> 校园传统</h2>
        <div class="tradition-grid">
          <div v-for="item in traditions" :key="item.id" class="tradition-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <img :src="item.image" :alt="item.title">
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const history = [
  { year: '1946', event: '东北行政学院成立，吉林大学前身' },
  { year: '1952', event: '全国院系调整，成为综合性大学' },
  { year: '2000', event: '原吉林大学等五校合并组建新吉林大学' }
]

const coreValues = [
  '崇尚科学 追求真理',
  '开放包容 海纳百川',
  '知行合一 服务社会'
]

const traditions = [
  {
    id: 1,
    title: '鼎新讲座',
    description: '每周举办的跨学科学术讲座，延续60余年',
    image: '/images/culture/lecture.jpg'
  },
  {
    id: 2,
    title: '五月鲜花',
    description: '年度文艺汇演，展示学生艺术才华',
    image: '/images/culture/performance.jpg'
  }
]
</script>

<style scoped>
/* 保持原有样式，新增以下内容 */
.timeline {
  border-left: 3px solid #3498db;
  padding-left: 20px;
}

.timeline-item {
  margin-bottom: 30px;
  position: relative;
}

.year {
  font-weight: bold;
  color: #3498db;
  margin-bottom: 5px;
}

.tradition-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.tradition-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
}

.tradition-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-top: 10px;
}
</style>