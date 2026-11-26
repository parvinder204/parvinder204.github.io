<template>
  <div class="pt-28 sm:pt-32">
    <section v-if="post" class="section-pad !pt-6">
      <div class="container-x">
        <router-link v-reveal to="/blog" class="btn btn-glass mb-8"><Icon name="arrow-left" size="w-4 h-4" /> All articles</router-link>

        <header class="max-w-4xl">
          <div v-reveal class="flex flex-wrap items-center gap-2 mb-5">
            <span class="chip chip-active">{{ post.category }}</span>
            <span class="chip"><Icon name="calendar" size="w-3 h-3" />{{ formatDate(post.date) }}</span>
            <span class="chip"><Icon name="clock" size="w-3 h-3" />{{ post.readTime }} min read</span>
          </div>
          <h1 v-reveal="80" class="section-title" style="font-size:clamp(1.9rem,1.2rem+3.4vw,3.8rem);">{{ post.title }}</h1>
          <p v-reveal="140" class="lead text-muted mt-5">{{ post.excerpt }}</p>
          <div v-reveal="200" class="flex flex-wrap gap-2 mt-5"><span v-for="t in post.tags" :key="t" class="chip">#{{ t }}</span></div>
        </header>

        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
          <!-- Table of contents -->
          <aside class="lg:col-span-3 order-first lg:order-last">
            <nav class="glass glass-pad lg:sticky lg:top-28" aria-label="Table of contents">
              <p class="section-label mb-4 flex items-center gap-2"><Icon name="list" size="w-4 h-4" /> On this page</p>
              <ul class="space-y-1">
                <li v-for="h in headings" :key="h.id">
                  <button type="button" @click="jump(h.id)" class="text-left w-full text-sm text-muted hover:text-accent transition-colors py-1.5 leading-snug">{{ h.text }}</button>
                </li>
              </ul>
            </nav>
          </aside>

          <!-- Article -->
          <article class="lg:col-span-9 prose-blog space-y-6 min-w-0 max-w-3xl">
            <template v-for="(b, i) in post.blocks" :key="i">
              <h2 v-if="b.t === 'h2'" :id="slugify(b.c)" class="font-display font-bold text-fg pt-6" style="font-size:clamp(1.35rem,1.1rem+1vw,1.9rem);scroll-margin-top:7rem;">{{ b.c }}</h2>

              <p v-else-if="b.t === 'p'" v-html="fmt(b.c)" />

              <ul v-else-if="b.t === 'ul'" class="space-y-2.5">
                <li v-for="it in b.items" :key="it" class="flex gap-3 text-muted" style="line-height:1.75;">
                  <Icon name="check" size="w-4 h-4 text-accent shrink-0 mt-1.5" /><span v-html="fmt(it)" />
                </li>
              </ul>

              <ol v-else-if="b.t === 'ol'" class="space-y-3">
                <li v-for="(it, n) in b.items" :key="it" class="flex gap-4 text-muted" style="line-height:1.75;">
                  <span class="font-mono text-xs font-bold text-carbon bg-accent rounded-full w-6 h-6 grid place-items-center shrink-0 mt-1">{{ n + 1 }}</span><span v-html="fmt(it)" />
                </li>
              </ol>

              <figure v-else-if="b.t === 'code'" class="code-block not-prose">
                <figcaption class="flex items-center justify-between px-4 py-2.5 border-b border-silver/10">
                  <span class="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-silver">{{ b.lang }}</span>
                  <button type="button" class="inline-flex items-center gap-1.5 font-mono text-xs text-silver hover:text-paprika transition-colors" @click="copy(b.c, i)">
                    <Icon :name="copied === i ? 'check' : 'copy'" size="w-3.5 h-3.5" />{{ copied === i ? 'Copied' : 'Copy' }}
                  </button>
                </figcaption>
                <pre><code>{{ b.c }}</code></pre>
              </figure>

              <div v-else-if="b.t === 'callout'" class="glass glass-pad flex gap-4" style="border-left:3px solid rgb(var(--c-accent));">
                <Icon name="bulb" size="w-6 h-6 text-accent shrink-0" />
                <p class="!text-fg" v-html="fmt(b.c)" />
              </div>

              <div v-else-if="b.t === 'table'" class="glass overflow-hidden">
                <div class="table-wrap">
                  <table class="data-table stack">
                    <thead><tr><th v-for="h in b.head" :key="h">{{ h }}</th></tr></thead>
                    <tbody>
                      <tr v-for="(r, ri) in b.rows" :key="ri">
                        <td v-for="(c, ci) in r" :key="ci" :data-label="b.head[ci]" :class="ci ? 'text-muted' : ''">{{ c }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </template>

            <!-- Author -->
            <div class="glass glass-pad flex items-center gap-4 mt-10 !text-fg">
              <img :src="profile.photo" alt="" width="56" height="56" class="rounded-full object-cover shrink-0 border-2 border-accent" style="width:3.5rem;height:3.5rem;" />
              <div class="min-w-0">
                <p class="font-display font-semibold text-fg">Parvinder Singh</p>
                <p class="text-sm text-muted">Full Stack Developer · Python, AI &amp; cloud. Got a question about this post?</p>
              </div>
              <router-link to="/contact" class="btn btn-glass ml-auto hidden sm:inline-flex">Say hi</router-link>
            </div>
          </article>
        </div>

        <!-- Prev / next -->
        <div class="grid sm:grid-cols-2 gap-4 mt-14">
          <router-link v-if="prev" :to="`/blog/${prev.slug}`" class="glass glass-hover glass-pad group">
            <p class="font-mono text-xs text-muted flex items-center gap-2"><Icon name="arrow-left" size="w-3.5 h-3.5" /> Previous</p>
            <p class="card-title mt-2 group-hover:text-accent transition-colors">{{ prev.title }}</p>
          </router-link>
          <router-link v-if="next" :to="`/blog/${next.slug}`" class="glass glass-hover glass-pad group sm:text-right sm:col-start-2">
            <p class="font-mono text-xs text-muted flex items-center gap-2 sm:justify-end">Next <Icon name="arrow-right" size="w-3.5 h-3.5" /></p>
            <p class="card-title mt-2 group-hover:text-accent transition-colors">{{ next.title }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <section v-else class="section-pad text-center">
      <div class="container-x">
        <div class="glass glass-pad max-w-lg mx-auto">
          <h1 class="card-title">Article not found</h1>
          <p class="text-muted mt-2 mb-6">That post doesn't exist or has been moved.</p>
          <router-link to="/blog" class="btn btn-primary">Browse all articles</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import Icon from '../components/Icon.vue'
import { profile } from '../data/profile'
import { posts, getPost, formatDate } from '../data/blogs'

const route = useRoute()
const post = computed(() => getPost(route.params.slug))
const idx = computed(() => posts.findIndex((p) => p.slug === route.params.slug))
const prev = computed(() => (idx.value > 0 ? posts[idx.value - 1] : null))
const next = computed(() => (idx.value >= 0 && idx.value < posts.length - 1 ? posts[idx.value + 1] : null))

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const headings = computed(() => (post.value ? post.value.blocks.filter((b) => b.t === 'h2').map((b) => ({ text: b.c, id: slugify(b.c) })) : []))

// Escape HTML first, then allow only `code` and **bold** — content is authored in-repo, but this keeps it safe.
const fmt = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/`([^`]+)`/g, '<code>$1</code>')
   .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

const copied = ref(-1)
const copy = async (text, i) => {
  try { await navigator.clipboard.writeText(text); copied.value = i; setTimeout(() => (copied.value = -1), 1800) } catch (e) { /* clipboard unavailable */ }
}

watch(post, (p) => { document.title = p ? `${p.title} — Parvinder Singh` : 'Article not found — Parvinder Singh' }, { immediate: true })
</script>
