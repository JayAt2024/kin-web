import { computed, ref, watch } from 'vue'

export type Locale = 'zh' | 'en'

const STORAGE_KEY = 'kin-locale'

// 初始语言：优先读 localStorage（用户手动选择过），否则跟随系统偏好语言
function readInitialLocale(): Locale {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'zh' || saved === 'en') return saved
  } catch {
    // localStorage 不可用时继续探测系统语言
  }
  // SSR/预渲染环境无浏览器 API，默认中文
  if (typeof navigator === 'undefined') return 'zh'
  const lang = (navigator.languages?.[0] ?? navigator.language ?? '').toLowerCase()
  return lang.startsWith('zh') ? 'zh' : 'en'
}

export const locale = ref<Locale>(readInitialLocale())

// 切换语言时的副作用：同步 <html lang> 并写回 localStorage
watch(locale, (next) => {
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en'
  try {
    window.localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // 隐私模式等场景写入失败可忽略
  }
})

// 首次加载时同步 <html lang>（不触发存储写入；SSR 环境跳过）
if (typeof document !== 'undefined') {
  document.documentElement.lang = locale.value === 'zh' ? 'zh-CN' : 'en'
}

export function setLocale(next: Locale) {
  locale.value = next
}

export function toggleLocale() {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}

/* ------------------------------------------------------------------ */
/* UI 文案字典                                                          */
/* ------------------------------------------------------------------ */

const zh = {
  nav: {
    sectionFeatures: '功能',
    sectionPrivacy: '隐私',
    sectionPro: 'Pro',
    sectionFaq: '常见问题',
    status: 'iPhone · 本地优先',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    openMenu: '打开菜单',
    ariaHome: '今安记 首页',
    brand: '今安记',
    ariaNav: '主导航',
    langLabel: 'EN',
  },
  hero: {
    eyebrow: 'KINHEALTH · 家庭健康档案',
    titleLine1: '把全家人的健康，',
    titlePre: '稳稳握在',
    titleAccent: '自己手里',
    titlePost: '。',
    lead: '记录慢性病档案、日常测量、用药与就诊。它不需要账号，也不连接服务器——所有内容只写在这台 iPhone 上。',
    primaryCta: '看看它能做什么',
    secondaryCta: '阅读隐私政策',
    facts: ['无账号', '无服务器', '无第三方 SDK', '随时可导出'],
    badgeStoreTitle: '本地沙盒存储',
    badgeStoreSub: 'SwiftData · 无云端同步',
    badgeReminderTitle: '08:00 用药提醒',
    badgeReminderSub: '每天 · 本地通知',
    badgeReminderState: '已开启',
    phoneAlt: '今安记 病症页：成员档案、关键指标与控制目标',
  },
  privacy: {
    titleLine1: '健康数据，',
    titleLine2: '不该成为商品。',
    lead: '大多数健康应用会把数据同步到云端。今安记选择相反的方向：不收集、不上传、不分析，连一个可以传输数据的通道都不留。',
    link: '阅读完整隐私政策',
    rows: [
      { label: '云端账号', value: '不创建', ok: false },
      { label: '服务器连接', value: '不存在', ok: false },
      { label: '统计 / 广告 SDK', value: '不接入', ok: false },
      { label: '第三方分析', value: '不使用', ok: false },
      { label: '数据存储', value: '本机应用沙盒', ok: true },
    ],
    footnote: '全部数据（成员、疾病、记录、计划、照片、操作日志）仅保存在设备上的应用沙盒内，开发者无法访问。',
  },
  features: {
    titleLine1: '一台 iPhone，',
    titleLine2: '装下全家的病历本。',
    lead: '从第一次确诊，到每天早晚的血压记录，再到下一次复诊提醒——所有零散的健康信息，都被收进一个安静、清晰的档案里。',
    items: [
      {
        title: '家庭多成员档案',
        desc: '为每位家人建立独立档案：关系、生日、头像与专属主题色。过敏原、血型与紧急提示放在最前面，就诊时一眼可见。',
      },
      {
        title: '慢病档案与趋势',
        desc: '高血压、糖尿病、高尿酸……按中国或美国指南参考预设监测指标与控制范围，达标率与趋势图自动汇总。',
      },
      {
        title: '时间线健康记录',
        desc: '常规检查、孕期检查、症状、用药、复健与就诊，六大类记录按月份分组，支持筛选、搜索与照片附件。',
      },
      {
        title: '用药提醒与就诊计划',
        desc: '多个提醒时间点、自定义重复规则与结束日期。本地通知按时提醒，可稍后提醒，也能一键补记用药。',
      },
      {
        title: '导出与导入',
        desc: '把单个疾病档案导出为 JSON，存进「文件」或隔空投送；换机、备份、就诊时交给医生，都由你决定。',
      },
      {
        title: '操作日志与参考标准',
        desc: '成员、记录、疾病的每一次变更都在本地留痕，可回溯「谁在什么时候改了什么」。',
      },
    ],
  },
  showcase: {
    titleLine1: '记录，是给家人',
    titleLine2: '最安静的照顾。',
    lead: '没有复杂的仪表盘，也没有催促的红点。打开应用，看到的是这个家真实的健康轨迹。',
    screens: [
      {
        title: '病症与目标',
        desc: '每位成员的关键指标与控制目标放在同一屏，一眼看清目前控制得怎么样。',
        alt: '今安记 病症页：成员档案、关键指标与控制目标',
      },
      {
        title: '记录',
        desc: '按月份分组的时间线，筛一筛就知道这半年发生了什么。',
        alt: '今安记 记录页：按月份分组的健康记录时间线',
      },
      {
        title: '计划与提醒',
        desc: '今天几点吃药、下周几复诊，都在同一个列表里。',
        alt: '今安记 提醒页：进行中的用药提醒',
      },
      {
        title: '家人档案',
        desc: '爸妈和我各一份档案，添加成员、随时切换，全家的健康一个入口。',
        alt: '今安记 成员页：家庭成员健康档案列表',
      },
    ],
  },
  pro: {
    titleLine1: '解锁完整的',
    titleLine2: '家庭档案。',
    lead: '免费版足以开始记录。Pro 以订阅方式解锁不限量的成员与疾病档案，以及用药提醒、就诊计划和档案导出——适合长期照护一家人。',
    perks: ['无限制家庭成员', '无限制疾病档案', '用药提醒与就诊计划', '疾病档案导出与导入'],
    note: '具体订阅方案、价格与试用期以 App Store 页面显示为准。',
    cardSub: '为一家人准备的完整版本。',
    cta: '即将上架 App Store',
    cardFoot: '订阅由 App Store 管理，可随时在系统「设置 → Apple 账户 → 订阅」中取消。',
  },
  faq: {
    titleLine1: '你可能',
    titleLine2: '想知道的事。',
    note: '今安记是健康记录工具，不是医疗器械，也不提供医疗建议。如遇紧急情况，请立即就医或拨打急救电话。',
    items: [
      {
        q: '提醒没有响？',
        a: '检查 iOS「设置 → 通知 → 今安记」是否允许通知；确认计划处于「进行中」，铃铛为开启状态；再确认没有超过「直到」结束日期。提醒依赖系统本地通知，设备关机或系统清理通知时可能不触发。',
      },
      {
        q: '数据存在哪里？会联网吗？',
        a: '全部数据和照片都保存在设备上的应用沙盒内（SwiftData），不经过任何服务器。应用不上传、不收集数据，也没有连接第三方分析服务的通道。iCloud 云备份由 iOS 系统执行，可自行决定是否开启。',
      },
      {
        q: '换新手机怎么迁移数据？',
        a: '开启 iCloud 云备份并整机恢复，或在旧设备导出疾病档案为 JSON，再在新设备通过「导入疾病档案」恢复。卸载应用会永久删除全部本地数据，建议定期导出备份。',
      },
      {
        q: '删除成员或记录能撤销吗？',
        a: '不能。成员、疾病与记录的删除都是永久操作，应用会要求二次确认以降低误删风险。重要数据请先导出备份。',
      },
      {
        q: '应用里的参考范围是医疗建议吗？',
        a: '不是。疾病预设指标与控制范围来自公开指南（中国 / 美国），仅作为记录与展示的参照，不针对个体情况，也不构成诊断、治疗或用药建议。任何健康决策请遵从专业医生。',
      },
      {
        q: '为什么主题颜色会变化？',
        a: '应用主题色跟随当前成员的主题色设置。切换成员，界面颜色也会随之切换，方便你一眼分辨正在记录谁。',
      },
    ],
    closingLine1: '从今天开始，',
    closingLine2: '把健康握在自己手里。',
    closingPrimary: '阅读隐私政策',
    closingSecondary: '查看服务条款',
  },
  footer: {
    taglineLine1: '一款把健康数据留在家里的 iPhone 记录工具。',
    brand: '今安记',
    copyright: '独立开发者',
    made: '为 iPhone 而做 · 数据留在设备上',
    taglineLine2: '不上传，不追踪，不打扰。',
    productTitle: '产品',
    featuresLink: '功能总览',
    faqLink: '常见问题',
    legalTitle: '法务',
    privacyLink: '隐私政策',
    termsLink: '服务条款',
    disclaimerLink: '免责声明',
    contactLabel: '联系',
    noteTitle: '说明',
    noteText: '今安记是个人与家庭健康信息记录工具，不是医疗器械，不提供诊断或用药建议。',
  },
  legal: {
    back: '返回首页',
    toc: 'CONTENTS',
    disclaimer:
      '今安记（Kin Health）是个人与家庭健康信息记录工具，不是医疗器械，不提供诊断、治疗或用药建议。如对文档内容有疑问，请通过应用发布渠道联系开发者。',
    viewPrivacy: '查看隐私政策',
    viewTerms: '查看服务条款',
    viewDisclaimer: '查看免责声明',
  },
  lightbox: {
    hint: '点击截图可放大查看',
    zoomAria: '放大查看截图',
    close: '关闭',
  },
}

export type Copy = typeof zh

const en: Copy = {
  nav: {
    sectionFeatures: 'Features',
    sectionPrivacy: 'Privacy',
    sectionPro: 'Pro',
    sectionFaq: 'FAQ',
    status: 'iPhone · local-first',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    openMenu: 'Open menu',
    ariaHome: 'Kin Health home',
    brand: 'Kin Health',
    ariaNav: 'Main navigation',
    langLabel: '中文',
  },
  hero: {
    eyebrow: 'KINHEALTH · FAMILY HEALTH RECORDS',
    titleLine1: 'Your family’s health,',
    titlePre: 'kept in your ',
    titleAccent: 'own hands',
    titlePost: '.',
    lead: 'Chronic condition profiles, daily measurements, medications, and visits. No account needed and no server connection — everything is written only to this iPhone.',
    primaryCta: 'See what it can do',
    secondaryCta: 'Read the privacy policy',
    facts: ['No account', 'No server', 'No third-party SDK', 'Export anytime'],
    badgeStoreTitle: 'Local sandbox storage',
    badgeStoreSub: 'SwiftData · No cloud sync',
    badgeReminderTitle: '08:00 medication reminder',
    badgeReminderSub: 'Daily · Local notification',
    badgeReminderState: 'On',
    phoneAlt: 'Kin Health conditions screen: member profiles, key metrics, and control targets',
  },
  privacy: {
    titleLine1: 'Health data',
    titleLine2: 'shouldn’t be a commodity.',
    lead: 'Most health apps sync your data to the cloud. Kin Health takes the opposite direction: nothing collected, nothing uploaded, nothing analyzed — not even a channel left open to transmit data.',
    link: 'Read the full privacy policy',
    rows: [
      { label: 'Cloud account', value: 'None created', ok: false },
      { label: 'Server connection', value: 'None exists', ok: false },
      { label: 'Analytics / ad SDKs', value: 'None integrated', ok: false },
      { label: 'Third-party analytics', value: 'Not used', ok: false },
      { label: 'Data storage', value: 'On-device app sandbox', ok: true },
    ],
    footnote:
      'All data (members, conditions, records, plans, photos, and activity logs) is kept only in the app sandbox on your device. The developer has no access.',
  },
  features: {
    titleLine1: 'One iPhone,',
    titleLine2: 'holding the whole family’s records.',
    lead: 'From the first diagnosis, to morning-and-evening blood pressure readings, to the next follow-up visit reminder — scattered health details come together into one quiet, clear record.',
    items: [
      {
        title: 'Profiles for every family member',
        desc: 'A separate profile for each person: relationship, birthday, avatar, and a personal theme color. Allergies, blood type, and emergency notes come first, visible at a glance during a visit.',
      },
      {
        title: 'Chronic condition files & trends',
        desc: 'Hypertension, diabetes, hyperuricemia and more — monitoring metrics and target ranges preset from Chinese or US guidelines. Control rates and trend charts are summarized automatically.',
      },
      {
        title: 'Timeline health records',
        desc: 'Routine checkups, prenatal visits, symptoms, medications, rehabilitation, and follow-up visits — six record categories grouped by month, with filtering, search, and photo attachments.',
      },
      {
        title: 'Medication reminders & visit plans',
        desc: 'Multiple reminder times, custom repeat rules, and end dates. Local notifications remind you on time, let you snooze, and make it easy to log a dose after the fact.',
      },
      {
        title: 'Export & import',
        desc: 'Export a single condition file as JSON and save it to Files or send it via AirDrop. Switching phones, backups, or handing records to a doctor — always your call.',
      },
      {
        title: 'Activity log & reference standards',
        desc: 'Every change to members, records, and conditions is logged locally, so you can trace who changed what, and when.',
      },
    ],
  },
  showcase: {
    titleLine1: 'Keeping records is the quietest',
    titleLine2: 'way to care for your family.',
    lead: 'No complex dashboards, no nagging red dots. Open the app and you see your family’s real health history.',
    screens: [
      {
        title: 'Conditions & targets',
        desc: 'Each member’s key metrics and control targets on one screen — see at a glance where things stand.',
        alt: 'Kin Health conditions screen: member profiles, key metrics, and control targets',
      },
      {
        title: 'Records',
        desc: 'A timeline grouped by month — filter it and see what the past six months held.',
        alt: 'Kin Health records screen: a health records timeline grouped by month',
      },
      {
        title: 'Plans & reminders',
        desc: 'What time to take medication today, which doctor next week — all in one list.',
        alt: 'Kin Health reminders screen: active medication reminders',
      },
      {
        title: 'Family members',
        desc: 'One profile for each of you — add them once, switch anytime, one place for the whole family.',
        alt: 'Kin Health members screen: family member health profiles',
      },
    ],
  },
  pro: {
    titleLine1: 'Unlock the complete',
    titleLine2: 'family record.',
    lead: 'The free version is enough to start recording. Pro unlocks unlimited members and condition files by subscription, plus medication reminders, visit plans, and file export — made for the long work of caring for a family.',
    perks: [
      'Unlimited family members',
      'Unlimited condition files',
      'Medication reminders & visit plans',
      'Condition file export & import',
    ],
    note: 'Actual plans, pricing, and trial periods are as shown on the App Store page.',
    cardSub: 'The complete edition, built for a family.',
    cta: 'Coming to the App Store',
    cardFoot: 'Subscriptions are managed by the App Store and can be canceled anytime in Settings → Apple Account → Subscriptions.',
  },
  faq: {
    titleLine1: 'Things you',
    titleLine2: 'might want to know.',
    note: 'Kin Health is a health records tool — it is not a medical device and does not provide diagnosis or medical advice. In an emergency, seek medical care immediately or call emergency services.',
    items: [
      {
        q: 'The reminder didn’t ring?',
        a: 'Check that iOS allows notifications in Settings → Notifications → Kin Health; make sure the plan is active and its bell is on; and confirm the “until” end date hasn’t passed. Reminders rely on system local notifications and may not fire when the device is off or the system clears notifications.',
      },
      {
        q: 'Where is my data stored? Does the app connect to the internet?',
        a: 'All data and photos are kept in the app sandbox on your device (SwiftData) and never pass through any server. The app uploads nothing, collects nothing, and has no channel to third-party analytics. iCloud Backup is performed by iOS itself; whether to enable it is up to you.',
      },
      {
        q: 'How do I move data to a new phone?',
        a: 'Enable iCloud Backup and restore the whole device, or export the condition file as JSON on the old device and import it on the new one via “Import condition file”. Uninstalling the app permanently deletes all local data — export backups regularly.',
      },
      {
        q: 'Can deleting a member or record be undone?',
        a: 'No. Deleting members, conditions, or records is permanent; the app asks for a second confirmation to reduce accidental deletion. Export important data first.',
      },
      {
        q: 'Are the reference ranges in the app medical advice?',
        a: 'No. Preset metrics and target ranges for conditions come from public guidelines (China / US). They are references for recording and display only, not tailored to any individual, and do not constitute diagnosis, treatment, or medication advice. Always follow your doctor for health decisions.',
      },
      {
        q: 'Why does the theme color change?',
        a: 'The app’s theme color follows the current member’s theme setting. Switch members and the interface color changes with them, so you can tell at a glance whose record you are in.',
      },
    ],
    closingLine1: 'Start today,',
    closingLine2: 'keep health in your own hands.',
    closingPrimary: 'Read the privacy policy',
    closingSecondary: 'View the terms of service',
  },
  footer: {
    taglineLine1: 'An iPhone records tool that keeps your family’s health data at home.',
    brand: 'Kin Health',
    copyright: 'Independent developer',
    made: 'Made for iPhone · Data stays on device',
    taglineLine2: 'No uploads, no tracking, no noise.',
    productTitle: 'Product',
    featuresLink: 'Features',
    faqLink: 'FAQ',
    legalTitle: 'Legal',
    privacyLink: 'Privacy Policy',
    termsLink: 'Terms of Service',
    disclaimerLink: 'Disclaimer',
    contactLabel: 'Contact',
    noteTitle: 'Notes',
    noteText:
      'Kin Health is a personal and family health records tool — not a medical device, and it does not provide diagnosis or medical advice.',
  },
  legal: {
    back: 'Back to home',
    toc: 'CONTENTS',
    disclaimer:
      'Kin Health is a personal and family health records tool — not a medical device, and it does not provide diagnosis, treatment, or medication advice. If you have questions about this document, please contact the developer through the app’s distribution channel.',
    viewPrivacy: 'View the privacy policy',
    viewTerms: 'View the terms of service',
    viewDisclaimer: 'View the disclaimer',
  },
  lightbox: {
    hint: 'Click any screenshot to zoom in',
    zoomAria: 'Zoom in screenshot',
    close: 'Close',
  },
}

const dictionaries: Record<Locale, Copy> = { zh, en }

/** 返回当前语言的 UI 文案（响应式，locale 切换时自动更新） */
export function useCopy() {
  return computed(() => dictionaries[locale.value])
}
