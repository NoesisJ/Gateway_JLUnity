<template>
  <div
    class="fixed inset-0 w-full h-full bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 flex items-center justify-center p-4"
  >
    <div class="max-w-md w-full space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-xl">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 mb-2">用户注册</h2>
        <p class="text-sm text-gray-600">创建您的吉林大学账户，开始探索校园</p>
        <div class="mt-3 inline-block p-2 rounded-full bg-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        </div>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submitForm">
        <div class="rounded-md space-y-4">
          <div>
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
                class="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="请设置用户名"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="请输入您的邮箱"
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
                class="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="请设置密码"
              />
            </div>
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1"
              >确认密码</label
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <input
                id="confirmPassword"
                v-model="formData.confirmPassword"
                type="password"
                required
                class="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="请再次输入密码"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center">
          <input
            id="terms"
            v-model="formData.agreeTerms"
            type="checkbox"
            required
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label for="terms" class="ml-2 block text-sm text-gray-900">
            我已阅读并同意
            <a href="#" class="font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >用户协议</a
            >
            和
            <a href="#" class="font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >隐私政策</a
            >
          </label>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-300 group-hover:text-blue-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </span>
            注册
          </button>
        </div>
      </form>

      <div class="text-center pt-4 border-t border-gray-200 mt-6">
        <router-link
          to="/login"
          class="inline-block font-medium text-blue-600 hover:text-blue-500 transition-colors hover:underline"
        >
          已有账号？返回登录
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
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false,
})

// 表单提交处理
const submitForm = async () => {
  try {
    // 检查密码是否一致
    if (formData.value.password !== formData.value.confirmPassword) {
      errorMessage.value = '两次输入的密码不一致，请重新输入！'
      return
    }

    isLoading.value = true
    errorMessage.value = ''

    // 详细输出注册信息到控制台
    console.log('========== 注册表单数据 ==========')
    console.log('用户名:', formData.value.username)
    console.log('邮箱:', formData.value.email)
    console.log('密码:', formData.value.password)
    console.log('确认密码:', formData.value.confirmPassword)
    console.log('同意条款:', formData.value.agreeTerms)
    console.log('================================')

    // 发送注册请求到后端API
    const response = await axios.post('http://localhost:8080/api/register', {
      username: formData.value.username,
      email: formData.value.email,
      password: formData.value.password,
    })

    console.log('注册成功:', response.data)

    // 注册成功提示
    alert('注册成功！')

    // 跳转到登录页
    router.push('/login')
  } catch (error) {
    // 处理注册错误
    console.error('注册失败:', error)
    const axiosError = error as AxiosError<{ error: string }>
    if (axiosError.response?.data?.error) {
      errorMessage.value = axiosError.response.data.error
    } else {
      errorMessage.value = '注册失败，请稍后再试'
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
  outline: 2px solid rgba(59, 130, 246, 0.2);
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
