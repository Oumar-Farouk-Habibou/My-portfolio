<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({ n: Number, plus: Boolean, label: String })
const shown = ref(0)
const el = ref(null)

onMounted(() => {
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    io.disconnect()
    const t0 = performance.now()
    const tick = t => {
      const p = Math.min((t - t0) / 900, 1)
      shown.value = Math.round(props.n * (1 - Math.pow(1 - p, 3)))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, { threshold: 0.4 })
  io.observe(el.value)
})
</script>

<template>
  <div ref="el" class="stat">
    <strong>{{ shown }}<span v-if="plus">+</span></strong>
    <span>{{ label }}</span>
  </div>
</template>
