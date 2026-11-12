<script setup lang="ts">
import { computed, ref } from 'vue'
import PhoneFrame from '@/components/site/PhoneFrame.vue'
import Lightbox from '@/components/site/Lightbox.vue'
import { locale, useCopy } from '@/i18n'
import diseaseShotZh from '@/assets/screenshots/zh-01-disease.png'
import recordsShotZh from '@/assets/screenshots/zh-02-records.png'
import remindersShotZh from '@/assets/screenshots/zh-03-reminders.png'
import diseaseShotEn from '@/assets/screenshots/en-01-disease.png'
import recordsShotEn from '@/assets/screenshots/en-02-records.png'
import remindersShotEn from '@/assets/screenshots/en-03-reminders.png'
import membersShotZh from '@/assets/screenshots/zh-04-members.png'
import membersShotEn from '@/assets/screenshots/en-04-members.png'

const t = useCopy()

// 四个展示位对应 病症 / 记录 / 提醒 / 成员 四个页面，截图按当前语言选用
const shotSets = {
  zh: [diseaseShotZh, recordsShotZh, remindersShotZh, membersShotZh],
  en: [diseaseShotEn, recordsShotEn, remindersShotEn, membersShotEn],
}
const tilts = [-3, -1, 1, 3]

// lightbox 当前打开的展示位，null 为关闭
const activeIndex = ref<number | null>(null)
const activeScreen = computed(() =>
  activeIndex.value === null ? null : screens.value[activeIndex.value],
)

const screens = computed(() => {
  const shots = shotSets[locale.value]
  return t.value.showcase.screens.map((screen, index) => ({
    ...screen,
    index: String(index + 1).padStart(2, '0'),
    src: shots[index],
    tilt: tilts[index],
  }))
})
</script>

<template>
  <section class="showcase section">
    <div class="container">
      <div class="showcase__head">
        <span class="eyebrow">SCREENS</span>
        <h2 class="display display-lg showcase__title">{{ t.showcase.titleLine1 }}<br />{{ t.showcase.titleLine2 }}</h2>
        <p class="lead showcase__lead">
          {{ t.showcase.lead }}
        </p>
      </div>

      <div class="showcase__grid">
        <figure v-for="(screen, index) in screens" :key="screen.index" class="screen">
          <span class="screen__index mono">{{ screen.index }}</span>
          <div class="screen__device">
            <button
              type="button"
              class="screen__zoom"
              :aria-label="t.lightbox.zoomAria"
              @click="activeIndex = index"
            >
              <PhoneFrame :src="screen.src" :alt="screen.alt" width="100%" :tilt="screen.tilt" />
            </button>
          </div>
          <figcaption>
            <h3>{{ screen.title }}</h3>
            <p>{{ screen.desc }}</p>
          </figcaption>
        </figure>
      </div>

      <p class="showcase__hint mono">{{ t.lightbox.hint }}</p>
    </div>

    <Lightbox
      v-if="activeScreen"
      :src="activeScreen.src"
      :alt="activeScreen.alt"
      @close="activeIndex = null"
    />
  </section>
</template>

<style scoped>
.showcase {
  background: var(--paper-soft);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.showcase__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 64px;
}

.showcase__title {
  margin-top: 22px;
}

.showcase__lead {
  max-width: 540px;
  margin-top: 18px;
  font-size: 15px;
  color: var(--muted);
}

.showcase__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;
  align-items: start;
}

.screen {
  margin: 0;
}

.screen__index {
  display: block;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
}

.screen__device {
  margin-block: 26px 22px;
  padding-inline: 10%;
}

.screen:nth-child(even) .screen__device {
  padding-top: 34px;
}

.screen figcaption h3 {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 600;
}

.screen figcaption p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.8;
  color: var(--muted);
}

.screen__zoom {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: zoom-in;
  -webkit-tap-highlight-color: transparent;
}

.screen__zoom:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 6px;
  border-radius: 18px;
}

.showcase__hint {
  margin-top: 40px;
  text-align: center;
  font-size: 12px;
  color: var(--muted);
}

/* 中屏（平板/窄桌面）：一行两个，保留交错下沉 */
@media (max-width: 960px) {
  .showcase__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 44px 40px;
    max-width: 760px;
    margin-inline: auto;
  }

  .screen__device {
    padding-inline: 0;
    /* 两列布局下限制手机尺寸，避免占满整列显得过大 */
    max-width: 280px;
    margin-inline: auto;
  }

  .showcase__head {
    padding-bottom: 44px;
  }
}

/* 手机：一行一个 */
@media (max-width: 640px) {
  .showcase__grid {
    grid-template-columns: 1fr;
    max-width: 380px;
  }

  /* 单列下进一步收紧手机尺寸 */
  .screen__device {
    max-width: 250px;
    margin-inline: auto;
  }

  .screen:nth-child(even) .screen__device {
    padding-top: 0;
  }
}
</style>
