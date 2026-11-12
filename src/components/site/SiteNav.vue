<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { locale, setLocale, useCopy } from '@/i18n'
import kinMark from '@/assets/kin-mark.png'

const router = useRouter()
const route = useRoute()

const t = useCopy()

const scrolled = ref(false)
const menuOpen = ref(false)

const sections = computed(() => [
  { id: 'features', label: t.value.nav.sectionFeatures },
  { id: 'privacy', label: t.value.nav.sectionPrivacy },
  { id: 'pro', label: t.value.nav.sectionPro },
  { id: 'faq', label: t.value.nav.sectionFaq },
])

// 切换按钮显示目标语言
const langLabel = computed(() => (locale.value === 'zh' ? 'EN' : '中文'))

function switchLocale() {
  setLocale(locale.value === 'zh' ? 'en' : 'zh')
}

function onScroll() {
  scrolled.value = window.scrollY > 12
}

async function go(id: string) {
  menuOpen.value = false
  if (route.path !== '/') {
    await router.push('/')
    await nextTick()
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled, 'nav--open': menuOpen }">
    <div class="container nav__inner">
      <router-link to="/" class="brand" :aria-label="t.nav.ariaHome">
        <span class="brand__mark">
          <img :src="kinMark" alt="" />
        </span>
        <span class="brand__name">{{ t.nav.brand }}</span>
      </router-link>

      <nav class="nav__links" :aria-label="t.nav.ariaNav">
        <button
          v-for="item in sections"
          :key="item.id"
          type="button"
          class="nav__link"
          @click="go(item.id)"
        >
          {{ item.label }}
        </button>
      </nav>

      <div class="nav__actions">
        <span class="nav__status">{{ t.nav.status }}</span>
        <button type="button" class="btn btn--ghost nav__lang" @click="switchLocale">
          {{ langLabel }}
        </button>
        <router-link to="/privacy" class="btn btn--ghost">{{ t.nav.privacyPolicy }}</router-link>
      </div>

      <button
        type="button"
        class="nav__burger"
        :aria-expanded="menuOpen"
        :aria-label="t.nav.openMenu"
        @click="menuOpen = !menuOpen"
      >
        <span />
        <span />
      </button>
    </div>

    <div v-if="menuOpen" class="nav__sheet">
      <button
        v-for="item in sections"
        :key="item.id"
        type="button"
        class="nav__sheet-link"
        @click="go(item.id)"
      >
        {{ item.label }}
      </button>
      <router-link to="/privacy" class="nav__sheet-link" @click="menuOpen = false">
        {{ t.nav.privacyPolicy }}
      </router-link>
      <router-link to="/terms" class="nav__sheet-link" @click="menuOpen = false">
        {{ t.nav.termsOfService }}
      </router-link>
      <button type="button" class="btn btn--ghost nav__sheet-lang" @click="switchLocale">
        {{ langLabel }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 60;
  border-bottom: 1px solid transparent;
  background: rgba(247, 245, 239, 0);
  transition: background-color 0.3s var(--ease), border-color 0.3s var(--ease);
}

.nav--scrolled,
.nav--open {
  background: rgba(247, 245, 239, 0.86);
  border-bottom-color: var(--line);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.nav__inner {
  display: flex;
  align-items: center;
  gap: 32px;
  height: 76px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
}

.brand__mark img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.brand__name {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
}

.nav__link {
  padding: 8px 14px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  font-size: 14px;
  color: var(--ink-2);
  cursor: pointer;
  transition: color 0.2s var(--ease), background-color 0.2s var(--ease);
}

.nav__link:hover {
  color: var(--ink);
  background: rgba(255, 255, 255, 0.7);
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.nav__status {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--muted);
}

/* 语言切换按钮（与 .btn--ghost 同风格的小 pill） */
.nav__lang {
  height: 36px;
  padding-inline: 14px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
}

.nav__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  cursor: pointer;
}

.nav__burger span {
  width: 16px;
  height: 1.5px;
  background: var(--ink);
}

.nav__sheet {
  display: none;
}

@media (max-width: 960px) {
  .nav__links,
  .nav__status,
  .nav__actions .btn {
    display: none;
  }

  .nav__actions {
    margin-left: auto;
  }

  .nav__burger {
    display: inline-flex;
    margin-left: 12px;
  }

  .nav__sheet {
    display: flex;
    flex-direction: column;
    padding: 8px 5vw 20px;
    border-top: 1px solid var(--line);
  }

  .nav__sheet-link {
    padding: 14px 4px;
    border: 0;
    border-bottom: 1px solid var(--line);
    background: transparent;
    text-align: left;
    font-size: 16px;
    color: var(--ink);
    cursor: pointer;
  }

  .nav__sheet-lang {
    margin-top: 18px;
    align-self: flex-start;
    height: 36px;
    padding-inline: 14px;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.08em;
  }
}
</style>
