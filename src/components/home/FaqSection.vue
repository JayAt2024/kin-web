<script setup lang="ts">
import { computed } from 'vue'
import { useCopy } from '@/i18n'

const t = useCopy()
const faqs = computed(() => t.value.faq.items)
</script>

<template>
  <section id="faq" class="faq section">
    <div class="container faq__grid">
      <div class="faq__head">
        <span class="eyebrow">QUESTIONS</span>
        <h2 class="display display-lg faq__title">{{ t.faq.titleLine1 }}<br />{{ t.faq.titleLine2 }}</h2>
        <p class="faq__note">
          {{ t.faq.note }}
        </p>
      </div>

      <div class="faq__list">
        <details v-for="item in faqs" :key="item.q" class="faq__item">
          <summary>
            <span>{{ item.q }}</span>
            <span class="faq__plus" aria-hidden="true" />
          </summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </div>

    <div class="container">
      <div class="closing">
        <div>
          <span class="eyebrow closing__eyebrow">KINHEALTH</span>
          <p class="display closing__title">{{ t.faq.closingLine1 }}<br />{{ t.faq.closingLine2 }}</p>
        </div>
        <div class="closing__actions">
          <router-link to="/privacy" class="btn btn--primary">{{ t.faq.closingPrimary }}</router-link>
          <router-link to="/terms" class="btn btn--outline">{{ t.faq.closingSecondary }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: var(--paper);
}

.faq__grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 64px;
}

.faq__head {
  align-self: start;
}

.faq__title {
  margin-top: 22px;
}

.faq__note {
  margin-top: 24px;
  font-size: 12px;
  line-height: 1.9;
  color: var(--muted);
}

.faq__item {
  border-bottom: 1px solid var(--line);
}

.faq__item:first-child {
  border-top: 1px solid var(--line);
}

.faq__item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-block: 22px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  list-style: none;
  transition: color 0.2s var(--ease);
}

.faq__item summary::-webkit-details-marker {
  display: none;
}

.faq__item summary:hover {
  color: var(--accent);
}

.faq__plus {
  position: relative;
  flex-shrink: 0;
  width: 14px;
  height: 14px;
}

.faq__plus::before,
.faq__plus::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  background: var(--ink);
  transform: translate(-50%, -50%);
  transition: transform 0.25s var(--ease), background-color 0.25s var(--ease);
}

.faq__plus::before {
  width: 14px;
  height: 1.5px;
}

.faq__plus::after {
  width: 1.5px;
  height: 14px;
}

.faq__item[open] .faq__plus::after {
  transform: translate(-50%, -50%) scaleY(0);
}

.faq__item[open] .faq__plus::before {
  background: var(--accent);
}

.faq__item p {
  max-width: 560px;
  padding-bottom: 24px;
  font-size: 13.5px;
  line-height: 1.85;
  color: var(--muted);
}

.closing {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-top: 88px;
  padding-top: 48px;
  border-top: 1px solid var(--line-strong);
}

.closing__eyebrow {
  color: var(--muted);
}

.closing__title {
  margin-top: 18px;
  font-size: clamp(28px, 3.4vw, 42px);
}

.closing__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 6px;
}

@media (max-width: 960px) {
  .faq__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .closing {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 64px;
  }
}
</style>
