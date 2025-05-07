<template>
    <div class="winter-view">
      <header class="hero-section">
        <div class="hero-content">
          <h1 class="main-title">雪韵吉大：银装素裹，静谧书香</h1>
          <p class="subtitle">当冬雪降临，吉林大学化身为一片冰清玉洁的童话世界，于静谧中积蓄着来年的力量。</p>
        </div>
        </header>
  
      <main class="content-section">
        <article class="winter-description">
          <h2 class="section-title">体味吉大冬日风骨</h2>
          <p>
            北国的冬天，在吉林大学的校园里，自有其独特的魅力与风骨。一场场瑞雪如约而至，将整个校园细致地描绘成一幅素雅的水墨画。平日里熟悉的教学楼、道路、树木，此刻都披上了洁白的雪衣，显得格外宁静与庄严。踩在厚厚的雪地上，发出“咯吱咯吱”的声响，是冬日校园里最动听的乐章之一。
          </p>
          <p>
            虽然室外寒风凛冽，但图书馆、自习室里却是一片灯火通明、书香弥漫的温暖景象。学子们不畏严寒，在知识的海洋中遨游，为梦想而刻苦钻研。窗外是冰天雪地，窗内是勤奋的身影，构成一幅动静相宜的求学图。偶尔，阳光穿透云层，洒在雪地上，反射出耀眼的光芒，此时的校园更显晶莹剔透，美不胜收。枝头的雾凇、屋檐下的冰棱，都是大自然馈赠给吉大冬日的精致艺术品。
          </p>
          <p>
            吉大的冬天，是对意志的磨砺，也是对心灵的净化。在这片银装素裹的土地上，学子们感受着北国独有的凛冽与壮美，也孕育着对春天的无限向往与对未来的坚定信念。它不仅仅是寒冷的代名词，更是一种沉静的力量，一种在逆境中依然坚守与奋进的精神象征。
          </p>
        </article>
  
        </main>
  
      <footer class="winter-footer">
        <p>愿你在吉林大学的冬天，感受静谧，积蓄力量。</p>
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  // Static content, no script needed for now.
  </script>
  
  <style scoped>
  .winter-view {
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
    color: #fff; /* 针对浅色背景可能需要调整为深色，或确保蒙版足够暗 */
    background-color: #A9CCE3; /* 占位背景色: 淡钢蓝/冰蓝色 (LightSteelBlue) */
    /* === 在这里添加你的背景图片 === */
    /* background-image: url('YOUR_WINTER_IMAGE_PATH_HERE.jpg'); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 2000px rgba(20, 40, 60, 0.4); /* 偏冷的深色蒙版 */
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
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6); /* 阴影可能需要更明显 */
  }
  
  .subtitle {
    font-size: 1.2em;
    font-weight: 300;
    margin-bottom: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
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
    color: #2E86C1; /* 较深的蓝色 */
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e1eaf2;
  }
  
  .winter-description p {
    font-size: 1.1em;
    line-height: 1.8;
    color: #333;
    margin-bottom: 1.5em;
    text-align: justify;
  }
  
  .winter-description p:last-child {
    margin-bottom: 0;
  }
  
  /* 3. (可选) 特色活动或更多冬季元素展示区样式 */
  .winter-features {
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid #eee;
  }
  
  .subsection-title {
    font-size: 1.8em;
    color: #3498DB; /* 明亮的蓝色 */
    text-align: center;
    margin-bottom: 25px;
  }
  
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .feature-item {
    background-color: #f4f8fb; /* 非常浅的蓝色背景 */
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #d6e6f2;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }
  
  .feature-item h4 {
    font-size: 1.3em;
    color: #2E86C1;
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
  .winter-footer {
    text-align: center;
    padding: 30px 20px;
    background-color: #eaf2f8; /* 淡蓝色页脚 */
    color: #21618C; /* 深蓝文字 */
    font-size: 0.9em;
    margin-top: 40px;
  }
  
  /* 响应式调整 */
  @media (max-width: 768px) {
    .main-title { font-size: 2.5em; }
    .subtitle { font-size: 1.1em; }
    .hero-section { min-height: 50vh; }
    .section-title { font-size: 1.8em; }
    .winter-description p { font-size: 1em; }
  }
  
  @media (max-width: 480px) {
    .main-title { font-size: 2em; }
    .subtitle { font-size: 1em; }
    .hero-section { min-height: 40vh; padding: 30px 15px; }
    .content-section { padding: 30px 15px; }
    .section-title { font-size: 1.6em; }
    .winter-description p { text-align: left; }
  }
  </style>