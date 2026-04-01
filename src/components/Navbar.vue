<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'bg-white/96 backdrop-blur-md border-b border-black/8 shadow-sm' : 'bg-transparent'"
  >
    <nav class="flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-4">
      <!-- Logo -->
      <router-link to="/" class="group flex items-center gap-3">
        <div class="w-10 h-10 border-2 border-[#b8860b] flex items-center justify-center
                    group-hover:bg-[#b8860b] transition-all duration-300">
          <span class="display-text text-sm font-black text-[#b8860b] group-hover:text-white transition-colors">PS</span>
        </div>
        <div class="hidden sm:block">
          <p class="font-bold text-sm text-[#1a1208] leading-none">Parvinder Singh</p>
          <p class="mono-text text-[10px] tracking-widest text-[#b8860b] mt-0.5">FULL STACK DEV</p>
        </div>
      </router-link>

      <!-- Desktop Nav -->
      <ul class="hidden lg:flex items-center gap-1">
        <li v-for="link in navLinks" :key="link.path">
          <router-link
            :to="link.path"
            class="relative px-4 py-2 text-sm font-semibold transition-colors duration-300 group"
            :class="$route.path === link.path ? 'text-[#b8860b]' : 'text-[#3d2e0e] hover:text-[#b8860b]'"
          >
            {{ link.label }}
            <span class="absolute bottom-0 left-4 right-4 h-0.5 bg-[#b8860b] origin-left transition-transform duration-300"
                  :class="$route.path === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'" />
          </router-link>
        </li>
      </ul>

      <!-- CTA + Hamburger -->
      <div class="flex items-center gap-3">
        <a href="mailto:techpinda1214@gmail.com"
           class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-widest mono-text
                  border-2 border-[#1a1208] text-[#1a1208] bg-transparent
                  hover:bg-[#1a1208] hover:text-white hover:shadow-[3px_3px_0_#b8860b]
                  transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5">
          HIRE ME
        </a>
        <button @click="mobileOpen = !mobileOpen"
                class="lg:hidden w-8 h-8 flex flex-col gap-1.5 justify-center items-end" aria-label="Toggle menu">
          <span class="h-0.5 bg-[#1a1208] transition-all duration-300"
                :class="mobileOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'" />
          <span class="h-0.5 bg-[#b8860b] transition-all duration-300"
                :class="mobileOpen ? 'opacity-0 w-0' : 'w-4'" />
          <span class="h-0.5 bg-[#1a1208] transition-all duration-300"
                :class="mobileOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6'" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="mobileOpen" class="lg:hidden bg-white border-t border-black/8 shadow-xl px-6 py-6">
        <ul class="space-y-0 mb-6">
          <li v-for="link in navLinks" :key="link.path">
            <router-link :to="link.path" @click="mobileOpen = false"
              class="flex items-center justify-between py-3.5 text-sm font-semibold border-b border-black/6 transition-colors duration-300"
              :class="$route.path === link.path ? 'text-[#b8860b]' : 'text-[#1a1208] hover:text-[#b8860b]'">
              {{ link.label }}
              <svg class="w-3.5 h-3.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </li>
        </ul>
        <a href="mailto:techpinda1214@gmail.com"
           class="block w-full py-3.5 text-center bg-[#1a1208] text-white font-bold text-sm tracking-widest hover:bg-[#b8860b] transition-colors duration-300">
          HIRE ME →
        </a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const mobileOpen = ref(false)
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/education', label: 'Education' },
  { path: '/contact', label: 'Contact' },
]
const handleScroll = () => { scrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
<style scoped>
.slide-down-enter-active,.slide-down-leave-active{transition:opacity .3s ease,transform .3s ease}
.slide-down-enter-from,.slide-down-leave-to{opacity:0;transform:translateY(-8px)}
</style>