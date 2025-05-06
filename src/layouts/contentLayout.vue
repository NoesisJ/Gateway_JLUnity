<template>
  <div class="w-full h-full bg-gray-200">
    <div :class="contentClass">
      <router-view />
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
