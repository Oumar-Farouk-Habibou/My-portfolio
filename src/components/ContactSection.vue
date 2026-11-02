<script setup>
import { reactive, ref } from 'vue'
import { useSite } from '../composables/useSite'
import { links } from '../content'
import SectionHead from './SectionHead.vue'
import SectionArt from './SectionArt.vue' // ← AJOUTÉ

const { c } = useSite()
const form = reactive({ name: '', email: '', message: '' })
const status = ref('idle')

async function submit() {
  status.value = 'sending'
  try {
    const res = await fetch('https://formsubmit.co/ajax/' + links.email, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...form, _subject: 'Nouveau message depuis le portfolio' })
    })
    if (!res.ok) throw new Error('bad status')
    status.value = 'ok'
    form.name = form.email = form.message = ''
  } catch {
    status.value = 'err'
  }
}
</script>

<template>
  <section id="contact" class="section">
    <SectionArt kind="contact" /> <!-- ← AJOUTÉ -->
    <div class="wrap">
      <SectionHead :eyebrow="c.contact.eyebrow" :title="c.contact.title" />
      <div class="contact-card" v-reveal>
        <div class="left">
          <p class="lead">{{ c.contact.lead }}</p>
          <dl>
            <div><dt>{{ c.contact.labels.email }}</dt><dd><a :href="'mailto:' + links.email">{{ links.email }}</a></dd></div>
            <div><dt>{{ c.contact.labels.phone }}</dt><dd><a :href="'tel:' + links.tel">{{ links.phone }}</a></dd></div>
            <div><dt>{{ c.contact.labels.whatsapp }}</dt><dd><a :href="links.whatsapp" target="_blank" rel="noopener">{{ links.phone }}</a></dd></div>
            <div><dt>{{ c.contact.labels.linkedin }}</dt><dd><a :href="links.linkedin" target="_blank" rel="noopener">oumar-farouk-habibou</a></dd></div>
            <div><dt>{{ c.contact.labels.github }}</dt><dd><a :href="links.github" target="_blank" rel="noopener">Oumar-Farouk-Habibou</a></dd></div>
            <div><dt>{{ c.contact.labels.place }}</dt><dd>{{ c.contact.place }}</dd></div>
          </dl>
        </div>
        <form @submit.prevent="submit">
          <label><span>{{ c.contact.form.name }}</span><input v-model="form.name" required autocomplete="name" /></label>
          <label><span>{{ c.contact.form.email }}</span><input v-model="form.email" type="email" required autocomplete="email" /></label>
          <label><span>{{ c.contact.form.message }}</span><textarea v-model="form.message" rows="5" required></textarea></label>
          <button class="btn primary" :disabled="status === 'sending'">{{ status === 'sending' ? c.contact.form.sending : c.contact.form.send }}</button>
          <p v-if="status === 'ok'" class="msg ok" role="status">{{ c.contact.form.ok }}</p>
          <p v-if="status === 'err'" class="msg err" role="alert">{{ c.contact.form.err }}</p>
        </form>
      </div>
    </div>
  </section>
</template>