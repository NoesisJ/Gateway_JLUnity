<template>
  <div class="scenery-view-fullscreen">
    <div class="background-overlay"></div>

    <div class="content-area">
      <header class="main-header">
        <h1>吉林大学四季风光</h1>
      </header>

      <section class="intro-section">
        <p>
          吉林大学，坐落于北国春城，一年四季，景色各异，皆如诗如画。春有嫩芽吐蕊，夏有绿树成荫，秋有金叶铺地，冬有白雪皑皑。每一个季节，吉大都以其独特的魅力，吸引着无数学子和游人驻足。让我们一同领略这北国学府的四季之美。
        </p>
      </section>

      <main class="seasons-grid">
        <article class="season-card spring">
          <router-link to="/scenery/spring" class="card-link">
            <h2 class="season-title">春之韵</h2>
            <p class="season-description">
              当第一缕春风拂过校园，沉睡了一冬的吉大渐渐苏醒。湖边的柳树抽出新芽，嫩绿的草坪点缀着初开的野花。学子们换上轻便的春装，在明媚的阳光下，或漫步，或苦读，校园里充满了生机与希望。春天的吉大，是一首充满活力的序曲。
            </p>
          </router-link>
        </article>

        <article class="season-card summer">
          <router-link to="/scenery/summer" class="card-link">
            <h2 class="season-title">夏之烈</h2>
            <p class="season-description">
              炎炎夏日，吉大校园内绿意盎然，浓密的树荫为学子们撑起一片清凉。无论是清晨的朝露，还是傍晚的霞光，都映照着青春的汗水与奋斗。图书馆内座无虚席，操场上身影跃动，夏日的吉大，充满了激情与活力，是知识与梦想的熔炉。
            </p>
          </router-link>
        </article>

        <article class="season-card autumn">
          <router-link to="/scenery/autumn" class="card-link">
            <h2 class="season-title">秋之实</h2>
            <p class="season-description">
              秋天的吉大，无疑是最富有诗意的季节。金黄的叶片如同蝴蝶般在空中飞舞，铺满了校园的每一条小径。阳光透过稀疏的枝叶，洒下斑驳的光影。空气中弥漫着成熟与收获的气息，学子们在此感悟时光的沉淀，迎接丰硕的成果。
            </p>
          </router-link>
        </article>

        <article class="season-card winter">
          <router-link to="/scenery/winter" class="card-link">
            <h2 class="season-title">冬之洁</h2>
            <p class="season-description">
              北国的冬天，吉大被一场场大雪装点成银装素裹的世界。琼枝玉树，冰清玉洁。虽然天气寒冷，但校园的学术氛围依旧火热。雪后初晴，阳光下的吉大更显宁静与庄严，仿佛在积蓄力量，等待下一个春天的勃发。
            </p>
          </router-link>
        </article>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// TypeScript 部分仍然为空，因为是纯静态展示。
</script>

<style scoped>
/* === 1. 全屏背景容器 === */
.scenery-view-fullscreen {
  width: 100%;
  min-height: 100vh; /* 确保至少占据整个视口高度 */
  position: relative; /* 为了伪元素覆盖层定位 */
  padding: 0; /* 移除之前的padding */
  margin: 0;  /* 移除之前的margin */

  /* 设置背景图片 */
  background-image: url('src/assets/imgs/sceneryView/jlu-scenery.jpg'); /* 确保图片路径正确 */
  background-size: cover; /* 图片覆盖整个区域 */
  background-position: center center; /* 图片居中显示 */
  background-repeat: no-repeat; /* 图片不重复 */
  background-attachment: fixed; /* 背景图片固定，内容滚动时产生视差效果 */

  display: flex; /* 使用flex布局使content-area能垂直居中（如果需要）或正常排列 */
  flex-direction: column; /* 内容垂直排列 */
  align-items: center; /* 水平居中content-area */
  overflow-y: auto; /* 如果内容超出一屏，允许垂直滚动 */
}

/* 背景覆盖层，用于调暗背景，使前景文字更易读 */
.scenery-view-fullscreen::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.25); /* 半透明黑色覆盖层，可调整透明度 */
  z-index: 1; /* 确保在背景图之上，内容之下 */
}

/* === 2. 内容区域容器 === */
.content-area {
  max-width: 1200px; /* 限制内容区域的最大宽度，保持可读性 */
  width: 90%; /* 在较小屏幕上使用百分比宽度 */
  margin: 0 auto; /* 水平居中 */
  padding: 60px 20px; /* 上下留出更多空间，左右内边距 */
  position: relative; /* 使其在覆盖层之上 */
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center; /* 内部元素也居中对齐 */
}

/* === 主标题样式 === */
.main-header {
  width: 100%; /* 让header占据content-area的宽度 */
  text-align: center; /* 标题文本居中 */
  margin-bottom: 30px; /* 调整与下方内容的间距 */
}
.main-header h1 {
  color: #ffffff; /* 标题颜色改为白色，以在深色背景或覆盖层上更突出 */
  font-size: 3em; /* 调整字号 */
  font-weight: 700; /* 加粗 */
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7); /* 添加文字阴影增强可读性 */
}

/* === 介绍区域样式 === */
.intro-section {
  width: 100%;
  max-width: 800px; /* 限制介绍文本的宽度 */
  text-align: center;
  margin-bottom: 50px; /* 增加与下方四季卡片的间距 */
}
.intro-section p {
  color: #f0f0f0; /* 介绍文字颜色改为浅灰色或白色 */
  font-size: 1.2em; /* 调整字号 */
  line-height: 1.8;
  text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.75);
}

/* === 四季板块网格布局 === */
.seasons-grid {
  display: flex;
  gap: 30px; /* 增大卡片间距 */
  flex-wrap: wrap;
  justify-content: center; /* 卡片在行内居中（当不满一行时） */
  width: 100%;
}

/* === 单个季节卡片样式 === */
.season-card {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc(25% - 22.5px); /* (3 * 30px) / 4 = 22.5px (基于新gap) */
  min-width: 250px; /* 调整最小宽度，使其更大气 */

  border-radius: 12px; /* 增大圆角 */
  text-align: center;
  transition: transform 0.35s ease-out, box-shadow 0.35s ease-out, background-color 0.3s ease-in-out;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* 调整初始阴影 */
  display: flex;
  overflow: hidden;
  /* 卡片本身不再有z-index，因为它们在content-area内部 */
}

/* 为每个季节卡片设置独特的初始背景色和文字颜色 */
/* 注意：这些颜色可能需要根据背景图片进行微调，以保证对比度和美感 */
.season-card.spring { background-color: rgba(240, 255, 244, 0.92); } /* 淡薄荷绿，增加一点透明度 */
.season-card.spring .season-title { color: #2f855a; }
.season-card.spring .season-description { color: #38a169; }

.season-card.summer { background-color: rgba(255, 254, 240, 0.92); } /* 淡柠檬黄 */
.season-card.summer .season-title { color: #d69e2e; }
.season-card.summer .season-description { color: #b7791f; } /* 调整夏天描述颜色加深一点 */

.season-card.autumn { background-color: rgba(255, 245, 240, 0.92); } /* 淡橘色 */
.season-card.autumn .season-title { color: #dd6b20; }
.season-card.autumn .season-description { color: #c05621; } /* 调整秋天描述颜色加深一点 */

.season-card.winter { background-color: rgba(240, 249, 255, 0.92); } /* 淡天蓝色 */
.season-card.winter .season-title { color: #2b6cb0; } /* 调整冬天标题颜色加深一点 */
.season-card.winter .season-description { color: #3182ce; }

/* 卡片悬浮效果 */
.season-card:hover {
  transform: translateY(-10px) scale(1.03); /* 悬浮效果更明显 */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
}

/* 悬浮时背景色变化 - 可以考虑变得更不透明或颜色更饱和 */
.season-card.spring:hover { background-color: rgba(198, 246, 213, 0.98); }
.season-card.summer:hover { background-color: rgba(254, 252, 191, 0.98); }
.season-card.autumn:hover { background-color: rgba(254, 215, 215, 0.98); }
.season-card.winter:hover { background-color: rgba(190, 227, 248, 0.98); }

/* router-link填满卡片 */
.card-link {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px 25px; /* 增大卡片内部填充 */
  text-decoration: none;
  box-sizing: border-box;
}

/* 卡片内标题 */
.season-title {
  font-size: 1.7em; /* 增大 */
  font-weight: 600;
  margin-bottom: 15px; /* 增大 */
}

/* 卡片内描述 */
.season-description {
  text-align: left;
  font-size: 1em; /* 增大 */
  line-height: 1.7;
}

/* === 响应式设计调整 === */
@media (max-width: 1024px) { /* 调整断点为1024px，使卡片更早变为两列 */
  .season-card {
    flex-basis: calc(50% - 15px); /* (1 * 30px) / 2 = 15px */
    min-width: calc(50% - 15px);
  }
}

@media (max-width: 640px) { /* 调整小屏幕断点 */
  .content-area {
    padding: 40px 15px; /* 调整内边距 */
    width: 95%;
  }
  .main-header h1 {
    font-size: 2.5em;
  }
  .intro-section p {
    font-size: 1.1em;
  }
  .seasons-grid {
    flex-direction: column;
    gap: 25px;
  }
  .season-card {
    flex-basis: auto;
    width: 100%;
    min-width: unset;
    min-height: 280px; /* 给单列卡片一个最小高度 */
  }
  .season-card:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  .card-link {
    padding: 25px 20px;
  }
  .season-title { font-size: 1.6em; }
  .season-description { font-size: 0.95em; }
}
</style>
