// 预渲染脚本：构建后运行，为每个路由生成含完整 HTML 的静态页面（利于 SEO）
// 用法：node scripts/prerender.mjs（已挂到 npm run build 之后）
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { createServer } from 'vite'

const routes = ['/', '/privacy', '/terms', '/disclaimer']

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { renderPage } = await server.ssrLoadModule('/src/prerender-entry.ts')
  const template = readFileSync(resolve('dist/index.html'), 'utf-8')

  for (const route of routes) {
    const html = await renderPage(route)
    // 用函数替换，避免渲染结果中的 $ 字符被当作特殊替换模式
    const page = template.replace('<div id="app"></div>', () => `<div id="app">${html}</div>`)
    const file = route === '/' ? 'dist/index.html' : `dist${route}/index.html`
    mkdirSync(dirname(resolve(file)), { recursive: true })
    writeFileSync(resolve(file), page)
    console.log(`prerendered ${route} -> ${file}`)
  }
} finally {
  await server.close()
}
