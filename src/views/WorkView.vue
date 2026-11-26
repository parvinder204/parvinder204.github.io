<template>
  <div class="pt-28 sm:pt-32">
    <!-- Header + in-page tabs -->
    <section class="section-pad !pb-6 !pt-6">
      <div class="container-x">
        <SectionHeading tag="h1" label="Projects & services" title="What I build," accent="and how I can help.">
          A selection of shipped products and open-source experiments, plus the services I offer to teams and clients.
        </SectionHeading>

        <div v-reveal="200" class="glass inline-flex p-1.5 gap-1 mt-10" style="border-radius:9999px;" role="tablist">
          <button v-for="t in tabs" :key="t.id" role="tab" :aria-selected="tab === t.id" @click="tab = t.id"
                  class="btn !py-2" :class="tab === t.id ? 'btn-primary' : 'text-muted hover:text-fg'">
            <Icon :name="t.icon" size="w-4 h-4" />{{ t.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section v-show="tab === 'projects'" class="section-pad !pt-8">
      <div class="container-x">
        <div class="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects">
          <button v-for="f in projectFilters" :key="f" class="chip chip-btn" :class="{ 'chip-active': active === f }" @click="active = f">{{ f }}</button>
        </div>

        <transition-group name="page" tag="div" class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <article v-for="p in filtered" :key="p.title" class="glass glass-hover glass-pad flex flex-col">
            <div class="flex items-start justify-between mb-5">
              <span class="icon-tile"><Icon :name="p.icon" size="w-6 h-6" /></span>
              <span class="chip">{{ p.category }}</span>
            </div>
            <h3 class="card-title mb-2">{{ p.title }}</h3>
            <p class="text-sm text-muted leading-relaxed mb-5 flex-1">{{ p.desc }}</p>
            <div v-if="p.metrics" class="grid grid-cols-2 gap-3 mb-5">
              <div v-for="m in p.metrics" :key="m.label" class="rounded-xl p-3 border border-accent/30 bg-accent/10">
                <p class="font-display font-bold text-xl text-accent leading-none">{{ m.value }}</p>
                <p class="font-mono text-[0.6rem] uppercase tracking-wider text-muted mt-1.5">{{ m.label }}</p>
              </div>
            </div>
            <ul v-if="p.points" class="space-y-1.5 mb-5">
              <li v-for="pt in p.points" :key="pt" class="flex gap-2 text-xs text-muted leading-relaxed">
                <Icon name="check" size="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />{{ pt }}
              </li>
            </ul>
            <div class="flex flex-wrap gap-2 mb-5">
              <span v-for="t in p.tech.slice(0, 9)" :key="t" class="chip">{{ t }}</span>
              <span v-if="p.tech.length > 9" class="chip">+{{ p.tech.length - 9 }} more</span>
            </div>
            <a v-if="p.github" :href="p.github" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
              <Icon name="github" size="w-4 h-4" /> View on GitHub <Icon name="arrow-up-right" size="w-4 h-4" />
            </a>
            <span v-else class="inline-flex items-center gap-2 text-xs font-mono text-muted"><Icon :name="p.private === false ? 'user' : 'lock'" size="w-3.5 h-3.5" /> {{ p.kind || 'Private project' }}</span>
          </article>
        </transition-group>

        <div v-reveal class="text-center mt-12">
          <a href="https://github.com/parvinder204" target="_blank" rel="noopener" class="btn btn-glass"><Icon name="github" size="w-4 h-4" /> More on GitHub <Icon name="arrow-up-right" size="w-4 h-4" /></a>
        </div>
      </div>
    </section>

    <!-- SERVICES + PROCESS -->
    <section v-show="tab === 'services'" class="section-pad !pt-8">
      <div class="container-x">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <article v-for="(s, i) in services" :key="s.title" class="glass glass-hover glass-pad animate-fade-up" :style="{ animationDelay: i * 70 + 'ms' }">
            <span class="icon-tile mb-5"><Icon :name="s.icon" size="w-6 h-6" /></span>
            <h3 class="card-title mb-2">{{ s.title }}</h3>
            <p class="text-sm text-muted leading-relaxed mb-5">{{ s.desc }}</p>
            <ul class="space-y-2">
              <li v-for="it in s.items" :key="it" class="flex items-start gap-2.5 text-sm text-muted">
                <Icon name="check" size="w-4 h-4 text-accent shrink-0 mt-0.5" />{{ it }}
              </li>
            </ul>
          </article>
        </div>

        <div class="mt-20">
          <SectionHeading label="How I work" title="A simple," accent="transparent process." />
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10">
            <div v-for="(p, i) in process" :key="p.title" v-reveal="i * 90" class="glass glass-hover glass-pad relative">
              <span class="absolute top-4 right-5 font-display font-bold text-4xl text-fg/10">0{{ i + 1 }}</span>
              <span class="icon-tile mb-4"><Icon :name="p.icon" size="w-6 h-6" /></span>
              <h3 class="card-title mb-2">{{ p.title }}</h3>
              <p class="text-sm text-muted leading-relaxed">{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-pad !pt-4">
      <div class="container-x">
        <div v-reveal class="glass glass-pad flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 class="section-title" style="font-size:clamp(1.5rem,1.1rem+1.8vw,2.4rem);">Need something <span class="gradient-text">built?</span></h2>
            <p class="text-muted mt-2">Tell me about your project and I'll reply within 24 hours.</p>
          </div>
          <router-link to="/contact" class="btn btn-primary">Start a project <Icon name="arrow-right" size="w-4 h-4" /></router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import Icon from '../components/Icon.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { projects, projectFilters, services, process } from '../data/projects'

const route = useRoute()
const tabs = [
  { id: 'projects', label: 'Projects', icon: 'layers' },
  { id: 'services', label: 'Services', icon: 'wrench' },
]
const tab = ref('projects')
const active = ref('All')
const filtered = computed(() => (active.value === 'All' ? projects : projects.filter((p) => p.category === active.value)))

// Support /work?tab=services deep links
watch(() => route.query.tab, (v) => { if (v === 'services' || v === 'projects') tab.value = v }, { immediate: true })
</script>