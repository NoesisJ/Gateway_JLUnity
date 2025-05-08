<template>
  <div class="flex flex-col h-screen w-full overflow-hidden">
    <HeaderLayout v-if="!hideHeader" class="w-full" />
    <ContentLayout
      class="w-full overflow-auto"
      :class="{ 'h-screen': hideHeader, 'h-[calc(100vh-6rem)]': !hideHeader }"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderLayout from './headerLayout.vue'
import ContentLayout from './contentLayout.vue'

const route = useRoute()
const hideHeader = computed(() => route.meta.hideHeader as boolean)
</script>
