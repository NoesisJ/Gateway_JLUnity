<template>
  <div class="w-full h-full bg-gray-200">
    <div :class="contentClass">
      <router-view v-slot="{ Component }">
        <transition name="slide-horizontal">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 根据路由元信息决定内容区的样式
const contentClass = computed(() => {
  // 检查当前路由是否标记为全屏
  const isFullScreen = route.meta.fullScreen

  // 如果是全屏页面，不添加内边距
  return isFullScreen ? 'content' : 'content pt-24'
})
</script>
<style>
/* 水平滑动效果 */
.slide-horizontal-enter-active,
.slide-horizontal-leave-active {
  transition: all 0.4s ease;
  position: absolute;
  width: 100%;
}

/* 新页面从右侧进入 */
.slide-horizontal-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

/* 当前页面向左侧离开 */
.slide-horizontal-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* 确保容器有相对定位以便子元素可以绝对定位 */
.content {
  position: relative;
  overflow-x: hidden;
  min-height: 100%;
}
</style>
