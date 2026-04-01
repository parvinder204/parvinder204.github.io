<template>
  <div class="pt-24" style="background:#faf9f6;">
    <section class="section-pad pb-0">
      <div class="max-w-7xl mx-auto">
        <p class="section-label animate-on-scroll">Career Path</p>
        <h1 class="section-title animate-on-scroll" style="transition-delay:0.1s;">
          Work <em class="not-italic text-gradient-gold">Experience.</em>
        </h1>
      </div>
    </section>

    <section class="section-pad">
      <div class="max-w-4xl mx-auto">
        <div class="relative pl-8 timeline-line space-y-14">
          <div v-for="(job, i) in experience" :key="job.company"
               class="relative animate-on-scroll" :style="{ transitionDelay:(i*0.15)+'s' }">
         
            <div class="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-[#b8860b]"
                 style="background:#faf9f6;" />

            <div class="card-dark p-8 group">
              <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 class="display-text text-xl font-black group-hover:text-[#b8860b] transition-colors"
                      style="color:#1a1208;">{{ job.role }}</h3>
                  <p class="font-bold mt-1 text-base" style="color:#b8860b;">{{ job.company }}</p>
                  <p class="text-sm font-medium mt-0.5" style="color:#6b5e45;">{{ job.location }}</p>
                </div>
                <span class="mono-text text-xs font-bold px-4 py-2 border-2 whitespace-nowrap self-start"
                      style="border-color:#b8860b; color:#b8860b; background:#fdf8ee;">
                  {{ job.period }}
                </span>
              </div>

              <ul class="space-y-3 mb-6">
                <li v-for="point in job.highlights" :key="point"
                    class="flex items-start gap-3 text-sm leading-relaxed"
                    style="color:#3d2e0e;">
                  <span class="font-black mt-0.5 shrink-0" style="color:#b8860b;">▸</span>
                  <span>{{ point }}</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2 pt-5" style="border-top: 1.5px solid rgba(26,18,8,0.08);">
                <span v-for="tag in job.tech" :key="tag" class="skill-pill">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad" style="background:#f3efe6;">
      <div class="max-w-7xl mx-auto">
        <p class="section-label animate-on-scroll">Ecosystem</p>
        <h2 class="section-title mb-10 animate-on-scroll" style="transition-delay:0.1s;">Familiar With</h2>
        <div class="flex flex-wrap gap-3 animate-on-scroll" style="transition-delay:0.2s;">
          <span v-for="item in familiarWith" :key="item"
                class="px-5 py-2.5 border-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style="border-color:rgba(26,18,8,0.12); color:#3d2e0e; background:#fff;"
                @mouseenter="e => { e.currentTarget.style.borderColor='#b8860b'; e.currentTarget.style.color='#b8860b'; e.currentTarget.style.background='#fdf8ee'; }"
                @mouseleave="e => { e.currentTarget.style.borderColor='rgba(26,18,8,0.12)'; e.currentTarget.style.color='#3d2e0e'; e.currentTarget.style.background='#fff'; }">
            {{ item }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const experience = [
  {
    role: 'Senior Python Developer',
    company: 'Midriff Info Pvt. Ltd.',
    location: 'Mohali, India',
    period: 'Feb 2026 – Present',
    highlights: [
      'Working with REST APIs using Django REST Framework (DRF) for scalable backend development.',
      'Implementing authentication systems with JWT tokens and session-based authentication.',
      'Managing server deployment and maintenance on AWS and Digital Ocean infrastructure.',
      'Building microservices with Django, FastAPI, and Flask; frontend with Vue.js and React.',
      'Optimising API performance through query tuning, caching strategies, and profiling.',
      'Leading backend engineering team, conducting code reviews, and mentoring trainees.',
    ],
    tech: ['Django','DRF','FastAPI','Flask','Vue.js','React','JWT','AWS','Digital Ocean'],
  },
  {
    role: 'Software Development Engineer',
    company: 'Zestminds Technologies Pvt. Ltd.',
    location: 'Mohali, India',
    period: 'July 2024 – Jan 2026',
    highlights: [
      'Built an AI-powered WhatsApp Chatbot integrated with Odoo CRM using GPT-4, Vision API, and Meta WhatsApp API — achieving 3.2× more lead conversions and 78% faster customer responses.',
      'Worked on Tag Manager — a large-scale investigation & reporting platform (Django + DRF + React). Improved system performance, eliminated major bugs, enhanced UX, deployed on AWS ECS/EC2/RDS.',
      'Improved API performance by 30% for JustGetLeads by refactoring Django modules and optimising MySQL queries.',
      'Automated end-to-end data analysis pipelines for Daasity: S3 ingestion → cleaning → validation → Snowflake loading via FastAPI microservices.',
      'Designed and deployed backend microservices for Genhance.ai — Flask-based GenAI content optimisation engine using AWS S3, SQS, EC2.',
    ],
    tech: ['Django','DRF','FastAPI','Flask','React.js','Next.js','OpenAI GPT-4','AWS','Snowflake','Odoo CRM','MySQL'],
  },
]
const familiarWith = ['Agile','DevOps','Project Management','IT Infrastructure','N8N','LangChain','Streamlit','SDLC','STLC','Playwright','Browser Automation','OpenCV','Prompt Engineering']
</script>