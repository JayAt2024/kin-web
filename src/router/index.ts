import { watch } from 'vue'
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import type { RouteLocationNormalizedLoadedGeneric } from 'vue-router'
import SiteLayout from '@/layouts/SiteLayout.vue'
import Home from '@/views/Home.vue'
import LegalView from '@/views/LegalView.vue'
import { locale, type Locale } from '@/i18n'

// 页面标题与描述按 locale 计算
type LocaleText = Record<Locale, string>

// 正式域名：境内解析到阿里云 ECS、境外解析到 GitHub Pages（DNS 分线路）
export const SITE_URL = 'https://kinhealth.jaytech.top'

// 路由 base 与 vite base 保持一致：CI 注入 VITE_BASE=/kin-web/ 时为子路径，本地为 /
const ROUTER_BASE = import.meta.env.BASE_URL.startsWith('/') ? import.meta.env.BASE_URL : '/'

const router = createRouter({
  // history 模式：配合 scripts/prerender.mjs 预渲染静态页；SSR 环境用内存路由
  history: import.meta.env.SSR
    ? createMemoryHistory(ROUTER_BASE)
    : createWebHistory(ROUTER_BASE),
  // 带 hash（如 /#pro）时平滑滚动到对应区块，偏移量避开吸顶导航；否则回到页首
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, top: 76, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: SiteLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
          meta: {
            title: {
              zh: '今安记 · 家庭健康记录，只留在这台 iPhone',
              en: 'Kin Health · Family health records that stay on your iPhone',
            } satisfies LocaleText,
            description: {
              zh: '今安记（Kin Health）是一款 iPhone 家庭健康记录工具：慢病档案、趋势图、用药提醒与就诊计划。数据只保存在本机，不收集、不上传、无广告。',
              en: 'Kin Health is a family health records app for iPhone: chronic condition profiles, trends, medication reminders and care plans. Data stays on device — no account, no server, no ads.',
            } satisfies LocaleText,
          },
        },
        {
          path: 'privacy',
          name: 'Privacy',
          component: LegalView,
          props: { kind: 'privacy' },
          meta: {
            title: { zh: '隐私政策 · 今安记', en: 'Privacy Policy · Kin Health' } satisfies LocaleText,
            description: {
              zh: '今安记（Kin Health）隐私政策：不接入统计与广告 SDK，全部数据仅保存在设备上的应用沙盒内，开发者无法访问。',
              en: 'Kin Health privacy policy: no analytics or ad SDKs, all data stays in the on-device app sandbox and is never accessible to the developer.',
            } satisfies LocaleText,
          },
        },
        {
          path: 'terms',
          name: 'Terms',
          component: LegalView,
          props: { kind: 'terms' },
          meta: {
            title: { zh: '服务条款 · 今安记', en: 'Terms of Service · Kin Health' } satisfies LocaleText,
            description: {
              zh: '今安记（Kin Health）服务条款：个人与家庭健康信息记录工具，不是医疗器械，不提供诊断或用药建议。',
              en: 'Kin Health terms of service: a personal and family health record tool, not a medical device, and does not provide diagnosis or medical advice.',
            } satisfies LocaleText,
          },
        },
        {
          path: 'disclaimer',
          name: 'Disclaimer',
          component: LegalView,
          props: { kind: 'disclaimer' },
          meta: {
            title: { zh: '免责声明与隐私声明 · 今安记', en: 'Disclaimer & Privacy Notice · Kin Health' } satisfies LocaleText,
            description: {
              zh: '今安记（Kin Health）免责声明与隐私声明：数据仅存于设备沙盒，不构成医疗建议，健康决策请遵循专业医生判断。',
              en: 'Kin Health disclaimer & privacy notice: data stays in the on-device sandbox, no medical advice is provided, and all health decisions should follow a physician\'s judgment.',
            } satisfies LocaleText,
          },
        },
      ],
    },
  ],
})

// 按当前 locale 解析页面文案
function routeText(to: RouteLocationNormalizedLoadedGeneric, key: 'title' | 'description'): string {
  const text = to.meta[key] as LocaleText | undefined
  return text ? text[locale.value] : key === 'title' ? 'Kin Health' : ''
}

// 更新 <meta> 标签（name 或 property 两类）
function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function syncMeta(to: RouteLocationNormalizedLoadedGeneric) {
  // 预渲染（SSR）环境没有 document，meta 同步仅在浏览器端执行
  if (typeof document === 'undefined') return
  const title = routeText(to, 'title')
  const description = routeText(to, 'description')
  const url = `${SITE_URL}${to.path === '/' ? '/' : to.path}`

  document.title = title
  setMeta('name', 'description', description)
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:url', url)
  setMeta('property', 'og:locale', locale.value === 'zh' ? 'zh_CN' : 'en_US')
}

router.afterEach(syncMeta)

// locale 切换时同步标题与 meta
watch(locale, () => syncMeta(router.currentRoute.value))

export default router
