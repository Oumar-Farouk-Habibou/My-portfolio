<template>
  <svg class="backdrop" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <!-- Pistes de circuit imprimé -->
    <g class="traces">
      <path id="t1" d="M0 170H150L200 120H340" /><circle class="node" cx="340" cy="120" r="4" />
      <path id="t2" d="M0 720H100L150 770H310L350 730H430" /><circle class="node" cx="430" cy="730" r="4" />
      <path d="M70 0V90L110 130V230" /><circle class="node" cx="110" cy="230" r="4" />
      <path id="t3" d="M1440 130H1310L1260 180H1130" /><circle class="node" cx="1130" cy="180" r="4" />
      <path d="M1440 790H1340L1300 750H1190" /><circle class="node" cx="1190" cy="750" r="4" />
      <path d="M1390 900V840L1350 800" /><circle class="node" cx="1350" cy="800" r="4" />
    </g>

    <!-- Réseau de machines -->
    <g class="net">
      <path id="n1" d="M1010 150L1130 270L1270 160L1360 310L1310 530L1200 650L1050 610L1090 440L1130 270" />
      <path d="M1270 160L1010 150M1090 440L1310 530M1360 310L1440 380M1200 650L1390 660" />
      <circle class="node" cx="1010" cy="150" r="5" />
      <circle class="node" cx="1130" cy="270" r="8" />
      <circle class="node" cx="1270" cy="160" r="5" />
      <circle class="node" cx="1360" cy="310" r="5" />
      <circle class="node" cx="1090" cy="440" r="5" />
      <circle class="node" cx="1310" cy="530" r="7" />
      <circle class="node" cx="1200" cy="650" r="5" />
      <circle class="node" cx="1050" cy="610" r="5" />
      <circle class="node" cx="1390" cy="660" r="5" />
    </g>

    <!-- Icônes et code -->
    <g class="glyphs">
      <g transform="translate(1180 56) scale(2.1)"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></g>
      <g transform="translate(1000 700) scale(2)"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></g>
      <g transform="translate(1300 690) scale(2)"><rect width="20" height="14" x="2" y="5" rx="2" /><path d="m7 10 3 2.5L7 15M13 15h4" /></g>
      <text class="code" x="900" y="92">&lt;/&gt;</text>
      <text class="code" x="1360" y="470">{ }</text>
      <text class="code" x="1060" y="800">SELECT *</text>
      <text class="code" x="1330" y="110">01101</text>
    </g>

    <!-- Paquets de données animés -->
    <circle class="pulse" r="3.5"><animateMotion dur="7s" repeatCount="indefinite"><mpath href="#t1" /></animateMotion></circle>
    <circle class="pulse" r="3.5"><animateMotion dur="9s" begin="-3s" repeatCount="indefinite"><mpath href="#t2" /></animateMotion></circle>
    <circle class="pulse" r="3.5"><animateMotion dur="6s" begin="-2s" repeatCount="indefinite"><mpath href="#t3" /></animateMotion></circle>
    <circle class="pulse" r="4"><animateMotion dur="14s" repeatCount="indefinite"><mpath href="#n1" /></animateMotion></circle>
  </svg>
</template>