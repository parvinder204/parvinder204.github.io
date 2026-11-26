<template>
  <header class="fixed inset-x-0 top-0 z-50 px-3 sm:px-5 pt-3">
    <nav class="glass glass-strong mx-auto max-w-7xl flex items-center justify-between gap-3 transition-all duration-500"
         :class="scrolled ? 'py-2 px-3 sm:px-4' : 'py-2.5 px-3 sm:px-5'"
         style="border-radius:9999px;" aria-label="Main navigation">
      <!-- Logo -->
      <router-link to="/" class="group flex items-center gap-3 min-w-0" aria-label="Parvinder Singh — home">
        <span class="relative grid place-items-center w-10 h-10 rounded-full font-display font-bold text-sm text-carbon shrink-0"
              style="background:linear-gradient(135deg,#eb5e28,#ccc5b9);box-shadow:0 6px 18px -6px rgb(var(--c-accent)/.9);">
          PS
        </span>
        <span class="hidden sm:block leading-tight min-w-0">
          <span class="block font-display font-semibold text-sm truncate">Parvinder Singh</span>
          <span class="block font-mono text-[0.62rem] tracking-[0.22em] text-accent">FULL STACK DEV</span>
        </span>
      </router-link>

      <!-- Desktop links -->
      <ul class="hidden lg:flex items-center gap-1">
        <li v-for="link in navLinks" :key="link.path">
          <router-link :to="link.path"
            class="relative block px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300"
            :class="isActive(link) ? 'text-carbon bg-accent' : 'text-muted hover:text-fg hover:bg-fg/5'">
            {{ link.label }}
          </router-link>
        </li>
      </ul>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <button class="btn-icon" @click="toggleTheme" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`">
          <Icon :name="theme === 'dark' ? 'sun' : 'moon'" />
        </button>
        <router-link to="/contact" class="btn btn-primary hidden md:inline-flex">
          Hire me <Icon name="arrow-up-right" size="w-4 h-4" />
        </router-link>
        <button class="btn-icon lg:hidden" @click="open = !open" :aria-expanded="open" aria-controls="mobile-menu" aria-label="Toggle menu">
          <Icon :name="open ? 'x' : 'menu'" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <transition name="slide-down">
      <div v-if="open" id="mobile-menu" class="glass glass-strong lg:hidden mx-auto max-w-7xl mt-2 p-3" style="border-radius:1.5rem;">
        <ul class="grid gap-1">
          <li v-for="link in navLinks" :key="link.path">
            <router-link :to="link.path"
              class="flex items-center justify-between px-4 py-3 rounded-2xl  font-medium transition-colors"
              :class="isActive(link) ? 'bg-accent text-carbon' : 'hover:bg-fg/5'">
              {{ link.label }}
              <Icon name="arrow-right" size="w-4 h-4" />
            </router-link>
          </li>
        </ul>
        <router-link to="/contact" class="btn btn-primary w-full mt-3">Hire me <Icon name="arrow-up-right" size="w-4 h-4" /></router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Icon from './Icon.vue'
import { useTheme } from '../composables/useTheme'
import { navLinks } from '../data/profile'

const route = useRoute()
const { theme, toggleTheme } = useTheme()
const open = ref(false)
const scrolled = ref(false)

const isActive = (link) => (link.path === '/' ? route.path === '/' : route.path.startsWith(link.path))
const onScroll = () => { scrolled.value = window.scrollY > 40 }

watch(() => route.path, () => { open.value = false })
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll() })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
