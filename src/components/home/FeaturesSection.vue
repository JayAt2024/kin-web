<script setup lang="ts">
import { computed } from 'vue'
import { useCopy } from '@/i18n'

const t = useCopy()

// 图标路径与语言无关，保留在组件内；文案走字典
const iconPaths: string[][] = [
  [
    'M8.5 11.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4',
    'M2.6 18.4c0-2.6 2.6-4.2 5.9-4.2s5.9 1.6 5.9 4.2',
    'M16.6 10.6a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4',
    'M15.4 14.4c3 0 5.9 1.4 5.9 3.8',
  ],
  ['M3 19h18', 'M4 15l4.4-4.6 3.4 2.6 5-6.4 3.2 3.4'],
  ['M4 4v17', 'M7.5 6h13', 'M7.5 12h13', 'M7.5 18h9'],
  [
    'M12 4.2a5.6 5.6 0 0 0-5.6 5.6v3.4L4.6 17h14.8l-1.8-3.8v-3.4A5.6 5.6 0 0 0 12 4.2Z',
    'M10 19.6a2 2 0 0 0 4 0',
  ],
  ['M4 9h11l-2.6-2.6M20 15H9l2.6 2.6'],
  ['M6 3.4h8l4 4v13.2H6z', 'M14 3.4v4h4', 'M9 12h6', 'M9 16h4'],
]

const features = computed(() =>
  t.value.features.items.map((item, index) => ({ ...item, paths: iconPaths[index] })),
)
</script>

<template>
  <section id="features" class="features section">
    <div class="container">
      <div class="features__head">
        <div>
          <span class="eyebrow">WHAT'S INSIDE</span>
          <h2 class="display display-lg features__title">{{ t.features.titleLine1 }}<br />{{ t.features.titleLine2 }}</h2>
        </div>
        <p class="lead features__lead">
          {{ t.features.lead }}
        </p>
      </div>

      <div class="features__grid">
        <article v-for="(feature, index) in features" :key="feature.title" class="feature">
          <div class="feature__top">
            <span class="feature__icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  v-for="d in feature.paths"
                  :key="d"
                  :d="d"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span class="feature__index mono">{{ String(index + 1).padStart(2, '0') }}</span>
          </div>
          <h3 class="feature__title">{{ feature.title }}</h3>
          <p class="feature__desc">{{ feature.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  position: relative;
  background: var(--paper);
}

.features__head {
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  align-items: end;
  gap: 48px;
  padding-bottom: 52px;
  border-bottom: 1px solid var(--line);
}

.features__title {
  margin-top: 22px;
}

.features__lead {
  max-width: 430px;
  justify-self: end;
  color: var(--muted);
  font-size: 15px;
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin-top: 0;
  border-left: 1px solid var(--line);
}

.feature {
  padding: 34px 32px 38px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--paper);
  transition: background-color 0.3s var(--ease);
}

.feature:hover {
  background: var(--surface);
}

.feature__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.feature__icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: var(--surface);
  color: var(--accent);
  box-shadow: inset 0 0 0 1px var(--line);
}

.feature:hover .feature__icon {
  background: var(--accent);
  color: #fff;
  box-shadow: none;
}

.feature__icon svg {
  width: 24px;
  height: 24px;
  transition: color 0.3s var(--ease);
}

.feature__index {
  color: var(--muted-soft);
}

.feature__title {
  margin-top: 30px;
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.feature__desc {
  margin-top: 12px;
  font-size: 13.5px;
  line-height: 1.85;
  color: var(--muted);
}

@media (max-width: 960px) {
  .features__head {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .features__lead {
    max-width: none;
    justify-self: start;
  }

  .features__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .features__grid {
    grid-template-columns: 1fr;
  }

  .feature {
    padding: 28px 24px 30px;
  }
}
</style>
