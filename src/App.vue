<template>
  <div class="min-h-screen bg-ink text-paper relative">
    <!-- Custom Cursor -->
    <div id="custom-cursor" ref="cursor" class="hidden md:block">
      <div
        class="w-4 h-4 rounded-full border border-warm-gold fixed pointer-events-none transition-transform duration-150"
        :style="{ left: cursorX + 'px', top: cursorY + 'px', transform: 'translate(-50%, -50%)' }"
      />
      <div
        class="w-1.5 h-1.5 bg-warm-gold rounded-full fixed pointer-events-none"
        :style="{ left: dotX + 'px', top: dotY + 'px', transform: 'translate(-50%, -50%)' }"
      />
    </div>

    <!-- Navbar -->
    <Navbar />

    <!-- Page Content -->
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Scroll to top -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 w-10 h-10 bg-warm-gold text-ink flex items-center justify-center 
             hover:bg-accent-light transition-all duration-300 hover:scale-110 shadow-lg"
      aria-label="Scroll to top"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const cursorX = ref(0)
const cursorY = ref(0)
const dotX = ref(0)
const dotY = ref(0)
const showScrollTop = ref(false)

let animFrame = null

const onMouseMove = (e) => {
  dotX.value = e.clientX
  dotY.value = e.clientY
  if (animFrame) cancelAnimationFrame(animFrame)
  animFrame = requestAnimationFrame(() => {
    cursorX.value = e.clientX
    cursorY.value = e.clientY
  })
}

const onScroll = () => {
  showScrollTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Scroll animation observer
const setupScrollObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  const observe = () => {
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
  }

  observe()
  // Re-observe after route changes
  const mutationObserver = new MutationObserver(observe)
  mutationObserver.observe(document.body, { childList: true, subtree: true })
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('scroll', onScroll, { passive: true })
  setupScrollObserver()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('scroll', onScroll)
})
</script>
