<template>
  <div>
    
    <section class="relative min-h-screen flex items-center overflow-hidden noise-overlay"
             style="background: linear-gradient(135deg, #faf9f6 0%, #f3efe6 50%, #fdf8ee 100%);">
      
      <div class="absolute inset-0 pointer-events-none"
           style="background-image: linear-gradient(rgba(184,134,11,0.06) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(184,134,11,0.06) 1px, transparent 1px);
                  background-size: 72px 72px;" />
    
      <div class="absolute top-1/3 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
           style="background: radial-gradient(circle, rgba(232,148,74,0.1), transparent 70%); transform: translate(30%, -30%);" />

      <div class="relative z-10 section-pad w-full pt-32 pb-20">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div class="flex items-center gap-3 mb-8 animate-on-scroll">
              <span class="w-8 h-0.5" style="background:#b8860b;" />
              <span class="mono-text text-xs tracking-[0.3em] font-bold uppercase" style="color:#b8860b;">
                Available for work
              </span>
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>

            <h1 class="display-text text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-4 animate-on-scroll"
                style="transition-delay:0.1s; color:#1a1208;">
              PARVINDER<br />
              <span class="text-gradient-gold">SINGH</span>
            </h1>

            <div class="flex items-center gap-3 mb-6 animate-on-scroll" style="transition-delay:0.15s;">
              <div class="divider-gold"></div>
              <p class="mono-text text-sm tracking-[0.18em] font-bold uppercase" style="color:#6b5e45;">
                Full Stack Developer
              </p>
            </div>

            <p class="text-base leading-relaxed max-w-lg mb-10 animate-on-scroll"
               style="transition-delay:0.2s; color:#3d2e0e;">
              Results-driven engineer building <strong class="font-bold" style="color:#1a1208;">scalable microservices</strong>,
              SaaS platforms, and <strong class="font-bold" style="color:#1a1208;">AI-powered systems</strong>.
              Specialising in Python ecosystems, modern JS frameworks, and cloud-native architecture on AWS.
            </p>

            <div class="flex flex-wrap gap-4 mb-14 animate-on-scroll" style="transition-delay:0.25s;">
              <router-link to="/contact" class="btn-primary">
                Let's Talk
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </router-link>
              <router-link to="/projects" class="btn-outline">View Projects</router-link>
            </div>

            <div class="grid grid-cols-3 gap-6 animate-on-scroll" style="transition-delay:0.3s;">
              <div v-for="stat in stats" :key="stat.label"
                   class="pl-4" style="border-left: 3px solid #b8860b;">
                <p class="display-text text-3xl font-black" style="color:#b8860b;">{{ stat.value }}</p>
                <p class="mono-text text-xs font-bold tracking-wider mt-1" style="color:#6b5e45;">{{ stat.label }}</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center gap-8 animate-on-scroll" style="transition-delay:0.25s;">

            <div class="relative animate-float">
              <div class="avatar-ring">
                <img
                  v-if="true"
                  src="/profile.jpg"
                  alt="Parvinder Singh"
                  class="avatar-inner w-44 h-44 object-cover"
                />                
              </div>
              <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap
                          px-4 py-2 text-xs font-bold mono-text tracking-widest text-white"
                   style="background:#1a1208; box-shadow: 3px 3px 0 #b8860b;">
                OPEN TO WORK
              </div>
            </div>

            <div class="w-full" style="max-width:420px;">
              <div class="bg-white border-2 rounded-lg overflow-hidden"
                   style="border-color:rgba(26,18,8,0.12); box-shadow: 6px 6px 0 rgba(184,134,11,0.25);">
                
                <div class="flex items-center gap-2 px-4 py-3" style="background:#1a1208;">
                  <span class="w-3 h-3 rounded-full" style="background:#ff5f57;" />
                  <span class="w-3 h-3 rounded-full" style="background:#ffbd2e;" />
                  <span class="w-3 h-3 rounded-full" style="background:#28c840;" />
                  <span class="mono-text text-xs ml-3" style="color:rgba(255,255,255,0.4);">parvinder@dev ~ $</span>
                </div>
                <div class="p-5 font-mono text-sm leading-7" style="background:#fdfcfa;">
                  <p style="color:#9c8a6e;">// skills.py</p>
                  <p class="mt-1">
                    <span style="color:#7c3aed;">class </span>
                    <span style="color:#b8860b; font-weight:700;">ParvinderSingh</span>
                    <span style="color:#1a1208;">:</span>
                  </p>
                  <div class="ml-4">
                    <p><span style="color:#1d4ed8; font-weight:600;">role</span><span style="color:#6b5e45;"> = </span><span style="color:#15803d; font-weight:600;">"Senior Full Stack Dev"</span></p>
                    <p><span style="color:#1d4ed8; font-weight:600;">exp</span><span style="color:#6b5e45;">  = </span><span style="color:#c0622a; font-weight:600;">"2+ Years"</span></p>
                    <p class="mt-1"><span style="color:#1d4ed8; font-weight:600;">stack</span><span style="color:#6b5e45;"> = </span><span style="color:#1a1208;">[</span></p>
                    <div class="ml-4">
                      <p v-for="s in codeStack" :key="s" style="color:#15803d; font-weight:600;">"{{ s }}",</p>
                    </div>
                    <p style="color:#1a1208;">]</p>
                  </div>
                  <p class="mt-2 font-bold animate-pulse" style="color:#b8860b;">▊</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-16 animate-bounce">
          <div class="flex flex-col items-center gap-2" style="color:rgba(26,18,8,0.3);">
            <span class="mono-text text-xs tracking-widest font-bold">SCROLL</span>
            <svg class="w-4 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <section class="py-4 overflow-hidden" style="background:#1a1208; border-top:none;">
      <div class="marquee-inner">
        <span v-for="(tech, i) in [...allTechs, ...allTechs]" :key="i"
              class="mono-text text-xs tracking-widest uppercase shrink-0 px-6 font-bold"
              style="color:rgba(255,255,255,0.3);">
          {{ tech }}
        </span>
      </div>
    </section>

    <section class="section-pad" style="background:#faf9f6;">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p class="section-label animate-on-scroll">Core Expertise</p>
          <h2 class="section-title animate-on-scroll mb-5" style="transition-delay:0.1s;">
            Built to Scale.<br/>
            <em class="not-italic text-gradient-gold">Engineered to Last.</em>
          </h2>
          <p class="text-base leading-relaxed animate-on-scroll mb-8" style="transition-delay:0.2s; color:#3d2e0e;">
            From architecture to deployment, I own the full stack — Django/FastAPI backends,
            AI pipelines, React/Vue frontends, and AWS cloud infra.
          </p>
          <router-link to="/about" class="btn-outline animate-on-scroll" style="transition-delay:0.3s;">
            More About Me →
          </router-link>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(skill, i) in featuredSkills" :key="skill.title"
               class="card-dark p-6 group animate-on-scroll"
               :style="{ transitionDelay: (i * 0.1) + 's' }">
            <div class="text-3xl mb-4">{{ skill.icon }}</div>
            <h3 class="font-bold mb-2 group-hover:text-[#b8860b] transition-colors"
                style="color:#1a1208; font-size:0.95rem;">{{ skill.title }}</h3>
            <p class="text-xs leading-relaxed" style="color:#6b5e45;">{{ skill.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad" style="background:#f3efe6;">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p class="section-label animate-on-scroll">Selected Work</p>
            <h2 class="section-title animate-on-scroll" style="transition-delay:0.1s;">Projects That Ship.</h2>
          </div>
          <router-link to="/projects" class="btn-outline whitespace-nowrap animate-on-scroll self-start">
            All Projects →
          </router-link>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(p, i) in featuredProjects" :key="p.title"
               class="card-dark p-6 group relative overflow-hidden animate-on-scroll"
               :style="{ transitionDelay: (i * 0.12) + 's' }">
            <div class="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                 style="background: linear-gradient(90deg, #b8860b, #c0622a);" />
            <div class="flex items-start justify-between mb-4">
              <span class="text-2xl">{{ p.emoji }}</span>
              <span class="mono-text text-xs font-bold px-2 py-1 border" style="color:#b8860b; border-color:rgba(184,134,11,0.3);">{{ p.year }}</span>
            </div>
            <h3 class="font-bold mb-2 group-hover:text-[#b8860b] transition-colors" style="color:#1a1208;">{{ p.title }}</h3>
            <p class="text-xs leading-relaxed mb-4" style="color:#6b5e45;">{{ p.desc }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in p.tags" :key="tag" class="skill-pill">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad" style="background:#1a1208;">
      <div class="max-w-4xl mx-auto text-center">
        <p class="mono-text text-xs tracking-[0.3em] font-bold uppercase mb-4 animate-on-scroll" style="color:#b8860b;">
          Let's Build Together
        </p>
        <h2 class="display-text text-4xl md:text-5xl font-black mb-5 animate-on-scroll" style="color:#faf9f6; transition-delay:0.1s;">
          Have a project in mind?
        </h2>
        <p class="text-base leading-relaxed max-w-xl mx-auto mb-10 animate-on-scroll" style="color:rgba(250,249,246,0.6); transition-delay:0.2s;">
          I'm open to full-time roles and select freelance projects. Let's create something great.
        </p>
        <router-link to="/contact"
          class="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-wide transition-all duration-300
                 hover:gap-4 hover:-translate-x-0.5 hover:-translate-y-0.5 animate-on-scroll"
          style="background:#b8860b; color:#faf9f6; box-shadow:4px 4px 0 rgba(250,249,246,0.3); transition-delay:0.3s;">
          Start a Conversation
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  { value: '2+', label: 'YRS EXP' },
  { value: '10+', label: 'PROJECTS' },
  { value: '3×',  label: 'LEAD GAINS' },
]
const codeStack = ['Python / Django / FastAPI', 'React / Vue / Next.js', 'AWS / Docker / CI-CD', 'OpenAI / LangChain']
const allTechs = ['Python','Django','FastAPI','Flask','React.js','Vue.js','Next.js','Laravel','PostgreSQL','MySQL','Redis','AWS','Docker','TypeScript','OpenAI','LangChain','Celery','DRF']
const featuredSkills = [
  { icon:'🐍', title:'Python Backend',   desc:'Django, FastAPI, Flask with DRF, SQLAlchemy, async patterns.' },
  { icon:'⚛️', title:'Frontend Dev',     desc:'React.js, Vue 3, Next.js with modern state management.' },
  { icon:'☁️', title:'Cloud & DevOps',  desc:'AWS (EC2, S3, RDS, SQS), Docker, CI/CD pipelines.' },
  { icon:'🤖', title:'AI Integration',  desc:'OpenAI GPT-4, LangChain, Vision API, custom fine-tuning.' },
]
const featuredProjects = [
  { emoji:'🤖', title:'AI WhatsApp Chatbot', desc:'GPT-4 powered bot integrated with Odoo CRM. 3.2× lead conversions.', tags:['GPT-4','Django','Meta API','Odoo CRM'], year:'2024' },
  { emoji:'🧠', title:'GenhanceAI Platform', desc:'GenAI content optimisation engine on AWS microservices.', tags:['Flask','OpenAI','AWS','Next.js'], year:'2025' },
  { emoji:'🥗', title:'Vlocator', desc:'Vegan restaurant discovery with Celery tasks and Playwright scraping.', tags:['Django','Celery','Vue','Playwright'], year:'2026' },
]
</script>