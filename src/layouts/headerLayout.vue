<template>
  <div
    :class="[
      'header-layout h-24 z-10 w-full flex fixed left-0 justify-between items-center px-8 transition-all duration-500',
      activeSection === 0
        ? 'bg-gradient-to-b from-black/50 to-black/0 text-white'
        : 'bg-white text-black',
      headerVisible ? 'top-0' : '-top-24',
    ]"
  >
    <div class="logo-container flex items-center">
      <img src="../assets/imgs/jlulogo-removebg-preview.png" alt="logo" class="h-20" />
    </div>
    <div class="menu-container flex space-x-12 text-xl font-medium pr-32">
      <div class="menu-item cursor-pointer hover:text-blue-400 transition-colors">吉大概况</div>
      <div class="menu-item cursor-pointer hover:text-blue-400 transition-colors">校园导览</div>
      <div class="menu-item cursor-pointer hover:text-blue-400 transition-colors">学术资源</div>
      <div class="menu-item cursor-pointer hover:text-blue-400 transition-colors">校园生活</div>
      <div class="menu-item cursor-pointer hover:text-blue-400 transition-colors">
        <router-link to="/scenery">四季美景</router-link>
      </div>
      <div class="menu-item cursor-pointer hover:text-blue-400 transition-colors">吉大周边</div>
    </div>
    <div class="icon-container flex space-x-8 pr-8">
      <div class="icon-item cursor-pointer">
        <i class="pi pi-search text-xl"></i>
      </div>
      <div class="icon-item cursor-pointer">
        <i class="pi pi-user text-xl"></i>
      </div>
      <div class="icon-item cursor-pointer">
        <i class="pi pi-phone text-xl"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSectionStore } from '../stores/sectionStore'

const sectionStore = useSectionStore()
const activeSection = computed(() => sectionStore.activeSection)
const headerVisible = computed(() => sectionStore.headerVisible)
</script>

<style scoped>
/* hideHeader动画 */
.header-layout {
  transition: all 0.3s ease-in-out;
}
</style>
