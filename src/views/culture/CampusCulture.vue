<template>
  <div class="culture-heritage">
    <!-- 顶部横幅区域 - 需要替换为吉林大学历史文化图片 -->
    <div class="heritage-banner">
      <img src="../../assets/imgs/culturehome/campus-life-hero.jpg" alt="吉林大学文化传承" />
      <div class="banner-overlay">
        <h1>吉林大学文化传承</h1>
        <p>百年学府的精神底蕴与文化积淀</p>
      </div>
    </div>

    <!-- 文化介绍区域 -->
    <div class="heritage-intro">
      <p class="intro-text">
        从1946年东北行政学院走来，吉林大学在七十余载办学历程中，<br />
        形成了独特的精神品格和文化传统，滋养着一代代吉大人。
      </p>
      <div class="divider-line"></div>
    </div>

    <!-- 校史沿革 -->
    <div class="history-section">
      <div class="section-header">
        <h2><i class="icon-history"></i> 校史沿革</h2>
        <p>岁月如歌 · 薪火相传</p>
      </div>
      <div class="timeline-container">
        <div class="timeline">
          <div v-for="item in history" :key="item.year" class="timeline-item">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-content">
              <h3>{{ item.event }}</h3>
              <p v-if="item.detail">{{ item.detail }}</p>
            </div>
            <div class="timeline-image">
              <!-- 需要替换为历史图片 -->
              <img :src="item.image" :alt="item.event" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 吉大精神 -->
    <div class="spirit-section">
      <div class="section-header">
        <h2><i class="icon-spirit"></i> 吉大精神</h2>
        <p>求实创新 · 励志图强</p>
      </div>
      <div class="spirit-content">
        <div class="motto-card">
          <div class="motto-text">
            <h3>校训</h3>
            <p>"求实创新 励志图强"</p>
            <div class="motto-desc">2005年确定，体现了吉大人追求真理、勇于创新的精神品格</div>
          </div>
          <div class="motto-image">
            <!-- 需要替换为校训石刻图片 -->
            <img src="../../assets/imgs/culturehome/campus-life-hero.jpg" alt="吉林大学校训" />
          </div>
        </div>

        <div class="values-grid">
          <div v-for="value in coreValues" :key="value.title" class="value-card">
            <div class="value-icon">
              <i :class="value.icon"></i>
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 校园传统 -->
    <div class="tradition-section">
      <div class="section-header">
        <h2><i class="icon-tradition"></i> 校园传统</h2>
        <p>文化印记 · 精神传承</p>
      </div>
      <div class="tradition-grid">
        <div v-for="item in traditions" :key="item.id" class="tradition-card">
          <div class="tradition-image">
            <!-- 需要替换为传统活动图片 -->
            <img :src="item.image" :alt="item.title" />
            <div class="tradition-year">{{ item.year }}</div>
          </div>
          <div class="tradition-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="tradition-highlight"><i class="icon-star"></i> {{ item.highlight }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部宣传语 -->
    <div class="heritage-footer">
      <p>传承吉大精神，续写百年华章</p>
      <div class="footer-image-container">
        <!-- 需要替换为吉大校园全景图片 -->
        <img src="../../assets/imgs/culturehome/campus-life-hero.jpg" alt="吉林大学" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const history = [
  {
    year: '1946',
    event: '东北行政学院成立',
    detail: '吉林大学前身，中国共产党在东北创建的第一所综合性大学',
    image: '../../src/assets/imgs/culturehome/xingzheng.jpg',
  },
  {
    year: '1952',
    event: '全国院系调整',
    detail: '成为文理兼备的综合性大学，奠定学科发展基础',
    image: '../../src/assets/imgs/culturehome/1952.jpg',
  },
  {
    year: '2000',
    event: '五校合并组建新吉林大学',
    detail: '原吉林大学、吉林工业大学、白求恩医科大学、长春科技大学、长春邮电学院合并',
    image: '../../src/assets/imgs/culturehome/wuxiaohebing.jpg',
  },
  {
    year: '2017',
    event: '入选"双一流"建设高校',
    detail: '进入国家"世界一流大学和一流学科"建设行列',
    image: '../../src/assets/imgs/culturehome/shuangyiliu.jpg',
  },
]

const coreValues = [
  {
    title: '崇尚科学 追求真理',
    description: '坚持学术立校，培养追求真理的科学精神',
    icon: 'icon-science',
  },
  {
    title: '开放包容 海纳百川',
    description: '兼收并蓄的学术胸怀，多元文化的交融共生',
    icon: 'icon-inclusive',
  },
  {
    title: '知行合一 服务社会',
    description: '理论联系实际，知识服务国家发展',
    icon: 'icon-practice',
  },
]

const traditions = [
  {
    id: 1,
    title: '鼎新讲座',
    year: '1958年创办',
    description: '每周举办的跨学科学术讲座，邀请校内外知名学者分享前沿成果',
    highlight: '延续60余年的学术传统',
    image: '../../src/assets/imgs/culturehome/dingxin.jpg',
  },
  {
    id: 2,
    title: '五月鲜花',
    year: '1980年创办',
    description: '年度文艺汇演，展示学生艺术才华，丰富校园文化生活',
    highlight: '吉大最具影响力的文艺盛事',
    image: '../../src/assets/imgs/culturehome/flower.jpg',
  },
  {
    id: 3,
    title: '白求恩精神论坛',
    year: '2005年创办',
    description: '弘扬白求恩精神，培育医学生职业道德',
    highlight: '全国医学院校品牌活动',
    image: '../../src/assets/imgs/culturehome/baiqiuen.jpg',
  },
  {
    id: 4,
    title: '汽车文化节',
    year: '1996年创办',
    description: '展示汽车科技成果，弘扬汽车工业文化',
    highlight: '国内高校首个汽车主题文化节',
    image: '../../src/assets/imgs/culturehome/car.jpg',
  },
]
</script>

<style scoped>
.culture-heritage {
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
}

/* 顶部横幅 */
.heritage-banner {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.heritage-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
.heritage-intro {
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
  background: linear-gradient(to right, #2c3e50, #3498db);
  margin: 0 auto;
}

/* 通用区块标题 */
.section-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 0 20px;
}

.section-header h2 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.section-header p {
  font-size: 1.2rem;
  color: #7f8c8d;
}

/* 校史沿革 */
.history-section {
  margin-bottom: 60px;
}

.timeline-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #3498db, #2c3e50);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-year {
  flex: 0 0 120px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #3498db;
  padding-top: 5px;
}

.timeline-content {
  flex: 1;
  min-width: 300px;
}

.timeline-content h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.timeline-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.timeline-image {
  flex: 1;
  min-width: 300px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.timeline-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.timeline-image:hover img {
  transform: scale(1.05);
}

/* 吉大精神 */
.spirit-section {
  margin-bottom: 60px;
  background: #f9f9f9;
  padding: 50px 0;
}

.spirit-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.motto-card {
  display: flex;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.motto-text {
  flex: 1;
  padding: 30px;
}

.motto-text h3 {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 10px;
}

.motto-text p {
  font-size: 2rem;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.3;
}

.motto-desc {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
}

.motto-image {
  flex: 1;
  min-width: 300px;
  height: 300px;
}

.motto-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.value-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  background: rgba(52, 152, 219, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #3498db;
}

.value-card h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.value-card p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
}

/* 校园传统 */
.tradition-section {
  margin-bottom: 60px;
}

.tradition-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.tradition-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.tradition-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.tradition-image {
  height: 250px;
  position: relative;
}

.tradition-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.tradition-card:hover .tradition-image img {
  transform: scale(1.05);
}

.tradition-year {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: rgba(231, 76, 60, 0.9);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.tradition-content {
  padding: 20px;
}

.tradition-content h3 {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.tradition-content p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.tradition-highlight {
  font-size: 0.95rem;
  color: #e74c3c;
  display: flex;
  align-items: center;
  gap: 5px;
}

/* 底部宣传语 */
.heritage-footer {
  text-align: center;
  padding: 60px 20px;
  background: #f9f9f9;
  margin-top: 50px;
}

.heritage-footer p {
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

.heritage-footer img {
  max-width: 1000px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

/* 响应式设计 */
@media (max-width: 992px) {
  .motto-card {
    flex-direction: column;
  }

  .motto-image {
    width: 100%;
  }

  .timeline-item {
    flex-direction: column;
  }

  .timeline-year {
    margin-bottom: 15px;
  }
}

@media (max-width: 768px) {
  .heritage-banner {
    height: 400px;
  }

  .banner-overlay h1 {
    font-size: 2.5rem;
  }

  .banner-overlay p {
    font-size: 1.4rem;
  }

  .intro-text {
    font-size: 1.2rem;
  }

  .tradition-grid {
    grid-template-columns: 1fr;
  }

  .heritage-footer p {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .heritage-banner {
    height: 300px;
  }

  .banner-overlay h1 {
    font-size: 2rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  .motto-text p {
    font-size: 1.8rem;
  }
}

/* 图标样式 - 实际项目中应使用真实的图标库 */
.icon-history:before {
  content: '📜';
}
.icon-spirit:before {
  content: '💫';
}
.icon-tradition:before {
  content: '🏛️';
}
.icon-science:before {
  content: '🔬';
}
.icon-inclusive:before {
  content: '🌍';
}
.icon-practice:before {
  content: '🛠️';
}
.icon-star:before {
  content: '⭐';
}
</style>
