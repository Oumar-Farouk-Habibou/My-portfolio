<script setup>
import { useSite } from '../composables/useSite'
import SectionHead from './SectionHead.vue'
import SectionArt from './SectionArt.vue' // ← AJOUTÉ
const { c } = useSite()
</script>

<template>
  <section id="about" class="section">
    <SectionArt kind="about" /> <!-- ← AJOUTÉ -->
    <div class="wrap">
      <SectionHead :eyebrow="c.about.eyebrow" :title="c.about.title" />
      <div class="about-grid">
        <div class="prose" v-reveal>
          <p v-for="p in c.about.paras" :key="p">{{ p }}</p>
        </div>
        <aside class="values" v-reveal="{ delay: 120 }">
          <h3>{{ c.about.valuesTitle }}</h3>
          <ul>
            <li v-for="v in c.about.values" :key="v">{{ v }}</li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>