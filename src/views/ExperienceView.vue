<template>
  <div class="pt-28 sm:pt-32">
    <section class="section-pad !pt-6">
      <div class="container-x">
        <SectionHeading tag="h1" label="Career" title="Work" accent="experience.">
          Where I've built, shipped and led — from AI chatbots to large-scale data and reporting platforms.
        </SectionHeading>

        <div class="timeline space-y-6 mt-12 max-w-5xl">
          <article v-for="(job, i) in experience" :key="job.company" v-reveal="i * 100" class="glass glass-hover glass-pad relative">
            <span class="timeline-dot" />
            <div class="flex flex-wrap items-start justify-between gap-3 mb-5">
              <div class="flex items-start gap-4">
                <span class="icon-tile"><Icon name="briefcase" size="w-6 h-6" /></span>
                <div>
                  <h2 class="card-title">{{ job.role }}</h2>
                  <p class="text-accent font-semibold text-sm mt-0.5">{{ job.company }}</p>
                  <p class="text-muted text-xs mt-0.5 inline-flex items-center gap-1.5"><Icon name="pin" size="w-3 h-3" />{{ job.location }}</p>
                </div>
              </div>
              <span class="chip"><Icon name="calendar" size="w-3 h-3" />{{ job.period }}</span>
            </div>

            <ul class="space-y-3 mb-6">
              <li v-for="h in job.highlights" :key="h" class="flex gap-3 text-sm text-muted leading-relaxed">
                <Icon name="check" size="w-4 h-4 text-accent shrink-0 mt-0.5" /><span>{{ h }}</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-2"><span v-for="t in job.tech" :key="t" class="chip">{{ t }}</span></div>
          </article>
        </div>

        <div v-reveal class="glass glass-pad mt-10 max-w-5xl">
          <p class="section-label mb-4">Also familiar with</p>
          <div class="flex flex-wrap gap-2"><span v-for="f in familiarWith" :key="f" class="chip">{{ f }}</span></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Icon from '../components/Icon.vue'
import SectionHeading from '../components/SectionHeading.vue'

const experience = [
  {
    role: 'Senior Python Developer', company: 'Midriff Info Pvt. Ltd.', location: 'Mohali, India', period: 'Feb 2026 – Present',
    highlights: [
      'Working with REST APIs using Django REST Framework (DRF) for scalable backend development.',
      'Implementing authentication systems with JWT tokens and session-based authentication.',
      'Managing server deployment and maintenance on AWS and Digital Ocean infrastructure.',
      'Building microservices with Django, FastAPI and Flask; frontend with Vue.js and React.',
      'Optimising API performance through query tuning, caching strategies and profiling.',
      'Building AI features end to end: LLM tool-calling agents and Retrieval-Augmented Generation (RAG) pipelines over company knowledge bases.',
      'Working with vector databases (Qdrant and pgvector) for embedding storage and semantic similarity search.',
      'Integrating Deepgram for real-time speech-to-text and text-to-speech in voice-enabled AI assistants.',
      'Leading the backend engineering team, conducting code reviews and mentoring trainees.',
    ],
    tech: ['Django', 'DRF', 'FastAPI', 'Flask', 'Vue.js', 'React', 'JWT', 'AWS', 'Digital Ocean', 'AI / LLMs', 'RAG', 'Qdrant', 'pgvector', 'Deepgram'],
  },
  {
    role: 'Software Development Engineer', company: 'Zestminds Technologies Pvt. Ltd.', location: 'Mohali, India', period: 'Jul 2024 – Jan 2026',
    highlights: [
      'Built an AI-powered WhatsApp chatbot integrated with Odoo CRM using GPT-4, Vision API and Meta WhatsApp API — achieving 3.2× more lead conversions and 78% faster customer responses.',
      'Worked on Tag Manager, a large-scale investigation & reporting platform (Django + DRF + React). Improved performance, eliminated major bugs, enhanced UX and deployed on AWS ECS/EC2/RDS.',
      'Improved API performance by 30% for JustGetLeads by refactoring Django modules and optimising MySQL queries.',
      'Automated end-to-end data analysis pipelines for Daasity: S3 ingestion → cleaning → validation → Snowflake loading via FastAPI microservices.',
      'Designed and deployed backend microservices for Genhance.ai — a Flask-based GenAI content optimisation engine using AWS S3, SQS and EC2.',
    ],
    tech: ['Django', 'DRF', 'FastAPI', 'Flask', 'React.js', 'Next.js', 'OpenAI GPT-4', 'AWS', 'Snowflake', 'Odoo CRM', 'MySQL'],
  },
]
const familiarWith = ['Agile', 'DevOps', 'Project Management', 'IT Infrastructure', 'N8N', 'LangChain', 'Streamlit', 'SDLC', 'STLC', 'Playwright', 'Browser Automation', 'OpenCV', 'Prompt Engineering']
</script>