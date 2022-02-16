import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    '@': '/src/'
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://150.158.178.216:3008/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
