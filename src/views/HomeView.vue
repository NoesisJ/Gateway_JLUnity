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
            <!-- 改进文本容器 - 添加左侧渐变背景确保可读性 -->
            <div class="slide-content-wrapper relative flex h-full">
              <!-- 左侧渐变遮罩 -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-black/15 via-black/5 to-transparent w-2/3"
              ></div>

              <!-- 文本内容 -->
              <div
                class="slide-content text-white flex flex-col h-full pt-24 sm:pt-32 md:pt-48 pl-6 sm:pl-16 md:pl-32 z-10 relative"
              >
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6 drop-shadow-lg">
                  {{ slide.title }}
                </h1>
                <p
                  class="text-lg sm:text-xl md:text-2xl max-w-full sm:max-w-xl md:max-w-2xl drop-shadow-md"
                >
                  {{ slide.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 底部渐变黑色区域 -->
        <div
          class="absolute bottom-0 left-0 w-full h-20 sm:h-24 md:h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"
        ></div>

        <!-- 轮播图控制按钮 - 数字导航 (右下角) -->
        <div
          class="carousel-controls absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 flex items-center"
        >
          <div class="flex items-center">
            <div
              v-for="(_, index) in slides"
              :key="index"
              :class="[
                'carousel-number text-white text-base sm:text-lg md:text-xl cursor-pointer transition-all duration-300 relative',
                {
                  'font-bold scale-125': currentSlide === index,
                  'opacity-60': currentSlide !== index,
                },
              ]"
              :style="{
                marginRight: getMarginRight(index),
                marginLeft: getMarginLeft(index),
              }"
              @click="goToSlide(index)"
            >
              {{ index + 1 }}
              <!-- 只在当前数字和下一个数字之间显示线 -->
              <div
                v-if="currentSlide === index && index < slides.length - 1"
                class="active-line h-px bg-white absolute top-1/2"
                :style="{
                  right: getLineRight(),
                  width: getLineWidth(),
                }"
              ></div>
            </div>
          </div>
          <div class="arrow-icon text-white ml-1">
            <i class="pi pi-arrow-right text-xs sm:text-sm pl-2 sm:pl-4"></i>
          </div>
        </div>

        <!-- 右侧扩展按钮区域 -->
        <div
          class="extend-button-container absolute right-0 top-1/2 -translate-y-1/2 hidden sm:block"
        >
          <router-link to="/introduction">
            <div
              class="extend-button relative w-12 sm:w-14 md:w-16 lg:w-18 h-24 sm:h-28 md:h-32 lg:h-36 bg-[rgb(0,75,180)] rounded-l-full cursor-pointer group"
            >
              <div
                class="explore-text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
              >
                <div
                  class="flex flex-col items-center pl-2 sm:pl-3 text-base sm:text-lg md:text-xl"
                >
                  <span>探</span>
                  <span>索</span>
                  <span>吉</span>
                  <span>大</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <!-- 移动端浮动按钮 -->
        <div class="sm:hidden fixed right-0 top-1/2 -translate-y-1/2 z-20">
          <router-link to="/introduction">
            <div
              class="w-10 h-20 rounded-l-full bg-[rgb(0,75,180)] text-white flex items-center justify-center shadow-lg"
            >
              <div class="flex flex-col items-center px-2">
                <span class="text-xs mb-1">探</span>
                <span class="text-xs mb-1">索</span>
              </div>
            </div>
          </router-link>
        </div>

        <!-- 向下滚动指示器 -->
        <div
          class="scroll-indicator absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
          @click="scrollToContent"
        >
          <i class="pi pi-chevron-down text-white text-xl sm:text-2xl"></i>
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
        class="scroll-up-indicator absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        @click="scrollToCarousel"
      >
        <i class="pi pi-chevron-up text-blue-600 text-xl sm:text-2xl"></i>
      </div>

      <div class="container mx-auto py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
          校园风采
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card p-4 sm:p-5 md:p-6 bg-gray-50 rounded-lg shadow-md"
          >
            <h3 class="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4">
              {{ feature.title }}
            </h3>
            <p class="text-sm sm:text-base text-gray-700">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 第三部分内容 -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSectionStore } from '../stores/sectionStore'

// 导入图片资源
import jluSchool from '../assets/imgs/homeView/jlu1.jpg'
import jluFlower from '../assets/imgs/homeView/jlu-flower.jpg'
import jluCinema from '../assets/imgs/homeView/jlu-cinema.jpg'
import jluClassroom from '../assets/imgs/homeView/jlu-classroom.jpg'

// 屏幕尺寸响应值
const screenWidth = ref(window.innerWidth)

// 监听窗口大小变化
onMounted(() => {
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth
  })
})

// 动态计算间距
const getMarginRight = (index: number) => {
  if (currentSlide.value === index && index < slides.value.length - 1) {
    if (screenWidth.value < 640) return '2rem'
    if (screenWidth.value < 768) return '3rem'
    return '4rem'
  }
  return '0.25rem'
}

const getMarginLeft = (index: number) => {
  if (index === 0) return '0'
  if (screenWidth.value < 640) return '1rem'
  if (screenWidth.value < 768) return '1.5rem'
  return '2rem'
}

// 获取连接线右侧位置
const getLineRight = () => {
  if (screenWidth.value < 640) return '-2.25rem' // 小屏幕
  if (screenWidth.value < 768) return '-3.25rem' // 中等屏幕
  if (screenWidth.value < 1024) return '-4.25rem' // 大屏幕
  return '-4.5rem' // 超大屏幕
}

// 获取连接线宽度
const getLineWidth = () => {
  if (screenWidth.value < 640) return '2rem' // 小屏幕
  if (screenWidth.value < 768) return '3rem' // 中等屏幕
  if (screenWidth.value < 1024) return '4rem' // 大屏幕
  return '4.25rem' // 超大屏幕，最大宽度为4.25rem
}

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
    image: jluSchool,
    title: '吉林大学',
    description: '探索知识的殿堂，开启未来的征程',
  },
  {
    image: jluClassroom,
    title: '学术精神',
    description: '百年学府，薪火相传',
  },
  {
    image: jluFlower,
    title: '美丽校园',
    description: '四季如画，静待君来',
  },
  {
    image: jluCinema,
    title: '校园生活',
    description: '丰富多彩的校园生活，让你体验不一样的大学生活',
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
let slideInterval: ReturnType<typeof setInterval> | null = null

function startCarouselTimer() {
  // 清除现有的定时器
  if (slideInterval) {
    clearInterval(slideInterval)
  }

  // 设置新的定时器
  slideInterval = setInterval(() => {
    if (activeSection.value === 0) {
      nextSlide()
    }
  }, 6000)
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

function goToSlide(index: number) {
  currentSlide.value = index
  // 点击切换时重置定时器
  startCarouselTimer()
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
  // 重置轮播图定时器
  startCarouselTimer()

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
  // 启动轮播图定时器
  startCarouselTimer()

  // 确保组件卸载时清除定时器
  return () => {
    if (slideInterval) clearInterval(slideInterval)
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

/* 数字导航样式 */
.carousel-number {
  position: relative;
  z-index: 10;
}

.carousel-number:hover {
  opacity: 1;
}

/* 激活的数字样式 */
.carousel-number.scale-125 {
  opacity: 1;
}

/* 数字之间的连接线动画 */
.active-line {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 箭头图标悬停效果 */
.arrow-icon {
  opacity: 0.7;
  transition: all 0.3s ease;
}

.arrow-icon:hover {
  opacity: 1;
  transform: translateX(3px);
}
</style>
