<script setup lang="ts">
import { computed } from 'vue'
import PhoneFrame from '@/components/site/PhoneFrame.vue'
import { locale, useCopy } from '@/i18n'
import diseaseShotZh from '@/assets/screenshots/zh-01-disease.png'
import diseaseShotEn from '@/assets/screenshots/en-01-disease.png'

const t = useCopy()

// 首屏截图按当前语言选用中文版或英文版
const heroShot = computed(() => (locale.value === 'zh' ? diseaseShotZh : diseaseShotEn))

function scrollToFeatures() {
  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section class="hero">
    <div class="hero__grid container">
      <div class="hero__copy">
        <span class="eyebrow rise">{{ t.hero.eyebrow }}</span>

        <h1 class="display display-xl hero__title rise" style="animation-delay: 60ms">
          {{ t.hero.titleLine1 }}<br />
          {{ t.hero.titlePre }}<span class="hero__accent">{{ t.hero.titleAccent }}</span>{{ t.hero.titlePost }}
        </h1>

        <p class="lead hero__lead rise" style="animation-delay: 120ms">
          {{ t.hero.lead }}
        </p>

        <div class="hero__actions rise" style="animation-delay: 180ms">
          <button type="button" class="btn btn--primary" @click="scrollToFeatures">
            {{ t.hero.primaryCta }}
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
              <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" />
            </svg>
          </button>
          <router-link to="/privacy" class="btn btn--outline">{{ t.hero.secondaryCta }}</router-link>
        </div>

        <ul class="hero__facts rise" style="animation-delay: 240ms">
          <li v-for="fact in t.hero.facts" :key="fact">{{ fact }}</li>
        </ul>
      </div>

      <div class="hero__stage rise" style="animation-delay: 160ms">
        <div class="hero__glow" aria-hidden="true" />

        <svg class="hero__pulse" viewBox="0 0 420 160" fill="none" aria-hidden="true">
          <path
            d="M0 92h58l16-42 24 84 22-58 18 16h62l20-34 26 66 18-32h156"
            stroke="var(--accent)"
            stroke-width="1.6"
            stroke-linecap="round"
            opacity="0.35"
          />
        </svg>

        <PhoneFrame :src="heroShot" :alt="t.hero.phoneAlt" width="272px" :tilt="-2.5" />

        <div class="badge badge--store">
          <span class="badge__icon">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M10 2.6 3.4 5.8v4.4c0 3.7 2.8 6.2 6.6 7.2 3.8-1 6.6-3.5 6.6-7.2V5.8L10 2.6Z"
                stroke="currentColor"
                stroke-width="1.3"
              />
              <path d="m7.3 10 1.9 1.9 3.6-3.8" stroke="currentColor" stroke-width="1.3" />
            </svg>
          </span>
          <span>
            <strong>{{ t.hero.badgeStoreTitle }}</strong>
            <small>{{ t.hero.badgeStoreSub }}</small>
          </span>
        </div>

        <div class="badge badge--reminder">
          <span class="badge__icon badge__icon--pill">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="2.4" y="6.2" width="15.2" height="7.6" rx="3.8" stroke="currentColor" stroke-width="1.3" />
              <path d="M10 6.4v7.2" stroke="currentColor" stroke-width="1.3" />
            </svg>
          </span>
          <span>
            <strong>{{ t.hero.badgeReminderTitle }}</strong>
            <small>{{ t.hero.badgeReminderSub }}</small>
          </span>
          <span class="badge__state">{{ t.hero.badgeReminderState }}</span>
        </div>
      </div>
    </div>

    <div class="hero__strip container">
      <span class="mono">IPHONE · IOS</span>
      <span class="hero__strip-line" aria-hidden="true" />
      <span class="mono">DATA STAYS ON DEVICE</span>
      <span class="hero__strip-line" aria-hidden="true" />
      <span class="mono">NO ACCOUNT REQUIRED</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-top: 84px;
  padding-bottom: 24px;
  overflow: hidden;
  background:
    radial-gradient(900px 480px at 78% 18%, rgba(238, 90, 82, 0.1), transparent 68%),
    radial-gradient(620px 420px at 12% 82%, rgba(44, 110, 91, 0.08), transparent 70%),
    var(--paper);
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.06fr 0.94fr;
  align-items: center;
  gap: 56px;
}

.hero__title {
  margin-top: 26px;
}

.hero__accent {
  position: relative;
  white-space: nowrap;
  background: linear-gradient(transparent 62%, rgba(238, 90, 82, 0.18) 62%);
}

.hero__lead {
  max-width: 480px;
  margin-top: 26px;
  color: var(--ink-2);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
}

.hero__facts {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 22px;
  margin: 34px 0 0;
  padding: 0;
  list-style: none;
}

.hero__facts li {
  position: relative;
  padding-left: 18px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--muted);
}

.hero__facts li::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--moss);
  transform: translateY(-50%);
}

.hero__stage {
  position: relative;
  display: flex;
  justify-content: center;
  padding-block: 26px;
}

.hero__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(238, 90, 82, 0.22), rgba(238, 90, 82, 0) 66%);
  transform: translate(-50%, -50%);
}

.hero__pulse {
  position: absolute;
  right: -40px;
  bottom: 0;
  width: 88%;
  pointer-events: none;
}

.badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 40px rgba(21, 26, 36, 0.1);
  backdrop-filter: blur(8px);
}

.badge strong {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
}

.badge small {
  display: block;
  margin-top: 2px;
  font-size: 11px;
  color: var(--muted);
}

.badge__icon {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--moss-soft);
  color: var(--moss);
}

.badge__icon--pill {
  background: var(--accent-soft);
  color: var(--accent);
}

.badge--store {
  top: 12%;
  left: 0;
}

.badge--reminder {
  right: -6px;
  bottom: 16%;
}

.badge__state {
  padding: 3px 8px;
  border-radius: 999px;
  background: var(--moss-soft);
  font-size: 10px;
  color: var(--moss);
}

.hero__strip {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 44px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
}

.hero__strip-line {
  flex: 1;
  height: 1px;
  background: var(--line);
}

@media (max-width: 960px) {
  .hero {
    padding-top: 56px;
    padding-bottom: 16px;
  }

  .hero__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .hero__lead {
    max-width: none;
  }

  .hero__stage {
    order: 2;
    padding-inline: 12px;
  }

  .hero__stage :deep(.phone) {
    width: 242px !important;
  }

  .badge--store {
    top: 8%;
    left: -4px;
  }

  .badge--reminder {
    right: -4px;
    bottom: 10%;
  }

  .hero__strip {
    flex-wrap: wrap;
    gap: 10px 14px;
    margin-top: 28px;
  }

  .hero__strip-line {
    display: none;
  }
}

@media (max-width: 520px) {
  .badge--store,
  .badge--reminder {
    display: none;
  }

  .hero__pulse {
    right: 0;
    width: 100%;
  }
}
</style>
