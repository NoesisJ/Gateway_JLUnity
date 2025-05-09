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

        <img src="../assets/imgs/sceneryView/autumn1.jpg" alt="吉大秋日风光一" class="inline-season-image">
        <p>
          当第一缕秋风拂过，吉林大学的校园便开始了一场色彩的盛宴。夏日的浓绿逐渐被温暖的黄、热烈的红、深沉的褐所取代。阳光透过日渐稀疏的枝叶，洒下斑驳的光影，空气中弥漫着成熟果实与干爽落叶的清香。天空也显得格外高远湛蓝，映衬着校园里金黄的银杏、火红的枫叶，构成一幅浓墨重彩的油画。
        </p>

        <img src="../assets/imgs/sceneryView/autumn2.jpg" alt="吉大秋日风光二" class="inline-season-image">
        <p>
          漫步在文苑路、鼎新路，脚下是厚厚的落叶地毯，发出沙沙的声响，仿佛是秋日最温柔的低语。图书馆窗外的景色也日渐斑斓，为埋首苦读的学子平添几分诗意。清晨，薄雾轻锁，给校园蒙上一层神秘的面纱；午后，阳光和煦，最宜在长椅上静坐，感受秋日的静美与从容。这不仅是景色的变换，更是心境的沉淀，是收获的喜悦与对未来的憧憬交织的季节。
        </p>

        <img src="../assets/imgs/sceneryView/autumn3.jpg" alt="吉大秋日风光三" class="inline-season-image">
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
// 静态内容，脚本部分保持不变
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
  min-height: 70vh; /* 与其他季节视图保持一致的高度 */
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;

  /* 使用 autumn0.jpg 作为背景图片，通过相对路径 */
  background-image: url('../assets/imgs/sceneryView/autumn0.jpg'); /* 相对路径 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* 覆盖层，确保文字可读性，秋季可以尝试暖色调或保持中性暗色 */
  box-shadow: inset 0 0 0 2000px rgba(40, 20, 0, 0.35); /* 尝试一个偏棕色的暗调覆盖层 */
}

.hero-content {
  max-width: 800px;
  z-index: 1;
}

.main-title {
  font-size: 3.2em;
  font-weight: 700;
  margin-bottom: 0.6em;
  line-height: 1.2;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
}

.subtitle {
  font-size: 1.3em;
  font-weight: 400;
  margin-bottom: 0;
  line-height: 1.5;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

/* 2. 内容区域样式 */
.content-section {
  padding: 50px 20px;
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff;
}

.section-title {
  font-size: 2.4em;
  color: #c05621; /* 秋季主题色：深橘色/铁锈红 */
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 15px;
  border-bottom: 3px solid #fbe9e7; /* 淡的暖色调边框 */
}

/* 段落间插入的图片样式 */
.inline-season-image {
  display: block;
  width: 100%;
  max-width: 750px;
  height: auto;
  margin: 40px auto 30px auto;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.autumn-description p {
  font-size: 1.15em;
  line-height: 1.85;
  text-indent: 2em;
  color: #4A3B32; /* 秋季段落文字：偏棕色的深灰色 */
  margin-bottom: 1.5em;
  text-align: justify;
}

.autumn-description p:last-child {
  margin-bottom: 0;
}

/* 页脚样式 */
.autumn-footer {
  text-align: center;
  padding: 40px 20px;
  background-color: #fff3e0; /* 秋季主题：淡橙色/米黄色 */
  color: #8D6E63;       /* 秋季主题：棕色系文字 */
  font-size: 0.95em;
  margin-top: 50px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .hero-section { min-height: 60vh; }
  .main-title { font-size: 2.6em; }
  .subtitle { font-size: 1.2em; }
  .section-title { font-size: 2em; }
  .inline-season-image {
    margin: 30px auto 25px auto;
    max-width: 95%;
  }
  .autumn-description p { font-size: 1.05em; }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: 50vh;
    padding: 30px 15px;
  }
  .main-title { font-size: 2.1em; }
  .subtitle { font-size: 1.05em; }
  .content-section { padding: 30px 15px; }
  .section-title { font-size: 1.7em; margin-bottom: 30px; }
   .inline-season-image {
    margin: 25px auto 20px auto;
    border-radius: 8px;
  }
  .autumn-description p {
    text-align: left;
    font-size: 1em;
    line-height: 1.75;
  }
  .autumn-footer { padding: 30px 15px; margin-top: 40px; }
}
</style>
