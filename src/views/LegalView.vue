<script setup lang="ts">
import { computed } from 'vue'
import { locale, useCopy } from '@/i18n'
import { privacyDocs } from '@/data/legal/privacy'
import { termsDocs } from '@/data/legal/terms'
import { disclaimerDocs } from '@/data/legal/disclaimer'

const props = defineProps<{ kind: 'privacy' | 'terms' | 'disclaimer' }>()

const t = useCopy()

const docs = {
  privacy: privacyDocs,
  terms: termsDocs,
  disclaimer: disclaimerDocs,
} as const

// 按路由 kind 与当前 locale 取对应文档，切换语言时立即更新
const doc = computed(() => docs[props.kind][locale.value])

const otherDoc = computed(() => {
  const map = {
    privacy: { to: '/terms', label: t.value.legal.viewTerms },
    terms: { to: '/disclaimer', label: t.value.legal.viewDisclaimer },
    disclaimer: { to: '/privacy', label: t.value.legal.viewPrivacy },
  } as const
  return map[props.kind]
})

function jump(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div class="legal">
    <div class="container">
      <router-link to="/" class="legal__back">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
          <path d="M14 8H3M7 4 3 8l4 4" stroke="currentColor" stroke-width="1.4" />
        </svg>
        {{ t.legal.back }}
      </router-link>

      <header class="legal__header">
        <span class="eyebrow">{{ doc.eyebrow }}</span>
        <h1 class="display display-lg legal__title">{{ doc.title }}</h1>
        <p class="mono legal__updated">{{ doc.updated }}</p>
        <p class="legal__intro">{{ doc.intro }}</p>
      </header>

      <div class="legal__body">
        <aside class="legal__toc">
          <span class="mono">{{ t.legal.toc }}</span>
          <nav>
            <button
              v-for="(section, index) in doc.sections"
              :key="section.id"
              type="button"
              @click="jump(section.id)"
            >
              <span class="legal__toc-index">{{ String(index + 1).padStart(2, '0') }}</span>
              {{ section.title }}
            </button>
          </nav>
        </aside>

        <article class="legal__article">
          <section v-for="section in doc.sections" :id="section.id" :key="section.id" class="legal__section">
            <h2>{{ section.title }}</h2>
            <ol>
              <li v-for="item in section.items" :key="item">{{ item }}</li>
            </ol>
          </section>

          <p class="legal__closing">{{ doc.closing }}</p>

          <div class="legal__disclaimer">
            <span class="legal__disclaimer-mark" aria-hidden="true">i</span>
            <p>
              {{ t.legal.disclaimer }}
            </p>
          </div>

          <router-link :to="otherDoc.to" class="legal__other">
            {{ otherDoc.label }}
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
              <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" />
            </svg>
          </router-link>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.legal {
  padding-block: 48px 96px;
  background: var(--paper-soft);
}

.legal__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--muted);
  transition: color 0.2s var(--ease);
}

.legal__back:hover {
  color: var(--accent);
}

.legal__header {
  max-width: 780px;
  padding-block: 44px 40px;
  border-bottom: 1px solid var(--line);
}

.legal__title {
  margin-top: 18px;
  font-size: clamp(34px, 4vw, 50px);
}

.legal__updated {
  margin-top: 10px;
  color: var(--muted-soft);
}

.legal__intro {
  max-width: 660px;
  margin-top: 22px;
  font-size: 15px;
  line-height: 1.9;
  color: var(--ink-2);
}

.legal__body {
  display: grid;
  grid-template-columns: 230px minmax(0, 1fr);
  gap: 64px;
  padding-top: 48px;
}

.legal__toc {
  position: sticky;
  top: 108px;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.legal__toc nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.legal__toc button {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 7px 0;
  border: 0;
  background: transparent;
  font-size: 13px;
  line-height: 1.5;
  text-align: left;
  color: var(--muted);
  cursor: pointer;
  transition: color 0.2s var(--ease);
}

.legal__toc button:hover {
  color: var(--accent);
}

.legal__toc-index {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--muted-soft);
}

.legal__article {
  max-width: 700px;
}

.legal__section {
  padding-bottom: 40px;
}

.legal__section h2 {
  font-family: var(--font-display);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.legal__section ol {
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  counter-reset: item;
}

.legal__section li {
  position: relative;
  padding-left: 34px;
  margin-bottom: 14px;
  font-size: 14.5px;
  line-height: 1.9;
  color: var(--ink-2);
  counter-increment: item;
}

.legal__section li::before {
  content: counter(item, decimal-leading-zero);
  position: absolute;
  left: 0;
  top: 2px;
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--muted-soft);
}

.legal__closing {
  padding-top: 8px;
  font-size: 14px;
  color: var(--muted);
}

.legal__disclaimer {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-top: 36px;
  padding: 20px 22px;
  border: 1px solid var(--line);
  border-radius: var(--radius-m);
  background: var(--surface);
}

.legal__disclaimer-mark {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--accent-soft);
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent-deep);
}

.legal__disclaimer p {
  font-size: 12.5px;
  line-height: 1.8;
  color: var(--muted);
}

.legal__other {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  font-size: 14px;
  color: var(--ink);
  border-bottom: 1px solid var(--line-strong);
  padding-bottom: 3px;
  transition: gap 0.25s var(--ease), color 0.2s var(--ease);
}

.legal__other:hover {
  gap: 12px;
  color: var(--accent);
}

@media (max-width: 900px) {
  .legal__body {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .legal__toc {
    position: static;
  }

  .legal__toc nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px 18px;
  }

  .legal__section h2 {
    font-size: 21px;
  }
}
</style>
