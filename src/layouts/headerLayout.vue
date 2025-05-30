<template>
  <div
    :class="[
      'header-layout h-20 md:h-24 z-10 w-full flex fixed left-0 justify-between items-center px-4 md:px-8 transition-all duration-500',
      activeSection === 0
        ? 'bg-gradient-to-b from-black/35 to-black/0 text-white'
        : 'bg-white text-black',
      headerVisible ? 'top-0' : '-top-24',
    ]"
  >
    <div class="logo-container flex items-center">
      <img
        src="../assets/imgs/jlulogo-removebg-preview.png"
        alt="logo"
        class="h-16 md:h-20 pl-2 md:pl-12"
      />
    </div>

    <!-- 桌面端菜单 -->
    <div
      class="hidden lg:flex menu-container space-x-6 xl:space-x-12 text-base xl:text-xl font-medium pr-4 xl:pr-32"
    >
      <router-link to="/introduction" class="desktop-menu-item">吉大概况</router-link>
      <router-link to="/map" class="desktop-menu-item">校园导览</router-link>
      <router-link to="/academicresources" class="desktop-menu-item">学术资源</router-link>
      <router-link to="/culture" class="desktop-menu-item">校园生活</router-link>
      <router-link to="/scenery" class="desktop-menu-item">四季美景</router-link>
    </div>

    <div class="flex items-center">
      <!-- 桌面端图标 -->
      <div class="hidden md:flex icon-container space-x-4 lg:space-x-8 pr-2 lg:pr-8">
        <router-link to="/register" class="icon-item cursor-pointer">
          <i class="pi pi-user-plus text-xl" title="注册"></i>
        </router-link>
        <router-link to="/login" class="icon-item cursor-pointer">
          <i class="pi pi-user text-xl" title="登录"></i>
        </router-link>
        <div class="icon-item cursor-pointer">
          <i class="pi pi-phone text-xl"></i>
        </div>
      </div>

      <!-- 移动端菜单按钮 -->
      <div class="lg:hidden cursor-pointer ml-4" @click="toggleMobileMenu">
        <i class="pi pi-bars text-2xl"></i>
      </div>
    </div>
  </div>

  <!-- 移动端菜单 -->
  <div
    v-if="mobileMenuOpen"
    class="fixed top-20 md:top-24 left-0 w-full bg-white text-black z-9 shadow-lg lg:hidden transition-all duration-300"
    style="transform: translateY(0)"
  >
    <div class="flex flex-col py-4">
      <router-link to="/introduction" class="mobile-menu-item">吉大概况</router-link>
      <router-link to="/campus" class="mobile-menu-item">校园导览</router-link>
      <router-link to="/academicresources" class="mobile-menu-item">学术资源</router-link>
      <router-link to="/culture" class="mobile-menu-item">校园生活</router-link>
      <router-link to="/scenery" class="mobile-menu-item">四季美景</router-link>

      <!-- 移动端图标 -->
      <div class="flex justify-center space-x-8 py-4 md:hidden">
        <router-link to="/register" class="icon-item cursor-pointer">
          <i class="pi pi-user-plus text-xl"></i>
        </router-link>
        <router-link to="/login" class="icon-item cursor-pointer">
          <i class="pi pi-user text-xl"></i>
        </router-link>
        <div class="icon-item cursor-pointer">
          <i class="pi pi-phone text-xl"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useSectionStore } from '../stores/sectionStore'

const sectionStore = useSectionStore()
const activeSection = computed(() => sectionStore.activeSection)
const headerVisible = computed(() => sectionStore.headerVisible)

// 移动端菜单状态
const mobileMenuOpen = ref(false)

// 切换移动端菜单
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
/* header动画 */
.header-layout {
  transition: all 0.3s ease-in-out;
}

/* 移动端菜单动画 */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

/* 桌面端菜单项样式 */
.desktop-menu-item {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.desktop-menu-item:hover {
  color: rgba(96, 165, 250, 1); /* hover:text-blue-400 */
}

/* 移动端菜单项样式 */
.mobile-menu-item {
  padding: 0.75rem 2rem; /* py-3 px-8 */
  cursor: pointer;
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  display: block;
  text-decoration: none;
  color: inherit;
}

.mobile-menu-item:hover {
  background-color: rgba(243, 244, 246, 1); /* hover:bg-gray-100 */
}
</style>
