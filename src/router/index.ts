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
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: {
        hideHeader: true, // 标记此页面不显示header
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        hideHeader: true, // 标记此页面不显示header
      },
    },
    {
      path: '/scenery',
      name: 'scenery',
      component: () => import('../views/scenery/SceneryView.vue'),
    },
    {
      path: '/academicresources',
      name: 'academicresources',
      component: () => import('../views/academic/AcademicResourcesView.vue'),
    },
    {
      path: '/academicresources/library',
      name: 'library',
      component: () => import('../views/academic/LibraryView.vue'),
    },
    {
      path: '/academicresources/databases',
      name: 'database-resources',
      component: () => import('../views/academic/DatabaseResourcesView.vue'),
    },
    {
      path: '/academicresources/journals',
      name: 'journal-resources',
      component: () => import('../views/academic/JournalResourcesView.vue'),
    },
    {
      path: '/academicresources/national-key-labs',
      name: 'national-key-labs',
      // 使用懒加载
      component: () => import('../views/academic/NationalKeyLabsView.vue'),
    },
    {
      path: '/academicresources/moe-key-labs',
      name: 'moe-key-labs',
      component: () => import('../views/academic/MoEKeyLabsView.vue'),
    },
    {
      path: '/academicresources/provincial-ministerial-bases',
      name: 'provincial-ministerial-bases',
      component: () => import('../views/academic/ProvincialMinisterialBasesView.vue'),
    },
    {
      path: '/academicresources/events',
      name: 'upcoming-events',
      component: () => import('../views/academic/UpcomingEventsView.vue'),
    },
    {
      path: '/academicresources/achievements',
      name: 'research-achievements',
      component: () => import('../views/academic/ResearchAchievementsView.vue'),
    },
    {
      path: '/academicresources/exchange',
      name: 'academic-exchange',
      component: () => import('../views/academic/AcademicExchangeView.vue'), // 懒加载
    },
    {
      path: '/academicresources/continuing-education',
      name: 'continuing-education',
      component: () => import('../views/academic/ContinuingEducationView.vue'), // 懒加载
    },
    {
      path: '/scenery/spring',
      name: 'spring',
      component: () => import('../views/scenery/SpringView.vue'),
    },
    {
      path: '/scenery/summer',
      name: 'summer',
      component: () => import('../views/scenery/SummerView.vue'),
    },
    {
      path: '/scenery/autumn',
      name: 'autumn',
      component: () => import('../views/scenery/AutumnView.vue'),
    },
    {
      path: '/scenery/winter',
      name: 'winter',
      component: () => import('../views/scenery/WinterView.vue'),
    },
    {
      path: '/culture',
      name: 'CultureHome',
      component: () => import('../views/culture/CultureHome.vue'),
    },
    {
      path: '/culture/heritage',
      name: 'CampusCulture',
      component: () => import('../views/culture/CampusCulture.vue'),
    },
    {
      path: '/culture/events',
      name: 'CampusEvents',
      component: () => import('../views/culture/CampusEvents.vue'),
    },
    {
      path: '/culture/services',
      name: 'CampusServices',
      component: () => import('../views/culture/CampusServices.vue'),
    },
    {
      path: '/culture/clubs',
      name: 'StudentClubs',
      component: () => import('../views/culture/StudentClubs.vue'),
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
