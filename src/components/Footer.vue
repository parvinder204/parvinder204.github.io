<template>
  <footer class="relative mt-8 pb-8">
    <!-- Tech marquee -->
    <div class="glass overflow-hidden mx-3 sm:mx-5 mb-10" style="border-radius:9999px;" aria-hidden="true">
      <div class="flex w-max animate-marquee py-3">
        <span v-for="(t, i) in [...techs, ...techs]" :key="i"
              class="font-mono text-xs uppercase tracking-[0.2em] text-muted px-6 inline-flex items-center gap-6 whitespace-nowrap">
          {{ t }} <span class="w-1.5 h-1.5 rounded-full bg-accent" />
        </span>
      </div>
    </div>

    <div class="container-x">
      <div class="glass glass-pad grid gap-8 md:grid-cols-2 items-center">
        <div>
          <p class="font-display font-bold text-2xl">Parvinder <span class="gradient-text">Singh</span></p>
          <p class="text-muted text-sm mt-2 max-w-xs">Full Stack Developer building scalable backends, AI-powered products and cloud-native systems.</p>
        </div>

        <div class="md:text-right">
          <p class="section-label mb-3">Let's connect</p>
          <div class="flex gap-2 md:justify-end">
            <a v-for="s in socials" :key="s.label" :href="s.url" :target="s.url.startsWith('http') ? '_blank' : null"
               rel="noopener" :aria-label="s.label" class="btn-icon"><Icon :name="s.icon" /></a>
          </div>
        </div>
      </div>

      <p class="text-center text-muted text-xs font-mono mt-6">
        © {{ new Date().getFullYear() }} Parvinder Singh
      </p>
    </div>
  </footer>
</template>

<script setup>
import Icon from './Icon.vue'
import { socials, techs } from '../data/profile'
</script>