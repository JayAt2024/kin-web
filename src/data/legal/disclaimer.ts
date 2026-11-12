import type { LegalDoc } from './types'
import type { Locale } from '@/i18n'

// 免责声明与隐私声明：中英双语，法律语义保持一致
export const disclaimerDocs: Record<Locale, LegalDoc> = {
  zh: {
    eyebrow: 'LEGAL · DISCLAIMER',
    title: '免责声明与隐私声明',
    updated: '最后更新：2026 年 11 月 5 日',
    intro:
      '在使用今安记（Kin Health，以下简称「本应用」）之前，请仔细阅读本声明。下载、安装或使用本应用，即表示你已阅读、理解并同意本声明的全部内容。如果你不同意任何条款，请停止使用并卸载本应用。',
    sections: [
      {
        id: 'nature',
        title: '一、应用性质',
        items: [
          '本应用是一款个人与家庭健康信息记录工具，由独立开发者开发和维护。我们不是医疗机构、医疗机构互联网服务平台、医疗器械或医疗软件，也不雇佣任何执业医师或专业人员。',
          '本应用的功能限于：将用户主动录入的健康相关信息（如症状、疾病、检查、用药、就诊、孕期检查等）以结构化的方式存储、组织和展示，并提供本地提醒等辅助功能。',
          '本应用未取得任何医疗器械注册证或医疗资质认证，其内容与输出（包括参考范围、预设指标、分类标签等）均不构成诊断、治疗、用药建议或任何形式的医疗意见。',
        ],
      },
      {
        id: 'collection',
        title: '二、数据收集声明',
        items: [
          '我们不会收集维持本应用基本功能所需的任何额外数据。本应用不接入统计 SDK、广告 SDK、埋点系统或第三方分析服务，不具备向开发者或任何服务器传输用户数据的能力与通道。',
          '应用运行所需的全部数据（成员信息、疾病档案、健康记录、照片、计划、操作日志）均仅保存在用户设备的应用沙盒内，开发者无法访问、无法获取。',
        ],
      },
      {
        id: 'sharing',
        title: '三、数据存储与用户自主分享',
        items: [
          '用户数据只存储于本地应用沙盒。用户可以选择通过系统分享或「文件」功能，主动将导出的数据文档存储到 iCloud 云盘，或通过隔空投送、消息、邮件等方式分享。',
          '如果用户主动将数据文档分享到第三方平台或其他用户，由此造成的敏感信息泄露，我们不承担任何泄密责任。导出文件包含健康与个人身份信息，请在分享前自行评估风险并确认接收方。',
          '用户可选择开启系统级「iCloud 云备份」。备份行为由 iOS 系统与用户的 Apple 账户执行，与本应用无关，是否开启及备份内容的保护均由用户自行决定和管理。',
          '用户应对其设备本身的访问安全负责（设备密码、生物识别等）。设备被他人解锁或入侵导致的数据泄露，不属于我们的责任范围。',
        ],
      },
      {
        id: 'non-medical',
        title: '四、非医疗建议声明（重要）',
        items: [
          '本应用对用户的症状、疾病、用药、检查结果等不提供任何建议、暗示或推断。应用中出现的疾病预设、指标分类、参考范围、「居家推荐」数值等内容，均来自公开的通行指南参考，仅作为用户录入和组织数据的展示参照，不针对任何个体情况，不应被理解为正常 / 异常的判断或对健康状况的评估。',
          '任意数据状态的流转（如严重等级、达标状态、计划的开启与关闭、记录的增删改）均由用户自主更新和修改，应用不自动对任何健康状态做出判定或变更。',
          '用户的任何健康决策（包括就医、用药、停药、剂量调整、治疗方案选择等），都必须基于专业医生的判断。切勿仅依据本应用中记录或展示的任何数据做出健康决策；如遇紧急情况，请立即就医或拨打急救电话。',
          '我们只负责将用户提供的数据以结构化的方式存储和展示给用户。用户录入内容的准确性、完整性和真实性由用户自行负责；因录入错误、遗漏或对数据的误读而产生的任何后果，我们不承担责任。',
        ],
      },
      {
        id: 'limits',
        title: '五、其他责任限制',
        items: [
          '提醒功能依赖 iOS 本地通知。通知可能因系统权限设置、设备关机、系统资源清理、时区变更等原因延迟或不触发。提醒不构成用药依从性保障，重要治疗安排请勿完全依赖本应用通知。',
          '数据丢失风险由用户自担：卸载应用、恢复出厂设置、未开启备份、系统故障等都可能导致本地数据永久丢失。我们建议用户定期导出重要档案并自行妥善保管备份；对因上述原因造成的数据丢失，我们无法恢复且不承担责任。',
          '应用按「现状」提供。在法律允许的最大范围内，我们对本应用的适用性、无错误、不间断运行不作任何明示或默示的保证；对因使用或无法使用本应用而产生的任何直接或间接损失，我们不承担责任。',
          '未成年人使用：为未成年人创建档案和录入数据应由其监护人操作，相关数据的法律责任由监护人承担。',
          '应用更新与条款变更：我们可能随版本更新调整功能与本声明，变更将在应用内或文档中公布；继续使用即视为接受更新后的条款。重大变更我们会尽量以显著方式提示。',
          '本声明受用户所在地适用法律约束。若本声明个别条款被认定无效，不影响其余条款的效力。',
        ],
      },
      {
        id: 'duty',
        title: '六、我们的义务',
        items: [
          '我们开发和运维本应用的义务是：如实地帮助用户记录用户主动提供的数据，并把数据保存在用户自己的设备上。除此之外的任何医疗层面的判断、建议与保障，均不在本应用的服务范围之内。',
        ],
      },
    ],
    closing: '如有关于本声明的问题，请发送邮件至 coooooooderjay@gmail.com 联系开发者。',
  },
  en: {
    eyebrow: 'LEGAL · DISCLAIMER',
    title: 'Disclaimer & Privacy Notice',
    updated: 'Last updated: November 5, 2026',
    intro:
      'Please read this notice carefully before using Kin Health (the "App"). Downloading, installing or using the App means you have read, understood and agreed to this notice in full. If you disagree with any term, please stop using and uninstall the App.',
    sections: [
      {
        id: 'nature',
        title: '1. Nature of the App',
        items: [
          'The App is a personal and family health information recording tool developed and maintained by an independent developer. We are not a medical institution, an internet healthcare service platform, a medical device or medical software, and we employ no licensed physicians or professionals.',
          'The App is limited to: storing, organizing and presenting health information you actively enter (symptoms, conditions, tests, medications, visits, prenatal checkups, etc.) in a structured way, plus local reminders and similar auxiliary functions.',
          'The App holds no medical device registration or healthcare qualification. Its content and output (including reference ranges, preset metrics and category labels) do not constitute diagnosis, treatment, medication advice or any form of medical opinion.',
        ],
      },
      {
        id: 'collection',
        title: '2. Data Collection Notice',
        items: [
          'We do not collect any additional data beyond what the App needs to function. No analytics SDKs, ad SDKs, tracking systems or third-party analytics services are integrated; the App has no capability or channel to transmit user data to the developer or any server.',
          'All data required for the App to run (member profiles, condition records, health logs, photos, plans and operation logs) stays solely within the app sandbox on your device. The developer cannot access or obtain it.',
        ],
      },
      {
        id: 'sharing',
        title: '3. Data Storage & User-Initiated Sharing',
        items: [
          'User data is stored only in the local app sandbox. You may choose to export documents to iCloud Drive via system sharing or the Files app, or share them via AirDrop, Messages, Mail and similar channels.',
          'If you voluntarily share exported documents with third-party platforms or other people, we accept no liability for any resulting disclosure of sensitive information. Exported files contain health and personal identity information — assess the risk and confirm the recipient before sharing.',
          'You may enable system-level iCloud Backup. Backup is performed by iOS and your Apple account, not by the App; whether to enable it and how the backed-up content is protected are entirely your decision and responsibility.',
          'You are responsible for the access security of your device (passcode, biometrics, etc.). Data leaks caused by your device being unlocked or compromised by others are outside our responsibility.',
        ],
      },
      {
        id: 'non-medical',
        title: '4. No Medical Advice (Important)',
        items: [
          'The App offers no suggestion, hint or inference whatsoever about your symptoms, conditions, medications or test results. Condition presets, metric categories, reference ranges and "at-home" values shown in the App come from public, widely used guideline references and serve only as display references for organizing your data. They target no individual situation and must not be read as normal/abnormal judgments or health assessments.',
          'All state changes (severity levels, on-target status, enabling or disabling plans, adding, editing or removing records) are made by you alone; the App never automatically judges or alters any health status.',
          'Every health decision — seeking care, taking or stopping medication, adjusting dosage, choosing a treatment plan — must be based on the judgment of a qualified physician. Never make health decisions solely from data recorded or displayed in the App. In an emergency, seek immediate care or call emergency services.',
          'Our role is only to store and present the data you provide in a structured way. You are responsible for the accuracy, completeness and truthfulness of what you enter; we accept no liability for consequences arising from input errors, omissions or misreading of the data.',
        ],
      },
      {
        id: 'limits',
        title: '5. Other Limitations of Liability',
        items: [
          'Reminders rely on iOS local notifications. Notifications may be delayed or not fire due to permission settings, the device being off, system resource management, time-zone changes and similar causes. Reminders are not a guarantee of medication adherence — do not rely solely on App notifications for important treatment schedules.',
          'You bear the risk of data loss: uninstalling the App, resetting the device, having no backup enabled or system failures may cause permanent loss of local data. We recommend regularly exporting important records and keeping your own backups; we cannot recover such data and accept no liability for its loss.',
          'The App is provided "as is". To the maximum extent permitted by law, we make no express or implied warranties of fitness, error-free operation or uninterrupted availability, and we accept no liability for any direct or indirect loss arising from use of, or inability to use, the App.',
          'Minors: creating profiles and entering data for a minor must be done by their guardian, who bears the legal responsibility for the related data.',
          'Updates and changes: we may adjust features and this notice with app updates; changes will be published in the App or in documentation, and continued use constitutes acceptance of the updated terms. We will highlight material changes where practical.',
          'This notice is governed by the laws applicable to your place of residence. If any provision is found invalid, the remaining provisions stay in effect.',
        ],
      },
      {
        id: 'duty',
        title: '6. Our Obligation',
        items: [
          'Our obligation in developing and operating the App is: to faithfully help you record the data you actively provide, and to keep that data on your own device. Any medical-level judgment, advice or assurance beyond this is outside the scope of the App\'s service.',
        ],
      },
    ],
    closing:
      'Questions about this notice? Email the developer at coooooooderjay@gmail.com.',
  },
}
