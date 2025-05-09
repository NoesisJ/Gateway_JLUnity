<template>
  <div class="research-platform-view">
    <header class="header">
      <h1>吉林大学 - 省部级科研基地</h1>
       <button @click="goBack" class="back-button">返回学术资源</button>
    </header>
    <main class="main-content">
      <p class="intro-text">
        省部级科研基地是区域和行业科技创新的重要支撑力量。吉林大学积极建设各类省级重点实验室、工程技术研究中心、人文社科重点研究基地等，服务地方经济社会发展和特定行业需求。
      </p>
      <p class="intro-text">
        由于省部级科研基地数量众多且涵盖领域广泛，以下为部分代表性示例，更多详细信息请参考<a href="https://www.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学官方网站</a>相关栏目或各学院科研介绍。
      </p>

      <div v-if="bases.length > 0" class="platform-list">
        <div v-for="base in bases" :key="base.name" class="platform-item-card">
          <img v-if="base.imageUrl" :src="base.imageUrl" :alt="base.name" class="platform-image"/>
          <div v-else class="platform-image-placeholder">暂无图片</div>
          <div class="platform-info">
            <h3>{{ base.name }}</h3>
            <p v-if="base.type" class="platform-type"><strong>类型：</strong>{{ base.type }}</p>
            <p class="platform-description">{{ base.description }}</p>
            <p v-if="base.researchAreas && base.researchAreas.length > 0">
              <strong>主要研究方向：</strong>
              <ul>
                <li v-for="area in base.researchAreas" :key="area">{{ area }}</li>
              </ul>
            </p>
             <a v-if="base.url" :href="base.url" target="_blank" rel="noopener noreferrer" class="platform-link">访问平台官网 &raquo;</a>
          </div>
        </div>
      </div>
       <p v-else class="no-data-message" style="margin-top: 20px;">
        省部级科研基地信息正在收集中或敬请查阅吉林大学官网。
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
import imgGinsengLab from '../assets/imgs/academic/吉林省人参科学与技术重点实验室.png';
import imgAutoElecCenter from '../assets/imgs/academic/吉林省汽车电子工程研究中心.png';
import imgNeaCenter from '../assets/imgs/academic/东北亚研究中心.png';


const router = useRouter();

interface BaseEntry {
  name: string;
  type: string;
  description: string;
  researchAreas?: string[];
  imageUrl?: string;
  url?: string;
}

const bases = ref<BaseEntry[]>([
 {
    name: '吉林省人参科学与技术重点实验室',
    type: '吉林省重点实验室',
    description: '依托吉林省特色资源，致力于人参的种植、成分分析、药理作用、精深加工及新产品开发，为吉林省人参产业发展提供科技支撑。',
    researchAreas: ['人参种质资源创新与利用', '人参活性成分与作用机制', '人参精深加工与产品研发', '人参规范化种植技术'],
    imageUrl: imgGinsengLab,
  },
  {
    name: '吉林省汽车电子工程研究中心',
    type: '吉林省工程研究中心',
    description: '结合吉林大学汽车优势和吉林省产业基础，专注于汽车电子技术的研发、工程化和成果转化，服务于区域汽车产业升级。',
    researchAreas: ['智能网联汽车关键技术', '新能源汽车电控系统', '汽车电子芯片与传感器', '车规级软件开发与测试'],
    imageUrl: imgAutoElecCenter,
  },
  {
    name: '东北亚研究中心',
    type: '教育部人文社会科学重点研究基地',
    description: '国内东北亚研究领域的重要智库和学术高地，专注于对东北亚地区的政治、经济、历史、文化、国际关系等进行跨学科研究。',
     researchAreas: ['东北亚国际关系与地区安全', '东北亚经济合作与发展', '东北地区历史与文化', '朝鲜半岛问题研究'],
    imageUrl: imgNeaCenter,
    url: 'http://neas.jlu.edu.cn/'
  }
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
  margin-bottom: 15px;
  color: #454F5B;
  background-color: #e9f3ff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.intro-text:last-of-type {
    margin-bottom: 30px;
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
  height: 180px;
  object-fit: cover;
  background-color: #e0e0e0;
}
.platform-image-placeholder {
  width: 100%;
  height: 180px;
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

.platform-type {
    font-size: 0.9em;
    color: #6c757d;
    margin-bottom: 10px;
    font-style: italic;
}

/* 修改描述文字字体 */
.platform-description {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; /* 应用新的字体栈 */
  font-size: 0.95em;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.platform-info p strong {
    display: block;
    margin-bottom: 5px;
    color: #333;
    font-size: 0.95em;
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
