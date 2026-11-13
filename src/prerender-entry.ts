// 预渲染入口：在 Node 端把路由渲染成静态 HTML（构建脚本 scripts/prerender.mjs 调用）
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import App from '@/App.vue'
import router, { SITE_URL } from '@/router'

export { SITE_URL }

export async function renderPage(url: string): Promise<string> {
  const app = createSSRApp(App)
  app.use(router)
  await router.push(url)
  await router.isReady()
  return renderToString(app)
}

// 读取路由 meta 的中英文案，供预渲染脚本注入 <head>（SEO）
export function routeMetaText(url: string, locale: 'zh' | 'en') {
  const meta = router.resolve(url).meta as {
    title?: Record<string, string>
    description?: Record<string, string>
  }
  const pick = (v?: Record<string, string>) => v?.[locale] ?? ''
  return {
    title: pick(meta.title),
    description: pick(meta.description),
  }
}
