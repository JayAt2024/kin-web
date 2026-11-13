<script setup lang="ts">
import { useCopy } from '@/i18n'
import kinMark from '@/assets/kin-mark.png'

const t = useCopy()
const year = new Date().getFullYear()
const contactEmail = 'coooooooderjay@gmail.com'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <div class="footer__wordmark">
            <span class="footer__mark">
              <img :src="kinMark" alt="" />
            </span>
            {{ t.footer.brand }}
          </div>
          <p class="footer__tagline">
            {{ t.footer.taglineLine1 }}<br />
            {{ t.footer.taglineLine2 }}
          </p>
        </div>

        <div class="footer__columns">
          <div class="footer__col">
            <h3>{{ t.footer.productTitle }}</h3>
            <router-link to="/#features">{{ t.footer.featuresLink }}</router-link>
            <router-link to="/#pro">{{ t.nav.brand }} Pro</router-link>
            <router-link to="/#faq">{{ t.footer.faqLink }}</router-link>
          </div>
          <div class="footer__col">
            <h3>{{ t.footer.legalTitle }}</h3>
            <router-link to="/privacy">{{ t.footer.privacyLink }}</router-link>
            <router-link to="/terms">{{ t.footer.termsLink }}</router-link>
            <router-link to="/disclaimer">{{ t.footer.disclaimerLink }}</router-link>
            <a :href="`mailto:${contactEmail}`">{{ t.footer.contactLabel }}</a>
          </div>
          <div class="footer__col">
            <h3>{{ t.footer.noteTitle }}</h3>
            <p>{{ t.footer.noteText }}</p>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <span class="mono">© {{ year }} {{ t.footer.brand }} · {{ t.footer.copyright }}</span>
        <span class="mono">{{ t.footer.made }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 72px 40px;
  border-top: 1px solid var(--line);
  background: var(--paper-soft);
}

.footer__top {
  display: grid;
  grid-template-columns: 1.1fr 1.4fr;
  gap: 64px;
  padding-bottom: 56px;
}

.footer__wordmark {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
}

.footer__mark {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
}

.footer__mark img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.footer__tagline {
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.9;
  color: var(--muted);
}

.footer__columns {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__col h3 {
  margin-bottom: 4px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}

.footer__col a {
  font-size: 14px;
  color: var(--ink-2);
  transition: color 0.2s var(--ease);
}

.footer__col a:hover {
  color: var(--accent);
}

.footer__col p {
  font-size: 13px;
  line-height: 1.8;
  color: var(--muted);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
}

@media (max-width: 900px) {
  .footer {
    padding-top: 56px;
  }

  .footer__top {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-bottom: 40px;
  }

  .footer__columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }

  .footer__bottom {
    flex-direction: column;
  }
}
</style>
