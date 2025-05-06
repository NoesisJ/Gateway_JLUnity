import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSectionStore = defineStore('section', () => {
  // 0 = 轮播图部分, 1 = 内容部分
  const activeSection = ref(0)
  // 控制header是否可见
  const headerVisible = ref(true)

  function setActiveSection(section: number) {
    activeSection.value = section
  }

  function hideHeader() {
    headerVisible.value = false
  }

  function showHeader() {
    headerVisible.value = true
  }

  return {
    activeSection,
    headerVisible,
    setActiveSection,
    hideHeader,
    showHeader,
  }
})
