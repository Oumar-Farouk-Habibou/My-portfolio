<script setup>
defineProps({ kind: { type: String, required: true } })

/* ---------- À propos : fenêtre de code ---------- */
// [x, y, largeur, intensité]
const code = [
  [48, 92, 210, 0.55], [48, 128, 330, 0.9], [96, 164, 270, 0.55], [96, 200, 190, 0.55],
  [96, 236, 310, 0.9], [48, 272, 150, 0.55], [48, 308, 370, 0.55], [96, 344, 230, 0.9]
]
const marks = [[700, 90], [1250, 560], [1380, 90], [980, 740], [90, 520]]

/* ---------- Expertises : alvéoles ---------- */
const HX = 13.86
const hexPts = (c, r) => {
  const cx = HX + 27.71 * c + (r % 2 ? HX : 0)
  const cy = 16 + 24 * r
  return [[cx, cy - 16], [cx + HX, cy - 8], [cx + HX, cy + 8], [cx, cy + 16], [cx - HX, cy + 8], [cx - HX, cy - 8]]
    .map(p => p.join(',')).join(' ')
}
// [colonne, ligne, intensité]
const cells = [
  [27, 1, 0.14], [28, 1, 0.08], [27, 2, 0.1], [26, 2, 0.07], [28, 2, 0.18],
  [2, 23, 0.12], [3, 23, 0.07], [2, 24, 0.16], [1, 24, 0.07],
  [30, 14, 0.1], [30, 15, 0.15], [29, 15, 0.07]
]

/* ---------- Compétences : pluie de 0 et de 1 ---------- */
const rand = (a, b) => a + Math.random() * (b - a)
const bits = n => Array.from({ length: n }, () => (Math.random() > 0.5 ? '1' : '0')).join('\n')
const cols = Array.from({ length: 30 }, (_, i) => {
  const t = bits(60)
  return { left: (i / 30) * 100 + rand(-1, 1), dur: rand(30, 70), delay: -rand(0, 40), size: rand(12, 16), op: rand(0.14, 0.4), text: t + '\n' + t }
})
</script>

<template>
  <div class="sec-art" :class="'art-' + kind" aria-hidden="true">

    <!-- À PROPOS -->
    <svg v-if="kind === 'about'" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
      <g transform="translate(790 120) rotate(-5)" style="opacity:.2">
        <rect width="620" height="420" rx="18" />
        <path d="M0 52H620" />
        <circle cx="30" cy="26" r="6" /><circle cx="54" cy="26" r="6" /><circle cx="78" cy="26" r="6" />
        <rect v-for="(l, i) in code" :key="i" class="fill" :x="l[0]" :y="l[1]" :width="l[2]" height="14" rx="7" :style="{ opacity: l[3] }" />
      </g>
      <g style="opacity:.3">
        <path v-for="(m, i) in marks" :key="i" :d="`M${m[0] - 7} ${m[1]}H${m[0] + 7}M${m[0]} ${m[1] - 7}V${m[1] + 7}`" />
      </g>
    </svg>

    <!-- EXPERTISES -->
    <svg v-else-if="kind === 'services'" viewBox="0 0 1440 1100" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="hex-services" width="27.71" height="48" patternUnits="userSpaceOnUse" patternTransform="scale(1.6)">
          <path d="M13.86 0L27.71 8V24L13.86 32L0 24V8Z M13.86 32V48" style="stroke-width:.9" />
        </pattern>
      </defs>
      <g style="opacity:.16"><rect width="1440" height="1100" style="fill:url(#hex-services);stroke:none" /></g>
      <g transform="scale(1.6)">
        <polygon v-for="(c, i) in cells" :key="i" class="fill" :points="hexPts(c[0], c[1])" :style="{ opacity: c[2] }" />
      </g>
    </svg>

    <!-- COMPÉTENCES -->
    <div v-else-if="kind === 'skills'" class="rain">
      <div class="rain-in">
        <div v-for="(c, i) in cols" :key="i" class="col" :style="{ left: c.left + '%', fontSize: c.size + 'px', opacity: c.op, animationDuration: c.dur + 's', animationDelay: c.delay + 's' }">{{ c.text }}</div>
      </div>
    </div>

    <!-- CONTACT -->
    <svg v-else-if="kind === 'contact'" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice">
      <g class="traces" style="opacity:.28">
        <path id="c1" d="M1440 90H1320L1270 140H1150" /><circle class="node" cx="1150" cy="140" r="4" />
        <path id="c2" d="M0 880H110L160 930H330" /><circle class="node" cx="330" cy="930" r="4" />
        <path d="M1440 640H1350L1310 680H1200" /><circle class="node" cx="1200" cy="680" r="4" />
        <path d="M60 0V120L100 160V260" /><circle class="node" cx="100" cy="260" r="4" />
        <path d="M1380 1000V930L1340 890" /><circle class="node" cx="1340" cy="890" r="4" />
      </g>
      <g class="net" style="opacity:.3">
        <path id="cn1" d="M930 60L1050 150L1180 70L1290 190L1390 120" />
        <path d="M1050 150L960 250L1090 300L1210 290L1290 190M1180 70L1210 290" />
        <circle class="node" cx="930" cy="60" r="5" /><circle class="node" cx="1050" cy="150" r="8" />
        <circle class="node" cx="1180" cy="70" r="5" /><circle class="node" cx="1290" cy="190" r="6" />
        <circle class="node" cx="1390" cy="120" r="5" /><circle class="node" cx="960" cy="250" r="5" />
        <circle class="node" cx="1090" cy="300" r="5" /><circle class="node" cx="1210" cy="290" r="5" />
      </g>
      <g style="opacity:.26" transform="translate(760 40) scale(2.2)">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </g>
      <circle class="pulse" r="3.5"><animateMotion dur="8s" repeatCount="indefinite"><mpath href="#c1" /></animateMotion></circle>
      <circle class="pulse" r="3.5"><animateMotion dur="10s" begin="-4s" repeatCount="indefinite"><mpath href="#c2" /></animateMotion></circle>
      <circle class="pulse" r="4"><animateMotion dur="12s" repeatCount="indefinite"><mpath href="#cn1" /></animateMotion></circle>
    </svg>

  </div>
</template>