<template>
  <div ref="homeContainer" class="home-container relative overflow-hidden" @wheel="handleScroll">
    <div
      ref="carouselSection"
      :class="[
        'carousel-section w-full h-screen flex flex-col transition-transform duration-700',
        { 'translate-y-[-100vh]': activeSection === 1 },
      ]"
    >
      <!-- 轮播图部分 -->
      <div class="carousel-container w-full flex-grow relative overflow-hidden">
        <div class="carousel-slides w-full h-full flex transition-transform duration-500">
          <!-- 轮播图内容 -->
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="carousel-slide w-full h-full flex-shrink-0 bg-cover bg-center"
            :style="{ backgroundImage: `url(${slide.image})` }"
          >
            <div class="slide-content text-white p-16 flex flex-col h-full pt-36">
              <h1 class="text-5xl font-bold mb-6">{{ slide.title }}</h1>
              <p class="text-2xl max-w-2xl">{{ slide.description }}</p>
            </div>
          </div>
        </div>

        <!-- 轮播图控制按钮 -->
        <div
          class="carousel-controls absolute bottom-8 left-0 right-0 flex justify-center space-x-4"
        >
          <div
            v-for="(_, index) in slides"
            :key="index"
            class="carousel-dot w-3 h-3 rounded-full bg-white opacity-50 cursor-pointer"
            :class="{ 'opacity-100': currentSlide === index }"
            @click="goToSlide(index)"
          ></div>
        </div>

        <!-- 上一张/下一张按钮 -->
        <button
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-20 hover:bg-opacity-40 transition-all p-3 rounded-full shadow-lg"
          @click="prevSlide"
        >
          <i class="pi pi-chevron-left text-white text-xl"></i>
        </button>
        <button
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-20 hover:bg-opacity-40 transition-all p-3 rounded-full shadow-lg"
          @click="nextSlide"
        >
          <i class="pi pi-chevron-right text-white text-xl"></i>
        </button>

        <!-- 向下滚动指示器 -->
        <div
          class="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          @click="scrollToContent"
        >
          <i class="pi pi-chevron-down text-white text-2xl"></i>
        </div>
      </div>
    </div>

    <!-- 第二部分内容 -->
    <div
      ref="contentSection"
      class="content-section w-full min-h-screen bg-white absolute top-full left-0 transition-transform duration-700"
      :class="{ '-translate-y-full': activeSection === 1 }"
    >
      <div
        class="scroll-up-indicator absolute top-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        @click="scrollToCarousel"
      >
        <i class="pi pi-chevron-up text-blue-600 text-2xl"></i>
      </div>

      <div class="container mx-auto py-24 px-8">
        <h2 class="text-4xl font-bold mb-12 text-center">校园风采</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card p-6 bg-gray-50 rounded-lg shadow-md"
          >
            <h3 class="text-2xl font-semibold mb-4">{{ feature.title }}</h3>
            <p class="text-gray-700">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSectionStore } from '../stores/sectionStore'

// 导入图片资源
import jlu1 from '../assets/imgs/jlu1.jpg'

interface Slide {
  image: string
  title: string
  description: string
}

interface Feature {
  title: string
  description: string
}

// 轮播图数据
const slides = ref<Slide[]>([
  {
    image: jlu1,
    title: '吉林大学',
    description: '探索知识的殿堂，开启未来的征程',
  },
  {
    image: jlu1,
    title: '学术精神',
    description: '百年学府，薪火相传',
  },
  {
    image: jlu1,
    title: '美丽校园',
    description: '四季如画，静待君来',
  },
])

// 特色内容数据
const features = ref<Feature[]>([
  {
    title: '悠久历史',
    description: '吉林大学的前身可追溯至1946年，经过数十年的发展，已成为国内一流的研究型综合大学。',
  },
  {
    title: '学科建设',
    description: '拥有众多国家重点学科，涵盖理、工、医、文、经、管、法、哲、教育、艺术等多个领域。',
  },
  {
    title: '文化传承',
    description: '传承和弘扬优秀的校园文化，培养具有创新精神和实践能力的优秀人才。',
  },
  {
    title: '校园景观',
    description:
      '前卫校区、中心校区、南岭校区等多个校区各具特色，绿树成荫，环境优美，是学习和生活的理想场所。',
  },
  {
    title: '科研成就',
    description: '在多个领域取得了一系列重大科研突破，多项成果获国家级奖项，产学研合作成果丰硕。',
  },
  {
    title: '国际交流',
    description:
      '与世界多所知名高校建立了合作关系，开展了广泛的学术交流与合作研究项目，培养国际化人才。',
  },
  {
    title: '名师荟萃',
    description:
      '汇聚了一批院士、长江学者、国家杰出青年科学基金获得者等高水平师资队伍，教学质量一流。',
  },
  {
    title: '图书资源',
    description: '拥有丰富的馆藏资源，数字图书馆系统完善，为师生提供便捷的学习研究资料查阅服务。',
  },
  {
    title: '校友网络',
    description:
      '培养了众多杰出校友，在各行各业做出了卓越贡献，形成了强大的校友网络和深厚的文化底蕴。',
  },
])

// 轮播图逻辑
const currentSlide = ref(0)

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

function goToSlide(index: number) {
  currentSlide.value = index
}

// 滚动视差相关
const homeContainer = ref<HTMLElement | null>(null)
const carouselSection = ref<HTMLElement | null>(null)
const contentSection = ref<HTMLElement | null>(null)
const sectionStore = useSectionStore()
const activeSection = ref(0) // 0 = 轮播图, 1 = 内容区
const isScrolling = ref(false)
let scrollTimeout: ReturnType<typeof setTimeout> | null = null

// 监听滚动事件
function handleScroll(e: WheelEvent) {
  // 如果正在滚动动画中，忽略滚动事件
  if (isScrolling.value || scrollTimeout) {
    return
  }

  // 使用简单的延时来防止过快触发
  scrollTimeout = setTimeout(() => {
    // 判断滚动方向和当前位置
    if (e.deltaY > 0 && activeSection.value === 0) {
      // 向下滚动且当前在第一部分，滚动到内容区
      scrollToContent()
    } else if (e.deltaY < 0 && activeSection.value === 1) {
      // 向上滚动且当前在第二部分，滚动到轮播图区
      scrollToCarousel()
    }

    scrollTimeout = null
  }, 50)
}

// 滚动到内容区
function scrollToContent() {
  if (isScrolling.value) return

  isScrolling.value = true
  activeSection.value = 1
  sectionStore.setActiveSection(1)
  // 隐藏header
  sectionStore.hideHeader()

  setTimeout(() => {
    isScrolling.value = false
    // 显示header
    sectionStore.showHeader()
  }, 400)
}

// 滚动到轮播图区
function scrollToCarousel() {
  if (isScrolling.value) return

  isScrolling.value = true
  activeSection.value = 0
  sectionStore.setActiveSection(0)
  // 隐藏header
  sectionStore.hideHeader()

  setTimeout(() => {
    isScrolling.value = false
    // 显示header
    sectionStore.showHeader()
  }, 400)
}

// 初始化设置
onMounted(() => {
  // 确保初始状态正确
  sectionStore.setActiveSection(0)

  // 设置自动轮播
  const slideInterval = setInterval(() => {
    if (activeSection.value === 0) {
      nextSlide()
    }
  }, 5000)

  // 确保组件卸载时清除定时器
  return () => {
    clearInterval(slideInterval)
    if (scrollTimeout) clearTimeout(scrollTimeout)
  }
})
</script>

<style scoped>
.carousel-slides {
  transform: translateX(calc(-100% * v-bind(currentSlide)));
}

.home-container {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

/* 确保滚动视差区域高度正确 */
.carousel-section,
.content-section {
  min-height: 100vh;
  will-change: transform;
}

/* 动画效果 */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1.5s infinite;
}

/* 悬停效果 */
.scroll-indicator:hover,
.scroll-up-indicator:hover {
  transform: translateX(-50%) scale(1.2);
  transition: transform 0.2s;
}
</style>
