<template>
    <div class="autumn-view">
      <header class="hero-section">
        <div class="hero-content">
          <h1 class="main-title">金秋吉大：层林尽染，诗意满园</h1>
          <p class="subtitle">秋日的吉林大学，褪去了夏日的浮躁，披上了五彩的锦衣，每一片落叶都诉说着成熟与收获的故事。</p>
        </div>
        </header>
  
      <main class="content-section">
        <article class="autumn-description">
          <h2 class="section-title">品味吉大秋日神韵</h2>
          <p>
            当第一缕秋风拂过，吉林大学的校园便开始了一场色彩的盛宴。夏日的浓绿逐渐被温暖的黄、热烈的红、深沉的褐所取代。阳光透过日渐稀疏的枝叶，洒下斑驳的光影，空气中弥漫着成熟果实与干爽落叶的清香。天空也显得格外高远湛蓝，映衬着校园里金黄的银杏、火红的枫叶，构成一幅浓墨重彩的油画。
          </p>
          <p>
            漫步在文苑路、鼎新路，脚下是厚厚的落叶地毯，发出沙沙的声响，仿佛是秋日最温柔的低语。图书馆窗外的景色也日渐斑斓，为埋首苦读的学子平添几分诗意。清晨，薄雾轻锁，给校园蒙上一层神秘的面纱；午后，阳光和煦，最宜在长椅上静坐，感受秋日的静美与从容。这不仅是景色的变换，更是心境的沉淀，是收获的喜悦与对未来的憧憬交织的季节。
          </p>
          <p>
            秋季的吉大，往往伴随着新学期的开始，校园里充满了朝气与求知的渴望。各类学术研讨、文化交流活动也频繁举办，为这诗意的季节增添了浓厚的学术氛围。秋日的吉大，是摄影爱好者的天堂，是诗人墨客的灵感源泉，更是每一位吉大人心中一幅珍藏的、关于成长与收获的温暖画卷。
          </p>
        </article>
  
        </main>
  
      <footer class="autumn-footer">
        <p>愿你珍藏吉林大学秋日的每一份诗意与收获。</p>
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  // Static content, no script needed for now.
  </script>
  
  <style scoped>
  .autumn-view {
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
    background-color: #D2691E; /* 占位背景色: 巧克力色 (Chocolate) / 赭石色 */
    /* === 在这里添加你的背景图片 === */
    /* background-image: url('YOUR_AUTUMN_IMAGE_PATH_HERE.jpg'); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
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
    color: #b85b1a; /* 偏暗的橙色/棕色 */
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid #f5e9e0;
  }
  
  .autumn-description p {
    font-size: 1.1em;
    line-height: 1.8;
    color: #333;
    margin-bottom: 1.5em;
    text-align: justify;
  }
  
  .autumn-description p:last-child {
    margin-bottom: 0;
  }
  
  /* 3. (可选) 特色活动或更多秋季元素展示区样式 */
  .autumn-features {
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid #eee;
  }
  
  .subsection-title {
    font-size: 1.8em;
    color: #c46722; /* 温暖的橙色 */
    text-align: center;
    margin-bottom: 25px;
  }
  
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .feature-item {
    background-color: #fff8f2; /* 浅米色/淡橙色背景 */
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #f0e0d4;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }
  
  .feature-item h4 {
    font-size: 1.3em;
    color: #b85b1a;
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
  .autumn-footer {
    text-align: center;
    padding: 30px 20px;
    background-color: #faefe5; /* 淡雅的秋季色 */
    color: #a0522d; /* 赭色 */
    font-size: 0.9em;
    margin-top: 40px;
  }
  
  /* 响应式调整 */
  @media (max-width: 768px) {
    .main-title { font-size: 2.5em; }
    .subtitle { font-size: 1.1em; }
    .hero-section { min-height: 50vh; }
    .section-title { font-size: 1.8em; }
    .autumn-description p { font-size: 1em; }
  }
  
  @media (max-width: 480px) {
    .main-title { font-size: 2em; }
    .subtitle { font-size: 1em; }
    .hero-section { min-height: 40vh; padding: 30px 15px; }
    .content-section { padding: 30px 15px; }
    .section-title { font-size: 1.6em; }
    .autumn-description p { text-align: left; }
  }
  </style>