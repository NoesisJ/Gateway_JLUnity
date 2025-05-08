<template>
  <div class="journal-resources-view">
    <header class="header">
      <h1>吉林大学 - 学术期刊资源</h1>
      <button @click="goBack" class="back-button">返回学术资源</button>
    </header>
    <main class="main-content">
      <p class="intro-text">
        吉林大学主办和参与出版多种高质量学术期刊，这些期刊是学校科研成果的重要展示平台，也为国内外学术交流做出了积极贡献。以下为部分主要学术期刊列表。更多详情请访问各期刊官网或通过相关学术数据库查阅。
      </p>

      <section class="journal-category">
        <h2 class="category-title-styled">人文社会科学类</h2>
        <ul class="journal-list">
          <li v-for="journal in humanitiesJournals" :key="journal.name" class="journal-item">
            <div class="journal-name-link">
              <a v-if="journal.url" :href="journal.url" target="_blank" rel="noopener noreferrer">{{ journal.name }}</a>
              <span v-else>{{ journal.name }}</span>
              <span v-if="journal.issn" class="issn-info"> (ISSN: {{ journal.issn }})</span>
            </div>
            <p v-if="journal.description" class="journal-description">{{ journal.description }}</p>
          </li>
        </ul>
      </section>

      <section class="journal-category">
        <h2 class="category-title-styled">自然科学与工程技术类</h2>
        <ul class="journal-list">
          <li v-for="journal in scienceJournals" :key="journal.name" class="journal-item">
            <div class="journal-name-link">
              <a v-if="journal.url" :href="journal.url" target="_blank" rel="noopener noreferrer">{{ journal.name }}</a>
              <span v-else>{{ journal.name }}</span>
              <span v-if="journal.issn" class="issn-info"> (ISSN: {{ journal.issn }})</span>
            </div>
            <p v-if="journal.description" class="journal-description">{{ journal.description }}</p>
          </li>
        </ul>
      </section>

      <section class="journal-category">
        <h2 class="category-title-styled">医学类</h2>
        <ul class="journal-list">
          <li v-for="journal in medicalJournals" :key="journal.name" class="journal-item">
            <div class="journal-name-link">
              <a v-if="journal.url" :href="journal.url" target="_blank" rel="noopener noreferrer">{{ journal.name }}</a>
              <span v-else>{{ journal.name }}</span>
              <span v-if="journal.issn" class="issn-info"> (ISSN: {{ journal.issn }})</span>
            </div>
            <p v-if="journal.description" class="journal-description">{{ journal.description }}</p>
          </li>
        </ul>
      </section>

      <section class="journal-category">
        <h2 class="category-title-styled">其他特色期刊</h2>
        <ul class="journal-list">
          <li v-for="journal in otherJournals" :key="journal.name" class="journal-item">
            <div class="journal-name-link">
              <a v-if="journal.url" :href="journal.url" target="_blank" rel="noopener noreferrer">{{ journal.name }}</a>
              <span v-else>{{ journal.name }}</span>
              <span v-if="journal.issn" class="issn-info"> (ISSN: {{ journal.issn }})</span>
            </div>
            <p v-if="journal.description" class="journal-description">{{ journal.description }}</p>
          </li>
        </ul>
      </section>

      <div class="access-notes">
        <h3>查阅提示：</h3>
        <ul>
          <li>多数期刊可通过中国知网 (CNKI)、万方数据等大型学术数据库平台进行检索和阅读。</li>
          <li>部分期刊可能提供独立的官方网站，包含投稿指南、过刊浏览等服务。</li>
          <li>具体订阅和访问权限请参考吉林大学图书馆的相关说明。</li>
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

interface JournalEntry {
  name: string;
  issn?: string;
  description?: string;
  url?: string; // 期刊官方网站或主要获取途径
}

const humanitiesJournals = ref<JournalEntry[]>([
  { name: '《吉林大学社会科学学报》', issn: '1000-2529', description: '教育部主管、吉林大学主办的综合性人文社会科学类学术期刊。' },
  { name: '《史学集刊》', issn: '0559-8095', description: '历史学专业学术期刊。' },
  { name: '《人口学刊》', issn: '1004-129X', description: '人口学专业学术期刊。' },
  { name: '《现代日本经济》', issn: '1002-3038', description: '专注于日本经济研究的学术期刊。' },
  { name: '《情报科学》', issn: '1002-1965', description: '吉林大学与中国科学技术情报学会主办，图书情报与档案管理类核心期刊。' },
  { name: '《东北亚论坛》', issn: '1003-7411', description: '东北亚问题研究的专业学术期刊。' },
  { name: '《法制与社会发展》', issn: '1006-6128', description: '法学理论、法治建设领域的学术期刊。' },
  { name: '《当代法学》', issn: '1005-7288', description: '法学综合性学术期刊。' },
  { name: '《华夏文化论坛》', description: '吉林大学中国文化研究所主办，CSSCI来源集刊。' },
]);

const scienceJournals = ref<JournalEntry[]>([
  { name: '《吉林大学学报（理学版）》', issn: '1671-5489', description: '原名《吉林大学自然科学学报》，自然科学综合性学术期刊。' },
  { name: '《吉林大学学报（工学版）》', issn: '1671-5497', description: '工程技术领域的综合性学术期刊。' },
  { name: '《吉林大学学报（地球科学版）》', issn: '1671-581X', description: '地球科学领域的专业学术期刊。' },
  { name: '《吉林大学学报（信息科学版）》', issn: '1671-5895', description: '信息科学与技术领域的学术期刊。' },
  { name: '《高等学校化学研究（英文版）》 (Chemical Research in Chinese Universities)', issn: '1005-9040', description: '化学领域的英文学术期刊。' },
  { name: '《仿生工程学报》 (Journal of Bionic Engineering)', issn: '1672-4742', description: '仿生工程领域的国际性英文学术期刊，与施普林格合作出版。' },
]);

const medicalJournals = ref<JournalEntry[]>([
  { name: '《吉林大学学报（医学版）》', issn: '1671-587X', description: '医学综合性学术期刊。' },
  { name: '《中风与神经疾病杂志》', issn: '1007-0478', description: '神经病学及脑血管病领域的专业学术期刊。' },
  { name: '《临床肝胆病杂志》', issn: '1001-5256', description: '肝胆胰疾病临床与基础研究的专业期刊。' },
  { name: '《中国实验诊断学》', issn: '1007-4287' },
  { name: '《国外医学·老年医学分册》', issn: '1001-2200' },
]);

const otherJournals = ref<JournalEntry[]>([
  { name: '《中国邮电高校学报（英文版）》', issn: '1005-8885' },
  { name: '《中国兽医学报》', issn: '0258-7032', description: '由吉林大学和中国畜牧兽医学会共同主办。' },
]);


const goBack = () => {
  router.push({ name: 'academicresources' }); // 确保name与您的路由配置一致
};

</script>

<style scoped>
.journal-resources-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
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
  background-color: #5a6268 ;
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
  text-align: left;
}

.journal-category {
  margin-bottom: 35px;
  background-color: #fff;
  padding: 20px 25px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.07);
}

.category-title-styled { /* 用于期刊分类标题的样式 */
  background-color: #d4eaf7; /* 一个柔和的蓝色调，区别于数据库页面的标题背景 */
  color: #003A70;
  padding: 10px 15px;
  border-radius: 6px;
  margin: -20px -25px 20px -25px; /* 调整使背景延伸并与列表保持间距 */
  font-size: 1.6em; /* 调整字号 */
  font-weight: 600;
  border-bottom: 1px solid #b0cde0; /* 标题下的分隔线 */
}


.journal-list {
  list-style-type: none;
  padding-left: 0;
}

.journal-item {
  padding: 12px 0;
  border-bottom: 1px solid #eef2f5;
}
.journal-item:last-child {
  border-bottom: none;
}

.journal-name-link {
  font-size: 1.1em; /* 期刊名称字号 */
  font-weight: 600;
  margin-bottom: 4px;
}
.journal-name-link a {
  color: #005A9C;
  text-decoration: none;
}
.journal-name-link a:hover {
  text-decoration: underline;
  color: #003D6B;
}
.issn-info {
  font-size: 0.85em;
  color: #6c757d;
  margin-left: 8px;
  font-weight: normal;
}

.journal-description {
  font-size: 0.9em;
  color: #555e68;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 10px; /* 描述略微缩进 */
}

.access-notes {
  margin-top: 30px;
  padding: 20px;
  background-color: #fff3cd;
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
  .journal-category {
    padding: 15px 20px;
  }
  .category-title-styled {
    font-size: 1.4em;
    padding: 8px 12px;
    margin: -15px -20px 15px -20px;
  }
  .journal-name-link {
    font-size: 1.05em;
  }
  .journal-description {
    font-size: 0.85em;
    padding-left: 5px;
  }
}
</style>
