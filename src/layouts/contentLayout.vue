<template>
  <div class="w-full h-full bg-gray-200 transition-all duration-300">
    <div :class="contentClass">
      <router-view v-slot="{ Component, route }">
        <!-- 根据路由meta决定是否使用默认过渡 -->
        <component v-if="route.meta.customTransition" :is="Component" />
        <transition v-else name="page-transition">
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
  const hideHeader = route.meta.hideHeader

  // 如果是全屏页面或需要隐藏header，不添加内边距
  return isFullScreen || hideHeader ? 'content h-full' : 'content pt-24'
})
</script>
<style>
/* 高级过渡效果 */
.page-transition-enter-active,
.page-transition-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
  transform-origin: center;
  backface-visibility: hidden;
  will-change: opacity;
}

/* 进入前状态 */
.page-transition-enter-from {
  opacity: 0;
  transform: translateX(50px);
  filter: brightness(1.05);
}

/* 默认状态 */
.page-transition-enter-to,
.page-transition-leave-from {
  opacity: 1;
  transform: translateX(0);
  filter: brightness(1);
}

/* 离开后状态 */
.page-transition-leave-to {
  opacity: 0;
  transform: translateX(-50px);
  filter: brightness(1.05);
}

/* 确保容器有相对定位以便子元素可以绝对定位 */
.content {
  position: relative;
  overflow-x: hidden;
  min-height: 100%;
  perspective: 1000px;
}
</style>
