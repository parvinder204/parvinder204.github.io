<template>
  <div class="pt-24" style="background:#faf9f6;">
    <section class="section-pad pb-0">
      <div class="max-w-7xl mx-auto">
        <p class="section-label animate-on-scroll">Who I Am</p>
        <h1 class="section-title animate-on-scroll" style="transition-delay:0.1s;">
          About <em class="not-italic text-gradient-gold">Me.</em>
        </h1>
      </div>
    </section>

    <section class="section-pad">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-start">

        <div class="lg:col-span-3 space-y-5">
          <div class="divider-gold animate-on-scroll" />
          <p class="text-lg leading-relaxed animate-on-scroll" style="transition-delay:0.1s; color:#3d2e0e;">
            I'm <strong class="font-black" style="color:#1a1208;">Parvinder Singh</strong>, a Full Stack Developer based in
            <strong class="font-bold" style="color:#b8860b;">Mohali, India</strong>, with 2+ years of professional
            experience building production-grade web applications and AI-powered systems.
          </p>
          <p class="leading-relaxed animate-on-scroll" style="transition-delay:0.2s; color:#3d2e0e; font-size:0.97rem;">
            My journey spans the full stack — from architecting <strong class="font-bold" style="color:#1a1208;">Django/FastAPI microservices</strong>
            and database schemas, to crafting <strong class="font-bold" style="color:#1a1208;">React and Vue frontends</strong> that users enjoy.
            I've shipped systems that reduced API latency by <strong class="font-bold" style="color:#b8860b;">30%</strong>,
            tripled WhatsApp lead conversions, and processed terabytes through Snowflake pipelines.
          </p>
          <p class="leading-relaxed animate-on-scroll" style="transition-delay:0.3s; color:#3d2e0e; font-size:0.97rem;">
            Currently a <strong class="font-bold" style="color:#1a1208;">Senior Python Developer at Midriff Info Pvt. Ltd.</strong>,
            leading backend engineering and mentoring junior devs. Previously at
            <strong class="font-bold" style="color:#1a1208;">Zestminds Technologies</strong>, shipping AI chatbots,
            large-scale reporting platforms, and GenAI microservices.
          </p>

          <div class="grid grid-cols-2 gap-4 mt-6 animate-on-scroll" style="transition-delay:0.4s;">
            <div v-for="fact in quickFacts" :key="fact.label" class="flex items-start gap-3">
              <span class="font-black mt-0.5" style="color:#b8860b;">→</span>
              <div>
                <p class="mono-text text-xs font-bold tracking-wider" style="color:#9c8a6e;">{{ fact.label }}</p>
                <p class="text-sm font-bold mt-0.5" style="color:#1a1208;">{{ fact.value }}</p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 mt-6 animate-on-scroll" style="transition-delay:0.5s;">
            <router-link to="/contact" class="btn-primary">Hire Me</router-link>
            <router-link to="/experience" class="btn-outline">View Experience</router-link>
          </div>
        </div>

        <div class="lg:col-span-2">
          <div class="card-dark p-8 text-center animate-on-scroll">

            <div class="relative inline-block mb-5">
              <div class="avatar-ring">
                <img
                  v-if="true"
                  src="/profile.jpg"
                  alt="Parvinder Singh"
                  class="avatar-inner w-32 h-32 object-cover"
                />
                
              </div>
              <div class="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <div class="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>

            <h3 class="display-text text-xl font-bold" style="color:#1a1208;">Parvinder Singh</h3>
            <p class="mono-text text-xs font-bold tracking-widest mt-1" style="color:#b8860b;">FULL STACK DEVELOPER</p>
            <div class="divider-gold mx-auto mt-4 mb-5" />

            <div class="space-y-2.5 text-sm" style="color:#6b5e45;">
              <p class="flex items-center justify-center gap-2 font-medium">
                <span>📍</span> Mohali, Punjab, India
              </p>
              <p class="flex items-center justify-center gap-2 font-medium">
                <span>📞</span> +91-7807952796
              </p>
              <p class="flex items-center justify-center gap-2 font-medium">
                <span>✉️</span> techpinda1214@gmail.com
              </p>
            </div>

            <div class="flex justify-center gap-3 mt-5">
              <a v-for="s in socials" :key="s.label" :href="s.url" target="_blank" rel="noopener"
                 :aria-label="s.label"
                 class="w-9 h-9 border-2 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                 style="border-color:rgba(26,18,8,0.12); color:#6b5e45;"
                 @mouseenter="e => { e.currentTarget.style.borderColor='#b8860b'; e.currentTarget.style.color='#b8860b'; }"
                 @mouseleave="e => { e.currentTarget.style.borderColor='rgba(26,18,8,0.12)'; e.currentTarget.style.color='#6b5e45'; }">
                <span v-html="s.icon" class="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="section-pad" style="background:#f3efe6;">
      <div class="max-w-7xl mx-auto">
        <p class="section-label animate-on-scroll">Technical Arsenal</p>
        <h2 class="section-title mb-12 animate-on-scroll" style="transition-delay:0.1s;">Skills & Technologies</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="(cat, i) in skillCategories" :key="cat.title"
               class="card-dark p-6 group animate-on-scroll"
               :style="{ transitionDelay: (i*0.07)+'s' }">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-xl">{{ cat.icon }}</span>
              <h3 class="font-bold group-hover:text-[#b8860b] transition-colors" style="color:#1a1208;">{{ cat.title }}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in cat.skills" :key="skill" class="skill-pill">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad" style="background:#faf9f6;">
      <div class="max-w-7xl mx-auto">
        <p class="section-label animate-on-scroll">Beyond Code</p>
        <h2 class="section-title mb-10 animate-on-scroll" style="transition-delay:0.1s;">Interpersonal Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(t, i) in interpersonal" :key="t.label"
               class="card-dark p-5 text-center group animate-on-scroll"
               :style="{ transitionDelay:(i*0.06)+'s' }">
            <div class="text-2xl mb-3">{{ t.icon }}</div>
            <p class="text-sm font-bold group-hover:text-[#b8860b] transition-colors" style="color:#3d2e0e;">{{ t.label }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const quickFacts = [
  { label:'CURRENT ROLE',  value:'Senior Python Developer' },
  { label:'COMPANY',       value:'Midriff Info Pvt. Ltd.' },
  { label:'EXPERIENCE',    value:'2+ Years Professional' },
  { label:'EDUCATION',     value:'MCA — Cloud & DevOps' },
  { label:'LOCATION',      value:'Mohali, Punjab, India' },
  { label:'AVAILABILITY',  value:'Open to Opportunities' },
]
const skillCategories = [
  { icon:'🐍', title:'Languages',          skills:['Python','JavaScript','TypeScript','PHP','C'] },
  { icon:'🛠️', title:'Backend Frameworks', skills:['Django','DRF','FastAPI','Flask','SQLAlchemy','Laravel'] },
  { icon:'⚛️', title:'Frontend',           skills:['React.js','Next.js','Vue 3','Vite','Tailwind CSS'] },
  { icon:'☁️', title:'Cloud & DevOps',    skills:['AWS EC2','AWS S3','AWS RDS','AWS SQS','Docker','GitHub Actions','Digital Ocean'] },
  { icon:'🗄️', title:'Databases',          skills:['PostgreSQL','MySQL','Redis','Snowflake','GCP BigQuery'] },
  { icon:'🤖', title:'AI & Automation',    skills:['OpenAI API','GPT-4','LangChain','Vision API','Playwright','N8N'] },
  { icon:'🔌', title:'APIs & Integrations',skills:['REST APIs','Meta WhatsApp API','Odoo CRM','Masspay API','Veriff KYC'] },
  { icon:'🧰', title:'Tools & Methods',    skills:['Git','Linux','Postman','Jira','Asana','Agile','SDLC','STLC'] },
]
const interpersonal = [
  { icon:'🚀', label:'Initiative Driven' },
  { icon:'🔍', label:'Analytical Thinking' },
  { icon:'🧩', label:'Problem Solving' },
  { icon:'💡', label:'Critical Thinking' },
  { icon:'🗣️', label:'Communication' },
  { icon:'👥', label:'Team Leadership' },
  { icon:'⚡', label:'Multitasking' },
  { icon:'🎯', label:'Result-Oriented' },
]
const socials = [
  { label:'GitHub', url:'https://github.com/parvinder204',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>` },
  { label:'LinkedIn', url:'https://www.linkedin.com/in/parvinder-singh-7651932b2',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>` },
]
</script>