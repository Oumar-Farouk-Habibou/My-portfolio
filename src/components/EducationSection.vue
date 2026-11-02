<script setup>
import { useSite } from '../composables/useSite'
import SectionHead from './SectionHead.vue'
const { c } = useSite()
</script>

<template>
  <section id="education" class="section tinted">
    <div class="wrap">
      <SectionHead :eyebrow="c.education.eyebrow" :title="c.education.title" />
      <div class="edu-grid">
        <ol class="studies" v-reveal>
          <li v-for="s in c.education.studies" :key="s.t">
            <span class="y mono">{{ s.y }}</span>
            <div><strong>{{ s.t }}</strong><small v-if="s.o">{{ s.o }}</small></div>
          </li>
        </ol>
        <div class="side" v-reveal="{ delay: 120 }">
          <h3>{{ c.education.certsTitle }}</h3>
          <ul class="certs">
            <li v-for="x in c.education.certs" :key="x">{{ x }}</li>
          </ul>
          <h3>{{ c.education.langsTitle }}</h3>
          <ul class="langs">
            <li v-for="l in c.education.langs" :key="l.n">
              <div><b>{{ l.n }}</b><small>{{ l.l }}</small></div>
              <span class="meter"><i :style="{ '--w': l.v + '%' }"></i></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
