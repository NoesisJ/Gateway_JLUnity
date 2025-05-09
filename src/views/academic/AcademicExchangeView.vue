<template>
  <div class="exchange-view">
    <header class="header">
      <h1>吉林大学 - 学术交流与合作</h1>
      <button @click="goBack" class="back-button">返回学术资源</button>
    </header>
    <main class="main-content">
      <section class="info-section">
        <h2>概览</h2>
        <p>
          吉林大学高度重视国际化发展战略，积极拓展与世界高水平大学和科研机构的实质性合作，搭建了广泛的国际交流平台。学校致力于提升师生的国际视野、促进多元文化融合、增强学校的国际影响力和竞争力。
        </p>
        <p>
          主要的交流与合作形式包括：学生交换项目、教师互访与讲学、联合培养项目、合作科研、举办/参与国际学术会议等。
        </p>
         <p>
          <strong>主要负责部门：</strong>
          <a href="https://oic.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学国际合作与交流处</a> 是统筹管理全校国际合作与交流事务的核心部门，负责制定国际化战略、拓展合作伙伴关系、管理各类交流项目等。建议访问其官网获取最权威、最全面的信息。
        </p>
      </section>

      <section class="info-section">
        <h2>全球合作伙伴</h2>
        <p>
          学校已与全球数十个国家和地区的众多知名高校、研究机构建立了稳定的合作关系网络。合作伙伴遍布亚洲、欧洲、北美洲、大洋洲等地。
        </p>
         <div class="example-highlight">
          <strong>部分合作区域/类型示例：</strong> 与美国、加拿大、英国、德国、法国、澳大利亚、日本、韩国等国的高水平大学开展了深入合作；积极参与“一带一路”教育行动，拓展与沿线国家高校的合作；与国际学术组织和跨国企业也有广泛联系。 (具体合作院校名录请查询国际合作与交流处网站)
        </div>
      </section>

      <section class="info-section">
        <h2>学生交流项目</h2>
        <p>学校为在校生提供了多样化的海外学习和交流机会，旨在培养具有国际视野的复合型人才。</p>
        <ul>
          <li><strong>校际交换生项目：</strong> 学生可申请赴合作院校进行一学期或一学年的学习，学分互认。</li>
          <li><strong>联合培养项目：</strong> 如“2+2”、“3+1+1”等模式，学生可在国内外两所大学完成学业，可能获得双学位或本硕连读机会。</li>
          <li><strong>短期交流项目：</strong> 寒暑假期间的短期访学、学术营、文化体验项目等。</li>
          <li><strong>国家公派留学项目：</strong> 依托国家留学基金委(CSC)等项目，选派优秀学生赴国外攻读学位或进行联合培养。</li>
        </ul>
         <p>详细项目信息、申请条件及流程请关注国际合作与交流处发布的通知。</p>
      </section>

       <section class="info-section">
        <h2>教师与科研合作</h2>
        <ul>
            <li><strong>教师互访与讲学：</strong> 支持本校教师赴国外合作院校访问、讲学、合作研究，同时邀请海外知名学者来校交流。</li>
            <li><strong>合作科研平台：</strong> 建立了多个国际联合实验室、联合研究中心等平台，共同承担重大科研项目。</li>
            <li><strong>国际学术会议：</strong> 积极主办、承办和参与高水平国际学术会议，促进学术成果的国际交流。</li>
        </ul>
         <p>相关信息通常由国际合作与交流处、科技处、社科处及各学院发布。</p>
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
  router.push({ name: 'academicresources' });
};
</script>

<style scoped>
/* 可以复用 ResearchAchievementsView.vue 的样式结构 */
.exchange-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
  background-color: #f8f9fa;
}

.header { /* 与其他页面保持一致 */
  background-color: #003366;
  color: white;
  padding: 20px 40px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  flex-shrink: 0;
}
.header h1 { margin: 0; font-size: 2em; font-weight: 600; }
.back-button { /* 与其他页面保持一致 */
  position: absolute; top: 50%; left: 20px; transform: translateY(-50%);
  background-color: #6c757d; color: white; border: none;
  padding: 8px 15px; border-radius: 5px; cursor: pointer;
  font-size: 0.9em; transition: background-color 0.2s ease;
}
.back-button:hover { background-color: #5a6268; }

.main-content { flex-grow: 1; padding: 25px 40px; overflow-y: auto; }

.info-section { /* 复用 .content-section 样式 */
  background-color: #fff;
  padding: 25px 30px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}
.info-section:last-of-type { margin-bottom: 0; }

.info-section h2 { /* 复用 .section-title 样式 */
  font-size: 1.8em;
  color: #004A80;
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #005A9C;
}

.info-section p { font-size: 1em; line-height: 1.75; color: #495057; margin-bottom: 15px; }
.info-section ul { list-style-type: disc; padding-left: 25px; margin-bottom: 20px; margin-top: -5px; }
.info-section li { margin-bottom: 10px; font-size: 1em; line-height: 1.7; color: #495057; }
.info-section a { color: #005A9C; text-decoration: none; font-weight: 500; }
.info-section a:hover { text-decoration: underline; }
.info-section strong { color: #343a40; font-weight: 600; }

.example-highlight { /* 复用样式 */
  background-color: #f8f9fa;
  border: 1px dashed #dee2e6;
  padding: 15px;
  margin-top: 15px;
  border-radius: 5px;
  font-size: 0.95em;
  color: #495057;
}
.example-highlight strong { color: #004A80; }

.footer { /* 与其他页面保持一致 */
  background-color: #333; color: #ccc; text-align: center;
  padding: 15px 40px; font-size: 0.9em; flex-shrink: 0;
}

@media (max-width: 768px) { /* 保持响应式 */
  .header { padding: 15px 20px; }
  .header h1 { font-size: 1.6em; }
  .back-button { padding: 6px 12px; font-size: 0.8em; left: 15px; }
  .main-content { padding: 20px; }
  .info-section { padding: 20px; }
  .info-section h2 { font-size: 1.5em; }
  .info-section p, .info-section li { font-size: 0.95em; }
}
</style>
