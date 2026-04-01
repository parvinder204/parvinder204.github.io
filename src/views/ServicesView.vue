<template>
  <div class="pt-24" style="background:#faf9f6;">
    <section class="section-pad pb-0">
      <div class="max-w-7xl mx-auto">
        <p class="section-label animate-on-scroll">What I Offer</p>
        <h1 class="section-title animate-on-scroll" style="transition-delay:0.1s;">
          Services <em class="not-italic text-gradient-gold">& Expertise.</em>
        </h1>
        <p class="text-base leading-relaxed max-w-2xl mt-4 animate-on-scroll"
           style="transition-delay:0.2s; color:#3d2e0e;">
          End-to-end engineering capabilities — from architecture planning to production deployment.
          Technical depth and product thinking in every engagement.
        </p>
      </div>
    </section>

    <section class="section-pad">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(service, i) in services" :key="service.title"
             class="card-dark p-8 group relative overflow-hidden animate-on-scroll"
             :style="{ transitionDelay:(i*0.09)+'s' }">
          <div class="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100
                      transition-transform duration-500 origin-left"
               style="background:linear-gradient(90deg,#b8860b,#c0622a);" />

          <div class="w-12 h-12 border-2 flex items-center justify-center mb-6 transition-all duration-300"
               style="border-color:rgba(184,134,11,0.3);"
               @mouseenter="e => e.currentTarget.style.borderColor='#b8860b'"
               @mouseleave="e => e.currentTarget.style.borderColor='rgba(184,134,11,0.3)'">
            <span class="text-2xl">{{ service.icon }}</span>
          </div>

          <h3 class="display-text text-lg font-bold mb-3 group-hover:text-[#b8860b] transition-colors"
              style="color:#1a1208;">{{ service.title }}</h3>
          <p class="text-sm leading-relaxed mb-6" style="color:#6b5e45;">{{ service.desc }}</p>

          <ul class="space-y-2">
            <li v-for="item in service.items" :key="item"
                class="flex items-start gap-2 text-xs font-semibold" style="color:#3d2e0e;">
              <span class="font-black mt-0.5 shrink-0" style="color:#b8860b;">✓</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section-pad" style="background:#f3efe6;">
      <div class="max-w-7xl mx-auto">
        <p class="section-label animate-on-scroll">How I Work</p>
        <h2 class="section-title mb-14 animate-on-scroll" style="transition-delay:0.1s;">My Process</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(step, i) in process" :key="step.title"
               class="relative animate-on-scroll" :style="{ transitionDelay:(i*0.12)+'s' }">
            <div class="card-dark p-6">
              <span class="display-text text-5xl font-black" style="color:rgba(184,134,11,0.15);">0{{ i+1 }}</span>
              <h3 class="font-bold mt-3 mb-2" style="color:#1a1208;">{{ step.title }}</h3>
              <p class="text-xs leading-relaxed" style="color:#6b5e45;">{{ step.desc }}</p>
            </div>
            <div v-if="i < process.length-1" class="hidden lg:flex absolute top-1/2 -right-3 text-xl font-black"
                 style="color:rgba(184,134,11,0.4);">→</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad" style="background:#1a1208;">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="display-text text-3xl md:text-4xl font-black mb-5 animate-on-scroll" style="color:#faf9f6;">
          Ready to start a project?
        </h2>
        <p class="mb-8 animate-on-scroll" style="color:rgba(250,249,246,0.6); transition-delay:0.1s;">
          Let's discuss requirements and build something amazing together.
        </p>
        <router-link to="/contact"
          class="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-wide transition-all duration-300
                 hover:gap-4 hover:-translate-x-0.5 hover:-translate-y-0.5 animate-on-scroll"
          style="background:#b8860b; color:#faf9f6; box-shadow:4px 4px 0 rgba(250,249,246,0.25); transition-delay:0.2s;">
          Get In Touch →
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  { icon:'🐍', title:'Python Backend', desc:'Production-grade APIs and microservices with Django, FastAPI, and Flask.',
    items:['Django REST Framework APIs','FastAPI async microservices','ORM & query optimisation','JWT/OAuth/Session auth','Celery task queues'] },
  { icon:'⚛️', title:'Full Stack Web Apps', desc:'Modern, responsive web applications from database to polished UI.',
    items:['React.js / Next.js / Vue 3','SPA + SSR architectures','REST & GraphQL integration','Pinia / Redux state management','Tailwind responsive design'] },
  { icon:'☁️', title:'Cloud & DevOps', desc:'Deploy, scale, and monitor on AWS and Digital Ocean.',
    items:['AWS EC2/S3/RDS/SQS','Docker containerisation','GitHub Actions CI/CD','Server configuration & maintenance','Performance monitoring'] },
  { icon:'🤖', title:'AI & Automation', desc:'Integrate cutting-edge AI into your products and automate workflows.',
    items:['OpenAI GPT-4 integration','LangChain pipelines & RAG','WhatsApp / CRM AI chatbots','Browser automation (Playwright)','N8N workflow automation'] },
  { icon:'🗄️', title:'Database Engineering', desc:'Design, optimise, and scale your data layer for performance.',
    items:['PostgreSQL & MySQL schema','Query optimisation & indexing','Redis caching strategies','Snowflake data pipelines','BigQuery analytics setup'] },
  { icon:'🔌', title:'API & Integrations', desc:'Connect systems with third-party APIs and external services.',
    items:['Meta WhatsApp Business API','Odoo CRM integration','Payment APIs (Masspay)','KYC APIs (Veriff)','Custom webhook systems'] },
]
const process = [
  { title:'Discovery',    desc:'Understanding your requirements, goals, and technical constraints.' },
  { title:'Architecture', desc:'Designing a scalable, maintainable system blueprint.' },
  { title:'Development',  desc:'Iterative, test-driven implementation with regular check-ins.' },
  { title:'Delivery',     desc:'Deployment, documentation, and ongoing support.' },
]
</script>