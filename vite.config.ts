import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// 部署模式（CI 注入 VITE_BASE，如 GitHub Pages 的 /kin-web/）：不启用单文件插件，
// 否则插件会把 base 强制改写为 './'，子路径部署时路由和资源全部失效；
// 本地默认：单文件产物 + 相对路径，preview.html 可直接双击打开
const deployBase = process.env.VITE_BASE

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: deployBase ? [vue()] : [vue(), viteSingleFile()],
  base: deployBase || './',
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
    assetsInlineLimit: deployBase ? 4096 : 100000000,
    ...(deployBase ? { manifest: true } : {}),
  },
}))
