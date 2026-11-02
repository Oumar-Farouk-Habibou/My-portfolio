import { ref, computed, watchEffect } from 'vue'
import content from '../content'

const read = (k, d) => { try { return localStorage.getItem(k) || d } catch { return d } }
const write = (k, v) => { try { localStorage.setItem(k, v) } catch {} }

const lang = ref(read('lang', (navigator.language || 'fr').toLowerCase().startsWith('en') ? 'en' : 'fr'))
const theme = ref(read('theme', 'light'))

watchEffect(() => {
  document.documentElement.lang = lang.value
  document.documentElement.dataset.theme = theme.value
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme.value === 'dark' ? '#0f1217' : '#f5f2ec')
  write('lang', lang.value)
  write('theme', theme.value)
})

export function useSite() {
  const c = computed(() => content[lang.value])
  const toggleLang = () => (lang.value = lang.value === 'fr' ? 'en' : 'fr')
  const toggleTheme = () => (theme.value = theme.value === 'dark' ? 'light' : 'dark')
  return { lang, theme, c, toggleLang, toggleTheme }
}
