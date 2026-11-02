<script setup>
import { ref } from 'vue'
import { useSite } from '../composables/useSite'
import SectionHead from './SectionHead.vue'

const { c } = useSite()
const open = ref(0)
</script>

<template>
  <section id="experience" class="section tinted">
    <div class="wrap">
      <SectionHead :eyebrow="c.experience.eyebrow" :title="c.experience.title" />
      <ol class="timeline">
        <li v-for="(e, i) in c.experience.items" :key="e.role" :class="{ open: open === i }" v-reveal="{ delay: i * 60 }">
          <button class="row" :aria-expanded="open === i" @click="open = open === i ? -1 : i">
            <span class="period mono">{{ e.period }}<template v-if="e.end"> → {{ c.experience.now }}</template></span>
            <span class="who">
              <strong>{{ e.role }}</strong>
              <em>{{ e.org }}</em>
            </span>
            <span class="plus" aria-hidden="true"></span>
          </button>
          <div class="more"><div>
            <ul>
              <li v-for="p in e.points" :key="p">{{ p }}</li>
            </ul>
          </div></div>
        </li>
      </ol>
    </div>
  </section>
</template>
