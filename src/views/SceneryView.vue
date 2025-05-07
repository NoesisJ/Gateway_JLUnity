<template>
  <div class="container">
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
        <h2 class="season-title">春之韵</h2>
        <p class="season-description">
          当第一缕春风拂过校园，沉睡了一冬的吉大渐渐苏醒。湖边的柳树抽出新芽，嫩绿的草坪点缀着初开的野花。学子们换上轻便的春装，在明媚的阳光下，或漫步，或苦读，校园里充满了生机与希望。春天的吉大，是一首充满活力的序曲。
        </p>
      </article>

      <article class="season-card summer">
        <h2 class="season-title">夏之烈</h2>
        <p class="season-description">
          炎炎夏日，吉大校园内绿意盎然，浓密的树荫为学子们撑起一片清凉。无论是清晨的朝露，还是傍晚的霞光，都映照着青春的汗水与奋斗。图书馆内座无虚席，操场上身影跃动，夏日的吉大，充满了激情与活力，是知识与梦想的熔炉。
        </p>
      </article>

      <article class="season-card autumn">
        <h2 class="season-title">秋之实</h2>
        <p class="season-description">
          秋天的吉大，无疑是最富有诗意的季节。金黄的叶片如同蝴蝶般在空中飞舞，铺满了校园的每一条小径。阳光透过稀疏的枝叶，洒下斑驳的光影。空气中弥漫着成熟与收获的气息，学子们在此感悟时光的沉淀，迎接丰硕的成果。
        </p>
      </article>

      <article class="season-card winter">
        <h2 class="season-title">冬之洁</h2>
        <p class="season-description">
          北国的冬天，吉大被一场场大雪装点成银装素裹的世界。琼枝玉树，冰清玉洁。虽然天气寒冷，但校园的学术氛围依旧火热。雪后初晴，阳光下的吉大更显宁静与庄严，仿佛在积蓄力量，等待下一个春天的勃发。
        </p>
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
// 目前这个组件仍然是纯静态展示，所以 TypeScript 部分为空。
// 如果需要动态内容或交互，我们会在这里添加代码。
</script>

<style scoped>
/*
  添加了 `scoped` 属性后，这里的 CSS 规则将只应用于当前组件 (`.vue` 文件) 的模板中的元素。
  Vue 的编译器会处理这些样式，通过给 HTML 元素添加一个唯一的 data 属性 (例如 `data-v-abcdef`)，
  并修改 CSS 选择器 (例如 `.container` 会变成 `.container[data-v-abcdef]`) 来实现作用域限制。
  这可以有效防止组件间的样式冲突。

  注意：
  1. 父组件的样式不会渗透到子组件中（除非子组件的根元素恰好被父组件的 scoped CSS 规则选中）。
  2. 子组件的根元素会同时受到父组件的 scoped CSS 和子组件自己的 scoped CSS 的影响。
  3. 对于一些深层选择器（例如，如果你想样式化一个子组件内部的特定元素，而这个子组件不是你直接控制的），
     可能需要使用 `:deep()` 或 `>>>` (已不推荐) 或 `::v-deep` (已不推荐) 伪类。
     但在这个例子中，所有元素都在当前组件的模板内，所以不需要。
  4. 全局样式（如 body, html, * 的重置）仍然应该放在全局 CSS 文件中，而不是 scoped style 里。
     Scoped 样式主要用于组件自身的布局和外观。
*/

/* === 页面主容器 === */
/* 这个 .container 样式现在只会影响这个组件内的 .container 元素 */
.container {
  max-width: 1200px;
  /* 假设 body 的 padding 和 background 由全局样式设置 */
  /* 如果这个组件是页面的顶层，并且希望它有外边距，可以像这样设置 */
  margin: 20px auto; /* 在页面中居中并提供上下边距 */
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* === 主标题样式 === */
.main-header h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 2.5em;
}

/* === 介绍区域样式 === */
.intro-section p {
  text-align: center;
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* === 四季板块网格布局 === */
.seasons-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

/* === 单个季节卡片样式 === */
.season-card {
  flex-grow: 1;
  flex-shrink: 1;
  /*
    计算逻辑：
    4个卡片在一行，它们之间有 (4-1) = 3 个间隙。
    每个间隙宽度为 `gap: 20px;`。
    总间隙宽度为 `3 * 20px = 60px`。
    这 `60px` 的宽度需要从 `100%` 中减去，然后剩下的宽度平均分配给4个卡片。
    所以每个卡片的基础宽度是 `(100% - 60px) / 4`，可以化简为 `25% - 15px`。
  */
  flex-basis: calc(25% - 15px);
  min-width: 200px; /* 确保卡片在换行前不会被过度压缩 */
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 卡片内容从顶部开始对齐 */
}

/*
  你仍然可以为每个季节卡片设置特定的样式，例如通过添加额外的类名
  <article class="season-card spring">
  .spring { border-left-color: #4CAF50; }
  这些特定类的样式也会被 scoped。
*/
/* 示例：如果想给春季卡片一个特殊的左边框 */
/* .season-card.spring {
  border-left: 5px solid #76c7c0;
} */


/* === 季节卡片内的小标题 === */
.season-title {
  font-size: 1.5em;
  color: #34495e;
  margin-bottom: 10px;
}

/* === 季节卡片内的描述文字 === */
.season-description {
  font-size: 0.95em;
  color: #666;
}


/* === 响应式设计调整 === */
/* 这些媒体查询规则也会被 scoped，意味着它们只调整当前组件内的元素样式 */
@media (max-width: 992px) { /* 中等屏幕，例如平板电脑 */
  .season-card {
    /* 目标：一行显示2个卡片 */
    /* 2个卡片，(2-1) = 1 个间隙 (20px) */
    /* (100% - 20px) / 2 = 50% - 10px */
    flex-basis: calc(50% - 10px);
    min-width: calc(50% - 10px); /* 确保不会因内容少而缩小太多 */
  }
}

@media (max-width: 576px) { /* 小型屏幕，例如手机 */
  .main-header h1 {
    font-size: 2em; /* 缩小主标题字体 */
  }
  .intro-section p {
    font-size: 1em; /* 缩小介绍文本字体 */
  }
  .seasons-grid {
    flex-direction: column; /* 卡片垂直堆叠 */
    gap: 15px; /* 调整垂直堆叠时的间隙 */
  }
  .season-card {
    /* 当 flex-direction 为 column 时，flex-basis 控制主轴（垂直）尺寸，
       或者设为 auto/width:100% 来占据交叉轴（水平）的全部宽度。 */
    flex-basis: auto; /* 允许其高度自适应内容 */
    width: 100%;     /* 宽度占据父容器的100% */
    min-width: unset; /* 取消之前的 min-width 限制，因为它现在是单列 */
  }
}
</style>