<script setup>
import { useSite } from '../composables/useSite'
import { socials } from '../socials'

const { c } = useSite()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="wrap row">
      <p>© {{ year }} Oumar Farouk Mahaman Habibou · {{ c.footer.made }}</p>
      <ul class="socials footer-socials">
        <li v-for="s in socials" :key="s.name">
          <a :href="s.href" :aria-label="s.name" :title="s.name" :target="s.external ? '_blank' : null" rel="noopener">
            <svg viewBox="0 0 24 24" :class="{ line: s.line }" aria-hidden="true" v-html="s.icon"></svg>
          </a>
        </li>
        <li>
          <a href="#top" :aria-label="c.ui.top" :title="c.ui.top">
            <svg viewBox="0 0 24 24" class="line" aria-hidden="true"><path d="m18 15-6-6-6 6" /></svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>