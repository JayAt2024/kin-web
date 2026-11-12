<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { useCopy } from '@/i18n'

const props = defineProps<{ src: string; alt: string }>()
const emit = defineEmits<{ close: [] }>()

const t = useCopy()

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
}

// 打开时锁定页面滚动，关闭时恢复
onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

defineOptions({ inheritAttrs: false })
void props
</script>

<template>
  <Teleport to="body">
    <div class="lightbox" role="dialog" aria-modal="true" @click.self="emit('close')">
      <button class="lightbox__close" :aria-label="t.lightbox.close" @click="emit('close')">✕</button>
      <img class="lightbox__img" :src="src" :alt="alt" />
    </div>
  </Teleport>
</template>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: center;
  padding: 32px;
  background: rgba(10, 12, 16, 0.88);
  backdrop-filter: blur(6px);
  animation: lightbox-in 0.22s var(--ease);
}

@keyframes lightbox-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.lightbox__img {
  display: block;
  max-width: min(92vw, 620px);
  max-height: 86vh;
  border-radius: 20px;
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.5);
}

.lightbox__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s var(--ease);
}

.lightbox__close:hover {
  background: rgba(255, 255, 255, 0.18);
}
</style>
