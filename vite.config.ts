import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// 部署模式（CI 注入 VITE_DEPLOY=true）：不启用单文件插件——否则插件会把 base 强制
// 改写为 './'，且每页 HTML 重复内联全部图片；部署走根路径 + 独立资源文件 + manifest；
// 本地默认：单文件产物 + 相对路径，preview.html 可直接双击打开
const deployMode = process.env.VITE_DEPLOY === 'true'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: deployMode ? [vue()] : [vue(), viteSingleFile()],
  base: deployMode ? '/' : './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    host: true,
    open: true,
  },
  build: {
    // 部署模式：图片走独立文件（不内联进 JS/HTML），并生成 manifest 供预渲染映射产物路径；
    // 本地单文件模式：全部内联
    assetsInlineLimit: deployMode ? 4096 : 100000000,
    ...(deployMode ? { manifest: true } : {}),
  },
}))
