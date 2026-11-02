<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useSite } from '../composables/useSite'

const { c, theme, toggleLang, toggleTheme } = useSite()
const open = ref(false)
const active = ref('')
const progress = ref(0)
const scrolled = ref(false)
let io

const onScroll = () => {
  const h = document.documentElement
  progress.value = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100
  scrolled.value = h.scrollTop > 8
}

onMounted(() => {
  onScroll()
  addEventListener('scroll', onScroll, { passive: true })
  io = new IntersectionObserver(
    es => es.forEach(e => e.isIntersecting && (active.value = e.target.id)),
    { rootMargin: '-45% 0px -50% 0px' }
  )
  c.value.nav.forEach(n => { const el = document.getElementById(n.id); el && io.observe(el) })
})
onBeforeUnmount(() => { removeEventListener('scroll', onScroll); io && io.disconnect() })
</script>

<template>
  <header class="site-header" :class="{ scrolled }">
    <div class="bar" :style="{ width: progress + '%' }"></div>
    <div class="inner">
      <a href="#top" class="brand" aria-label="Accueil"><span class="brand-name">Oumar Farouk</span></a>
      <nav :class="{ open }" aria-label="Navigation">
        <a v-for="n in c.nav" :key="n.id" :href="'#' + n.id" :class="{ active: active === n.id }" @click="open = false">{{ n.label }}</a>
      </nav>
      <div class="tools">
        <button class="chip" @click="toggleLang" aria-label="Language">{{ c.ui.lang }}</button>
        <button class="chip" @click="toggleTheme" aria-label="Theme">{{ theme === 'dark' ? c.ui.light : c.ui.dark }}</button>
        <button class="chip burger" :aria-expanded="open" @click="open = !open">{{ c.ui.menu }}</button>
      </div>
    </div>
  </header>
</template>
