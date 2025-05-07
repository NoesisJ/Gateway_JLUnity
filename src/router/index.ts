import { createRouter, createWebHistory } from 'vue-router'
import { useSectionStore } from '../stores/sectionStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        fullScreen: true, // 标记此页面是全屏的，不需要内边距
      },
    },
    {
      path: '/scenery',
      name: 'scenery',
      component: () => import('../views/SceneryView.vue'),
    },
    {
      path: '/academicresources',
      name: 'academicresources',
      component: () => import('../views/AcademicResourcesView.vue'),
    },
    {
      path: '/scenery/spring',
      name: 'spring',
      component: () => import('../views/SpringView.vue'),
    },
    {
      path: '/scenery/summer',
      name: 'summer',
      component: () => import('../views/SummerView.vue'),
    },
    {
      path: '/scenery/autumn',
      name: 'autumn',
      component: () => import('../views/AutumnView.vue'),
    },
    {
      path: '/scenery/winter',
      name: 'winter',
      component: () => import('../views/WinterView.vue'),
    },
  ],
})

// 添加全局导航守卫处理header样式
router.beforeEach((to, from, next) => {
  const sectionStore = useSectionStore()

  // 如果离开首页或进入非首页
  if (from.path === '/' || (to.path !== '/' && from.path !== to.path)) {
    // 先隐藏header
    sectionStore.hideHeader()

    // 如果目标不是首页，设置为内容区样式（白色背景）
    if (to.path !== '/') {
      sectionStore.setActiveSection(1)
    }

    // 短暂延迟后显示header
    setTimeout(() => {
      sectionStore.showHeader()
    }, 500)
  }

  next()
})

export default router
