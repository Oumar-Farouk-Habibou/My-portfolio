import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App)
  .directive('reveal', {
    mounted(el, binding) {
      el.classList.add('reveal')
      if (binding.value?.delay) el.style.transitionDelay = binding.value.delay + 'ms'
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { el.classList.add('in'); io.disconnect() }
      }, { threshold: 0.12 })
      io.observe(el)
    }
  })
  .mount('#app')
