import type { LegalDoc } from './types'
import type { Locale } from '@/i18n'

// 服务条款：中英双语，法律语义保持一致
export const termsDocs: Record<Locale, LegalDoc> = {
  zh: {
    eyebrow: 'LEGAL · TERMS',
    title: '服务条款',
    updated: '最后更新：2026 年 11 月 5 日',
    intro:
      '在使用今安记（Kin Health，以下简称「本应用」）之前，请仔细阅读本条款。下载、安装或使用本应用，即表示你已阅读、理解并同意本条款的全部内容。如果你不同意任何条款，请停止使用并卸载本应用。',
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
        id: 'advice',
        title: '二、非医疗建议声明（重要）',
        items: [
          '本应用对用户的症状、疾病、用药、检查结果等不提供任何建议、暗示或推断。应用中出现的疾病预设、指标分类、参考范围、「居家推荐」数值等内容，均来自公开的通行指南参考，仅作为用户录入和组织数据的展示参照，不针对任何个体情况，不应被理解为正常 / 异常的判断或对健康状况的评估。',
          '任意数据状态的流转（如严重等级、达标状态、计划的开启与关闭、记录的增删改）均由用户自主更新和修改，应用不自动对任何健康状态做出判定或变更。',
          '用户的任何健康决策（包括就医、用药、停药、剂量调整、治疗方案选择等），都必须基于专业医生的判断。切勿仅依据本应用中记录或展示的任何数据做出健康决策；如遇紧急情况，请立即就医或拨打急救电话。',
          '我们只负责将用户提供的数据以结构化的方式存储和展示给用户。用户录入内容的准确性、完整性和真实性由用户自行负责；因录入错误、遗漏或对数据的误读而产生的任何后果，我们不承担责任。',
        ],
      },
      {
        id: 'liability',
        title: '三、其他责任限制',
        items: [
          '提醒功能依赖 iOS 本地通知。通知可能因系统权限设置、设备关机、系统资源清理、时区变更等原因延迟或不触发。提醒不构成用药依从性保障，重要治疗安排请勿完全依赖本应用通知。',
          '数据丢失风险由用户自担：卸载应用、恢复出厂设置、未开启备份、系统故障等都可能导致本地数据永久丢失。我们建议用户定期导出重要档案并自行妥善保管备份；对因上述原因造成的数据丢失，我们无法恢复且不承担责任。',
          '应用按「现状」提供。在法律允许的最大范围内，我们对本应用的适用性、无错误、不间断运行不作任何明示或默示的保证；对因使用或无法使用本应用而产生的任何直接或间接损失，我们不承担责任。',
          '未成年人使用：为未成年人创建档案和录入数据应由其监护人操作，相关数据的法律责任由监护人承担。',
          '应用更新与条款变更：我们可能随版本更新调整功能与本条款，变更将在应用内或文档中公布；继续使用即视为接受更新后的条款。重大变更我们会尽量以显著方式提示。',
          '本条款受用户所在地适用法律约束。若本条款个别条款被认定无效，不影响其余条款的效力。',
        ],
      },
      {
        id: 'obligations',
        title: '四、我们的义务',
        items: [
          '我们开发和运维本应用的义务是：如实地帮助用户记录用户主动提供的数据，并把数据保存在用户自己的设备上。',
          '除此之外的任何医疗层面的判断、建议与保障，均不在本应用的服务范围之内。',
        ],
      },
    ],
    closing: '如有关于本条款的问题，请通过应用发布渠道联系开发者。',
  },
  en: {
    eyebrow: 'LEGAL · TERMS',
    title: 'Terms of Service',
    updated: 'Last updated: November 5, 2026',
    intro:
      'Please read these terms carefully before using Kin Health (the “App”). By downloading, installing, or using the App, you confirm that you have read, understood, and agreed to all of these terms. If you do not agree to any term, please stop using the App and uninstall it.',
    sections: [
      {
        id: 'nature',
        title: '1. Nature of the App',
        items: [
          'The App is a tool for recording personal and family health information, developed and maintained by an independent developer. We are not a medical institution, an internet-based medical service platform, a medical device, or medical software, and we employ no licensed physicians or healthcare professionals.',
          'The App’s functions are limited to storing, organizing, and displaying health-related information voluntarily entered by the user (such as symptoms, conditions, examinations, medications, visits, and prenatal checkups) in a structured way, together with auxiliary features such as local reminders.',
          'The App holds no medical device registration or healthcare qualification of any kind. Its content and output (including reference ranges, preset metrics, and category labels) do not constitute diagnosis, treatment, medication advice, or any form of medical opinion.',
        ],
      },
      {
        id: 'advice',
        title: '2. Statement on Non-Medical Advice (Important)',
        items: [
          'The App provides no advice, hints, or inferences regarding the user’s symptoms, conditions, medications, examination results, or similar data. Condition presets, metric categories, reference ranges, “at-home recommended” values, and similar content shown in the App are drawn from publicly available, widely used guidelines; they serve only as display references for entering and organizing data, do not address any individual situation, and must not be read as normal/abnormal judgments or assessments of health status.',
          'All transitions of data states (such as severity levels, on-target status, enabling or disabling of plans, and creation, modification, or deletion of records) are updated and edited by the user. The App makes no automatic judgment about, or change to, any health status.',
          'Any health decision (including seeking care, taking or stopping medication, adjusting dosage, or choosing a treatment plan) must be based on the judgment of a qualified physician. Never make a health decision based solely on any data recorded or displayed in the App; in an emergency, seek medical care immediately or call emergency services.',
          'We are responsible only for storing the user’s data and presenting it back in a structured way. The accuracy, completeness, and truthfulness of entered content are the user’s own responsibility; we accept no liability for any consequences arising from entry errors, omissions, or misreading of the data.',
        ],
      },
      {
        id: 'liability',
        title: '3. Other Limitations of Liability',
        items: [
          'The reminder feature relies on iOS local notifications. Notifications may be delayed or fail to fire due to system permission settings, a powered-off device, system resource cleanup, time-zone changes, and similar causes. Reminders are not a guarantee of medication adherence; do not rely entirely on the App’s notifications for important treatment schedules.',
          'The risk of data loss is borne by the user: uninstalling the App, resetting the device to factory settings, keeping backups disabled, or system failures may all permanently destroy local data. We recommend exporting important files regularly and safeguarding backups yourself. We cannot recover data lost for these reasons and accept no liability for such loss.',
          'The App is provided “as is”. To the maximum extent permitted by law, we make no express or implied warranties as to the App’s fitness for any purpose, freedom from errors, or uninterrupted operation, and we accept no liability for any direct or indirect losses arising from the use of, or the inability to use, the App.',
          'Use by minors: creating profiles and entering data for a minor should be performed by the minor’s guardian, who bears legal responsibility for the related data.',
          'App updates and changes to these terms: we may adjust features and these terms with version updates. Changes will be announced within the App or in the documentation; continued use constitutes acceptance of the updated terms. We will make reasonable efforts to highlight material changes.',
          'These terms are governed by the applicable law of the user’s location. If any individual provision of these terms is held invalid, the remaining provisions remain in effect.',
        ],
      },
      {
        id: 'obligations',
        title: '4. Our Obligations',
        items: [
          'Our obligation in developing and operating the App is to faithfully help the user record the data the user voluntarily provides, and to keep that data on the user’s own device.',
          'Any medical judgment, advice, or assurance beyond this is outside the scope of the App’s services.',
        ],
      },
    ],
    closing: 'If you have questions about these terms, please contact the developer through the App’s distribution channel.',
  },
}
