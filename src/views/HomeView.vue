<template>
  <div>
    <!-- HERO -->
    <section class="relative min-h-screen flex items-center pt-28 pb-16 sm:pt-32">
      <div class="container-x w-full">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div class="lg:col-span-7">
            <div v-reveal class="glass inline-flex items-center gap-3 px-4 py-2 mb-7" style="border-radius:9999px;">
              <span class="relative flex w-2.5 h-2.5"><span class="absolute inline-flex w-full h-full rounded-full bg-accent opacity-70 animate-ping" /><span class="relative inline-flex w-2.5 h-2.5 rounded-full bg-accent" /></span>
              <span class="font-mono text-xs font-bold uppercase tracking-[0.2em]">Available for work</span>
            </div>

            <h1 v-reveal="80" class="hero-title mb-5">
              Parvinder<br /><span class="gradient-text">Singh</span>
            </h1>

            <div v-reveal="140" class="flex items-center gap-3 mb-6 h-8">
              <span class="divider-accent" />
              <transition name="role" mode="out-in">
                <p :key="roleIndex" class="font-mono text-sm  font-bold uppercase tracking-[0.16em] text-muted">{{ roles[roleIndex] }}</p>
              </transition>
            </div>

            <p v-reveal="200" class="lead text-muted max-w-xl mb-9">
              Results-driven engineer building <strong class="text-fg">scalable microservices</strong>, SaaS platforms and
              <strong class="text-fg">AI-powered systems</strong>. Python ecosystems, modern JS frameworks and cloud-native architecture on AWS.
            </p>

            <div v-reveal="260" class="flex flex-wrap gap-3 mb-12">
              <router-link to="/contact" class="btn btn-primary">Let's talk <Icon name="arrow-right" size="w-4 h-4" /></router-link>
              <router-link to="/work" class="btn btn-glass">View work <Icon name="arrow-up-right" size="w-4 h-4" /></router-link>
              <router-link to="/blog" class="btn btn-glass">Read the blog <Icon name="pen" size="w-4 h-4" /></router-link>
            </div>

            <div v-reveal="320" class="glass grid grid-cols-3 divide-x divide-line/20 max-w-lg">
              <div v-for="s in stats" :key="s.label" class="text-center py-4 px-2">
                <p class="font-display font-bold text-accent" style="font-size:clamp(1.4rem,1.1rem+1.4vw,2.2rem);line-height:1.1">{{ s.value }}</p>
                <p class="font-mono text-[0.62rem] sm:text-xs uppercase tracking-wider text-muted mt-1">{{ s.label }}</p>
              </div>
            </div>
          </div>

          <!-- Right: avatar + terminal -->
          <div v-reveal="200" class="lg:col-span-5 flex flex-col items-center gap-8">
            <div class="relative">
              <div class="absolute -inset-6 rounded-full blur-3xl opacity-40 bg-accent" aria-hidden="true" />
              <div class="relative animate-float p-[3px] rounded-full" style="background:linear-gradient(140deg,#eb5e28,#ccc5b9 55%,#403d39);">
                <img :src="profile.photo" alt="Portrait of Parvinder Singh" width="224" height="224"
                     class="block rounded-full object-cover border-4 border-base"
                     style="width:clamp(10rem,8rem+9vw,14rem);aspect-ratio:1;" />
              </div>
              <div class="glass absolute -left-4 sm:-left-10 top-6 px-3 py-2 flex items-center gap-2 animate-float-slow" style="border-radius:9999px;">
                <Icon name="sparkles" size="w-4 h-4" /><span class="font-mono text-xs font-bold">GPT-4</span>
              </div>
              <div class="glass absolute -right-3 sm:-right-10 top-1/2 px-3 py-2 flex items-center gap-2 animate-float" style="border-radius:9999px;">
                <Icon name="cloud" size="w-4 h-4" /><span class="font-mono text-xs font-bold">AWS</span>
              </div>
              <div class="glass absolute left-2 -bottom-3 px-3 py-2 flex items-center gap-2 animate-float-slow" style="border-radius:9999px;animation-delay:-3s;">
                <Icon name="terminal" size="w-4 h-4" /><span class="font-mono text-xs font-bold">Django</span>
              </div>
            </div>

            <div class="glass w-full max-w-md overflow-hidden mt-2">
              <div class="flex items-center gap-2 px-4 py-3 border-b border-line/20">
                <span class="w-3 h-3 rounded-full bg-paprika" /><span class="w-3 h-3 rounded-full bg-silver" /><span class="w-3 h-3 rounded-full bg-charcoal" />
                <span class="font-mono text-xs text-muted ml-2">parvinder@dev ~ $</span>
              </div>
              <div class="p-5 font-mono leading-7" style="font-size:clamp(0.74rem,0.7rem+0.25vw,0.9rem);">
                <p class="text-muted"># skills.py</p>
                <p><span class="text-accent">class</span> <span class="font-bold">ParvinderSingh</span>:</p>
                <div class="pl-4">
                  <p>role <span class="text-muted">=</span> <span class="text-accent">"Senior Python Dev"</span></p>
                  <p>stack <span class="text-muted">=</span> [</p>
                  <p v-for="s in codeStack" :key="s" class="pl-4 text-muted">"{{ s }}",</p>
                  <p>]</p>
                </div>
                <p class="text-accent font-bold animate-pulse">▊</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERTISE -->
    <section class="section-pad">
      <div class="container-x">
        <SectionHeading label="Core expertise" title="Built to scale." accent="Engineered to last.">
          From architecture to deployment I own the full stack: Django/FastAPI backends, AI pipelines, React/Vue frontends and AWS infrastructure.
        </SectionHeading>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12">
          <article v-for="(s, i) in featuredSkills" :key="s.title" v-reveal="i * 90" class="glass glass-hover glass-pad group">
            <span class="icon-tile mb-5"><Icon :name="s.icon" size="w-6 h-6" /></span>
            <h3 class="card-title mb-2">{{ s.title }}</h3>
            <p class="text-sm text-muted leading-relaxed">{{ s.desc }}</p>
          </article>
        </div>
        <div v-reveal class="mt-8"><router-link to="/about" class="btn btn-glass">More about me <Icon name="arrow-right" size="w-4 h-4" /></router-link></div>
      </div>
    </section>

    <!-- FEATURED PROJECTS -->
    <section class="section-pad">
      <div class="container-x">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading label="Selected work" title="Projects that" accent="ship." />
          <router-link v-reveal to="/work" class="btn btn-glass self-start">All projects &amp; services <Icon name="arrow-up-right" size="w-4 h-4" /></router-link>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <article v-for="(p, i) in featuredProjects" :key="p.title" v-reveal="i * 100" class="glass glass-hover glass-pad flex flex-col">
            <div class="flex items-start justify-between mb-5">
              <span class="icon-tile"><Icon :name="p.icon" size="w-6 h-6" /></span>
              <span class="chip">{{ p.year || p.category }}</span>
            </div>
            <h3 class="card-title mb-2">{{ p.title }}</h3>
            <p class="text-sm text-muted leading-relaxed mb-5 flex-1">{{ p.desc }}</p>
            <div v-if="p.metrics" class="flex gap-6 mb-4">
              <div v-for="m in p.metrics" :key="m.label">
                <p class="font-display font-bold text-xl text-accent leading-none">{{ m.value }}</p>
                <p class="font-mono text-[0.62rem] uppercase tracking-wider text-muted mt-1">{{ m.label }}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2"><span v-for="t in p.tech.slice(0, 4)" :key="t" class="chip">{{ t }}</span></div>
          </article>
        </div>
      </div>
    </section>

    <!-- LATEST POSTS -->
    <section class="section-pad">
      <div class="container-x">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading label="From the blog" title="Notes on AI, Python" accent="& data." />
          <router-link v-reveal to="/blog" class="btn btn-glass self-start">All articles <Icon name="arrow-up-right" size="w-4 h-4" /></router-link>
        </div>
        <div class="grid md:grid-cols-3 gap-4 sm:gap-5">
          <router-link v-for="(p, i) in latest" :key="p.slug" v-reveal="i * 100" :to="`/blog/${p.slug}`" class="glass glass-hover glass-pad flex flex-col group">
            <div class="flex items-center justify-between mb-5">
              <span class="icon-tile"><Icon :name="p.icon" size="w-6 h-6" /></span>
              <span class="chip"><Icon name="clock" size="w-3 h-3" />{{ p.readTime }} min</span>
            </div>
            <p class="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent mb-2">{{ p.category }}</p>
            <h3 class="card-title mb-3 group-hover:text-accent transition-colors">{{ p.title }}</h3>
            <p class="text-sm text-muted leading-relaxed flex-1">{{ p.excerpt }}</p>
            <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">Read article <Icon name="arrow-right" size="w-4 h-4" /></span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-pad">
      <div class="container-x">
        <div v-reveal class="glass glass-pad text-center overflow-hidden" style="padding-block:clamp(2.5rem,1.5rem+4vw,5rem);">
          <div class="absolute inset-x-0 -top-24 h-48 blur-3xl opacity-40 bg-accent" aria-hidden="true" />
          <p class="section-label relative mb-4">Let's build together</p>
          <h2 class="section-title relative mb-5">Have a project <span class="gradient-text">in mind?</span></h2>
          <p class="lead text-muted relative max-w-xl mx-auto mb-8">Open to full-time roles and select freelance projects. Let's create something great.</p>
          <router-link to="/contact" class="btn btn-primary relative">Start a conversation <Icon name="arrow-right" size="w-4 h-4" /></router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Icon from '../components/Icon.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { posts } from '../data/blogs'

const roles = ['Full Stack Developer', 'Python & AI Engineer', 'Cloud-native Builder']
const roleIndex = ref(0)
let timer
onMounted(() => { timer = setInterval(() => { roleIndex.value = (roleIndex.value + 1) % roles.length }, 2800) })
onUnmounted(() => clearInterval(timer))

const stats = [
  { value: '2+', label: 'Yrs experience' },
  { value: '10+', label: 'Projects' },
  { value: '3.2×', label: 'Lead gains' },
]
const codeStack = ['Python / Django / FastAPI', 'React / Vue / Next.js', 'AWS / Docker / CI-CD', 'OpenAI / LangChain']
const featuredSkills = [
  { icon: 'terminal', title: 'Python backend', desc: 'Django, FastAPI and Flask with DRF, SQLAlchemy and async patterns.' },
  { icon: 'layout', title: 'Frontend dev', desc: 'React.js, Vue 3 and Next.js with modern state management.' },
  { icon: 'cloud', title: 'Cloud & DevOps', desc: 'AWS (EC2, S3, RDS, SQS), Docker and CI/CD pipelines.' },
  { icon: 'sparkles', title: 'AI integration', desc: 'OpenAI GPT-4, LangChain, Vision API and custom pipelines.' },
]
const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)
const latest = computed(() => posts.slice(0, 3))
</script>