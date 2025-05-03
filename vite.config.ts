import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [vue(), tailwindcss()],
  build: { target: 'esnext' },
}))
