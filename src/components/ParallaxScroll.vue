<template>
  <div class="parallax-container" ref="container">
    <section
      v-for="(section, index) in sectionsData"
      :key="index"
      class="parallax-section"
      :class="{ 'first-section': index === 0 }"
      :style="{ backgroundImage: `url(${section.background})` }"
      ref="sectionRefs"
    >
      <div class="content-wrapper">
        <h2>{{ section.title }}</h2>
        <p>{{ section.description }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import jdImage from '@/assets/imgs/jd-xx.jpg'

// 定义部分数据
const sectionsData = reactive([
  {
    title: '吉林大学',
    description: '欢迎来到吉林大学',
    background: jdImage,
  },
  {
    title: '校园风光',
    description: '美丽的校园环境',
    background: jdImage,
  },
  {
    title: '学术氛围',
    description: '浓厚的学术氛围',
    background: jdImage,
  },
  // 可以添加更多部分
])

const container = ref<HTMLElement | null>(null)
const sectionRefs = ref<HTMLElement[]>([])
const currentIndex = ref(0)
let scrolling = false
let touchStartY = 0

// 处理滚动
function handleScroll(event: WheelEvent) {
  if (scrolling) return

  const direction = event.deltaY > 0 ? 'down' : 'up'

  // 处理第一个部分的特殊滚动行为
  if (currentIndex.value === 0 && direction === 'down') {
    event.preventDefault()
    scrollToSection(1, true)
  }
  // 处理从第二个部分到第一个部分的特殊滚动行为
  else if (currentIndex.value === 1 && direction === 'up') {
    event.preventDefault()
    scrollToSection(0, true)
  }
}

// 处理触摸事件
function handleTouchStart(event: TouchEvent) {
  touchStartY = event.touches[0].clientY
}

function handleTouchMove(event: TouchEvent) {
  if (scrolling) return

  const touchY = event.touches[0].clientY
  const direction = touchStartY > touchY ? 'down' : 'up'

  // 相同的特殊滚动逻辑
  if (currentIndex.value === 0 && direction === 'down') {
    event.preventDefault()
    scrollToSection(1, true)
  } else if (currentIndex.value === 1 && direction === 'up') {
    event.preventDefault()
    scrollToSection(0, true)
  }
}

// 滚动到指定部分
function scrollToSection(index: number, animate: boolean = false) {
  if (index < 0 || index >= sectionRefs.value.length) return

  scrolling = true
  currentIndex.value = index

  const targetSection = sectionRefs.value[index]

  if (animate) {
    targetSection.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      scrolling = false
    }, 1000) // 动画持续时间
  } else {
    targetSection.scrollIntoView()
    scrolling = false
  }
}

// 设置Intersection Observer来检测当前可见部分
function setupIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !scrolling) {
          const index = sectionRefs.value.findIndex((section) => section === entry.target)
          if (index !== -1) {
            currentIndex.value = index
          }
        }
      })
    },
    { threshold: 0.5 },
  )

  sectionRefs.value.forEach((section) => {
    observer.observe(section)
  })

  return observer
}

onMounted(() => {
  // 确保组件已挂载且引用可用
  if (container.value) {
    container.value.addEventListener('wheel', handleScroll, { passive: false })
    container.value.addEventListener('touchstart', handleTouchStart)
    container.value.addEventListener('touchmove', handleTouchMove, { passive: false })

    const observer = setupIntersectionObserver()

    onUnmounted(() => {
      if (container.value) {
        container.value.removeEventListener('wheel', handleScroll)
        container.value.removeEventListener('touchstart', handleTouchStart)
        container.value.removeEventListener('touchmove', handleTouchMove)
      }
      observer.disconnect()
    })
  }
})
</script>

<style scoped>
.parallax-container {
  height: 100vh;
  overflow-y: auto;
  perspective: 1px;
  scroll-behavior: smooth;
  position: relative;
}

.parallax-section {
  height: 100vh;
  width: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}

.first-section {
  z-index: 1;
}

.content-wrapper {
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 80%;
}

h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
}
</style>
