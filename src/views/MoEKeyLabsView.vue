<template>
  <div class="research-platform-view">
    <header class="header">
      <h1>吉林大学 - 教育部重点实验室/工程研究中心</h1>
      <button @click="goBack" class="back-button">返回学术资源</button>
    </header>
    <main class="main-content">
      <p class="intro-text">
        教育部重点实验室和工程研究中心是国家高等教育创新体系的重要组成部分，依托高校建设，旨在开展高水平基础研究、应用基础研究和关键技术攻关，培养创新人才。吉林大学建有多个教育部重点实验室及工程研究中心。
      </p>

      <div v-if="labs.length > 0" class="platform-list">
        <div v-for="lab in labs" :key="lab.name" class="platform-item-card">
          <img v-if="lab.imageUrl" :src="lab.imageUrl" :alt="lab.name" class="platform-image"/>
          <div v-else class="platform-image-placeholder">暂无图片</div>
          <div class="platform-info">
            <h3>{{ lab.name }}</h3>
            <p v-if="lab.description" class="platform-description">{{ lab.description }}</p>
             <p v-if="lab.researchAreas && lab.researchAreas.length > 0">
              <strong>主要研究方向：</strong>
              <ul>
                <li v-for="area in lab.researchAreas" :key="area">{{ area }}</li>
              </ul>
            </p>
            <a v-if="lab.url" :href="lab.url" target="_blank" rel="noopener noreferrer" class="platform-link">访问平台官网 &raquo;</a>
          </div>
        </div>
      </div>
       <p v-else class="no-data-message">
        教育部重点实验室/工程研究中心信息正在收集中，请访问<a href="https://www.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学官网</a>“科学研究”栏目获取最新信息。
      </p>
    </main>
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} 吉林大学介绍网站小组. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 导入图片 (使用相对路径 .. )
import imgSymbolicComp from '../assets/imgs/academic/符号计算与知识工程教育部.png';
import imgMolecularEnzyme from '../assets/imgs/academic/分子酶学工程教育部.png';
import imgBionics from '../assets/imgs/academic/重点实验室工程仿生教育部.png';
import imgSpecialPlastics from '../assets/imgs/academic/特种工程塑料教育部工程研究中心.png';
import imgPathology from '../assets/imgs/academic/病理生物学教育部重点实验室.png';
import imgGeoInfo from '../assets/imgs/academic/地球信息探测仪器教育部重点实验室.png';
import imgZoonosis from '../assets/imgs/academic/人兽共患病研究教育重点实验室.png';
import imgGroundwater from '../assets/imgs/academic/地下水资源与环境教育部重点实验室.png';
import imgAutoDev from '../assets/imgs/academic/汽车开发教育部工程研究中心.png';


const router = useRouter();

interface LabEntry {
  name: string;
  description?: string;
  researchAreas?: string[];
  imageUrl?: string;
  url?: string;
}

const labs = ref<LabEntry[]>([
  {
    name: '符号计算与知识工程教育部重点实验室',
    description: '主要从事符号计算、自动推理、知识工程、人工智能等领域的研究。',
    imageUrl: imgSymbolicComp,
  },
  {
    name: '分子酶学工程教育部重点实验室',
    description: '专注于酶的结构功能、催化机制、分子改造及在生物医药和生物化工中的应用。',
    imageUrl: imgMolecularEnzyme,
  },
  {
    name: '工程仿生教育部重点实验室',
    description: '开展工程仿生学理论与技术研究，应用于机械、材料、农业等领域。',
    imageUrl: imgBionics,
  },
  {
    name: '病理生物学教育部重点实验室',
    description: '研究疾病发生发展的病理机制，探索新的诊断和治疗靶点。',
    imageUrl: imgPathology,
  },
  {
    name: '地球信息探测仪器教育部重点实验室',
    description: '研制先进的地球物理探测仪器设备及数据处理解释方法。',
    imageUrl: imgGeoInfo,
  },
   {
    name: '人兽共患病研究教育部重点实验室',
    description: '开展人畜共患病流行规律、致病机制和防控技术研究。',
    imageUrl: imgZoonosis,
  },
  {
    name: '地下水资源与环境教育部重点实验室',
    description: '研究地下水循环规律、水质演化、污染控制与修复及资源可持续利用。',
    imageUrl: imgGroundwater,
  },
  {
    name: '特种工程塑料教育部工程研究中心',
    description: '进行高性能特种工程塑料的研发、改性、加工及应用推广。',
     imageUrl: imgSpecialPlastics,
  },
   {
    name: '汽车开发教育部工程研究中心',
    description: '从事汽车整车及关键零部件的开发、测试与验证技术研究。',
     imageUrl: imgAutoDev,
  },
]);

const goBack = () => {
  router.push({ name: 'academicresources' });
};
</script>

<style scoped>
.research-platform-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
   /* 修改基础字体栈 */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
  background-color: #f4f7f6;
}

.header {
  background-color: #003366;
  color: white;
  padding: 20px 40px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  flex-shrink: 0;
}

.header h1 {
  margin: 0;
  font-size: 2em;
  font-weight: 600;
}

/* 修改按钮颜色 */
.back-button {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  background-color: #6c757d; /* 修改为灰色 */
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.2s ease;
}

.back-button:hover {
  background-color: #5a6268; /* 悬停时变深灰色 */
}

.main-content {
  flex-grow: 1;
  padding: 25px 40px;
  overflow-y: auto;
}

.intro-text {
  font-size: 1.05em;
  line-height: 1.7;
  margin-bottom: 30px;
  color: #454F5B;
  background-color: #e9f3ff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.intro-text a {
  color: #005A9C;
  font-weight: bold;
}

.platform-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
}

.platform-item-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.platform-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: #e0e0e0;
}
.platform-image-placeholder {
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-style: italic;
  border-bottom: 1px solid #e0e0e0;
}

.platform-info {
  padding: 20px;
  flex-grow: 1;
}

.platform-info h3 {
  font-size: 1.4em;
  color: #003A70;
  margin-top: 0;
  margin-bottom: 10px;
}

/* 修改描述文字字体 */
.platform-description {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; /* 应用新的字体栈 */
  font-size: 0.95em;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.platform-info ul {
  padding-left: 20px;
  margin-top: 5px;
  margin-bottom: 15px;
}
.platform-info ul li {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 5px;
}

.platform-link {
  display: inline-block;
  margin-top: 10px;
  color: #005A9C;
  text-decoration: none;
  font-weight: bold;
}
.platform-link:hover {
  text-decoration: underline;
}
.no-data-message {
  text-align: center;
  font-size: 1.1em;
  color: #777;
  margin-top: 40px;
}
.no-data-message a{
  color: #005A9C;
  font-weight: bold;
}

.footer {
  background-color: #333;
  color: #ccc;
  text-align: center;
  padding: 15px 40px;
  font-size: 0.9em;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .header { padding: 15px 20px; }
  .header h1 { font-size: 1.6em; }
  .back-button { padding: 6px 12px; font-size: 0.8em; left: 15px; }
  .main-content { padding: 20px; }
  .platform-list { grid-template-columns: 1fr; }
  .platform-info h3 { font-size: 1.3em; }
}
</style>
