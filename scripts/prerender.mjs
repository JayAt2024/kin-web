// 预渲染脚本：构建后运行，为每个路由生成含完整 HTML 的静态页面（利于 SEO）
// 用法：node scripts/prerender.mjs（已挂到 npm run build 之后）
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { createServer } from 'vite'

const routes = ['/', '/privacy', '/terms', '/disclaimer']

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
}

// SSR 输出中的资源 src 是开发期地址（/src/assets/...），静态托管下不存在。
// 部署模式（有 manifest）：映射为带 base 前缀的真实产物文件；
// 本地单文件模式（无 manifest）：内联为 data URI
function resolveAssetReplacer(base) {
  let manifest = null
  try {
    manifest = JSON.parse(readFileSync(resolve('dist/.vite/manifest.json'), 'utf-8'))
  } catch {
    // 单文件模式没有 manifest
  }

  if (manifest) {
    return (url) => {
      const key = url.replace(/^\//, '')
      const entry = manifest[key]
      return entry ? `src="${base}/${entry.file}"` : `src="${base}${url}"`
    }
  }

  return (url) => {
    const file = resolve(`.${url}`)
    const ext = url.slice(url.lastIndexOf('.'))
    const mime = MIME[ext] ?? 'application/octet-stream'
    const data = readFileSync(file).toString('base64')
    return `src="data:${mime};base64,${data}"`
  }
}

function inlineAssets(html) {
  const base = (process.env.VITE_BASE || '').replace(/\/$/, '')
  const replaceSrc = resolveAssetReplacer(base)
  // dev URL 可能带 base 前缀（如 /kin-web/src/assets/...），统一提取出 /src/assets/... 部分
  return html.replace(/src="([^"]*\/src\/assets\/[^"]+)"/g, (_, url) => {
    const clean = url.slice(url.indexOf('/src/assets/'))
    return replaceSrc(clean)
  })
}

const server = await createServer({
  // 显式传入 base（与 CI 的 VITE_BASE 一致）：dev server 会把配置文件的 base 归一为 '/'，
  // 导致预渲染 HTML 里的路由链接丢失 /kin-web/ 前缀
  base: process.env.VITE_BASE || '/',
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { renderPage, routeMetaText, SITE_URL } = await server.ssrLoadModule('/src/prerender-entry.ts')
  const template = readFileSync(resolve('dist/index.html'), 'utf-8')

  // 把路由 meta 的 title / description / og:url / canonical 注入静态 HTML（默认中文）
  function applyRouteMeta(page, route) {
    const { title, description } = routeMetaText(route, 'zh')
    const url = `${SITE_URL}${route === '/' ? '/' : route}`
    // meta 标签在模板里是多行书写，用 [\s\S]*? 跨行匹配；替换用函数形式避免 $ 转义
    return page
      .replace(/<title>.*<\/title>/, () => `<title>${title}</title>`)
      .replace(/<meta\s+name="description"[\s\S]*?content="[^"]*"/, () => `<meta name="description" content="${description}"`)
      .replace(/<meta\s+property="og:title"[\s\S]*?content="[^"]*"/, () => `<meta property="og:title" content="${title}"`)
      .replace(/<meta\s+property="og:description"[\s\S]*?content="[^"]*"/, () => `<meta property="og:description" content="${description}"`)
      .replace(/<meta\s+name="twitter:title"[\s\S]*?content="[^"]*"/, () => `<meta name="twitter:title" content="${title}"`)
      .replace(/<meta\s+name="twitter:description"[\s\S]*?content="[^"]*"/, () => `<meta name="twitter:description" content="${description}"`)
      .replace(/<meta\s+property="og:url"[\s\S]*?content="[^"]*"/, () => `<meta property="og:url" content="${url}"`)
      .replace(/<link\s+rel="canonical"[\s\S]*?href="[^"]*"/, () => `<link rel="canonical" href="${url}"`)
  }

  for (const route of routes) {
    const html = await renderPage(route)
    // 用函数替换，避免渲染结果中的 $ 字符被当作特殊替换模式
    const page = applyRouteMeta(
      template.replace('<div id="app"></div>', () =>
        `<div id="app">${inlineAssets(html)}</div>`,
      ),
      route,
    )
    const file = route === '/' ? 'dist/index.html' : `dist${route}/index.html`
    mkdirSync(dirname(resolve(file)), { recursive: true })
    writeFileSync(resolve(file), page)
    console.log(`prerendered ${route} -> ${file}`)
  }
} finally {
  await server.close()
}
