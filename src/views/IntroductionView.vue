<template>
  <AnimationView class="fixed top-0 left-0 w-screen h-screen m-0 p-0 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full m-0 p-0 overflow-hidden">
      <!-- 页面容器 -->
      <div
        class="absolute inset-0 flex transition-transform"
        :style="{
          transform: `translateX(-${currentPage * 100}%)`,
          transition: `transform ${transitionDuration}s ${transitionTiming}`,
        }"
      >
        <!-- 第一页 - 数据页 -->
        <div class="page flex-shrink-0 w-full h-full flex">
          <!-- 左侧区域 - 20%宽度 -->
          <div
            class="w-[20%] h-full bg-[#213d65] flex flex-col items-center justify-center text-white relative left-section-bg"
          >
            <div class="flex flex-col items-center">
              <div class="text-5xl from-neutral-400 writing-vertical-lr mb-8">关于·吉大</div>
            </div>
            <div
              class="writing-vertical-lr text-amber-50 absolute right-24"
              style="letter-spacing: 0.5em"
            >
              求实创新，励志图强
            </div>
          </div>

          <!-- 右侧区域 - 80%宽度 - 网格布局 -->
          <div
            class="w-[80%] h-full grid grid-cols-6 grid-rows-4 right-section-bg bg-[#446294] perspective-1000"
          >
            <!-- 第一行 -->
            <div
              :class="['grid-cell', 'grid-color-1', { 'animate-grid-rotate': currentPage === 0 }]"
              style="animation-delay: 0ms"
            ></div>
            <div
              :class="['grid-cell', 'grid-color-2', { 'animate-grid-rotate': currentPage === 0 }]"
              style="animation-delay: 50ms"
            ></div>
            <div
              :class="['grid-cell', 'grid-color-3', { 'animate-grid-rotate': currentPage === 0 }]"
              style="animation-delay: 100ms"
            >
              <div class="grid-cell-content">
                <div class="grid-cell-number">1946</div>
                <div class="grid-cell-text">吉大创办时间</div>
              </div>
            </div>
            <div
              :class="[
                'grid-cell',
                'grid-color-1-light',
                { 'animate-grid-rotate': currentPage === 0 },
              ]"
              style="animation-delay: 150ms"
            ></div>
            <div
              :class="['grid-cell', 'grid-color-1', { 'animate-grid-rotate': currentPage === 0 }]"
              style="animation-delay: 200ms"
            >
              <div class="grid-cell-content">
                <div class="grid-cell-number">33</div>
                <div class="grid-cell-text">近五年两院院士</div>
              </div>
            </div>
            <div
              :class="[
                'grid-cell',
                'grid-color-3-light',
                { 'animate-grid-rotate': currentPage === 0 },
              ]"
              style="animation-delay: 250ms"
            ></div>

            <!-- 第二行 -->
            <div
              :class="['grid-cell', 'grid-color-2', { 'animate-grid-rotate': currentPage === 0 }]"
              style="animation-delay: 300ms"
            >
              <div class="grid-cell-content">
                <div class="grid-cell-number">72152</div>
                <div class="grid-cell-text">全日制学生</div>
              </div>
            </div>
            <div
              :class="[
                'grid-cell',
                'grid-color-1-light',
                { 'animate-grid-rotate': currentPage === 0 },
              ]"
              style="animation-delay: 350ms"
            >
              <div class="grid-cell-content">
                <div class="grid-cell-number">16589</div>
                <div class="grid-cell-text">教职工</div>
              </div>
            </div>
            <div
              :class="[
                'grid-cell',
                'grid-color-2-light',
                { 'animate-grid-rotate': currentPage === 0 },
              ]"
              style="animation-delay: 400ms"
            ></div>
            <div
              :class="[
                'grid-cell',
                'grid-color-3-light',
                { 'animate-grid-rotate': currentPage === 0 },
              ]"
              style="animation-delay: 450ms"
            >
              <div class="grid-cell-content">
                <div class="grid-cell-number">41949</div>
                <div class="grid-cell-text">本科生</div>
              </div>
            </div>
            <div
              :class="['grid-cell', 'grid-color-2', { 'animate-grid-rotate': currentPage === 0 }]"
              style="animation-delay: 500ms"
            >
              <div class="grid-cell-content">
                <div class="grid-cell-number">32,492</div>
                <div class="grid-cell-text">研究生</div>
              </div>
            </div>
            <div
              :class="[
                'grid-cell',
                'grid-color-1-light',
                { 'animate-grid-rotate': currentPage === 0 },
              ]"
              style="animation-delay: 550ms"
            ></div>

            <!-- 第三行 -->
            <div
              :class="[
                'grid-cell',
                'grid-color-3-light',
                { 'animate-grid-rotate': currentPage === 0 },
              ]"
              style="animation-delay: 600ms"
            ></div>
            <div
              :class="[
                'grid-cell',
                'grid-color-2-light',
                { 'animate-grid-rotate': currentPage === 0 },
              ]"
              style="animation-delay: 650ms"
            ></div>
            <div
              :class="['grid-cell', 'grid-color-1', { 'animate-grid-rotate': currentPage === 0 }]"
              style="animation-delay: 700ms"
            >
              <div class="grid-cell-content">
                <div class="grid-cell-number">139</div>
                <div class="grid-cell-text">本科招生专业</div>
              </div>
            </div>
            <div
              :class="[
                'grid-cell',
                'grid-color-1-light',
                { 'animate-grid-rotate': currentPage === 0 },
              ]"
              style="animation-delay: 750ms"
            >
              <div class="grid-cell-content">
                <div class="grid-cell-number">89</div>
                <div class="grid-cell-text">国家一流课程</div>
              </div>
            </div>
            <div
              :class="['grid-cell', 'grid-color-3', { 'animate-grid-rotate': currentPage === 0 }]"
              style="animation-delay: 800ms"
            ></div>
            <div
              :class="[
                'grid-cell',
                'grid-color-2-light',
                { 'animate-grid-rotate': currentPage === 0 },
              ]"
              style="animation-delay: 850ms"
            ></div>

            <!-- 第四行 -->
            <div
              :class="['grid-cell', 'grid-color-1', { 'animate-grid-rotate': currentPage === 0 }]"
              style="animation-delay: 900ms"
            ></div>
            <div
              :class="['grid-cell', 'grid-color-3', { 'animate-grid-rotate': currentPage === 0 }]"
              style="animation-delay: 950ms"
            ></div>
            <div
              :class="[
                'grid-cell',
                'grid-color-2-light',
                { 'animate-grid-rotate': currentPage === 0 },
              ]"
              style="animation-delay: 1000ms"
            ></div>
            <div
              :class="[
                'grid-cell',
                'grid-color-3-light',
                { 'animate-grid-rotate': currentPage === 0 },
              ]"
              style="animation-delay: 1050ms"
            >
              <div class="grid-cell-content">
                <div class="grid-cell-number">858</div>
                <div class="grid-cell-text">外国留学生</div>
              </div>
            </div>
            <div
              :class="['grid-cell', 'grid-color-1', { 'animate-grid-rotate': currentPage === 0 }]"
              style="animation-delay: 1100ms"
            >
              <div class="grid-cell-content">
                <div class="grid-cell-number">821.8</div>
                <div class="grid-cell-text">图书馆藏书(万册)</div>
              </div>
            </div>
            <div
              :class="['grid-cell', 'grid-color-2', { 'animate-grid-rotate': currentPage === 0 }]"
              style="animation-delay: 1150ms"
            ></div>
          </div>
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
import { ref, onMounted, watch, onBeforeUnmount } from 'vue'
import AnimationView from '../components/animationView.vue'

// 当前页面索引
const currentPage = ref(0)

// 动画时间和缓动函数
const transitionDuration = ref(0.8)
const transitionTiming = ref('ease-out')
const transitionDelay = ref(0)

// 标记是否是从外部页面进入
const isFromExternalPage = ref(true)

// 存储文字旋转的定时器ID
let textRotateTimer: number | null = null

// 网格动画控制
const resetGridAnimation = () => {
  // 移除并重新添加动画类，以便重新触发动画
  if (currentPage.value === 0) {
    const gridCells = document.querySelectorAll('.grid-cell')
    gridCells.forEach((cell) => {
      cell.classList.remove('animate-grid-rotate')
      setTimeout(() => {
        cell.classList.add('animate-grid-rotate')
      }, 50)
    })
  }
}

// 随机文字旋转动画
const startRandomTextRotation = () => {
  // 只有在第一页才启动文字旋转动画
  if (currentPage.value !== 0) return

  // 获取所有带有文字的格子
  const cellsWithText = document.querySelectorAll('.grid-cell-content')
  if (cellsWithText.length === 0) return

  // 随机选择一个格子的文字
  const randomIndex = Math.floor(Math.random() * cellsWithText.length)
  const selectedCell = cellsWithText[randomIndex]

  // 获取数字元素和文本元素
  const numberElement = selectedCell.querySelector('.grid-cell-number')
  const textElement = selectedCell.querySelector('.grid-cell-text')

  if (numberElement) {
    // 先移除可能存在的动画类，然后添加动画类
    numberElement.classList.remove('animate-text-rotate')
    // 使用setTimeout可以强制重新计算，确保动画重新播放
    setTimeout(() => {
      numberElement.classList.add('animate-text-rotate')
    }, 10)
  }

  // 延迟500ms后旋转文本元素
  if (textElement) {
    textElement.classList.remove('animate-text-rotate')
    setTimeout(() => {
      textElement.classList.add('animate-text-rotate')
    }, 500)
  }
}

// 启动定时器，每6秒旋转一次
const setupTextRotationTimer = () => {
  // 清除可能存在的旧定时器
  if (textRotateTimer !== null) {
    clearInterval(textRotateTimer)
  }

  // 设置新定时器
  textRotateTimer = setInterval(() => {
    startRandomTextRotation()
  }, 6000) as unknown as number

  // 立即执行一次
  startRandomTextRotation()
}

// 清除定时器
const clearTextRotationTimer = () => {
  if (textRotateTimer !== null) {
    clearInterval(textRotateTimer)
    textRotateTimer = null
  }
}

// 监视页面变化
watch(currentPage, (newValue, oldValue) => {
  if (newValue === 0 && oldValue !== 0) {
    // 仅当是在Introduction页面内部切换时触发动画
    if (!isFromExternalPage.value) {
      setTimeout(resetGridAnimation, 300)
    }
    // 切换到第一页时启动文字旋转定时器
    setupTextRotationTimer()
  } else if (newValue !== 0) {
    // 离开第一页时清除定时器
    clearTextRotationTimer()
  }
  // 一旦发生了页面切换，就不再是从外部页面进入的状态
  if (isFromExternalPage.value) {
    isFromExternalPage.value = false
  }
})

// 下一页
const nextPage = () => {
  if (currentPage.value < 3) {
    transitionDuration.value = 0.8
    transitionTiming.value = 'ease-out'
    transitionDelay.value = 0
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
    transitionDuration.value = 0.8
    transitionTiming.value = 'ease-out'
    transitionDelay.value = 0
  } else {
    // 非相邻页面，先快速过渡中间页面
    transitionDuration.value = 0.1
    transitionTiming.value = 'ease-out'
    transitionDelay.value = 0

    // 先移动到中间页面
    if (pageIndex > currentPage.value) {
      currentPage.value = pageIndex - 1
    } else {
      currentPage.value = pageIndex + 1
    }

    // 然后延迟后移动到目标页面
    setTimeout(() => {
      transitionDuration.value = 0.8
      transitionTiming.value = 'ease-out'
      transitionDelay.value = 0
      currentPage.value = pageIndex
    }, 100)

    return
  }

  currentPage.value = pageIndex
}

onMounted(() => {
  // 确保页面加载后填满整个屏幕
  document.body.classList.add('overflow-hidden')

  // 初始加载时不触发网格动画
  // 设置一个标志，表示第一次加载页面不需要触发动画
  isFromExternalPage.value = true

  // 如果初始页面是第一页，启动文字旋转定时器
  if (currentPage.value === 0) {
    // 延迟一下启动，确保DOM已经加载完毕
    setTimeout(setupTextRotationTimer, 1000)
  }
})

onBeforeUnmount(() => {
  // 组件卸载前清除定时器
  clearTextRotationTimer()
})
</script>

<style scoped>
.writing-vertical-lr {
  writing-mode: vertical-lr;
  text-orientation: upright;
}

.left-section-bg {
  background-image: url('../assets/imgs/introductionView/jlu-introduction2.png');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
}

.right-section-bg {
  background-image: url('../assets/imgs/introductionView/jlu-introduction1.jpg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
}
</style>
