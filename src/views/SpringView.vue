<template>
    <div class="spring-view">
      <header class="hero-section">
        <div class="hero-content">
          <h1 class="main-title">春晖沐吉园：希望与生机的交响</h1>
          <p class="subtitle">当北国的寒意悄然退去，吉林大学的校园便被春的使者温柔唤醒，每一个角落都开始演奏起生命复苏的序曲。</p>
        </div>
        </header>
  
      <main class="content-section">
        <article class="spring-description">
          <h2 class="section-title">探寻吉大春日盛景</h2>
          <p>
            经历了漫长而静谧的冬日封藏，吉林大学的春天总是带着一份格外的惊喜与雀跃。初春时节，积雪消融，冰封的湖面渐渐苏醒，倒映着湛蓝的天空与初生的嫩绿。校园内的柳树最先感知到春意，鹅黄的嫩芽悄然爬上枝头，随风摇曳，仿佛在招手示意春天的到来。紧接着，丁香、桃花、玉兰、迎春花……各种花卉竞相绽放，将校园装点成一片五彩斑斓的画卷。漫步在熟悉的教学楼间，或是静谧的林荫小道，都能与不期而遇的芬芳撞个满怀。
          </p>
          <p>
            中央校区的牡丹园、鸽子楼前的花坛、南湖公园（若邻近或校内有类似水域）的湖畔，都成为了春日里师生们流连忘返的佳地。阳光透过新生树叶的缝隙，洒下斑驳的光影，为静心阅读的学子披上一层金色的薄纱。空气中弥漫着青草与泥土的芬芳，夹杂着清脆的鸟鸣，构成了一幅生机勃勃的校园春景图。不仅仅是自然景色的复苏，整个校园的氛围也随之活跃起来。同学们换上了轻便的春装，操场上运动的身影增多，湖边、草坪上随处可见三五成群讨论学术、畅谈理想的青春面庞。
          </p>
          <p>
            吉大的春天，不仅有视觉上的盛宴，更有一种精神上的焕新。它象征着新的开始，是希望的播种季节，也是学术探索与个人成长的黄金时期。各类学术讲座、文化活动也如雨后春笋般涌现，为春日的校园增添了浓厚的人文气息。从清晨的第一缕阳光洒满静谧的鼎新楼，到傍晚夕阳映照着逸夫楼的剪影，春天的吉大，每一刻都充满了诗意与活力，等待着你用心去发现和感受。
          </p>
        </article>
  
        </main>
  
      <footer class="spring-footer">
        <p>愿你沉醉在吉林大学的每一个春天。</p>
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  // 在这个组件中，我们目前没有特别的 TypeScript 逻辑，因为内容是静态的。
  // 如果未来需要动态数据（例如从API获取季节描述、图片列表），或者需要处理用户交互，
  // 相关的代码会写在这里。
  // 例如，我们可以定义一些响应式数据：
  // import { ref } from 'vue';
  // const pageTitleFromScript = ref('春晖沐吉园：希望与生机的交响');
  // 然后在 <template> 中使用 {{ pageTitleFromScript }}
  </script>
  
  <style scoped>
  /* 全局字体和基本页面设置建议放在 App.vue 或全局 CSS 文件中 */
  /* 例如:
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    margin: 0;
    background-color: #f9f9f9;
  }
  */
  
  .spring-view {
    /* 整体页面容器 */
    max-width: 100%; /* 可以根据需要限制最大宽度，或者让它撑满 */
    margin: 0 auto;
    background-color: #ffffff; /* 页面底色，如果 hero section 不完全覆盖 */
  }
  
  /* 1. 英雄区块样式 */
  .hero-section {
    position: relative; /* 为了内容定位 */
    width: 100%;
    min-height: 60vh; /* 占据视口高度的60%，可以调整 */
    padding: 40px 20px; /* 上下和左右的内边距 */
    display: flex;
    flex-direction: column;
    justify-content: center; /* 垂直居中内容 */
    align-items: center; /* 水平居中内容 */
    text-align: center;
    color: #fff; /* 默认文字颜色，当背景图较暗时效果好 */
    background-color: #508c7a; /* 一个春天的绿色系占位背景色 */
    /* === 在这里添加你的背景图片 === */
    /* background-image: url('YOUR_IMAGE_PATH_HERE.jpg'); */
    background-size: cover; /* 图片覆盖整个区域 */
    background-position: center; /* 图片居中显示 */
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3); /* 添加一个半透明黑色蒙版，使文字更易读，可以调整透明度 */
  }
  
  .hero-content {
    max-width: 800px; /* 限制内容宽度，提高可读性 */
    z-index: 1; /* 确保内容在背景之上（虽然box-shadow inset表现不同） */
  }
  
  .main-title {
    font-size: 3em; /* 大标题字号，可调整 */
    font-weight: 700;
    margin-bottom: 0.5em;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 给文字添加轻微阴影，增强对比 */
  }
  
  .subtitle {
    font-size: 1.2em; /* 副标题字号 */
    font-weight: 300;
    margin-bottom: 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  }
  
  /* 2. 内容区域样式 */
  .content-section {
    padding: 40px 20px; /* 内容区域的内边距 */
    max-width: 900px; /* 限制内容最大宽度，提高阅读性 */
    margin: 0 auto; /* 居中 */
    background-color: #fff; /* 内容区域背景色 */
  }
  
  .section-title {
    font-size: 2.2em;
    color: #2c5b4c; /* 深一点的绿色，与春天主题呼应 */
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid #dce5e2; /* 分隔线 */
  }
  
  .spring-description p {
    font-size: 1.1em;
    line-height: 1.8;
    color: #333; /* 正文颜色 */
    margin-bottom: 1.5em; /* 段落间距 */
    text-align: justify; /* 两端对齐，使长段落更整洁 */
  }
  
  .spring-description p:last-child {
    margin-bottom: 0;
  }
  
  /* 3. (可选) 特色活动或更多春季元素展示区样式 */
  .spring-features {
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid #eee;
  }
  
  .subsection-title {
    font-size: 1.8em;
    color: #387b68;
    text-align: center;
    margin-bottom: 25px;
  }
  
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 响应式网格 */
    gap: 20px; /* 网格间距 */
  }
  
  .feature-item {
    background-color: #f8fbf9; /* 特色项背景 */
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #e0e9e6;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }
  
  .feature-item h4 {
    font-size: 1.3em;
    color: #2c5b4c;
    margin-top: 0;
    margin-bottom: 10px;
  }
  
  .feature-item p {
    font-size: 0.95em;
    color: #555;
    line-height: 1.6;
    margin-bottom: 0;
  }
  
  /* 页脚样式 */
  .spring-footer {
    text-align: center;
    padding: 30px 20px;
    background-color: #eaf0ed; /* 页脚背景色 */
    color: #4a7c6d;
    font-size: 0.9em;
    margin-top: 40px; /* 与上方内容间距 */
  }
  
  /* 响应式调整 */
  @media (max-width: 768px) {
    .main-title {
      font-size: 2.5em; /* 中等屏幕，缩小标题 */
    }
    .subtitle {
      font-size: 1.1em;
    }
    .hero-section {
      min-height: 50vh; /* 减少高度 */
    }
    .section-title {
      font-size: 1.8em;
    }
    .spring-description p {
      font-size: 1em;
    }
  }
  
  @media (max-width: 480px) {
    .main-title {
      font-size: 2em; /* 小屏幕，进一步缩小标题 */
    }
    .subtitle {
      font-size: 1em;
    }
    .hero-section {
      min-height: 40vh;
      padding: 30px 15px;
    }
    .content-section {
      padding: 30px 15px;
    }
    .section-title {
      font-size: 1.6em;
    }
    .spring-description p {
      text-align: left; /* 在小屏幕上，左对齐可能比两端对齐更易读 */
    }
  }
  </style>