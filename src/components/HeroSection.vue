<script setup>
import { ref } from 'vue'
import { useSite } from '../composables/useSite'
import { links } from '../content'
import StatCounter from './StatCounter.vue'
import HeroBackdrop from './HeroBackdrop.vue'

const { c } = useSite()
const photoOk = ref(true)
const photoSrc = '/photo.jpg' // dépose ta photo dans public/photo.jpg
</script>

<template>
  <section id="top" class="hero">
    <HeroBackdrop />
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <p class="status" v-reveal><i></i>{{ c.hero.status }}</p>
        <p class="hi" v-reveal="{ delay: 60 }">{{ c.hero.hi }}</p>
        <h1 v-reveal="{ delay: 100 }">{{ c.hero.name[0] }}<br />{{ c.hero.name[1] }}</h1>
        <p class="title-line" v-reveal="{ delay: 160 }"><b>{{ c.hero.title }}</b><span>{{ c.hero.subtitle }}</span></p>
        <p class="lead" v-reveal="{ delay: 220 }">{{ c.hero.lead }}</p>
        <div class="cta" v-reveal="{ delay: 280 }">
          <a class="btn primary" href="#contact">{{ c.hero.primary }}</a>
          <a class="btn" href="#projects">{{ c.hero.secondary }}</a>
          <a class="btn ghost" :href="links.cv" download>{{ c.ui.cv }} ↓</a>
        </div>
        <ul class="socials" v-reveal="{ delay: 340 }">
          <li><a :href="links.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a :href="links.github" target="_blank" rel="noopener">GitHub</a></li>
          <li><a :href="'mailto:' + links.email">E-mail</a></li>
          <li><a :href="links.whatsapp" target="_blank" rel="noopener">WhatsApp</a></li>
        </ul>
      </div>

      <figure class="portrait" v-reveal="{ delay: 200 }">
        <div class="frame">
          <img v-if="photoOk" :src="photoSrc" :alt="c.hero.portrait" @error="photoOk = false" />
          <div v-else class="monogram" aria-hidden="true">OF</div>
        </div>
      </figure>
    </div>

    <div class="wrap stats" v-reveal>
      <StatCounter v-for="s in c.stats" :key="s.label" v-bind="s" />
    </div>
  </section>
</template>