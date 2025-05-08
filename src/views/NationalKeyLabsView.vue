<template>
  <div class="research-platform-view">
    <header class="header">
      <h1>吉林大学 - 国家重点实验室</h1>
      <button @click="goBack" class="back-button">返回学术资源</button>
    </header>
    <main class="main-content">
      <p class="intro-text">
        国家重点实验室是国家科技创新体系的重要组成部分，代表了我国在相关领域的最高研究水平。吉林大学拥有多个国家重点实验室，在国家重大战略需求和科学前沿探索中发挥着关键作用。
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
        国家重点实验室信息正在收集中，请访问<a href="https://www.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学官网</a>“科学研究”栏目获取最新信息。
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
import imgChassisBionics from '../assets/imgs/academic/吉林大学汽车底盘集成与仿生全国重点实验室.png';
import imgSupramolecular from '../assets/imgs/academic/超分子结构与材料.png';
import imgInorganicSynth from '../assets/imgs/academic/无机合成与制备化学.png';
import imgIntegratedOpto from '../assets/imgs/academic/集成光电子.png';
import imgHighPressure from '../assets/imgs/academic/高压与超硬材料国家重点实验室.png';
import imgDeepExploration from '../assets/imgs/academic/深部探测与成像全国重点实验室.png';

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
    name: '汽车底盘集成与仿生全国重点实验室',
    description: '围绕汽车底盘系统集成、智能化及仿生技术等领域开展前沿研究与技术攻关。',
    researchAreas: ['汽车动力学与控制', '智能底盘技术', '车辆仿生学', '轻量化材料与结构'],
    imageUrl: imgChassisBionics,
  },
  {
    name: '超分子结构与材料全国重点实验室',
    description: '专注于超分子化学、功能材料的设计、合成与应用研究。',
    researchAreas: ['超分子组装与识别', '功能超分子材料', '生物超分子体系', '理论计算化学'],
     imageUrl: imgSupramolecular,
  },
  {
    name: '无机合成与制备化学全国重点实验室',
    description: '致力于无机功能材料、纳米材料的合成方法学及应用基础研究。',
    imageUrl: imgInorganicSynth,
  },
   {
    name: '高压与超硬材料全国重点实验室',
    description: '研究物质在高压条件下的物理化学性质及超硬材料的合成与应用。',
     imageUrl: imgHighPressure,
  },
  {
    name: '集成光电子全国重点实验室',
    description: '主要从事光电子集成器件、光通信、光传感及相关材料的研究。',
    imageUrl: imgIntegratedOpto,
  },
   {
    name: '深部探测与成像全国重点实验室',
    description: '开展地球深部结构、资源探测及相关成像技术的理论与方法研究。',
    imageUrl: imgDeepExploration,
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
  /* 修改基础字体栈，影响所有未单独设置字体的文本 */
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
