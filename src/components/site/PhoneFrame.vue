<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string
    alt: string
    width?: string
    tilt?: number
  }>(),
  { width: '260px', tilt: 0 },
)
</script>

<template>
  <figure class="phone" :style="{ width, transform: `rotate(${tilt}deg)` }">
    <div class="phone__bezel">
      <!-- 截图本身已包含灵动岛，外框只保留 bezel，不再叠加 -->
      <img :src="src" :alt="alt" />
    </div>
    <span class="phone__gloss" aria-hidden="true" />
  </figure>
</template>

<style scoped>
.phone {
  position: relative;
  margin: 0;
  aspect-ratio: 464 / 1016;
  filter: drop-shadow(0 34px 54px rgba(28, 33, 45, 0.24));
}

.phone__bezel {
  position: relative;
  height: 100%;
  padding: 2.2%;
  border-radius: 13.5% / 6.2%;
  background: linear-gradient(150deg, #3a4048 0%, #12161b 38%, #05070a 100%);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14);
}

.phone__bezel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  border-radius: 11.8% / 5.4%;
}

.phone__gloss {
  position: absolute;
  inset: 0;
  border-radius: 13.5% / 6.2%;
  background: linear-gradient(115deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 38%);
  pointer-events: none;
}
</style>
