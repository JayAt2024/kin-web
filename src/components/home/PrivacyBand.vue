<script setup lang="ts">
import { useCopy } from '@/i18n'

const t = useCopy()
</script>

<template>
  <section id="privacy" class="privacy">
    <div class="container privacy__grid">
      <div class="privacy__copy">
        <span class="eyebrow privacy__eyebrow">PRIVACY BY DEFAULT</span>
        <h2 class="display display-lg privacy__title">{{ t.privacy.titleLine1 }}<br />{{ t.privacy.titleLine2 }}</h2>
        <p class="privacy__lead">
          {{ t.privacy.lead }}
        </p>

        <router-link to="/privacy" class="privacy__link">
          {{ t.privacy.link }}
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
            <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" />
          </svg>
        </router-link>
      </div>

      <div class="privacy__ledger">
        <div class="privacy__ledger-head">
          <span class="mono">DATA LEDGER</span>
          <span class="mono">KINHEALTH / ILLUSTRATIVE</span>
        </div>

        <ul>
          <li v-for="row in t.privacy.rows" :key="row.label" :class="{ 'is-ok': row.ok }">
            <span class="privacy__label">{{ row.label }}</span>
            <span class="privacy__value">
              <svg v-if="row.ok" viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden="true">
                <path d="m3 8.4 3.2 3.2L13 5" stroke="currentColor" stroke-width="1.6" />
              </svg>
              <svg v-else viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden="true">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.6" />
              </svg>
              {{ row.value }}
            </span>
          </li>
        </ul>

        <p class="privacy__footnote">
          {{ t.privacy.footnote }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.privacy {
  position: relative;
  padding-block: 104px;
  background: var(--dark);
  color: var(--on-dark);
  overflow: hidden;
}

.privacy::before {
  content: '';
  position: absolute;
  top: -30%;
  left: 58%;
  width: 620px;
  height: 620px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(238, 90, 82, 0.28), transparent 65%);
  pointer-events: none;
}

.privacy__grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 0.92fr;
  align-items: center;
  gap: 64px;
}

.privacy__eyebrow {
  color: var(--on-dark-muted);
}

.privacy__title {
  margin-top: 24px;
}

.privacy__lead {
  max-width: 460px;
  margin-top: 22px;
  font-size: 16px;
  line-height: 1.8;
  color: var(--on-dark-muted);
}

.privacy__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(245, 243, 237, 0.35);
  font-size: 14px;
  color: var(--on-dark);
  transition: gap 0.25s var(--ease), border-color 0.25s var(--ease);
}

.privacy__link:hover {
  gap: 12px;
  border-color: var(--accent);
}

.privacy__ledger {
  padding: 26px 28px;
  border: 1px solid rgba(245, 243, 237, 0.16);
  border-radius: var(--radius-l);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(6px);
}

.privacy__ledger-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(245, 243, 237, 0.12);
  color: var(--on-dark-muted);
}

.privacy__ledger ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.privacy__ledger li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-block: 15px;
  border-bottom: 1px solid rgba(245, 243, 237, 0.08);
}

.privacy__label {
  font-size: 14px;
  color: var(--on-dark-muted);
}

.privacy__value {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  color: rgba(245, 243, 237, 0.7);
}

.privacy__value svg {
  color: rgba(245, 243, 237, 0.45);
}

.is-ok .privacy__value {
  color: #8fd6b4;
}

.is-ok .privacy__value svg {
  color: #8fd6b4;
}

.privacy__footnote {
  margin-top: 18px;
  font-size: 12px;
  line-height: 1.8;
  color: var(--on-dark-muted);
}

@media (max-width: 960px) {
  .privacy {
    padding-block: 72px;
  }

  .privacy__grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .privacy__lead {
    max-width: none;
  }
}
</style>
