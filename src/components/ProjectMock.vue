<script setup>
import { computed } from 'vue'
import { useSite } from '../composables/useSite'

defineProps({ kind: String })
const { lang } = useSite()

const T = {
  fr: {
    jobs: ['Technicien réseau', 'Comptable', 'Développeur web'], where: 'Niamey', apply: 'Postuler', search: 'Rechercher un poste…', chips: ['Tous', 'Informatique', 'Finance'], match: 'Correspondance',
    kpi: ['À planifier', 'En cours', 'Terminées'], rows: [['Maintenance serveur', 'Planifiée', 'warn'], ['Installation poste', 'En cours', 'info'], ['Contrôle réseau', 'Terminée', 'done'], ['Mise à jour logiciel', 'En cours', 'info']], th: ['Intervention', 'Statut'],
    tables: 'Plan de salle', ticket: 'Commande · Table 4', items: [['2 × Plat du jour', '7 000'], ['1 × Salade', '2 500'], ['3 × Boisson', '4 500']], total: 'Total', pay: 'Encaisser'
  },
  en: {
    jobs: ['Network technician', 'Accountant', 'Web developer'], where: 'Niamey', apply: 'Apply', search: 'Search for a job…', chips: ['All', 'IT', 'Finance'], match: 'Match',
    kpi: ['To plan', 'In progress', 'Completed'], rows: [['Server maintenance', 'Planned', 'warn'], ['Workstation setup', 'In progress', 'info'], ['Network check', 'Completed', 'done'], ['Software update', 'In progress', 'info']], th: ['Intervention', 'Status'],
    tables: 'Floor plan', ticket: 'Order · Table 4', items: [['2 × Daily special', '7 000'], ['1 × Salad', '2 500'], ['3 × Drink', '4 500']], total: 'Total', pay: 'Charge'
  }
}
const t = computed(() => T[lang.value])
const tables = [['free', 1], ['busy', 2], ['free', 3], ['busy', 4], ['res', 5], ['free', 6], ['busy', 7], ['free', 8]]
</script>

<template>
  <div class="mock" aria-hidden="true">
    <div class="mock-top"><i></i><i></i><i></i><span class="url"></span></div>

    <!-- JobLink -->
    <div v-if="kind === 'joblink'" class="m-job">
      <div class="m-nav"><b>JobLink</b><span></span><span></span><span></span><em></em></div>
      <div class="m-search">{{ t.search }}</div>
      <div class="m-chips"><span v-for="(c, i) in t.chips" :key="c" :class="{ on: i === 0 }">{{ c }}</span></div>
      <div v-for="(j, i) in t.jobs" :key="j" class="m-card">
        <div class="logo"></div>
        <div class="txt"><strong>{{ j }}</strong><small>{{ t.where }}</small><div class="bar" :style="{ width: 70 - i * 12 + '%' }"></div></div>
        <div class="side"><span class="score">{{ 92 - i * 7 }}%</span><button>{{ t.apply }}</button></div>
      </div>
    </div>

    <!-- Interventions -->
    <div v-else-if="kind === 'interventions'" class="m-int">
      <aside><b></b><span class="on"></span><span></span><span></span><span></span></aside>
      <div class="main">
        <div class="kpis"><div v-for="(k, i) in t.kpi" :key="k"><strong>{{ [12, 5, 28][i] }}</strong><small>{{ k }}</small></div></div>
        <div class="table">
          <div class="th"><span>{{ t.th[0] }}</span><span>{{ t.th[1] }}</span></div>
          <div v-for="r in t.rows" :key="r[0]" class="tr"><span>{{ r[0] }}</span><em :class="r[2]">{{ r[1] }}</em></div>
        </div>
      </div>
    </div>

    <!-- Resto -->
    <div v-else class="m-resto">
      <div class="floor">
        <small>{{ t.tables }}</small>
        <div class="grid"><span v-for="tb in tables" :key="tb[1]" :class="tb[0]">{{ tb[1] }}</span></div>
      </div>
      <div class="ticket">
        <strong>{{ t.ticket }}</strong>
        <div v-for="it in t.items" :key="it[0]" class="line"><span>{{ it[0] }}</span><span>{{ it[1] }}</span></div>
        <div class="line total"><span>{{ t.total }}</span><span>14 000 F</span></div>
        <button>{{ t.pay }}</button>
      </div>
    </div>
  </div>
</template>
