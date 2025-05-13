
<template>
  <div class="campus-map">
    <header class="hero-section">
      <div class="hero-content">
        <h1 class="main-title">吉大校园地图</h1>
        <p class="subtitle">一图在手，畅行吉大七大校区</p>
      </div>
    </header>

    <main class="content-section">
      <article class="map-container">
        <h2 class="section-title">吉林大学校区分布图</h2>
        
        <div class="interactive-map">
          <img src="../../assets/imgs/map/jlu-map.jpg" alt="吉林大学校区分布图" class="base-map">
          <div class="map-markers">
            <div class="marker" style="top: 25%; left: 30%;" @click="showInfo('center')">
              <div class="marker-dot"></div>
              <div class="marker-label">中心校区</div>
            </div>
            <div class="marker" style="top: 40%; left: 60%;" @click="showInfo('south')">
              <div class="marker-dot"></div>
              <div class="marker-label">南岭校区</div>
            </div>
            <!-- 其他校区标记 -->
          </div>
        </div>

        <div class="map-legend">
          <h3>校区图例</h3>
          <ul>
            <li v-for="campus in campuses" :key="campus.id" @click="showInfo(campus.id)">
              <span class="legend-color" :style="{backgroundColor: campus.color}"></span>
              {{ campus.name }}
            </li>
          </ul>
        </div>

        <div class="campus-info" v-if="currentCampus">
          <h3>{{ currentCampus.name }}</h3>
          <p>{{ currentCampus.description }}</p>
          <div class="info-highlights">
            <div class="highlight-item">
              <span class="highlight-icon">📍</span>
              <span>{{ currentCampus.location }}</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">🏛</span>
              <span>{{ currentCampus.colleges }}</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">🚌</span>
              <span>{{ currentCampus.transport }}</span>
            </div>
          </div>
          <router-link :to="currentCampus.link" class="detail-link">查看详情 →</router-link>
        </div>
      </article>
    </main>

    <footer class="map-footer">
      <p>获取纸质地图：各校区图书馆前台、学生服务中心</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface CampusInfo {
  id: string;
  name: string;
  description: string;
  color: string;
  location: string;
  colleges: string;
  transport: string;
  link: string;
}

const campuses: CampusInfo[] = [
  {
    id: 'center',
    name: '中心校区',
    description: '吉林大学的主校区，包含行政中心、图书馆和多个文理科院系。标志性建筑有鼎新楼和清湖。',
    color: '#3182CE',
    location: '长春市朝阳区前进大街2699号',
    colleges: '文学院、哲学社会学院、数学学院等',
    transport: '公交315路、13路、222路',
    link: '/campus/center'
  },
  {
    id: 'south',
    name: '南岭校区',
    description: '以工科为主的校区，前身为吉林工业大学。校园内绿树成荫，建筑风格庄重大气。',
    color: '#38A169',
    location: '长春市南关区人民大街5988号',
    colleges: '机械与航空航天工程学院、汽车工程学院等',
    transport: '公交6路、66路、306路',
    link: '/campus/south'
  },
  // 其他校区数据...
];

const currentCampus = ref<CampusInfo | null>(null);

const showInfo = (id: string) => {
  currentCampus.value = campuses.find(c => c.id === id) || null;
};
</script>

<style scoped>
.campus-map {
  max-width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
}

.hero-section {
  position: relative;
  width: 100%;
  min-height: 70vh;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background-image: url('../../src/assets/imgs/map/map-hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.35);
}

.content-section {
  padding: 50px 20px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #fff;
}

.section-title {
  font-size: 2.4em;
  color: #2b6cb0;
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 15px;
  border-bottom: 3px solid #ebf8ff;
}

.interactive-map {
  position: relative;
  width: 100%;
  margin: 0 auto 40px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.base-map {
  width: 100%;
  height: auto;
  display: block;
}

.map-markers {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.marker {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all 0.3s ease;
}

.marker:hover .marker-dot {
  transform: scale(1.5);
}

.marker:hover .marker-label {
  opacity: 1;
  transform: translateY(0);
}

.marker-dot {
  width: 12px;
  height: 12px;
  background-color: #E53E3E;
  border-radius: 50%;
  border: 2px solid white;
  transition: transform 0.3s ease;
}

.marker-label {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: bold;
  color: #2D3748;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.map-legend {
  background-color: #F7FAFC;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.map-legend h3 {
  margin-top: 0;
  color: #2D3748;
  font-size: 1.3em;
  margin-bottom: 15px;
}

.map-legend ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.map-legend li {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.2s;
}

.map-legend li:hover {
  background-color: #EDF2F7;
}

.legend-color {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 3px;
  margin-right: 8px;
}

.campus-info {
  background-color: #EBF8FF;
  padding: 25px;
  border-radius: 10px;
  margin-top: 20px;
  border-left: 4px solid #3182CE;
}

.campus-info h3 {
  margin-top: 0;
  color: #2B6CB0;
  font-size: 1.5em;
}

.campus-info p {
  color: #4A5568;
  line-height: 1.6;
}

.info-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
}

.highlight-item {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 8px 15px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.highlight-icon {
  margin-right: 8px;
  font-size: 1.2em;
}

.detail-link {
  display: inline-block;
  color: #3182CE;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s;
}

.detail-link:hover {
  color: #2C5282;
  text-decoration: underline;
}

.map-footer {
  text-align: center;
  padding: 40px 20px;
  background-color: #2D3748;
  color: #F7FAFC;
  font-size: 0.95em;
  margin-top: 50px;
}

@media (max-width: 768px) {
  .hero-section { min-height: 60vh; }
  .main-title { font-size: 2.6em; }
  .subtitle { font-size: 1.2em; }
  .section-title { font-size: 2em; }
  .map-legend ul {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: 50vh;
    padding: 30px 15px;
  }
  .main-title { font-size: 2.1em; }
  .subtitle { font-size: 1.05em; }
  .content-section { padding: 30px 15px; }
  .section-title { font-size: 1.7em; margin-bottom: 30px; }
  .map-footer { padding: 30px 15px; margin-top: 40px; }
}
</style>