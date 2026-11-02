<script setup>
import { reactive } from 'vue'
import { useSite } from '../composables/useSite'
import { links } from '../content'
import SectionHead from './SectionHead.vue'
import ProjectMock from './ProjectMock.vue'

const { c } = useSite()

// Chemin de la vraie capture de chaque projet (fichiers dans public/projects/)
const shots = {
  joblink: '/projects/joblink.png',
  interventions: '/projects/interventions.png',
  resto: '/projects/resto.png'
}
const failed = reactive({})
</script>

<template>
  <section id="projects" class="section">
    <div class="wrap">
      <SectionHead :eyebrow="c.projects.eyebrow" :title="c.projects.title" />
      <article v-for="(p, i) in c.projects.items" :key="p.kind" class="project" :class="{ flip: i % 2 }" v-reveal>
        <div class="visual">
          <div v-if="shots[p.kind] && !failed[p.kind]" class="shot-frame">
            <div v-if="p.kind !== 'resto'" class="mock-top"><i></i><i></i><i></i><span class="url"></span></div>
            <img :src="shots[p.kind]" :alt="p.title" loading="lazy" @error="failed[p.kind] = true" />
          </div>
          <ProjectMock v-else :kind="p.kind" />
        </div>
        <div class="info">
          <span class="tag mono">{{ p.tag }}</span>
          <h3>{{ p.title }}</h3>
          <p class="text">{{ p.text }}</p>
          <p class="ctx">{{ p.context }}</p>
          <ul class="points">
            <li v-for="pt in p.points" :key="pt">{{ pt }}</li>
          </ul>
          <ul class="stack">
            <li v-for="s in p.stack" :key="s" class="mono">{{ s }}</li>
          </ul>
        </div>
      </article>
      <p class="proj-note">{{ c.projects.note }} {{ c.projects.more }} <a :href="links.github" target="_blank" rel="noopener">{{ c.projects.github }} →</a></p>
    </div>
  </section>
</template>