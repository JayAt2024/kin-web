<script setup lang="ts">
import SiteNav from '@/components/site/SiteNav.vue'
import SiteFooter from '@/components/site/SiteFooter.vue'
</script>

<template>
  <div class="site">
    <SiteNav />
    <main class="site__main">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.site {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site__main {
  flex: 1;
}
</style>
