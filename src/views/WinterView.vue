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

        <img src="../assets/imgs/winter1.jpg" alt="吉大冬日风光一" class="inline-season-image">
        <p>
          北国的冬天，在吉林大学的校园里，自有其独特的魅力与风骨。一场场瑞雪如约而至，将整个校园细致地描绘成一幅素雅的水墨画。平日里熟悉的教学楼、道路、树木，此刻都披上了洁白的雪衣，显得格外宁静与庄严。踩在厚厚的雪地上，发出“咯吱咯吱”的声响，是冬日校园里最动听的乐章之一。
        </p>

        <img src="../assets/imgs/winter2.jpg" alt="吉大冬日风光二" class="inline-season-image">
        <p>
          虽然室外寒风凛冽，但图书馆、自习室里却是一片灯火通明、书香弥漫的温暖景象。学子们不畏严寒，在知识的海洋中遨游，为梦想而刻苦钻研。窗外是冰天雪地，窗内是勤奋的身影，构成一幅动静相宜的求学图。偶尔，阳光穿透云层，洒在雪地上，反射出耀眼的光芒，此时的校园更显晶莹剔透，美不胜收。枝头的雾凇、屋檐下的冰棱，都是大自然馈赠给吉大冬日的精致艺术品。
        </p>

        <img src="../assets/imgs/winter3.jpg" alt="吉大冬日风光三" class="inline-season-image">
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
// 静态内容，脚本部分保持不变
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
  min-height: 70vh; /* 与其他季节视图保持一致的高度 */
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;

  /* 使用 winter0.jpg 作为背景图片，通过相对路径 */
  background-image: url('../assets/imgs/winter0.jpg'); /* 相对路径 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* 覆盖层，确保文字可读性，冬季背景通常较亮，暗色覆盖层对比度好 */
  box-shadow: inset 0 0 0 2000px rgba(10, 25, 40, 0.4); /* 深蓝灰色调覆盖层 */
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
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7); /* 较强的阴影以适应可能明亮的雪景 */
}

.subtitle {
  font-size: 1.3em;
  font-weight: 400;
  margin-bottom: 0;
  line-height: 1.5;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
}

/* 2. 内容区域样式 */
.content-section {
  padding: 50px 20px;
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff; /* 内容区背景保持白色 */
}

.section-title {
  font-size: 2.4em;
  color: #1A5276; /* 冬季主题色：深沉的蓝色 */
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 15px;
  border-bottom: 3px solid #dae4e9; /* 冷色调边框 */
}

/* 段落间插入的图片样式 */
.inline-season-image {
  display: block;
  width: 100%;
  max-width: 750px;
  height: auto;
  margin: 40px auto 30px auto;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* 冬季阴影可以略微柔和 */
  object-fit: cover;
}

.winter-description p {
  font-size: 1.15em;
  line-height: 1.85;
  text-indent: 2em;
  color: #2c3e50; /* 冬季段落文字：较深的蓝灰色 */
  margin-bottom: 1.5em;
  text-align: justify;
}

.winter-description p:last-child {
  margin-bottom: 0;
}

/* 页脚样式 */
.winter-footer {
  text-align: center;
  padding: 40px 20px;
  background-color: #eBF5FB; /* 冬季主题：非常浅的淡蓝色 */
  color: #154360;       /* 冬季主题：深蓝文字 */
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
  .winter-description p { font-size: 1.05em; }
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
  .winter-description p {
    text-align: left;
    font-size: 1em;
    line-height: 1.75;
  }
  .winter-footer { padding: 30px 15px; margin-top: 40px; }
}
</style>
