<template>
  <div class="continuing-edu-view">
    <header class="header">
      <h1>吉林大学 - 专业培训与继续教育</h1>
      <button @click="goBack" class="back-button">返回学术资源</button>
    </header>
    <main class="main-content">
      <section class="info-section">
        <h2>概览</h2>
        <p>
          吉林大学继续教育是学校服务社会、构建终身教育体系的重要组成部分。相关学院和培训中心面向社会各界人士和行业需求，提供形式多样、内容丰富的教育培训项目。
        </p>
        <p>
          主要目标是为在职人员提供知识更新、技能提升、学历升级和综合素质拓展的机会，满足个人职业发展和学习型社会建设的需求。
        </p>
         <p>
          <strong>主要负责单位：</strong>
          <a href="https://dec.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学继续教育学院</a> 是负责统筹和管理学校继续教育工作的主要机构。此外，部分专业学院可能也设有专门的培训中心。建议访问继续教育学院官网获取最权威信息。
        </p>
      </section>

      <section class="info-section">
        <h2>主要项目类型</h2>
        <ul>
          <li>
            <strong>成人高等学历教育：</strong> 面向社会招生，通过成人高考入学，提供专科、专升本等层次的学历教育，学习形式通常包括函授、业余（夜大）等。
          </li>
          <li>
            <strong>高等教育自学考试：</strong> 作为吉林省高等教育自学考试的主考院校之一，负责部分专业的命题、评卷和实践环节考核等工作，为自学者提供获取学历的途径。
          </li>
          <li>
            <strong>非学历教育培训：</strong>
            <ul>
              <li><strong>岗位技能培训：</strong> 针对特定行业或岗位的需求，开展专业技能、操作规范等短期或中期培训。</li>
              <li><strong>职业资格认证培训：</strong> 提供各类国家职业资格证书或行业认证的考前培训。</li>
              <li><strong>管理人员研修：</strong> 面向企事业单位中高层管理人员、政府公务员等开设的高级研修班、专题研讨班。</li>
              <li><strong>定制化培训（EDP）：</strong> 根据企事业单位的特定需求，量身定制内部培训方案。</li>
            </ul>
          </li>
           <li>
            <strong>网络与远程教育：</strong> 部分学历教育和非学历培训项目可能利用网络平台进行远程教学。 (具体请查询继续教育学院网站)
          </li>
        </ul>
      </section>

       <section class="info-section">
        <h2>了解与报名</h2>
        <p>
          各类培训项目的招生简章、课程设置、报名时间、学习方式及费用等详细信息，通常会在 <a href="https://dec.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">吉林大学继续教育学院</a> 官方网站上发布。
        </p>
        <p>
          您可以通过访问其官网或联系相关招生办公室获取最新的招生信息和咨询服务。
        </p>
         <div class="example-highlight">
          <strong>培训领域示例：</strong> 法规政策、经济管理、工程技术、医药卫生、外语、信息技术、艺术素养等。（具体项目请以官方发布为准）
        </div>
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
/* 复用 AcademicExchangeView.vue 的样式 */
.continuing-edu-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
  background-color: #f8f9fa;
}
/* ... (复制 AcademicExchangeView.vue 中的 .header, .back-button, .main-content, .info-section, h2, p, ul, li, a, strong, .example-highlight, .footer, @media 样式) ... */
.header { background-color: #003366; color: white; padding: 20px 40px; text-align: center; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); position: relative; flex-shrink: 0; }
.header h1 { margin: 0; font-size: 2em; font-weight: 600; }
.back-button { position: absolute; top: 50%; left: 20px; transform: translateY(-50%); background-color: #6c757d; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-size: 0.9em; transition: background-color 0.2s ease; }
.back-button:hover { background-color: #5a6268; }
.main-content { flex-grow: 1; padding: 25px 40px; overflow-y: auto; }
.info-section { background-color: #fff; padding: 25px 30px; margin-bottom: 30px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.08); }
.info-section:last-of-type { margin-bottom: 0; }
.info-section h2 { font-size: 1.8em; color: #004A80; margin-top: 0; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #005A9C; }
.info-section p { font-size: 1em; line-height: 1.75; color: #495057; margin-bottom: 15px; }
.info-section ul { list-style-type: disc; padding-left: 25px; margin-bottom: 20px; margin-top: -5px; }
/* 嵌套列表样式 */
.info-section ul ul { list-style-type: circle; padding-left: 20px; margin-top: 10px; margin-bottom: 10px; }
.info-section li { margin-bottom: 10px; font-size: 1em; line-height: 1.7; color: #495057; }
.info-section ul ul li { font-size: 0.95em; margin-bottom: 8px;}
.info-section a { color: #005A9C; text-decoration: none; font-weight: 500; }
.info-section a:hover { text-decoration: underline; }
.info-section strong { color: #343a40; font-weight: 600; }
.example-highlight { background-color: #f8f9fa; border: 1px dashed #dee2e6; padding: 15px; margin-top: 15px; border-radius: 5px; font-size: 0.95em; color: #495057; }
.example-highlight strong { color: #004A80; }
.footer { background-color: #333; color: #ccc; text-align: center; padding: 15px 40px; font-size: 0.9em; flex-shrink: 0; }
@media (max-width: 768px) { .header { padding: 15px 20px; } .header h1 { font-size: 1.6em; } .back-button { padding: 6px 12px; font-size: 0.8em; left: 15px; } .main-content { padding: 20px; } .info-section { padding: 20px; } .info-section h2 { font-size: 1.5em; } .info-section p, .info-section li { font-size: 0.95em; } }
</style>
