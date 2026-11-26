<template>
  <div class="relative min-h-screen">
    <!-- Ambient glass backdrop -->
    <div class="ambient" aria-hidden="true">
      <div class="blob animate-blob" style="width:30rem;height:30rem;bottom:-8rem;left:-8rem;background:#ccc5b9;opacity:.28;animation-delay:-8s;" />
    </div>
    <div class="spotlight" aria-hidden="true" />

    <!-- Reading / scroll progress -->
    <div class="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left bg-accent"
         :style="{ transform: `scaleX(${progress})` }" aria-hidden="true" />

    <Navbar />

    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>

    <Footer />

    <button v-show="showTop" @click="toTop" aria-label="Scroll to top"
            class="btn-icon fixed z-50 glass-strong" style="right:max(1rem,env(safe-area-inset-right));bottom:max(1rem,env(safe-area-inset-bottom));background:var(--glass-strong);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);">
      <Icon name="chevron-up" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Icon from './components/Icon.vue'

const progress = ref(0)
const showTop = ref(false)
let raf = 0

const onScroll = () => {
  const h = document.documentElement
  const max = h.scrollHeight - h.clientHeight
  progress.value = max > 0 ? Math.min(1, window.scrollY / max) : 0
  showTop.value = window.scrollY > 500
}

// Cursor-follow spotlight: just updates two CSS variables, no Vue re-renders
const onMove = (e) => {
  if (raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    document.documentElement.style.setProperty('--mx', e.clientX + 'px')
    document.documentElement.style.setProperty('--my', e.clientY + 'px')
  })
}
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('pointermove', onMove, { passive: true })
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('pointermove', onMove)
})
</script>