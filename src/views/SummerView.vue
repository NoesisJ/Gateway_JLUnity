<template>
    <div class="summer-view">
      <header class="hero-section">
        <div class="hero-content">
          <h1 class="main-title">吉大盛夏：光影浓烈，青春飞扬</h1>
          <p class="subtitle">炎炎夏日，吉林大学的校园在阳光的炽热亲吻下，展现出最为奔放与浓烈的生命色彩。</p>
        </div>
        </header>
  
      <main class="content-section">
        <article class="summer-description">
          <h2 class="section-title">感受吉大夏日激情</h2>
          <p>
            当春日的温柔渐渐隐去，吉林大学便迎来了它一年中最为热烈奔放的季节——夏天。阳光毫无保留地洒满校园的每一个角落，树木枝繁叶茂，以前所未有的浓绿，为匆匆行走的师生撑起一片片浓密的绿荫。清晨，朝露在叶片上闪烁，傍晚，绚烂的晚霞映红天际，每一帧都是大自然馈赠的绝美画卷。图书馆的灯光与窗外的蝉鸣交织，构成夏日里独特的学习交响曲。
          </p>
          <p>
            校园内的道路两旁，白杨挺拔，梧桐伸展，它们的叶片在夏风中沙沙作响，仿佛在诉说着成长的故事。逸夫楼、鼎新楼等标志性建筑在夏日阳光下更显庄重。虽然暑气逼人，但校园的活力并未消减。无论是为学业奋战在实验室、图书馆的学子，还是在运动场上挥洒汗水的身影，都展现着吉大人特有的坚韧与热情。夏夜的校园也别有一番风味，三五好友漫步谈心，或是在操场上仰望星空，都是难忘的青春记忆。
          </p>
          <p>
            吉大的夏天，是知识积累的沉淀期，也是青春能量的爆发期。浓密的绿荫下是静心思考的理想场所，而开放的学术氛围则鼓励着思想的碰撞与创新。偶有阵雨掠过，雨后的空气格外清新，校园也仿佛被洗涤一新，绿意更浓，生机更盛。这不仅是一个季节的更迭，更是一段充满挑战与机遇，挥洒汗水与收获喜悦的时光。
          </p>
        </article>
  
        </main>
  
      <footer class="summer-footer">
        <p>愿你尽享吉林大学夏日的每一份热烈与成长。</p>
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  // Static content, no script needed for now.
  </script>
  
  <style scoped>
  .summer-view {
    max-width: 100%;
    margin: 0 auto;
    background-color: #ffffff;
  }
  
  /* 1. 英雄区块样式 */
  .hero-section {
    position: relative;
    width: 100%;
    min-height: 60vh;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background-color: #228B22; /* 占位背景色: 森林绿 (ForestGreen) */
    /* === 在这里添加你的背景图片 === */
    /* background-image: url('YOUR_SUMMER_IMAGE_PATH_HERE.jpg'); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.35); /* 调整蒙版透明度 */
  }
  
  .hero-content {
    max-width: 800px;
    z-index: 1;
  }
  
  .main-title {
    font-size: 3em;
    font-weight: 700;
    margin-bottom: 0.5em;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .subtitle {
    font-size: 1.2em;
    font-weight: 300;
    margin-bottom: 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  }
  
  /* 2. 内容区域样式 */
  .content-section {
    padding: 40px 20px;
    max-width: 900px;
    margin: 0 auto;
    background-color: #fff;
  }
  
  .section-title {
    font-size: 2.2em;
    color: #1e701e; /* 深绿色系 */
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e0f0e0;
  }
  
  .summer-description p {
    font-size: 1.1em;
    line-height: 1.8;
    color: #333;
    margin-bottom: 1.5em;
    text-align: justify;
  }
  
  .summer-description p:last-child {
    margin-bottom: 0;
  }
  
  /* 3. (可选) 特色活动或更多夏季元素展示区样式 */
  .summer-features {
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid #eee;
  }
  
  .subsection-title {
    font-size: 1.8em;
    color: #2a882a; /* 鲜明绿色 */
    text-align: center;
    margin-bottom: 25px;
  }
  
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .feature-item {
    background-color: #f4faf4;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #d4e9d4;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }
  
  .feature-item h4 {
    font-size: 1.3em;
    color: #1e701e;
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
  .summer-footer {
    text-align: center;
    padding: 30px 20px;
    background-color: #e6f2e6; /* 淡绿色页脚 */
    color: #1a5c1a;
    font-size: 0.9em;
    margin-top: 40px;
  }
  
  /* 响应式调整 */
  @media (max-width: 768px) {
    .main-title { font-size: 2.5em; }
    .subtitle { font-size: 1.1em; }
    .hero-section { min-height: 50vh; }
    .section-title { font-size: 1.8em; }
    .summer-description p { font-size: 1em; }
  }
  
  @media (max-width: 480px) {
    .main-title { font-size: 2em; }
    .subtitle { font-size: 1em; }
    .hero-section { min-height: 40vh; padding: 30px 15px; }
    .content-section { padding: 30px 15px; }
    .section-title { font-size: 1.6em; }
    .summer-description p { text-align: left; }
  }
  </style>