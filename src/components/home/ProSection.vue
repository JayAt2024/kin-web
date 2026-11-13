<script setup lang="ts">
import { computed } from 'vue'
import { useCopy } from '@/i18n'

const t = useCopy()
const perks = computed(() => t.value.pro.perks)
</script>

<template>
  <section id="pro" class="pro section">
    <div class="container pro__grid">
      <div class="pro__copy">
        <span class="eyebrow">KINHEALTH PRO</span>
        <h2 class="display display-lg pro__title">{{ t.pro.titleLine1 }}<br />{{ t.pro.titleLine2 }}</h2>
        <p class="lead pro__lead">
          {{ t.pro.lead }}
        </p>

        <ul class="pro__list">
          <li v-for="perk in perks" :key="perk">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
              <path d="m3 8.4 3.2 3.2L13 5" stroke="currentColor" stroke-width="1.6" />
            </svg>
            {{ perk }}
          </li>
        </ul>

        <p class="pro__note">{{ t.pro.note }}</p>
      </div>

      <aside class="pro__card">
        <div class="pro__card-head">
          <span class="pro__crown">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3.4 17.6h17.2M4.6 16.4 3 6.4l5 4.2L12 4l4 6.6 5-4.2-1.6 10"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="mono pro__badge">SUBSCRIPTION</span>
        </div>

        <h3 class="pro__card-title">{{ t.nav.brand }} Pro</h3>
        <p class="pro__card-sub">{{ t.pro.cardSub }}</p>

        <ul class="pro__card-list">
          <li v-for="perk in perks" :key="perk">
            <svg viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden="true">
              <path d="m3 8.4 3.2 3.2L13 5" stroke="currentColor" stroke-width="1.6" />
            </svg>
            {{ perk }}
          </li>
        </ul>

        <span class="pro__cta">
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden="true">
            <path d="M8 3v10M3.5 8 8 12.5 12.5 8" stroke="currentColor" stroke-width="1.5" />
          </svg>
          {{ t.pro.cta }}
        </span>

        <p class="pro__card-foot">
          {{ t.pro.cardFoot }}
        </p>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.pro {
  background: var(--paper);
}

.pro__grid {
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  align-items: center;
  gap: 72px;
}

.pro__title {
  margin-top: 22px;
}

.pro__lead {
  max-width: 460px;
  margin-top: 20px;
  font-size: 15px;
  color: var(--muted);
}

.pro__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 24px;
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
}

.pro__list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  color: var(--ink-2);
}

.pro__list svg {
  color: var(--moss);
}

.pro__note {
  margin-top: 26px;
  font-size: 11.5px;
  color: var(--muted-soft);
}

.pro__card {
  position: relative;
  padding: 30px 30px 26px;
  border-radius: var(--radius-xl);
  background: linear-gradient(155deg, #f0655c 0%, #d64036 58%, #b02f26 100%);
  color: #fff;
  overflow: hidden;
  box-shadow: 0 32px 64px rgba(178, 47, 38, 0.22);
}

.pro__card::before {
  content: '';
  position: absolute;
  top: -40%;
  right: -20%;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.22), transparent 66%);
}

.pro__card-head {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pro__crown {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.16);
}

.pro__crown svg {
  width: 26px;
  height: 26px;
}

.pro__badge {
  color: rgba(255, 255, 255, 0.6);
}

.pro__card-title {
  position: relative;
  margin-top: 26px;
  font-family: var(--font-display);
  font-size: 30px;
  font-weight: 600;
}

.pro__card-sub {
  position: relative;
  margin-top: 4px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

.pro__card-list {
  position: relative;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}

.pro__card-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 13.5px;
}

.pro__card-list svg {
  color: rgba(255, 255, 255, 0.85);
}

.pro__cta {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  margin-top: 24px;
  border-radius: 999px;
  background: #fff;
  color: var(--accent-deep);
  font-size: 14px;
  font-weight: 500;
}

.pro__card-foot {
  position: relative;
  margin-top: 14px;
  font-size: 10.5px;
  line-height: 1.7;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 960px) {
  .pro__grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  .pro__lead {
    max-width: none;
  }

  .pro__card {
    max-width: 460px;
  }
}

@media (max-width: 520px) {
  .pro__list {
    grid-template-columns: 1fr;
  }

  .pro__card {
    padding: 24px 22px 22px;
  }
}
</style>
