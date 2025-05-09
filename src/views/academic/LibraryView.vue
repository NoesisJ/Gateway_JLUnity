<template>
  <div class="library-view">
    <header class="header">
      <h1>吉林大学 - 七大图书馆概览</h1>
      <button @click="goBack" class="back-button">返回学术资源</button>
    </header>
    <main class="main-content">
      <p class="intro-text styled-background">
        吉林大学拥有分布在不同校区的七大主要图书馆，各具特色，共同构成了学校宏大的文献信息资源保障体系，为师生提供全面的学术支持。
      </p>
      <div class="library-grid">
        <div v-for="library in libraries" :key="library.id" class="library-card">
          <img :src="library.image" :alt="library.name" class="library-image"/>
          <div class="library-info">
            <h2>{{ library.name }}</h2>
            <p>{{ library.description }}</p>
            </div>
        </div>
      </div>

      <section class="opening-hours-section styled-background">
        <h2>开、闭馆时间</h2>
        <div class="hours-info">
          <p><strong>阅览室开放时间：</strong>周一至周日 8:00 — 22:00</p>
          <p><strong>月末周三：</strong>8:00 — 11:20, 18:00 — 22:00</p>
          <p class="note custom-font-style"><em>个别阅览室开放时间略有不同。</em></p>
          <p class="note custom-font-style"><em>想了解其他详情请登录<a href="http://lib.jlu.edu.cn/" target="_blank" rel="noopener noreferrer">图书馆主页</a>进行查询。</em></p>
        </div>
      </section>
      </main>
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} 吉林大学介绍网站小组. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 导入图片 - 确保路径正确
// Vite/Vue CLI 会处理这些导入，将它们转换为有效的 URL
import dixueguanImg from '../../assets/imgs/academic/地学馆.png';
import dingxinImg from '../../assets/imgs/academic/鼎新图书馆.png';
import gongxueguanImg from '../../assets/imgs/academic/工学馆.png';
import nongxueguanImg from '../../assets/imgs/academic/农学馆.png';
import xinxixueguanImg from '../../assets/imgs/academic/信息学馆.png';
import yixueguanImg from '../../assets/imgs/academic/医学馆.png';
import zhongxinImg from '../../assets/imgs/academic/中心图书馆.png';

const router = useRouter();

interface Library {
  id: number;
  name: string;
  image: string;
  description: string;
}

const libraries = ref<Library[]>([
  {
    id: 1,
    name: '中心图书馆',
    image: zhongxinImg,
    description: '位于中心校区，是吉林大学图书馆系统的核心馆，馆藏文献覆盖文理学科，历史悠久，资源丰富。',
  },
  {
    id: 2,
    name: '鼎新图书馆',
    image: dingxinImg,
    description: '位于中心校区鼎新楼，是学校较新的现代化图书馆之一，提供先进的阅读和学习环境，侧重于人文社科和新兴学科。',
  },
  {
    id: 3,
    name: '工学馆',
    image: gongxueguanImg,
    description: '位于南岭校区，服务于工科各专业师生，馆藏以工程技术、应用科学类文献为主，是工学部重要的学术资源中心。',
  },
  {
    id: 4,
    name: '医学馆',
    image: yixueguanImg,
    description: '位于新民校区，为医学相关专业的教学科研提供支持，馆藏集中于基础医学、临床医学、药学等领域的专业文献和数据库。',
  },
  {
    id: 5,
    name: '地学馆',
    image: dixueguanImg,
    description: '位于朝阳校区，特色馆藏以地球科学、资源环境、地质考古等领域为主，为相关学科提供专业的文献保障。',
  },
  {
    id: 6,
    name: '农学馆',
    image: nongxueguanImg,
    description: '位于和平校区，主要服务于农学、植物保护、动物医学等农业相关学科，馆藏文献具有鲜明的农业科学特色。',
  },
  {
    id: 7,
    name: '信息学馆',
    image: xinxixueguanImg,
    description: '位于南湖校区，重点收藏计算机科学、电子信息、软件工程等信息技术领域的文献资源，支持信息学科的快速发展。',
  },
]);

const goBack = () => {
  router.push({ path: '/academicresources' });
};

</script>

<style scoped>
.library-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Arial', 'Helvetica Neue', Helvetica, sans-serif; /* 默认字体 */
  color: #333;
  background-color: #f9f9f9;
}

.header {
  background-color: #004A80;
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
  background-color: #5a6268;
}

.main-content {
  flex-grow: 1;
  padding: 25px 40px;
  overflow-y: auto;
}

/* 新增：用于淡蓝色背景的通用类 */
.styled-background {
  background-color: #eef7ff; /* 淡蓝色背景 */
  /* padding: 20px; */ /* 根据需要调整内边距，intro-text 和 opening-hours-section 已有自己的 padding */
  /* border-radius: 8px; */ /* 根据需要调整圆角，intro-text 和 opening-hours-section 已有自己的圆角 */
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.05); */ /* 根据需要调整阴影，intro-text 和 opening-hours-section 已有自己的阴影 */
}

.intro-text {
  font-size: 1.1em;
  line-height: 1.7;
  margin-bottom: 30px;
  color: #454F5B;
  text-align: center;
  /* background-color: #ffffff;  原白色背景，现由 styled-background 控制 */
  padding: 20px; /* 保留或调整内边距 */
  border-radius: 8px; /* 保留或调整圆角 */
  box-shadow: 0 1px 3px rgba(0,0,0,0.05); /* 保留或调整阴影 */
}


.library-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
}

.library-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.library-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.library-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.library-info {
  padding: 20px;
  flex-grow: 1;
}

.library-info h2 {
  font-size: 1.5em;
  color: #003A70;
  margin-top: 0;
  margin-bottom: 10px;
}

.library-info p {
  font-size: 0.95em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 0;
}

.opening-hours-section {
  /* background-color: #ffffff;  原白色背景，现由 styled-background 控制 */
  padding: 25px 30px;
  margin-top: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}

.opening-hours-section h2 {
  font-size: 1.6em;
  color: #003A70;
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d0e0f0; /* 配合淡蓝背景调整分隔线颜色 */
  text-align: center;
}

.hours-info p {
  font-size: 1em;
  line-height: 1.8;
  color: #454F5B;
  margin-bottom: 12px;
}

.hours-info p strong {
  color: #004A80;
}

.hours-info .note {
  font-size: 0.9em; /* 原始字号 */
  color: #666;
  /* font-style: italic; */ /* 移除了默认的斜体，通过新类控制 */
}

/* 新增：用于自定义备注字体样式 */
.custom-font-style {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* 尝试使用更现代的字体栈 */
  font-size: 0.92em; /* 可以微调字号 */
  font-style: normal; /* 确保不是斜体，除非您想保留 */
  color: #505050; /* 可以微调颜色 */
}
.custom-font-style em { /* 如果想让内部的em标签有特定样式 */
  font-style: normal; /* 如果不希望em标签是斜体 */
}


.hours-info .note a {
  color: #005A9C;
  text-decoration: none;
}

.hours-info .note a:hover {
  text-decoration: underline;
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
  .library-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 30px;
  }
  .library-info h2 {
    font-size: 1.3em;
  }
  .library-info p {
    font-size: 0.9em;
  }
  .intro-text {
    font-size: 1em;
    padding: 15px;
  }
  .opening-hours-section {
    padding: 20px;
  }
  .opening-hours-section h2 {
    font-size: 1.4em;
  }
  .hours-info p {
    font-size: 0.95em;
  }
  .custom-font-style {
    font-size: 0.9em; /* 响应式调整备注字体大小 */
  }
}
</style>
