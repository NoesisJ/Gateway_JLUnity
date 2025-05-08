<template>
  <AnimationView class="fixed top-0 left-0 w-screen h-screen m-0 p-0 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full m-0 p-0 overflow-hidden">
      <!-- 页面容器 -->
      <div
        class="absolute inset-0 flex transition-transform"
        :style="{
          transform: `translateX(-${currentPage * 100}%)`,
          transition: `transform ${transitionDuration}s ${transitionTiming} ${transitionDelay}s`,
        }"
      >
        <!-- 四个不同颜色的页面 -->
        <div class="page flex-shrink-0 w-full h-full bg-blue-500 flex items-center justify-center">
          <h1 class="text-4xl text-white font-bold">吉林大学简介 - 第一页</h1>
        </div>
        <div class="page flex-shrink-0 w-full h-full bg-green-500 flex items-center justify-center">
          <h1 class="text-4xl text-white font-bold">吉林大学简介 - 第二页</h1>
        </div>
        <div
          class="page flex-shrink-0 w-full h-full bg-yellow-500 flex items-center justify-center"
        >
          <h1 class="text-4xl text-white font-bold">吉林大学简介 - 第三页</h1>
        </div>
        <div class="page flex-shrink-0 w-full h-full bg-red-500 flex items-center justify-center">
          <h1 class="text-4xl text-white font-bold">吉林大学简介 - 第四页</h1>
        </div>
      </div>

      <!-- 底部黑色渐变背景 -->
      <div
        class="fixed bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/60 to-transparent z-10"
      ></div>

      <!-- 底部刻度尺进度条 -->
      <div
        class="progress-bar fixed bottom-12 left-1/2 transform -translate-x-1/2 w-[55%] sm:w-[65%] md:w-[55%] flex flex-col items-center z-20"
      >
        <!-- 刻度尺线 -->
        <div class="relative w-full h-0.5 bg-white/80">
          <!-- 小刻度标记 - 只在大刻度之间 -->
          <div class="absolute bottom-0 left-0 w-full">
            <!-- 第一区段小刻度 -->
            <div
              v-for="n in 9"
              :key="'small-1-' + n"
              class="absolute bottom-0 w-0.5 h-2 bg-white/80"
              :style="{ left: `${(n * (100 / 3)) / 10}%` }"
            ></div>

            <!-- 第二区段小刻度 -->
            <div
              v-for="n in 9"
              :key="'small-2-' + n"
              class="absolute bottom-0 w-0.5 h-2 bg-white/80"
              :style="{ left: `${100 / 3 + (n * (100 / 3)) / 10}%` }"
            ></div>

            <!-- 第三区段小刻度 -->
            <div
              v-for="n in 9"
              :key="'small-3-' + n"
              class="absolute bottom-0 w-0.5 h-2 bg-white/80"
              :style="{ left: `${200 / 3 + (n * (100 / 3)) / 10}%` }"
            ></div>
          </div>

          <!-- 主要刻度标记 -->
          <div class="absolute bottom-0 left-0 w-full flex justify-between">
            <!-- 第一个大刻度 -->
            <div class="relative cursor-pointer" @click="goToPage(0)">
              <div
                class="absolute bottom-0 left-1/2 w-1 h-4 bg-white transform -translate-x-1/2"
              ></div>
              <div
                v-if="currentPage === 0"
                class="absolute top-5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-white"
              ></div>
              <div
                class="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm md:text-base text-white font-medium whitespace-nowrap"
                :class="currentPage === 0 ? 'opacity-100' : 'opacity-70'"
              >
                数据
              </div>
            </div>

            <!-- 第二个大刻度 -->
            <div class="relative cursor-pointer" @click="goToPage(1)">
              <div
                class="absolute bottom-0 left-1/2 w-1 h-4 bg-white transform -translate-x-1/2"
              ></div>
              <div
                v-if="currentPage === 1"
                class="absolute top-5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-white"
              ></div>
              <div
                class="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm md:text-base text-white font-medium whitespace-nowrap"
                :class="currentPage === 1 ? 'opacity-100' : 'opacity-70'"
              >
                人物
              </div>
            </div>

            <!-- 第三个大刻度 -->
            <div class="relative cursor-pointer" @click="goToPage(2)">
              <div
                class="absolute bottom-0 left-1/2 w-1 h-4 bg-white transform -translate-x-1/2"
              ></div>
              <div
                v-if="currentPage === 2"
                class="absolute top-5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-white"
              ></div>
              <div
                class="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm md:text-base text-white font-medium whitespace-nowrap"
                :class="currentPage === 2 ? 'opacity-100' : 'opacity-70'"
              >
                史况
              </div>
            </div>

            <!-- 第四个大刻度 -->
            <div class="relative cursor-pointer" @click="goToPage(3)">
              <div
                class="absolute bottom-0 left-1/2 w-1 h-4 bg-white transform -translate-x-1/2"
              ></div>
              <div
                v-if="currentPage === 3"
                class="absolute top-5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-white"
              ></div>
              <div
                class="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm md:text-base text-white font-medium whitespace-nowrap"
                :class="currentPage === 3 ? 'opacity-100' : 'opacity-70'"
              >
                馆藏
              </div>
            </div>
          </div>

          <!-- 当前位置红点 -->
          <div
            class="absolute bottom-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full shadow-md shadow-black/30"
            :style="{
              left:
                currentPage === 0
                  ? '0%'
                  : currentPage === 1
                    ? '33.33%'
                    : currentPage === 2
                      ? '66.66%'
                      : '100%',
              transform: 'translate(-50%, 50%)',
            }"
          ></div>
        </div>
      </div>

      <!-- 右侧箭头 -->
      <div
        class="next-button fixed right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:scale-110 z-20"
        @click="nextPage"
        v-show="currentPage < 3"
      >
        <i class="pi pi-arrow-right text-xl sm:text-2xl text-blue-600"></i>
      </div>
    </div>
  </AnimationView>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AnimationView from '../components/animationView.vue'

// 当前页面索引
const currentPage = ref(0)

// 动画时间和缓动函数
const transitionDuration = ref(0.4)
const transitionTiming = ref('linear')
const transitionDelay = ref(0.2)

// 下一页
const nextPage = () => {
  if (currentPage.value < 3) {
    transitionDuration.value = 0.4
    transitionTiming.value = 'linear'
    transitionDelay.value = 0.2
    currentPage.value++
  }
}

// 跳转到指定页面
const goToPage = (pageIndex: number) => {
  if (pageIndex === currentPage.value) return

  // 计算页面间距
  const distance = Math.abs(pageIndex - currentPage.value)

  if (distance === 1) {
    // 相邻页面正常过渡
    transitionDuration.value = 0.4
    transitionTiming.value = 'linear'
    transitionDelay.value = 0.2
  } else {
    // 非相邻页面，先快速过渡中间页面
    transitionDuration.value = 0.1
    transitionTiming.value = 'linear'
    transitionDelay.value = 0

    // 先移动到中间页面
    if (pageIndex > currentPage.value) {
      currentPage.value = pageIndex - 1
    } else {
      currentPage.value = pageIndex + 1
    }

    // 然后延迟后移动到目标页面
    setTimeout(() => {
      transitionDuration.value = 0.4
      transitionTiming.value = 'linear'
      transitionDelay.value = 0.2
      currentPage.value = pageIndex
    }, 100)

    return
  }

  currentPage.value = pageIndex
}

onMounted(() => {
  // 确保页面加载后填满整个屏幕
  document.body.classList.add('overflow-hidden')
})
</script>
