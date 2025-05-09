<template>
  <div class="achievements-view">
    <header class="header">
      <h1>吉林大学 - 研究成果与出版物</h1>
      <button @click="goBack" class="back-button">返回学术资源</button>
    </header>
    <main class="main-content">
      <p class="intro-text">
        吉林大学师生在各个学科领域积极开展科学研究，产出了一系列具有国内外影响力的研究成果，包括高水平学术论文、专著、专利，并获得了众多重要科研奖项。本页面旨在概述相关信息，更多详情请访问学校相关部门网站或数据库。
      </p>

      <section id="representative-achievements" class="content-section">
        <h2 class="section-title">代表性科研成果</h2>
        <p>吉林大学在众多学科领域取得了显著的研究进展和突破。由于科研成果更新迅速且涉及面广，难以在此一一列举。代表性成果通常体现在：</p>
        <ul>
          <li>在国际顶级期刊（如 Nature, Science, Cell 及其子刊）和各学科领域顶尖期刊上发表的高水平论文。</li>
          <li>解决国家重大需求和关键核心技术问题所取得的突破性进展（例如在新材料、汽车工程、地球探测、生物医药、考古发现等领域）。</li>
          <li>产生重要社会影响或推动行业进步的应用研究成果和转化专利。</li>
          <li>在人文社会科学领域提出的重要理论创新、完成的重大研究项目或具有里程碑意义的学术发现。</li>
        </ul>
        <p><strong>获取更多信息：</strong></p>
        <ul>
          <li>关注 <a href="https://www.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学官网</a> “新闻中心”、“学术动态”栏目。</li>
          <li>访问 <a href="https://kjc.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学科学技术处</a> (自然科学与工程技术)。</li>
          <li>访问 <a href="https://skc.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学社会科学处</a> (人文社会科学)。</li>
          <li>浏览各学院、重点实验室、研究中心的网站。</li>
        </ul>
        <div class="example-highlight">
          <strong>示例领域：</strong> 化学、材料科学、汽车工程、地球科学、考古学、法学、马克思主义理论等领域均有突出成果。
        </div>
      </section>

      <section id="research-awards" class="content-section">
        <h2 class="section-title">科研获奖情况</h2>
        <p>吉林大学的科研成果获得了多项国家级和省部级奖励的肯定，彰显了学校的科研实力和贡献。主要奖项类别包括：</p>
        <ul>
          <li>国家最高科学技术奖、国家自然科学奖、国家技术发明奖、国家科学技术进步奖 (国家三大奖)。</li>
          <li>高等学校科学研究优秀成果奖（人文社会科学 / 科学技术）。</li>
          <li>吉林省科学技术奖、吉林省社会科学优秀成果奖等省级奖项。</li>
          <li>其他部委、行业协会及重要学术组织颁发的奖项。</li>
        </ul>
         <p><strong>获取获奖信息：</strong></p>
        <ul>
           <li>同样可关注学校官网新闻、科技处/社科处公告。</li>
           <li>重要奖项通常会在学校或相关部门的年度报告、发展概况中提及。</li>
        </ul>
        <div class="example-highlight">
          <strong>示例：</strong> 吉林大学历史上曾多次获得国家科学技术奖励，并在教育部、吉林省的评奖中屡获佳绩。（具体获奖项目请查阅官方发布）
        </div>
      </section>

      <section id="academic-publications" class="content-section">
        <h2 class="section-title">学术出版</h2>
        <p>学术出版是科研成果传播和积累的重要形式。吉林大学师生积极撰写和出版高质量的学术专著、编著、教材及研究报告。</p>
        <ul>
          <li><strong>学术专著与编著：</strong> 涵盖各学科领域，由国内外知名出版社（包括吉林大学出版社）出版，系统展示研究成果和学术见解。</li>
          <li><strong>教材建设：</strong> 编写出版了一批优秀的本科生和研究生教材，部分入选国家级规划教材。</li>
          <li><strong>研究报告：</strong> 针对特定问题（如政策咨询、行业发展、考古发掘等）发布的研究报告和蓝皮书。</li>
          <li><strong>吉林大学出版社：</strong> 作为学校的官方出版机构，出版了大量本校师生的优秀学术著作和教材。(<a href="http://press.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">访问吉大出版社官网</a>)</li>
        </ul>
         <p><strong>查找出版物：</strong></p>
        <ul>
           <li>可通过<a href="http://lib.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学图书馆馆藏目录 (OPAC)</a>检索本校教师的著作。</li>
           <li>访问<a href="http://press.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学出版社</a>网站浏览其出版物。</li>
           <li>利用各大图书销售平台（如京东、当当、亚马逊）或学术图书数据库（如读秀、超星）进行检索。</li>
        </ul>
      </section>
    </main>
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} 吉林大学介绍网站小组. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  // 返回到学术资源主页面
  router.push({ name: 'academicresources' });
};
</script>

<style scoped>
.achievements-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
  background-color: #f8f9fa;
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
  background-color: #6c757d; /* 灰色 */
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.2s ease;
}

.back-button:hover {
  background-color: #5a6268; /* 深灰色 */
}

.main-content {
  flex-grow: 1;
  padding: 25px 40px;
  overflow-y: auto;
}

.intro-text {
  font-size: 1.1em;
  line-height: 1.7;
  margin-bottom: 35px; /* 加大与下面内容的间距 */
  color: #343a40;
  background-color: #e9ecef; /* 浅灰色背景 */
  padding: 20px;
  border-radius: 8px;
  border-left: 5px solid #adb5bd; /* 左侧边框 */
}

.content-section {
  background-color: #fff;
  padding: 25px 30px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}
.content-section:last-of-type {
    margin-bottom: 0;
}


.section-title {
  font-size: 1.8em;
  color: #004A80; /* 标题颜色 */
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #005A9C; /* 标题下划线 */
}

.content-section p {
  font-size: 1em;
  line-height: 1.75;
  color: #495057;
  margin-bottom: 15px;
}

.content-section ul {
  list-style-type: disc; /* 或 square, circle */
  padding-left: 25px;
  margin-bottom: 20px;
  margin-top: -5px; /* 微调列表与上方段落间距 */
}

.content-section li {
  margin-bottom: 10px;
  font-size: 1em;
  line-height: 1.7;
  color: #495057;
}

.content-section a {
  color: #005A9C;
  text-decoration: none;
  font-weight: 500;
}
.content-section a:hover {
  text-decoration: underline;
}

.content-section strong { /* 用于 "获取更多信息：" 等小标题 */
    color: #343a40;
    font-weight: 600;
}

.example-highlight { /* 示例高亮区域 */
  background-color: #f8f9fa;
  border: 1px dashed #dee2e6;
  padding: 15px;
  margin-top: 15px;
  border-radius: 5px;
  font-size: 0.95em;
  color: #495057;
}
.example-highlight strong {
    color: #004A80;
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
  .content-section { padding: 20px; }
  .section-title { font-size: 1.5em; }
  .content-section p, .content-section li { font-size: 0.95em; }
}
</style>
