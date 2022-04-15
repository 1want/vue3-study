/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      supportTs: false
    })
  ],
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
  },
  test: {
    globals: true,
    environment: 'happy-dom'
    // setupFiles: []
  }
})
