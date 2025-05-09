<template>
  <div class="academic-resources-view">
    <header class="header">
      <h1>吉林大学 - 学术资源</h1>
    </header>

    <main class="main-content">
      <section id="library" class="resource-section">
        <h2>图书馆资源</h2>
        <p>吉林大学图书馆拥有丰富的馆藏资源，包括各类图书、期刊、电子数据库等，为全校师生的教学和科研活动提供有力支持。</p>
        <ul>
          <li><a href="http://lib.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学图书馆官网</a></li>
          <li>
            <a href="https://ilearntec.jlu.edu.cn/courselibrary-web/index" target="_blank" rel="noopener noreferrer">
              电子资源导航（学在吉大）
            </a>
          </li>
          <li><a href="#" @click.prevent="navigateToLibraryView">七大图书馆</a></li>
        </ul>
      </section>

      <section id="databases" class="resource-section">
        <h2>学术数据库</h2>
        <p>学校购买了众多国内外知名的学术数据库，涵盖各个学科领域，方便师生查阅最新研究成果与文献资料。</p>
        <ul>
          <li>CNKI (中国知网)</li>
          <li>Web of Science</li>
          <li>Elsevier ScienceDirect</li>
          <li>SpringerLink</li>
          <li>IEEE Xplore</li>
          <li><a href="#" @click.prevent="navigateToDatabaseResources">更多数据库...</a></li>
        </ul>
        <p>通常可以通过校园网或VPN访问这些数据库。</p>
      </section>

      <section id="journals" class="resource-section">
        <h2>学术期刊</h2>
        <p>吉林大学主办和参与出版多种高质量学术期刊，反映了学校在各学科领域的最新研究进展，并积极推动学术成果的传播与交流。</p>
        <ul>
          <li>《吉林大学社会科学学报》</li>
          <li>《吉林大学学报（理学版）》</li>
          <li>《吉林大学学报（工学版）》</li>
          <li>《吉林大学学报（医学版）》</li>
          <li><a href="#" @click.prevent="navigateToJournalResources">查看所有校办期刊...</a></li>
        </ul>
      </section>

      <section id="research-platforms" class="resource-section">
        <h2>科研平台</h2>
        <p>学校建设了多个国家级和省部级重点实验室、工程研究中心以及人文社科重点研究基地，为高水平科学研究提供重要平台。点击下方了解更多：</p>
        <div class="platform-grid">
          <div class="platform-item clickable-platform" @click="navigateToNationalKeyLabs">
            <h3>国家重点实验室</h3>
            <p>例如：汽车底盘集成与仿生全国重点实验室、超分子结构与材料全国重点实验室等。</p>
            <span class="details-link">查看详情 &raquo;</span>
          </div>
          <div class="platform-item clickable-platform" @click="navigateToMoEKeyLabs">
            <h3>教育部重点实验室/工程研究中心</h3>
            <p>涵盖多个学科领域，支持前沿科学探索与技术创新。</p>
             <span class="details-link">查看详情 &raquo;</span>
          </div>
          <div class="platform-item clickable-platform" @click="navigateToProvincialMinisterialBases">
            <h3>省部级科研基地</h3>
            <p>包括各类工程中心、人文社科基地等，服务地方与国家发展需求。</p>
             <span class="details-link">查看详情 &raquo;</span>
          </div>
        </div>
      </section>

      <section id="lectures-seminars" class="resource-section">
        <h2>学术讲座与研讨会</h2>
        <p>学校及各院系定期或不定期举办各类学术讲座、前沿论坛和研讨会，邀请国内外知名专家学者进行分享与交流，营造浓厚的学术氛围。</p>
        <button @click="viewUpcomingEvents('lectures')">查看近期讲座与研讨会</button>
      </section>

      <section id="research-achievements" class="resource-section">
        <h2>研究成果与出版物</h2>
        <p>吉林大学师生在科学研究方面屡创佳绩，产出一大批具有国内外影响力的研究成果，包括高水平学术论文、专著、专利及科研奖项。</p>
        <button @click="viewResearchProjects('achievements')">浏览更多成果</button>
      </section>

      <section id="academic-exchange" class="resource-section">
        <h2>学术交流与合作</h2>
        <p>学校积极开展国内外学术交流与合作，与世界多所知名大学和研究机构建立了广泛的合作关系，定期举办学术会议，邀请知名学者来访，拓展师生学术视野。</p>
        <button @click="navigateToAcademicExchange">了解国际合作项目</button>
      </section>

      <section id="innovation-support" class="resource-section">
        <h2>创新创业支持</h2>
        <p>学校高度重视培养学生的创新精神和创业能力，建立了完善的创新创业教育体系和实践平台，提供包括创业课程、导师指导、项目孵化、资金支持等全方位服务。</p>
        <ul>
          <li>大学生创新创业训练计划</li>
          <li>创业孵化基地与众创空间</li>
          <li>各类创新创业竞赛与活动</li>
        </ul>
         <a href="https://cxcyjyxy.jlu.edu.cn/" target="_blank" rel="noopener noreferrer" class="button-link">
           访问创新创业中心
         </a>
      </section>

      <section id="graduate-studies" class="resource-section">
        <h2>学位与研究生教育</h2>
        <p>吉林大学拥有完整的研究生培养体系，涵盖硕士、博士多个层次，涉及广泛的学科领域。学校致力于培养具有国际视野和创新能力的高层次人才。</p>
        <ul>
          <li>各学院研究生招生简章</li>
          <li>博士后研究人员招收信息</li>
          <li>研究生奖助学金体系</li>
        </ul>
        <a href="https://yjsy.jlu.edu.cn/" target="_blank" rel="noopener noreferrer" class="button-link">
           访问研究生院
         </a>
      </section>

      <section id="academic-ethics" class="resource-section">
        <h2>学术道德与规范</h2>
        <p>学校坚决维护学术诚信，加强学术道德建设，制定并严格执行科研行为准则和学术规范，对学术不端行为持零容忍态度，营造风清气正的学术环境。</p>
         <a href="https://pro.jlu.edu.cn/__local/1/94/3D/345297A366DA05C1904339963C8_E6D7CAE9_217BF.pdf" target="_blank" rel="noopener noreferrer" class="button-link">
           查看学术规范政策 (PDF)
         </a>
      </section>

      <section id="it-services" class="resource-section">
        <h2>计算资源与IT服务</h2>
        <p>学校信息与网络中心为全校师生提供全面的网络服务、高性能计算资源、正版软件授权及各类信息化应用支持，保障教学科研活动的顺利进行。</p>
        <ul>
          <li>校园网络服务 (有线/无线/VPN)</li>
          <li>信息化公共服务平台</li>
          <li>高性能计算中心</li>
          <li>正版软件资源</li>
        </ul>
         <a href="https://nic.jlu.edu.cn/" target="_blank" rel="noopener noreferrer" class="button-link">
           访问信息与网络中心
         </a>
      </section>

      <section id="continuing-education" class="resource-section">
        <h2>专业培训与继续教育</h2>
        <p>吉林大学继续教育学院和相关培训中心面向社会提供多样化的专业技能培训、职业资格认证、管理人员研修及学历提升等项目，服务于终身学习和社会发展需求。</p>
        <button @click="navigateToContinuingEducation">了解培训项目</button>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; {{ currentYear }} 吉林大学介绍网站小组. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const currentYear = ref(new Date().getFullYear());

// navigateToResource 函数已被移除，因为它不再被使用

const navigateToLibraryView = () => {
  router.push({ name: 'library' });
};

const navigateToDatabaseResources = () => {
  router.push({ name: 'database-resources' });
};

const navigateToJournalResources = () => {
  router.push({ name: 'journal-resources' });
};

const navigateToNationalKeyLabs = () => {
  router.push({ name: 'national-key-labs' });
};

const navigateToMoEKeyLabs = () => {
  router.push({ name: 'moe-key-labs' });
};

const navigateToProvincialMinisterialBases = () => {
  router.push({ name: 'provincial-ministerial-bases' });
};

const viewResearchProjects = (type: string) => {
  console.log(`查看研究成果与出版物 (${type})`);
  router.push({ name: 'research-achievements' });
};

const viewUpcomingEvents = (eventType: string) => {
  console.log(`查看近期学术活动 (${eventType})`);
  if (eventType === 'lectures') {
    router.push({ name: 'upcoming-events' });
  } else if (eventType === 'exchange') {
     navigateToAcademicExchange();
  } else {
    alert(`查看近期学术活动 (${eventType})`);
  }
};

const navigateToAcademicExchange = () => {
    router.push({ name: 'academic-exchange'});
};

const navigateToContinuingEducation = () => {
    router.push({ name: 'continuing-education'});
};


onMounted(() => {
  console.log('AcademicResourcesView.vue 组件已挂载');
});
</script>

<style scoped>
/* 所有样式保持不变 */
.academic-resources-view { display: flex; flex-direction: column; min-height: 100vh; width: 100%; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; color: #333; background-color: #f4f7f6; }
.header { background-color: #003366; color: white; padding: 20px 40px; text-align: center; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); flex-shrink: 0; }
.header h1 { margin: 0; font-size: 2.2em; font-weight: 600; }
.main-content { flex-grow: 1; padding: 25px 40px; overflow-y: auto; }
.resource-section { background-color: white; padding-top: 0; padding-left: 0; padding-right: 0; padding-bottom: 25px; margin-bottom: 25px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.07); scroll-margin-top: 100px; overflow: visible; }
.resource-section:last-child { margin-bottom: 0; }
.resource-section h2 { font-size: 1.6em; color: #003A70; background-color: #EBF3FB; margin: 0 0 25px 0; padding: 12px 30px; border-top-left-radius: 8px; border-top-right-radius: 8px; border-bottom: 1px solid #DDE2E5; font-weight: 600; }
.resource-section h2 + p,
.resource-section h2 + ul,
.resource-section h2 + .platform-grid,
.resource-section h2 + button,
.resource-section h2 + a.button-link {
  margin-top: 0;
  padding-left: 30px;
  padding-right: 30px;
}
.resource-section > p:not(h2 + p),
.resource-section > ul:not(h2 + ul),
.resource-section > .platform-grid:not(h2 + .platform-grid),
.resource-section > button:not(h2 + button),
.resource-section > a.button-link:not(h2 + a.button-link) {
  padding-left: 30px;
  padding-right: 30px;
}

.resource-section > button,
.resource-section > a.button-link {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 15px;
}

.resource-section h2 + button,
.resource-section h2 + a.button-link {
     margin-left: 30px;
}

.resource-section p { line-height: 1.65; margin-bottom: 15px; color: #454F5B; }
.resource-section ul { list-style-type: disc; margin-left: 20px; padding-left: 10px; margin-bottom: 15px; }
.resource-section ul li { margin-bottom: 10px; line-height: 1.6; color: #454F5B; }
.resource-section ul li a { color: #005A9C; text-decoration: none; transition: color 0.2s ease, text-decoration 0.2s ease; font-weight: 500; }
.resource-section ul li a:hover, .resource-section ul li a:focus { color: #003D6B; text-decoration: underline; }
.platform-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-top: 10px; margin-bottom: 15px; }
.platform-item { background-color: #F0F4F8; padding: 20px; border-radius: 6px; border-left: 4px solid #005A9C; transition: box-shadow 0.3s ease; display: flex; flex-direction: column; justify-content: space-between; }
.platform-item h3 { font-size: 1.25em; color: #004A80; margin-top: 0; margin-bottom: 10px; font-weight: 600; }
.platform-item.clickable-platform { cursor: pointer; transition: transform 0.2s ease, box-shadow 0.3s ease; }
.platform-item.clickable-platform:hover { transform: translateY(-3px); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); }
.details-link { display: block; margin-top: auto; padding-top: 10px; color: #005A9C; font-weight: bold; font-size: 0.9em; text-align: right; }

button, a.button-link {
  display: inline-block;
  width: auto;
  background-color: #005A9C;
  color: white !important;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.95em;
  font-weight: 500;
  text-align: center;
  text-decoration: none !important;
  transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  margin-right: 10px;
}

button:hover, a.button-link:hover {
  background-color: #006BC6;
  transform: translateY(-1px);
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.footer { background-color: #333; color: #ccc; text-align: center; padding: 15px 40px; font-size: 0.9em; flex-shrink: 0; }

@media (max-width: 768px) {
  .header { padding: 15px 20px; }
  .header h1 { font-size: 1.8em; }
  .main-content { padding: 20px; }
  .resource-section { padding-bottom: 20px; margin-bottom: 20px; scroll-margin-top: 80px; }
  .resource-section h2 { font-size: 1.4em; padding: 10px 20px; margin-bottom: 20px; }
  .resource-section h2 + p, .resource-section h2 + ul, .resource-section h2 + .platform-grid, .resource-section h2 + button, .resource-section h2 + a.button-link { padding-left: 20px; padding-right: 20px; }
  .resource-section > p:not(h2 + p), .resource-section > ul:not(h2 + ul), .resource-section > .platform-grid:not(h2 + .platform-grid), .resource-section > button:not(h2 + button), .resource-section > a.button-link:not(h2 + a.button-link) { padding-left: 20px; padding-right: 20px; }
  .resource-section > button, .resource-section > a.button-link { margin-left: 20px; margin-right: 20px; display: block; width: calc(100% - 40px); text-align: center;}
  .resource-section h2 + button, .resource-section h2 + a.button-link { margin-left: 20px; display: block; width: calc(100% - 40px); text-align: center;}
  .resource-section ul { margin-left: 10px; padding-left: 10px; }
  .platform-grid { grid-template-columns: 1fr; gap: 15px; }
}

</style>
