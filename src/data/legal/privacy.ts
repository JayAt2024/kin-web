import type { LegalDoc } from './types'
import type { Locale } from '@/i18n'

// 隐私政策：中英双语，法律语义保持一致
export const privacyDocs: Record<Locale, LegalDoc> = {
  zh: {
    eyebrow: 'LEGAL · PRIVACY',
    title: '隐私政策',
    updated: '最后更新：2026 年 11 月 5 日',
    intro:
      '我们深知健康数据的敏感性。本政策说明今安记（Kin Health，以下简称「本应用」）如何处理你的数据。',
    sections: [
      {
        id: 'collection',
        title: '一、数据收集声明',
        items: [
          '我们不会收集维持本应用基本功能所需的任何额外数据。本应用不接入统计 SDK、广告 SDK、埋点系统或第三方分析服务，不具备向开发者或任何服务器传输用户数据的能力与通道。',
          '应用运行所需的全部数据（成员信息、疾病档案、健康记录、照片、计划、操作日志）均仅保存在用户设备的应用沙盒内，开发者无法访问、无法获取。',
        ],
      },
      {
        id: 'storage',
        title: '二、数据存储与用户自主分享',
        items: [
          '用户数据只存储于本地应用沙盒。用户可以选择通过系统分享或「文件」功能，主动将导出的数据文档存储到 iCloud 云盘，或通过隔空投送、消息、邮件等方式分享。',
          '如果用户主动将数据文档分享到第三方平台或其他用户，由此造成的敏感信息泄露，我们不承担任何泄密责任。导出文件包含健康与个人身份信息，请在分享前自行评估风险并确认接收方。',
          '用户可选择开启系统级「iCloud 云备份」。备份行为由 iOS 系统与用户的 Apple 账户执行，与本应用无关，是否开启及备份内容的保护均由用户自行决定和管理。',
          '用户应对其设备本身的访问安全负责（设备密码、生物识别等）。设备被他人解锁或入侵导致的数据泄露，不属于我们的责任范围。',
        ],
      },
      {
        id: 'rights',
        title: '三、你的权利',
        items: [
          '由于数据完全保存在你的设备上，你对数据拥有完全的控制权：你可以随时查看、修改、导出或删除任意记录，也可以通过卸载应用清除全部数据。',
        ],
      },
    ],
    closing: '如有关于本政策的问题，请通过应用发布渠道联系开发者。',
  },
  en: {
    eyebrow: 'LEGAL · PRIVACY',
    title: 'Privacy Policy',
    updated: 'Last updated: November 5, 2026',
    intro:
      'We understand how sensitive health data is. This policy explains how Kin Health (the “App”) handles your data.',
    sections: [
      {
        id: 'collection',
        title: '1. Data Collection Statement',
        items: [
          'We do not collect any additional data beyond what the App requires for its basic functionality. The App does not integrate analytics SDKs, advertising SDKs, event-tracking systems, or third-party analytics services, and it has no capability or channel to transmit user data to the developer or to any server.',
          'All data required for the App to function (member information, condition files, health records, photos, plans, and activity logs) is stored solely in the app sandbox on the user’s device. The developer cannot access or retrieve it.',
        ],
      },
      {
        id: 'storage',
        title: '2. Data Storage and User-Initiated Sharing',
        items: [
          'User data is stored only in the local app sandbox. Users may choose, of their own initiative, to save exported data files to iCloud Drive via system sharing or the Files feature, or to share them via AirDrop, Messages, Mail, and similar channels.',
          'If a user voluntarily shares exported data files with third-party platforms or with other people, we accept no liability for any leakage of sensitive information arising from such sharing. Exported files contain health and personally identifiable information; please assess the risks and confirm the recipients before sharing.',
          'Users may optionally enable system-level iCloud Backup. Backups are performed by the iOS system and the user’s Apple Account, not by the App; whether to enable backup and how to protect its contents are decided and managed solely by the user.',
          'Users are responsible for the security of access to their own device (device passcode, biometric authentication, etc.). Data leakage caused by a device being unlocked or compromised by others falls outside our scope of responsibility.',
        ],
      },
      {
        id: 'rights',
        title: '3. Your Rights',
        items: [
          'Because your data is kept entirely on your device, you have full control over it: you may view, modify, export, or delete any record at any time, and you may erase all data by uninstalling the App.',
        ],
      },
    ],
    closing: 'If you have questions about this policy, please contact the developer through the App’s distribution channel.',
  },
}
