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

        <img :src="springImage1" alt="吉大春日风光一" class="inline-season-image">
        <p>
          经历了漫长而静谧的冬日封藏，吉林大学的春天总是带着一份格外的惊喜与雀跃。初春时节，积雪消融，冰封的湖面渐渐苏醒，倒映着湛蓝的天空与初生的嫩绿。校园内的柳树最先感知到春意，鹅黄的嫩芽悄然爬上枝头，随风摇曳，仿佛在招手示意春天的到来。紧接着，丁香、桃花、玉兰、迎春花……各种花卉竞相绽放，将校园装点成一片五彩斑斓的画卷。漫步在熟悉的教学楼间，或是静谧的林荫小道，都能与不期而遇的芬芳撞个满怀。
        </p>

        <img :src="springImage2" alt="吉大春日风光二" class="inline-season-image">
        <p>
          中央校区的牡丹园、鸽子楼前的花坛、南湖公园（若邻近或校内有类似水域）的湖畔，都成为了春日里师生们流连忘返的佳地。阳光透过新生树叶的缝隙，洒下斑驳的光影，为静心阅读的学子披上一层金色的薄纱。空气中弥漫着青草与泥土的芬芳，夹杂着清脆的鸟鸣，构成了一幅生机勃勃的校园春景图。不仅仅是自然景色的复苏，整个校园的氛围也随之活跃起来。同学们换上了轻便的春装，操场上运动的身影增多，湖边、草坪上随处可见三五成群讨论学术、畅谈理想的青春面庞。
        </p>

        <img :src="springImage3" alt="吉大春日风光三" class="inline-season-image">
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
// 使用 import 导入图片，确保构建工具能正确处理它们
import springImage1 from '../assets/imgs/spring1.jpg';
import springImage2 from '../assets/imgs/spring2.jpg';
import springImage3 from '../assets/imgs/spring3.jpg';

// 如果你想在 <style> 中动态使用 springHeroImage，可以将其暴露给 CSS 变量
// import { ref, onMounted } from 'vue';
// const heroBgUrl = ref(`url(${springHeroImage})`);
// onMounted(() => {
//   const root = document.documentElement;
//   root.style.setProperty('--hero-bg-image', `url(${springHeroImage})`);
// });
// 然后在 CSS 中: background-image: var(--hero-bg-image);
// 但对于 hero-section，直接在 <style> 中写路径通常更简单，如下面CSS所示。
</script>

<style scoped>
.spring-view {
  max-width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
}

/* 1. 英雄区块样式 */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 70vh;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;

  /* 使用 @ 别名引用背景图片 */
  background-image: url('../assets/imgs/spring0.jpg'); /* 确保图片路径和文件名正确 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.35);
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
  color: #2c5b4c;
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 15px;
  border-bottom: 3px solid #dce5e2;
}

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

.spring-description p {
  font-size: 1.15em;
  line-height: 1.85;
  text-indent: 2em;
  color: #333;
  margin-bottom: 1.5em;
  text-align: justify;
}

.spring-description p:last-child {
  margin-bottom: 0;
}

.spring-footer {
  text-align: center;
  padding: 40px 20px;
  background-color: #f4f8f6;
  color: #387b68;
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
  .spring-description p { font-size: 1.05em; }
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
  .spring-description p {
    text-align: left;
    font-size: 1em;
    line-height: 1.75;
  }
  .spring-footer { padding: 30px 15px; margin-top: 40px; }
}
</style>
