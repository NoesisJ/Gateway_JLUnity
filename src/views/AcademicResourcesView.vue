<template>
  <div class="academic-resources-view">
    <header class="header">
      <h1>吉林大学 - 学术资源</h1>
    </header>

    <main class="main-content">
      <section class="resource-section">
        <h2>图书馆资源</h2>
        <p>
          吉林大学图书馆拥有丰富的馆藏资源，包括各类图书、期刊、电子数据库等，为全校师生的教学和科研活动提供有力支持。
        </p>
        <ul>
          <li>
            <a href="http://lib.jlu.edu.cn/" target="_blank" rel="noopener noreferrer"
              >吉林大学图书馆官网</a
            >
          </li>
          <li><a href="#" @click.prevent="navigateToResource('eresources')">电子资源导航</a></li>
          <li><a href="#" @click.prevent="navigateToResource('booksearch')">馆藏书目检索</a></li>
        </ul>
      </section>

      <section class="resource-section">
        <h2>科研平台</h2>
        <p>
          学校建设了多个国家级和省部级重点实验室、工程研究中心以及人文社科重点研究基地，为高水平科学研究提供重要平台。
        </p>
        <div class="platform-grid">
          <div class="platform-item">
            <h3>国家重点实验室</h3>
            <p>例如：超硬材料国家重点实验室、汽车仿真与控制国家重点实验室等。</p>
          </div>
          <div class="platform-item">
            <h3>教育部重点实验室</h3>
            <p>涵盖多个学科领域，支持前沿科学探索。</p>
          </div>
          <div class="platform-item">
            <h3>科研项目与成果</h3>
            <p>展示学校承担的重大科研项目及取得的创新成果。</p>
            <button @click="viewResearchProjects">查看详情</button>
          </div>
        </div>
      </section>

      <section class="resource-section">
        <h2>学术期刊与出版物</h2>
        <p>吉林大学主办和参与出版多种高质量学术期刊，反映了学校在各学科领域的最新研究进展。</p>
        <ul>
          <li>《吉林大学社会科学学报》</li>
          <li>《吉林大学学报（理学版）》</li>
          <li>《吉林大学学报（工学版）》</li>
          <li>《吉林大学学报（医学版）》</li>
          <li><a href="#" @click.prevent="navigateToResource('journals')">更多期刊...</a></li>
        </ul>
      </section>

      <section class="resource-section">
        <h2>学术交流与合作</h2>
        <p>
          学校积极开展国内外学术交流与合作，定期举办学术会议、讲座，邀请知名学者来访，拓展师生学术视野。
        </p>
        <button @click="viewUpcomingEvents">查看近期学术活动</button>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; {{ currentYear }} 吉林大学介绍网站小组. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 如果你需要路由跳转，可以导入 vue-router 的 useRouter
// import { useRouter } from 'vue-router';

// const router = useRouter(); // 初始化路由

const currentYear = ref(new Date().getFullYear())

const navigateToResource = (resourceName: string) => {
  // 建议也给参数加上类型
  // 在这里你可以根据 resourceName 实现具体的跳转逻辑
  // 例如，如果使用了 vue-router:
  // router.push({ name: resourceName });
  alert(`导航到: ${resourceName}`) // 占位提示
  console.log(`尝试导航到: ${resourceName}`)
}

const viewResearchProjects = () => {
  alert('查看科研项目详情')
  // 实际项目中可能会跳转到新的页面或显示一个模态框
}

const viewUpcomingEvents = () => {
  alert('查看近期学术活动')
}

onMounted(() => {
  // 组件挂载后可以执行一些初始化操作
  console.log('AcademicResourcesView.vue 组件已挂载')
})
</script>

<style scoped>
.academic-resources-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 确保至少占满整个视口高度 */
  width: 100%; /* 占满整个视口宽度 */
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f4f7f6; /* 淡雅的背景色 */
}

.header {
  background-color: #003366; /* 吉大蓝 (示例颜色) */
  color: white;
  padding: 20px 40px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header h1 {
  margin: 0;
  font-size: 2.5em;
}

.main-content {
  flex-grow: 1; /* 让主内容区域填充剩余空间 */
  padding: 30px 50px;
  overflow-y: auto; /* 如果内容过多，允许垂直滚动 */
}

.resource-section {
  background-color: white;
  padding: 25px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.resource-section h2 {
  font-size: 1.8em;
  color: #004080; /* 深一点的蓝色 */
  margin-top: 0;
  margin-bottom: 15px;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
}

.resource-section p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.resource-section ul {
  list-style-type: disc;
  margin-left: 20px;
  padding-left: 0;
}

.resource-section ul li {
  margin-bottom: 8px;
}

.resource-section ul li a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.resource-section ul li a:hover,
.resource-section ul li a:focus {
  color: #0056b3;
  text-decoration: underline;
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.platform-item {
  background-color: #e9f2f9;
  padding: 20px;
  border-radius: 6px;
  border-left: 4px solid #007bff;
}

.platform-item h3 {
  font-size: 1.3em;
  color: #0056b3;
  margin-top: 0;
  margin-bottom: 10px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.footer {
  background-color: #333;
  color: #ccc;
  text-align: center;
  padding: 15px 40px;
  font-size: 0.9em;
}
</style>
