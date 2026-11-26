<template>
  <div class="pt-28 sm:pt-32">
    <section class="section-pad !pt-6">
      <div class="container-x">
        <SectionHeading tag="h1" label="The blog" title="Notes on AI, Python" accent="& data.">
          Practical write-ups from building production systems — LLMs, neural networks, backend performance and data engineering.
        </SectionHeading>

        <!-- Search + categories -->
        <div v-reveal="150" class="mt-10 space-y-5">
          <label class="glass flex items-center gap-3 px-5 py-3 max-w-xl focus-within:border-accent transition-colors" style="border-radius:9999px;">
            <Icon name="search" size="w-5 h-5 text-muted shrink-0" />
            <input v-model.trim="query" type="search" placeholder="Search articles, tags, topics…" aria-label="Search articles"
                   class="w-full bg-transparent outline-none text-fg placeholder:text-muted/60" style="font-size:clamp(.9rem,.85rem+.2vw,1rem);" />
          </label>
          <div class="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            <button v-for="c in blogCategories" :key="c" class="chip chip-btn" :class="{ 'chip-active': cat === c }" @click="cat = c">{{ c }}</button>
          </div>
        </div>

        <!-- Featured -->
        <router-link v-if="featured" :to="`/blog/${featured.slug}`" v-reveal
                     class="glass glass-hover glass-pad grid md:grid-cols-5 gap-6 items-center mt-10 group">
          <div class="md:col-span-2 grid place-items-center rounded-2xl py-10 md:py-14 border border-accent/30"
               style="background:linear-gradient(145deg,rgb(var(--c-accent)/.28),rgb(var(--c-accent)/.04));">
            <Icon :name="featured.icon" size="w-16 h-16 text-accent" />
          </div>
          <div class="md:col-span-3">
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span class="chip chip-active">Featured</span>
              <span class="chip">{{ featured.category }}</span>
              <span class="chip"><Icon name="clock" size="w-3 h-3" />{{ featured.readTime }} min read</span>
            </div>
            <h2 class="section-title group-hover:text-accent transition-colors" style="font-size:clamp(1.5rem,1.1rem+2vw,2.4rem);">{{ featured.title }}</h2>
            <p class="text-muted leading-relaxed mt-3">{{ featured.excerpt }}</p>
            <div class="flex flex-wrap items-center justify-between gap-3 mt-5">
              <span class="font-mono text-xs text-muted">{{ formatDate(featured.date) }}</span>
              <span class="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">Read article <Icon name="arrow-right" size="w-4 h-4" /></span>
            </div>
          </div>
        </router-link>

        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-5">
          <router-link v-for="(p, i) in rest" :key="p.slug" v-reveal="(i % 3) * 90" :to="`/blog/${p.slug}`" class="glass glass-hover glass-pad flex flex-col group">
            <div class="flex items-center justify-between mb-5">
              <span class="icon-tile"><Icon :name="p.icon" size="w-6 h-6" /></span>
              <span class="chip"><Icon name="clock" size="w-3 h-3" />{{ p.readTime }} min</span>
            </div>
            <p class="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent mb-2">{{ p.category }}</p>
            <h3 class="card-title mb-3 group-hover:text-accent transition-colors">{{ p.title }}</h3>
            <p class="text-sm text-muted leading-relaxed flex-1">{{ p.excerpt }}</p>
            <div class="flex flex-wrap gap-2 mt-5"><span v-for="t in p.tags.slice(0, 3)" :key="t" class="chip">{{ t }}</span></div>
            <p class="font-mono text-xs text-muted mt-4">{{ formatDate(p.date) }}</p>
          </router-link>
        </div>

        <div v-if="!results.length" class="glass glass-pad text-center mt-8">
          <Icon name="search" size="w-8 h-8 mx-auto text-accent mb-3" />
          <p class="font-semibold">No articles match your search.</p>
          <button class="btn btn-glass mt-5" @click="reset">Clear filters</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Icon from '../components/Icon.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { posts, blogCategories, formatDate } from '../data/blogs'

const query = ref('')
const cat = ref('All')

const results = computed(() => {
  const q = query.value.toLowerCase()
  return posts.filter((p) => {
    const inCat = cat.value === 'All' || p.category === cat.value
    const hay = `${p.title} ${p.excerpt} ${p.category} ${p.tags.join(' ')}`.toLowerCase()
    return inCat && (!q || hay.includes(q))
  })
})
// Only feature the newest post when browsing everything
const isDefault = computed(() => cat.value === 'All' && !query.value)
const featured = computed(() => (isDefault.value ? results.value[0] : null))
const rest = computed(() => (isDefault.value ? results.value.slice(1) : results.value))
const reset = () => { query.value = ''; cat.value = 'All' }
</script>
