<template>
  <div class="carousel-container h-[100vh] w-full relative overflow-hidden">
    <!-- 轮播图部分 -->
    <div class="carousel-slides w-full h-full flex transition-transform duration-500">
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
    <div class="carousel-controls absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
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
  </div>

  <!-- 第二部分内容 -->
  <div class="content-section w-full min-h-screen bg-white">
    <div class="container mx-auto py-16 px-8">
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
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

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
])

// 轮播图逻辑
const currentSlide = ref(0)

// 自动轮播
onMounted(() => {
  setInterval(() => {
    nextSlide()
  }, 5000)
})

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

function goToSlide(index: number) {
  currentSlide.value = index
}
</script>

<style scoped>
.carousel-slides {
  transform: translateX(calc(-100% * v-bind(currentSlide)));
}
</style>
