<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import PrivacyBand from '@/components/home/PrivacyBand.vue'
import FeaturesSection from '@/components/home/FeaturesSection.vue'
import ShowcaseSection from '@/components/home/ShowcaseSection.vue'
import ProSection from '@/components/home/ProSection.vue'
import FaqSection from '@/components/home/FaqSection.vue'
</script>

<template>
  <div class="home">
    <HeroSection />
    <PrivacyBand />
    <FeaturesSection />
    <ShowcaseSection />
    <ProSection />
    <FaqSection />
  </div>
</template>

<style scoped>
.home {
  overflow-x: clip;
}
</style>
