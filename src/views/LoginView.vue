<template>
  <div
    class="fixed inset-0 w-full h-full bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 flex items-center justify-center p-4"
  >
    <div class="max-w-md w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-xl">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 mb-2">用户登录</h2>
        <p class="text-sm text-gray-600">登录您的账户，探索吉林大学</p>
        <div class="mt-3 inline-block p-2 rounded-full bg-indigo-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submitForm">
        <div class="rounded-md -space-y-px">
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700 mb-1"
              >用户名</label
            >
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <input
                id="username"
                v-model="formData.username"
                type="text"
                required
                class="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="用户名或学号"
              />
            </div>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">密码</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                id="password"
                v-model="formData.password"
                type="password"
                required
                class="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="请输入密码"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              v-model="formData.rememberMe"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> 记住我 </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
              忘记密码？
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-indigo-400 group-hover:text-indigo-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </span>
            登录
          </button>
        </div>
      </form>

      <div class="text-center pt-4 border-t border-gray-200 mt-6">
        <router-link
          to="/register"
          class="inline-block font-medium text-indigo-600 hover:text-indigo-500 transition-colors hover:underline"
        >
          没有账号？点击注册
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios, { AxiosError } from 'axios'

const router = useRouter()
const errorMessage = ref('')
const isLoading = ref(false)

// 表单数据
const formData = ref({
  username: '',
  password: '',
  rememberMe: false,
})

// 表单提交处理
const submitForm = async () => {
  try {
    isLoading.value = true
    errorMessage.value = ''

    // 详细输出登录信息到控制台
    console.log('========== 登录表单数据 ==========')
    console.log('用户名:', formData.value.username)
    console.log('密码:', formData.value.password)
    console.log('记住我:', formData.value.rememberMe)
    console.log('================================')

    // 发送登录请求到后端API
    const response = await axios.post('http://localhost:8080/api/login', {
      username: formData.value.username,
      password: formData.value.password,
    })

    console.log('登录成功:', response.data)

    // 如果需要，可以将用户信息存储在localStorage或pinia store中
    if (formData.value.rememberMe) {
      localStorage.setItem('user', JSON.stringify(response.data.user))
    }

    // 登录成功提示
    alert('登录成功！')

    // 跳转到首页
    router.push('/')
  } catch (error) {
    // 处理登录错误
    console.error('登录失败:', error)
    const axiosError = error as AxiosError<{ error: string }>
    if (axiosError.response?.data?.error) {
      errorMessage.value = axiosError.response.data.error
    } else {
      errorMessage.value = '登录失败，请稍后再试'
    }
  } finally {
    isLoading.value = false
  }
}

// 禁用页面滚动
onMounted(() => {
  // 强制移除滚动条
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
  document.documentElement.style.height = '100%'
  document.body.style.height = '100%'
  document.body.style.position = 'fixed'
  document.body.style.width = '100%'
})
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden !important;
  position: fixed;
}

#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
}
</style>

<style scoped>
/* 表单输入框聚焦效果 */
input:focus {
  outline: 2px solid rgba(79, 70, 229, 0.2);
}

.bg-gradient-to-br {
  animation: gradientAnimation 15s ease infinite;
  background-size: 200% 200%;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
