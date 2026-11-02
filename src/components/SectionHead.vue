<script setup>
defineProps({ eyebrow: String, title: String })
</script>

<template>
  <header class="head" v-reveal>
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
  </header>
</template>
