<script setup>
import { useSite } from './composables/useSite'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const { c } = useSite()
</script>

<template>
  <a class="skip" href="#main">{{ c.ui.skip }}</a>
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
