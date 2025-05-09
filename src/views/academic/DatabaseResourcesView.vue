<template>
  <div class="database-resources-view">
    <header class="header">
      <h1>吉林大学 - 学术数据库资源</h1>
      <button @click="goBack" class="back-button">返回学术资源</button>
    </header>
    <main class="main-content">
      <p class="intro-text">
        吉林大学图书馆为全校师生提供了丰富多样的国内外学术数据库资源，涵盖各个学科领域，助力教学与科研活动。以下为部分主要数据库列表，更多详细信息及访问入口请参考<a href="http://lib.jlu.edu.cn/portal/database2/default.aspx" target="_blank" rel="noopener noreferrer">吉林大学图书馆数据库导航页面</a>。
      </p>

      <section class="database-category">
        <h2>中文数据库</h2>
        <ul class="database-list">
          <li v-for="db in chineseDatabases" :key="db.name" class="database-item">
            <div class="db-name-link">
              <a v-if="db.url" :href="db.url" target="_blank" rel="noopener noreferrer">{{ db.name }}</a>
              <span v-else>{{ db.name }}</span>
            </div>
            <p class="db-description">{{ db.description }}</p>
          </li>
        </ul>
      </section>

      <section class="database-category">
        <h2>外文数据库</h2>
        <ul class="database-list">
          <li v-for="db in foreignDatabases" :key="db.name" class="database-item">
             <div class="db-name-link">
              <a v-if="db.url" :href="db.url" target="_blank" rel="noopener noreferrer">{{ db.name }}</a>
              <span v-else>{{ db.name }}</span>
            </div>
            <p class="db-description">{{ db.description }}</p>
          </li>
        </ul>
      </section>

       <section class="database-category">
        <h2>其他资源与工具</h2>
        <ul class="database-list">
          <li v-for="db in otherResources" :key="db.name" class="database-item">
             <div class="db-name-link">
              <a v-if="db.url" :href="db.url" target="_blank" rel="noopener noreferrer">{{ db.name }}</a>
              <span v-else>{{ db.name }}</span>
            </div>
            <p class="db-description">{{ db.description }}</p>
          </li>
        </ul>
      </section>

      <div class="access-notes">
        <h3>访问提示：</h3>
        <ul>
          <li>大部分数据库资源需在校园网IP范围内访问。</li>
          <li>校外访问通常需要通过学校VPN服务，具体请查阅图书馆相关指南。</li>
          <li>部分数据库可能需要特定的阅读器或插件。</li>
          <li>最新最全的数据库列表及访问方式，请以<a href="http://lib.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学图书馆官网</a>为准。</li>
        </ul>
      </div>
    </main>
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} 吉林大学介绍网站小组. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface DatabaseEntry {
  name: string;
  description: string;
  url?: string; // 可选的直接访问链接
}

const chineseDatabases = ref<DatabaseEntry[]>([
  { name: '中国知网 (CNKI)', description: '包含期刊、博硕士论文、会议、报纸、年鉴、工具书等综合性大型中文数据库。', url: 'http://www.cnki.net/' },
  { name: '万方数据知识服务平台', description: '提供学术期刊、学位论文、会议论文、科技报告、专利、标准等资源。', url: 'http://www.wanfangdata.com.cn/' },
  { name: '维普中文期刊服务平台', description: '收录大量中文学术期刊全文。', url: 'http://www.cqvip.com/' },
  { name: '吉林大学学位论文全文数据库', description: '收录本校博硕士学位论文，校园网访问。' },
  { name: '可知电子图书数据库', description: '提供大量中文电子图书。' },
  { name: '文泉学堂知识库', description: '清华大学出版社的数字图书馆，提供电子图书和教学资源。' },
  { name: '中华经典古籍库', description: '收录中国历代经典古籍文献。' },
  { name: 'CSMAR中国经济金融研究数据库', description: '面向经济、金融、管理等学科的实证研究数据。' },
  { name: '中国生物医学文献服务系统 (SinoMed)', description: '中国医学科学院医学信息研究所开发的生物医学文献数据库。' },
  { name: '智慧芽全球专利数据库 (PatSnap)', description: '提供全球专利检索、分析与管理服务。' },
]);

const foreignDatabases = ref<DatabaseEntry[]>([
  { name: 'Web of Science (WOS)', description: '国际权威的引文数据库，包括SCIE, SSCI, A&HCI, ESCI等。', url: 'http://www.webofknowledge.com/' },
  { name: 'Scopus', description: 'Elsevier公司推出的全球最大的文摘和引文数据库之一。', url: 'https://www.scopus.com/' },
  { name: 'Elsevier ScienceDirect', description: 'Elsevier出版社的期刊全文和电子图书平台。', url: 'https://www.sciencedirect.com/' },
  { name: 'SpringerLink', description: 'Springer Nature出版集团的期刊、图书、会议录等在线资源。', url: 'https://link.springer.com/' },
  { name: 'IEEE Xplore (IEL)', description: 'IEEE和IET出版的电子工程、计算机科学等领域的核心文献库。', url: 'https://ieeexplore.ieee.org/' },
  { name: 'EBSCOhost', description: '提供多个学科领域的学术期刊全文和文摘数据库，如ASC, BSC等。' },
  { name: 'ProQuest Central / ProQuest Ebook Central', description: '综合性数据库平台，提供期刊、报纸、学位论文、电子书等。' },
  { name: 'ACS Publications (美国化学会)', description: '美国化学会出版的高影响力化学领域期刊。', url: 'https://pubs.acs.org/' },
  { name: 'Wiley Online Library', description: 'Wiley出版社的学术期刊、图书和参考工具书。', url: 'https://onlinelibrary.wiley.com/' },
  { name: 'HeinOnline', description: '法律史、国际法等领域的权威文献数据库。' },
  { name: 'JoVE (Journal of Visualized Experiments)', description: '以视频形式展示科研实验过程和结果的期刊。' },
]);

const otherResources = ref<DatabaseEntry[]>([
    { name: 'EndNote文献管理软件', description: '高效管理文献、辅助论文写作的工具。' },
    { name: 'SciVal科研管理分析平台', description: '基于Scopus数据，提供科研绩效分析和战略决策支持。' },
    { name: '吉林大学图书馆数据库导航', description: '查看所有已购数据库的官方入口和详细说明。', url: 'http://lib.jlu.edu.cn/portal/database2/default.aspx' },
]);

const goBack = () => {
  // 假设您的 AcademicResourcesView 路由名称是 'academic-resources' 或路径是 '/academicresources'
  router.push({ path: '/academicresources' });
};

</script>

<style scoped>
.database-resources-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
  color: #333;
  background-color: #f4f7f6;
}

.header {
  background-color: #003366; /* 与 AcademicResourcesView 保持一致或略作区分 */
  color: white;
  padding: 20px 40px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  flex-shrink: 0;
}

.header h1 {
  margin: 0;
  font-size: 2em; /* 可调整 */
  font-weight: 600;
}

.back-button {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.2s ease;
}

.back-button:hover {
  background-color: #5a6268 ; /* 示例悬停颜色 */
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
  background-color: #e9f3ff; /* 淡蓝色背景 */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  text-align: left;
}
.intro-text a {
  color: #005A9C;
  font-weight: bold;
}

.database-category {
  margin-bottom: 35px;
  background-color: #fff;
  padding: 20px 25px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.07);
}

.database-category h2 {
  font-size: 1.7em;
  color: #003A70;
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #005A9C; /* 强调标题下划线 */
}

.database-list {
  list-style-type: none;
  padding-left: 0;
}

.database-item {
  padding: 12px 0;
  border-bottom: 1px solid #eef2f5; /* 更淡的分隔线 */
}
.database-item:last-child {
  border-bottom: none;
}

.db-name-link {
  font-size: 1.15em;
  font-weight: 600;
  margin-bottom: 5px;
}
.db-name-link a {
  color: #005A9C;
  text-decoration: none;
}
.db-name-link a:hover {
  text-decoration: underline;
  color: #003D6B;
}

.db-description {
  font-size: 0.95em;
  color: #555e68;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 15px; /* 描述略微缩进 */
}

.access-notes {
  margin-top: 30px;
  padding: 20px;
  background-color: #fff3cd; /* 温馨提示背景色 */
  border-left: 5px solid #ffeeba;
  border-radius: 5px;
  color: #856404;
}
.access-notes h3 {
  margin-top: 0;
  font-size: 1.2em;
  color: #664d03;
}
.access-notes ul {
  padding-left: 20px;
  margin-bottom: 0;
}
.access-notes li {
  margin-bottom: 8px;
  font-size: 0.95em;
}
.access-notes a {
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
  .header {
    padding: 15px 20px;
  }
  .header h1 {
    font-size: 1.6em;
  }
  .back-button {
    padding: 6px 12px;
    font-size: 0.8em;
    left: 15px;
  }
  .main-content {
    padding: 20px;
  }
  .database-category {
    padding: 15px 20px;
  }
  .database-category h2 {
    font-size: 1.5em;
  }
  .db-name-link {
    font-size: 1.1em;
  }
  .db-description {
    font-size: 0.9em;
    padding-left: 10px;
  }
}
</style>
