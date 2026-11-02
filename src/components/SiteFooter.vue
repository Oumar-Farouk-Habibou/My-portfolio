<script setup>
import { useSite } from '../composables/useSite'
import { links } from '../content'
const { c } = useSite()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="wrap row">
      <p>© {{ year }} Oumar Farouk Mahaman Habibou · {{ c.footer.made }}</p>
      <p class="f-links">
        <a :href="links.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        <a :href="links.github" target="_blank" rel="noopener">GitHub</a>
        <a href="#top">{{ c.ui.top }} ↑</a>
      </p>
    </div>
  </footer>
</template>
