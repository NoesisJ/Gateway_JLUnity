<template>
  <div
    class="introduction-view-container relative min-h-screen w-full bg-white overflow-hidden p-0 m-0"
  >
    <!-- 主内容区域 -->
    <div
      class="content-container p-8 absolute inset-0"
      :class="{ 'content-visible': contentVisible }"
    >
      <slot></slot>
    </div>

    <!-- 过渡动画层 - 纯色覆盖层 -->
    <div
      class="blue-overlay absolute inset-0 z-20 rounded-2xl md:rounded-3xl overflow-hidden"
      :class="{
        'animate-step1': animationStep >= 1 && animationStep < 5,
        'animate-step5': animationStep >= 5,
      }"
    >
      <!-- 背景渐变 -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#4B6CB7] to-[#182848]"></div>

      <!-- 动态条纹 -->
      <div class="stripes-container absolute inset-0 overflow-hidden opacity-20">
        <div class="stripe stripe-1"></div>
        <div class="stripe stripe-2"></div>
        <div class="stripe stripe-3"></div>
        <div class="stripe stripe-4"></div>
      </div>

      <!-- 几何图形 -->
      <div class="geometric-shapes absolute inset-0 overflow-hidden">
        <div class="circle-shape circle-1"></div>
        <div class="circle-shape circle-2"></div>
        <div class="square-shape square-1"></div>
        <div class="square-shape square-2"></div>
      </div>
    </div>

    <!-- 过渡动画层 - 加载动画层 -->
    <div
      class="white-overlay absolute inset-0 z-30 flex items-center justify-center rounded-2xl md:rounded-3xl overflow-hidden"
      :class="{
        'animate-step2': animationStep >= 2 && animationStep < 4,
        'animate-step4': animationStep >= 4,
      }"
    >
      <!-- 白色加载层背景 -->
      <div class="absolute inset-0 bg-gradient-to-br from-white to-[#f5f7fa]"></div>

      <!-- 白色加载层动态条纹 -->
      <div class="stripes-container-white absolute inset-0 overflow-hidden opacity-10">
        <div class="stripe-white stripe-white-1"></div>
        <div class="stripe-white stripe-white-2"></div>
        <div class="stripe-white stripe-white-3"></div>
      </div>

      <!-- 白色加载层几何图形 -->
      <div class="geometric-shapes-white absolute inset-0 overflow-hidden">
        <div class="circle-shape-white circle-white-1"></div>
        <div class="circle-shape-white circle-white-2"></div>
        <div class="hexagon-shape hexagon-1"></div>
        <div class="triangle-shape triangle-1"></div>
      </div>

      <div
        class="flex flex-col items-center relative z-10"
        :class="{
          'opacity-0 pointer-events-none': animationStep < 3,
          'fade-out': animationStep > 3,
        }"
      >
        <!-- 高级加载动画 -->
        <div class="loader-container relative">
          <div class="circle-loader"></div>
          <div class="circle-loader circle-loader-2"></div>
          <div class="circle-loader circle-loader-3"></div>
          <div class="pulse-circle"></div>
          <i
            class="pi pi-arrow-right text-4xl text-[#4B6CB7] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></i>
        </div>
        <div class="mt-6 text-xl text-[#4B6CB7] font-medium">
          {{ isReturning ? '正在返回首页' : '正在加载吉大简介' }}
        </div>
      </div>
    </div>

    <!-- 左侧返回按钮 -->
    <div
      v-if="contentVisible"
      class="return-button-container absolute left-0 top-1/2 -translate-y-1/2 z-20"
      @click="returnToHome"
    >
      <div
        class="return-button relative w-12 sm:w-14 md:w-16 lg:w-18 h-24 sm:h-28 md:h-32 lg:h-36 bg-[rgb(0,75,180)] rounded-r-full cursor-pointer group"
      >
        <div
          class="explore-text absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
        >
          <div class="flex flex-col items-center pl-2 sm:pl-3 text-base sm:text-lg md:text-xl">
            <span>返</span>
            <span>回</span>
            <span>首</span>
            <span>页</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const contentVisible = ref(false)
// 动画状态: 0=初始, 1=蓝页右到左, 2=白页右到左, 3=加载, 4=白页左到右, 5=蓝页左到右, 6=显示内容
const animationStep = ref(0)
// 控制是否是返回动画
const isReturning = ref(false)

// 进入时的动画序列
function playEnterAnimation() {
  // 1. 蓝色页面从右向左移动
  setTimeout(() => {
    animationStep.value = 1

    // 2. 白色页面从右向左移动
    setTimeout(() => {
      animationStep.value = 2

      // 3. 显示加载动画
      setTimeout(() => {
        animationStep.value = 3

        // 4. 白色页面从左向右移动
        setTimeout(() => {
          animationStep.value = 4

          // 5. 蓝色页面从左向右移动
          setTimeout(() => {
            animationStep.value = 5

            // 6. 显示内容
            setTimeout(() => {
              contentVisible.value = true
              animationStep.value = 6
            }, 300) // 蓝色页面移动完成后
          }, 180) // 白色页面移动完成后
        }, 1000) // 加载动画显示时间
      }, 180) // 白色页面移动完成后
    }, 300) // 蓝色页面移动完成后
  }, 10) // 初始延迟
}

// 返回动画序列
function playExitAnimation() {
  isReturning.value = true
  contentVisible.value = false

  // 1. 蓝色页面从右向左移动
  setTimeout(() => {
    animationStep.value = 1

    // 2. 白色页面从右向左移动
    setTimeout(() => {
      animationStep.value = 2

      // 3. 显示加载动画
      setTimeout(() => {
        animationStep.value = 3

        // 4. 白色页面从左向右移动
        setTimeout(() => {
          animationStep.value = 4

          // 5. 蓝色页面从左向右移动
          setTimeout(() => {
            animationStep.value = 5

            // 6. 跳转回首页
            setTimeout(() => {
              router.push('/')
            }, 300) // 蓝色页面移动完成后
          }, 180) // 白色页面移动完成后
        }, 800) // 加载动画显示时间
      }, 180) // 白色页面移动完成后
    }, 300) // 蓝色页面移动完成后
  }, 10) // 初始延迟
}

// 返回首页
function returnToHome() {
  playExitAnimation()
}

// 初始化时执行进入动画
onMounted(() => {
  playEnterAnimation()
})
</script>

<style scoped>
/* 内容区域动画 */
.content-container {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.content-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 蓝色背景层动画 */
.blue-overlay {
  transform: translateX(100%); /* 初始位置在右侧 */
}

/* 步骤1: 蓝色页面从右向左移动 */
.blue-overlay.animate-step1 {
  transform: translateX(0);
  transition: transform 0.4s ease-in; /* 低速加速运动 */
}

/* 步骤5: 蓝色页面从左向右移动 */
.blue-overlay.animate-step5 {
  transform: translateX(100%);
  transition: transform 0.4s ease-in; /* 低速加速运动 */
}

/* 白色加载层动画 */
.white-overlay {
  transform: translateX(100%); /* 初始位置在右侧 */
  opacity: 1;
}

/* 步骤2: 白色页面从右向左移动 */
.white-overlay.animate-step2 {
  transform: translateX(0);
  transition: transform 0.4s linear; /* 匀速运动 */
}

/* 步骤4: 白色页面从左向右移动 */
.white-overlay.animate-step4 {
  transform: translateX(100%);
  transition: transform 0.4s linear; /* 匀速运动 */
}

/* 加载动画淡出效果 */
.fade-out {
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* 动态条纹 */
.stripes-container {
  width: 100%;
  height: 100%;
}

.stripe {
  position: absolute;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%
  );
  background-size: 100px 100px;
  transform: skewX(-30deg);
}

.stripe-1 {
  width: 35%;
  left: -10%;
  animation: stripe-move 50s linear infinite;
}

.stripe-2 {
  width: 30%;
  left: 30%;
  animation: stripe-move 40s linear infinite reverse;
}

.stripe-3 {
  width: 25%;
  right: 10%;
  animation: stripe-move 60s linear infinite;
}

.stripe-4 {
  width: 45%;
  right: -15%;
  animation: stripe-move 35s linear infinite reverse;
}

/* 白色加载层动态条纹 */
.stripes-container-white {
  width: 100%;
  height: 100%;
}

.stripe-white {
  position: absolute;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(75, 108, 183, 0.07) 25%,
    transparent 25%,
    transparent 50%,
    rgba(75, 108, 183, 0.07) 50%,
    rgba(75, 108, 183, 0.07) 75%,
    transparent 75%
  );
  background-size: 100px 100px;
  transform: skewX(30deg);
}

.stripe-white-1 {
  width: 35%;
  left: -10%;
  animation: stripe-move 60s linear infinite;
}

.stripe-white-2 {
  width: 40%;
  left: 25%;
  animation: stripe-move 45s linear infinite reverse;
}

.stripe-white-3 {
  width: 30%;
  right: 5%;
  animation: stripe-move 50s linear infinite;
}

@keyframes stripe-move {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1000px 0;
  }
}

/* 几何图形 */
.geometric-shapes {
  width: 100%;
  height: 100%;
}

.circle-shape {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.03) 70%,
    rgba(0, 0, 0, 0) 100%
  );
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: 20%;
  animation: float 20s ease-in-out infinite;
}

.circle-2 {
  width: 400px;
  height: 400px;
  bottom: 5%;
  right: 15%;
  animation: float 25s ease-in-out infinite reverse;
}

.square-shape {
  position: absolute;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);
  transform: rotate(45deg);
}

.square-1 {
  width: 200px;
  height: 200px;
  top: 60%;
  left: 10%;
  animation: float 30s ease-in-out infinite;
}

.square-2 {
  width: 250px;
  height: 250px;
  top: 20%;
  right: 10%;
  animation: float 35s ease-in-out infinite reverse;
}

/* 白色加载层几何图形 */
.geometric-shapes-white {
  width: 100%;
  height: 100%;
}

.circle-shape-white {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(75, 108, 183, 0.08) 0%,
    rgba(75, 108, 183, 0.02) 70%,
    rgba(0, 0, 0, 0) 100%
  );
}

.circle-white-1 {
  width: 350px;
  height: 350px;
  top: 5%;
  right: 10%;
  animation: float 22s ease-in-out infinite;
}

.circle-white-2 {
  width: 250px;
  height: 250px;
  bottom: 8%;
  left: 12%;
  animation: float 28s ease-in-out infinite reverse;
}

.hexagon-shape {
  position: absolute;
  width: 200px;
  height: 115px;
  background: linear-gradient(135deg, rgba(75, 108, 183, 0.05) 0%, rgba(75, 108, 183, 0.01) 100%);
  position: relative;
}

.hexagon-shape:before,
.hexagon-shape:after {
  content: '';
  position: absolute;
  width: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
}

.hexagon-shape:before {
  bottom: 100%;
  border-bottom: 57.5px solid rgba(75, 108, 183, 0.05);
}

.hexagon-shape:after {
  top: 100%;
  border-top: 57.5px solid rgba(75, 108, 183, 0.05);
}

.hexagon-1 {
  top: 25%;
  left: 20%;
  animation: float-rotate 32s ease-in-out infinite;
}

.triangle-shape {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  border-bottom: 130px solid rgba(75, 108, 183, 0.04);
}

.triangle-1 {
  bottom: 15%;
  right: 25%;
  animation: float-rotate 26s ease-in-out infinite reverse;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(2deg);
  }
  50% {
    transform: translateY(0) rotate(0deg);
  }
  75% {
    transform: translateY(15px) rotate(-2deg);
  }
}

@keyframes float-rotate {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(5deg);
  }
  50% {
    transform: translateY(0) rotate(0deg);
  }
  75% {
    transform: translateY(15px) rotate(-5deg);
  }
}

/* 高级加载动画 */
.loader-container {
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.circle-loader {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-top-color: #4b6cb7;
  border-radius: 50%;
  animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
}

.circle-loader-2 {
  width: 80%;
  height: 80%;
  border-top-color: #5c7cdb;
  animation-duration: 2s;
  animation-direction: reverse;
}

.circle-loader-3 {
  width: 60%;
  height: 60%;
  border-top-color: #7892e3;
  animation-duration: 1s;
}

.pulse-circle {
  position: absolute;
  width: 40%;
  height: 40%;
  background-color: rgba(75, 108, 183, 0.1);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
}
</style>
