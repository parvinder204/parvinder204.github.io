<template>
  <div class="pt-24" style="background:#faf9f6;">
    <section class="section-pad pb-0">
      <div class="max-w-7xl mx-auto">
        <p class="section-label animate-on-scroll">Portfolio</p>
        <h1 class="section-title animate-on-scroll" style="transition-delay:0.1s;">
          Projects <em class="not-italic text-gradient-gold">& Work.</em>
        </h1>
      </div>
    </section>

    <section class="section-pad pt-8 pb-0">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-wrap gap-3 animate-on-scroll">
          <button v-for="filter in filters" :key="filter"
                  @click="activeFilter = filter"
                  class="px-5 py-2.5 text-sm font-bold mono-text tracking-wider transition-all duration-300 border-2"
                  :style="activeFilter === filter
                    ? 'background:#1a1208; color:#faf9f6; border-color:#1a1208; box-shadow:3px 3px 0 #b8860b;'
                    : 'background:transparent; color:#6b5e45; border-color:rgba(26,18,8,0.15);'"
                  @mouseenter="e => { if(activeFilter!==filter) { e.currentTarget.style.borderColor='#b8860b'; e.currentTarget.style.color='#b8860b'; }}"
                  @mouseleave="e => { if(activeFilter!==filter) { e.currentTarget.style.borderColor='rgba(26,18,8,0.15)'; e.currentTarget.style.color='#6b5e45'; }}">
            {{ filter }}
          </button>
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-7">
        <div v-for="(p, i) in filteredProjects" :key="p.title"
             class="card-dark group relative overflow-hidden animate-on-scroll"
             :style="{ transitionDelay:(i*0.1)+'s' }">
          <div class="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100
                      transition-transform duration-500 origin-left"
               style="background:linear-gradient(90deg,#b8860b,#c0622a);" />

          <div class="p-6 pb-4" style="border-bottom:1.5px solid rgba(26,18,8,0.07);">
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-center gap-3">
                <span class="text-3xl">{{ p.emoji }}</span>
                <div>
                  <span class="mono-text text-xs font-bold tracking-widest uppercase" style="color:#b8860b;">{{ p.category }}</span>
                  <h3 class="font-bold group-hover:text-[#b8860b] transition-colors" style="color:#1a1208;">{{ p.title }}</h3>
                </div>
              </div>
              <a v-if="p.github" :href="p.github" target="_blank" rel="noopener"
                 class="w-9 h-9 border-2 flex items-center justify-center transition-all duration-300 shrink-0 hover:-translate-y-0.5"
                 style="border-color:rgba(26,18,8,0.12); color:#6b5e45;"
                 @mouseenter="e => { e.currentTarget.style.borderColor='#b8860b'; e.currentTarget.style.color='#b8860b'; }"
                 @mouseleave="e => { e.currentTarget.style.borderColor='rgba(26,18,8,0.12)'; e.currentTarget.style.color='#6b5e45'; }">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="p-6">
            <p class="text-sm leading-relaxed mb-5" style="color:#6b5e45;">{{ p.desc }}</p>
            
            <div v-if="p.metrics" class="grid grid-cols-2 gap-3 mb-5">
              <div v-for="m in p.metrics" :key="m.label"
                   class="p-3 text-center" style="background:#fdf8ee; border:1.5px solid rgba(184,134,11,0.2);">
                <p class="display-text text-xl font-black" style="color:#b8860b;">{{ m.value }}</p>
                <p class="mono-text text-xs font-bold mt-0.5" style="color:#9c8a6e;">{{ m.label }}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in p.tech" :key="tag" class="skill-pill">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad" style="background:#1a1208;">
      <div class="max-w-2xl mx-auto text-center">
        <p class="mono-text text-xs tracking-[0.3em] font-bold uppercase mb-4 animate-on-scroll" style="color:#b8860b;">Open Source</p>
        <h2 class="display-text text-3xl font-black mb-4 animate-on-scroll" style="color:#faf9f6; transition-delay:0.1s;">More on GitHub</h2>
        <p class="mb-8 animate-on-scroll" style="color:rgba(250,249,246,0.55); transition-delay:0.2s;">
          Explore ML logic implementations, security showcases, and more personal projects.
        </p>
        <a href="https://github.com/parvinder204" target="_blank" rel="noopener"
           class="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-wide transition-all duration-300
                  hover:gap-4 hover:-translate-x-0.5 hover:-translate-y-0.5 animate-on-scroll"
           style="background:#b8860b; color:#faf9f6; box-shadow:4px 4px 0 rgba(250,249,246,0.2); transition-delay:0.3s;">
          Visit GitHub Profile →
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const filters = ['All','AI/ML','Backend','Full Stack','Personal']
const activeFilter = ref('All')

const projects = [
  { emoji:'🤖', title:'AI WhatsApp Chatbot', category:'AI/ML',
    desc:'GPT-4 + Vision API + OpenCV chatbot integrated with Odoo CRM via Meta WhatsApp API. Dramatic improvements in lead conversion.',
    tech:['GPT-4','Vision API','OpenCV','Django','Meta API','Odoo CRM','MySQL'],
    metrics:[{value:'3.2×',label:'Lead Conversions'},{value:'78%',label:'Faster Responses'}], github:null },
  { emoji:'🧠', title:'GenhanceAI Platform', category:'AI/ML',
    desc:'GenAI content optimisation engine — Flask microservices on AWS (S3, SQS, EC2) with NextAuth and Perplexity API.',
    tech:['Flask','OpenAI','Perplexity API','Playwright','Next.js','AWS S3','SQS'], github:null },
  { emoji:'📊', title:'Tag Manager Platform', category:'Full Stack',
    desc:'Large-scale investigation & reporting SaaS. Performance improvements, major bug fixes, UX enhancements, AWS ECS/EC2/RDS deployment.',
    tech:['Django','DRF','React.js','AWS ECS','PostgreSQL'], github:null },
  { emoji:'📉', title:'Daasity Data Pipeline', category:'Backend',
    desc:'Automated data pipeline: S3 ingestion → cleaning → validation → Snowflake loading via FastAPI async microservices.',
    tech:['FastAPI','AWS S3','Snowflake','Python','Async'], github:null },
  { emoji:'🥗', title:'Vlocator', category:'Full Stack',
    desc:'Vegan restaurant discovery with Playwright scraping, Celery tasks, Vue.js frontend, PostgreSQL backend.',
    tech:['Django','Celery','Playwright','Vue.js','PostgreSQL'], github:null },
  { emoji:'💍', title:'Engagement Celebration', category:'Full Stack',
    desc:'Real-time vendor/couple event platform with WebSocket live features, Celery tasks, PostgreSQL.',
    tech:['Django','Celery','WebSockets','PostgreSQL'], github:null },
  { emoji:'🔒', title:'Security Showcase', category:'Personal',
    desc:'Web application security research — vulnerability demonstrations and best practices.',
    tech:['Python','Security','Web'], github:'https://github.com/parvinder204/security-showcase' },
  { emoji:'🧮', title:'ML Logic Implementations', category:'Personal',
    desc:'ML algorithms from scratch — regression, classification, clustering, neural networks.',
    tech:['Python','NumPy','Scikit-learn','ML'], github:'https://github.com/parvinder204/Machine-Learning-Logics' },
  { emoji:'🎙️', title:'Smart Meeting Insights', category:'AI/ML',
    desc:'AI assistant extracting insights, action items, and summaries from meeting recordings.',
    tech:['Python','OpenAI','LangChain','FastAPI'], github:'https://github.com/parvinder204/smart-meeting-insights-assistant' },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'All' ? projects : projects.filter(p => p.category === activeFilter.value)
)
</script>