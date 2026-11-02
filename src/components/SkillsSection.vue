<script setup>
import { ref, computed } from 'vue'
import { useSite } from '../composables/useSite'
import SectionHead from './SectionHead.vue'
import SectionArt from './SectionArt.vue' // ← AJOUTÉ

const { c } = useSite()
const tab = ref('all')
const shown = computed(() => c.value.skills.items.filter(i => tab.value === 'all' || i.c === tab.value))
const count = id => (id === 'all' ? c.value.skills.items.length : c.value.skills.items.filter(i => i.c === id).length)
</script>

<template>
  <section id="skills" class="section">
    <SectionArt kind="skills" /> <!-- ← AJOUTÉ -->
    <div class="wrap">
      <SectionHead :eyebrow="c.skills.eyebrow" :title="c.skills.title" />
      <div class="tabs" role="tablist" v-reveal>
        <button v-for="t in c.skills.tabs" :key="t.id" role="tab" :aria-selected="tab === t.id" :class="{ on: tab === t.id }" @click="tab = t.id">
          {{ t.label }} <small class="mono">{{ count(t.id) }}</small>
        </button>
      </div>
      <TransitionGroup name="pill" tag="ul" class="pills">
        <li v-for="s in shown" :key="s.n">{{ s.n }}</li>
      </TransitionGroup>
    </div>
  </section>
</template>