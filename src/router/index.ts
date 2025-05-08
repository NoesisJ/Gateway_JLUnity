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
      path: '/introduction',
      name: 'introduction',
      component: () => import('../views/IntroductionView.vue'),
      meta: {
        customTransition: true, // 标记此页面使用自定义过渡动画
        hideHeader: true, // 标记此页面不显示header
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

  // 先隐藏header
  sectionStore.hideHeader()

  // 检查目标路由是否需要隐藏header
  if (to.meta.hideHeader) {
    // 如果需要隐藏header，不执行showHeader
  } else {
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
