<template>
  <div class="summer-view">
    <header class="hero-section">
      <div class="hero-content">
        <h1 class="main-title">吉大盛夏：光影浓烈，青春飞扬</h1>
        <p class="subtitle">
          炎炎夏日，吉林大学的校园在阳光的炽热亲吻下，展现出最为奔放与浓烈的生命色彩。
        </p>
      </div>
    </header>

    <main class="content-section">
      <article class="summer-description">
        <h2 class="section-title">感受吉大夏日激情</h2>

        <img
          src="../../assets/imgs/sceneryView/summer1.jpg"
          alt="吉大夏日风光一"
          class="inline-season-image"
        />
        <p>
          当春日的温柔渐渐隐去，吉林大学便迎来了它一年中最为热烈奔放的季节——夏天。阳光毫无保留地洒满校园的每一个角落，树木枝繁叶茂，以前所未有的浓绿，为匆匆行走的师生撑起一片片浓密的绿荫。清晨，朝露在叶片上闪烁，傍晚，绚烂的晚霞映红天际，每一帧都是大自然馈赠的绝美画卷。图书馆的灯光与窗外的蝉鸣交织，构成夏日里独特的学习交响曲。
        </p>

        <img
          src="../../assets/imgs/sceneryView/summer2.jpg"
          alt="吉大夏日风光二"
          class="inline-season-image"
        />
        <p>
          校园内的道路两旁，白杨挺拔，梧桐伸展，它们的叶片在夏风中沙沙作响，仿佛在诉说着成长的故事。逸夫楼、鼎新楼等标志性建筑在夏日阳光下更显庄重。虽然暑气逼人，但校园的活力并未消减。无论是为学业奋战在实验室、图书馆的学子，还是在运动场上挥洒汗水的身影，都展现着吉大人特有的坚韧与热情。夏夜的校园也别有一番风味，三五好友漫步谈心，或是在操场上仰望星空，都是难忘的青春记忆。
        </p>

        <img
          src="../../assets/imgs/sceneryView/summer3.jpg"
          alt="吉大夏日风光三"
          class="inline-season-image"
        />
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
// Static content, no script needed for now as we are using relative paths directly in the template.
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
  min-height: 70vh; /* Consistent height with SpringView */
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;

  /* 使用 summer0.jpg 作为背景图片，通过相对路径 */
  background-image: url('../../assets/imgs/sceneryView/summer0.jpg'); /* Relative path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.35); /* Overlay for text readability */
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
  color: #1a7431; /* Vibrant summer green, e.g., 'Forest Green' variant */
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 15px;
  border-bottom: 3px solid #d9ead3; /* Lighter green for border */
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

.summer-description p {
  font-size: 1.15em;
  line-height: 1.85;
  text-indent: 2em;
  color: #333; /* Standard dark gray for good readability */
  margin-bottom: 1.5em;
  text-align: justify;
}

.summer-description p:last-child {
  margin-bottom: 0;
}

/* 页脚样式 */
.summer-footer {
  text-align: center;
  padding: 40px 20px;
  background-color: #e8f5e9; /* Light green, suitable for summer */
  color: #2e7d32; /* Darker green text */
  font-size: 0.95em;
  margin-top: 50px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .hero-section {
    min-height: 60vh;
  }
  .main-title {
    font-size: 2.6em;
  }
  .subtitle {
    font-size: 1.2em;
  }
  .section-title {
    font-size: 2em;
  }
  .inline-season-image {
    margin: 30px auto 25px auto;
    max-width: 95%;
  }
  .summer-description p {
    font-size: 1.05em;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: 50vh;
    padding: 30px 15px;
  }
  .main-title {
    font-size: 2.1em;
  }
  .subtitle {
    font-size: 1.05em;
  }
  .content-section {
    padding: 30px 15px;
  }
  .section-title {
    font-size: 1.7em;
    margin-bottom: 30px;
  }
  .inline-season-image {
    margin: 25px auto 20px auto;
    border-radius: 8px;
  }
  .summer-description p {
    text-align: left;
    font-size: 1em;
    line-height: 1.75;
  }
  .summer-footer {
    padding: 30px 15px;
    margin-top: 40px;
  }
}
</style>
