// 预渲染入口：在 Node 端把路由渲染成静态 HTML（构建脚本 scripts/prerender.mjs 调用）
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import App from '@/App.vue'
import router from '@/router'

export async function renderPage(url: string): Promise<string> {
  const app = createSSRApp(App)
  app.use(router)
  await router.push(url)
  await router.isReady()
  return renderToString(app)
}
