<script setup>
import { useSite } from '../composables/useSite'
import SectionHead from './SectionHead.vue'
import SectionArt from './SectionArt.vue' // ← AJOUTÉ
const { c } = useSite()

// Une icône par carte (même ordre que dans content.js)
const icons = [
  '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
  '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>',
  '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'
]
</script>

<template>
  <section id="services" class="section tinted">
    <SectionArt kind="services" /> <!-- ← AJOUTÉ -->
    <div class="wrap">
      <SectionHead :eyebrow="c.services.eyebrow" :title="c.services.title" />
      <div class="services">
        <article v-for="(s, i) in c.services.items" :key="s.title" class="service" v-reveal="{ delay: i * 70 }">
          <span class="num mono">0{{ i + 1 }}</span>
          <div class="ico"><svg viewBox="0 0 24 24" aria-hidden="true" v-html="icons[i]"></svg></div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
          <ul>
            <li v-for="p in s.points" :key="p">{{ p }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>