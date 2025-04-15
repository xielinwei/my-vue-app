import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-vue-app',
  plugins: [vue()],
  resolve:{
    alias: {
      '@': '/src'
    }
  },
  build: {
    assetsDir: 'assets', // 可选：自定义资源目录
    manifest: true // 可选：生成资源清单
  }
})
