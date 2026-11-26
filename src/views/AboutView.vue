<template>
  <div class="pt-28 sm:pt-32">
    <!-- INTRO -->
    <section class="section-pad !pt-6">
      <div class="container-x">
        <SectionHeading tag="h1" label="Who I am" title="About" accent="me." />

        <div class="grid lg:grid-cols-5 gap-8 lg:gap-12 mt-12 items-start">
          <div class="lg:col-span-3 space-y-5">
            <p v-reveal class="lead">
              I'm <strong>Parvinder Singh</strong>, a Full Stack Developer based in <strong class="text-accent">Mohali, India</strong>,
              with 2+ years of professional experience building production-grade web applications and AI-powered systems.
            </p>
            <p v-reveal="80" class="text-muted leading-relaxed">
              My work spans the full stack — from architecting <strong class="text-fg">Django/FastAPI microservices</strong> and database
              schemas to crafting <strong class="text-fg">React and Vue frontends</strong> that users enjoy. I've shipped systems that reduced
              API latency by <strong class="text-accent">30%</strong>, tripled WhatsApp lead conversions and moved large datasets through Snowflake pipelines.
            </p>
            <p v-reveal="140" class="text-muted leading-relaxed">
              Currently a <strong class="text-fg">Senior Python Developer at Midriff Info Pvt. Ltd.</strong>, leading backend engineering and mentoring
              junior developers. Previously at <strong class="text-fg">Zestminds Technologies</strong>, shipping AI chatbots, large-scale reporting platforms and GenAI microservices.
            </p>

            <div v-reveal="200" class="grid grid-cols-2 gap-3 pt-2">
              <div v-for="f in quickFacts" :key="f.label" class="glass p-4">
                <p class="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">{{ f.label }}</p>
                <p class="font-semibold text-sm mt-1">{{ f.value }}</p>
              </div>
            </div>

            <div v-reveal="260" class="flex flex-wrap gap-3 pt-2">
              <router-link to="/contact" class="btn btn-primary">Hire me <Icon name="arrow-up-right" size="w-4 h-4" /></router-link>
              <router-link to="/experience" class="btn btn-glass">View experience <Icon name="arrow-right" size="w-4 h-4" /></router-link>
            </div>
          </div>

          <aside v-reveal="120" class="lg:col-span-2 glass glass-pad text-center lg:sticky lg:top-28">
            <div class="inline-block p-[3px] rounded-full mb-5" style="background:linear-gradient(140deg,#eb5e28,#ccc5b9 55%,#403d39);">
              <img :src="profile.photo" alt="Parvinder Singh" width="128" height="128" class="block rounded-full object-cover border-4 border-base" style="width:clamp(6.5rem,5rem+5vw,8.5rem);aspect-ratio:1;" />
            </div>
            <h2 class="card-title">Parvinder Singh</h2>
            <p class="font-mono text-xs tracking-[0.2em] text-accent mt-1">FULL STACK DEVELOPER</p>
            <div class="divider-accent mx-auto my-5" />
            <ul class="space-y-3 text-sm text-muted text-left max-w-xs mx-auto">
              <li class="flex items-center gap-3"><Icon name="pin" size="w-4 h-4 text-accent shrink-0" />{{ profile.location }}</li>
              <li class="flex items-center gap-3"><Icon name="phone" size="w-4 h-4 text-accent shrink-0" />{{ profile.phone }}</li>
              <li class="flex items-center gap-3 break-all"><Icon name="mail" size="w-4 h-4 text-accent shrink-0" />{{ profile.email }}</li>
            </ul>
            <div class="flex justify-center gap-2 mt-6">
              <a v-for="s in socials" :key="s.label" :href="s.url" :target="s.url.startsWith('http') ? '_blank' : null" rel="noopener" :aria-label="s.label" class="btn-icon"><Icon :name="s.icon" /></a>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="section-pad">
      <div class="container-x">
        <SectionHeading label="Technical arsenal" title="Skills &" accent="technologies." />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-12">
          <article v-for="(c, i) in skillCategories" :key="c.title" v-reveal="(i % 3) * 90" class="glass glass-hover glass-pad">
            <div class="flex items-center gap-3 mb-4">
              <span class="icon-tile"><Icon :name="c.icon" size="w-5 h-5" /></span>
              <h3 class="card-title">{{ c.title }}</h3>
            </div>
            <div class="flex flex-wrap gap-2"><span v-for="s in c.skills" :key="s" class="chip">{{ s }}</span></div>
          </article>
        </div>

        <!-- Responsive table -->
        <div v-reveal class="glass mt-8 overflow-hidden">
          <div class="px-5 pt-5 pb-2"><h3 class="card-title">Tech at a glance</h3></div>
          <div class="table-wrap">
            <table class="data-table stack">
              <thead><tr><th>Area</th><th>Main tools</th><th>Experience</th></tr></thead>
              <tbody>
                <tr v-for="r in glance" :key="r.area">
                  <td data-label="Area">{{ r.area }}</td>
                  <td data-label="Main tools" class="text-muted">{{ r.tools }}</td>
                  <td data-label="Experience"><span class="chip">{{ r.level }}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8">
          <div v-for="(t, i) in interpersonal" :key="t.label" v-reveal="(i % 4) * 70" class="glass glass-hover p-4 sm:p-5 text-center">
            <Icon :name="t.icon" size="w-6 h-6 mx-auto text-accent mb-3" />
            <p class="text-sm font-semibold">{{ t.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION (merged) -->
    <section class="section-pad">
      <div class="container-x">
        <SectionHeading label="Academic background" title="Education &" accent="learning.">
          The foundation behind the work, plus what I'm actively studying next.
        </SectionHeading>

        <div class="grid lg:grid-cols-5 gap-8 lg:gap-12 mt-12">
          <div class="lg:col-span-3 timeline space-y-5">
            <article v-for="(e, i) in education" :key="e.degree" v-reveal="i * 80" class="glass glass-hover glass-pad relative">
              <span class="timeline-dot" />
              <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span class="chip"><Icon name="calendar" size="w-3 h-3" />{{ e.period }}</span>
                <span class="icon-tile" style="width:2.2rem;border-radius:.7rem;"><Icon name="cap" size="w-4 h-4" /></span>
              </div>
              <h3 class="card-title">{{ e.degree }}</h3>
              <p class="text-sm text-accent font-semibold mt-1">{{ e.institution }} <span class="text-muted font-normal">· {{ e.location }}</span></p>
              <p class="text-sm text-muted leading-relaxed mt-3">{{ e.desc }}</p>
              <div v-if="e.tags" class="flex flex-wrap gap-2 mt-4"><span v-for="t in e.tags" :key="t" class="chip">{{ t }}</span></div>
            </article>
          </div>

          <div class="lg:col-span-2">
            <div v-reveal class="glass glass-pad lg:sticky lg:top-28">
              <p class="section-label mb-5">Currently exploring</p>
              <ul class="space-y-5">
                <li v-for="a in learningAreas" :key="a.title" class="flex gap-4">
                  <span class="icon-tile" style="width:2.4rem;border-radius:.75rem;"><Icon :name="a.icon" size="w-5 h-5" /></span>
                  <div>
                    <p class="font-semibold text-sm">{{ a.title }}</p>
                    <p class="text-xs text-muted leading-relaxed mt-0.5">{{ a.desc }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Icon from '../components/Icon.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { profile, socials } from '../data/profile'

const quickFacts = [
  { label: 'Current role', value: 'Senior Python Developer' },
  { label: 'Company', value: 'Midriff Info Pvt. Ltd.' },
  { label: 'Experience', value: '2+ years professional' },
  { label: 'Education', value: 'MCA — Cloud & DevOps' },
  { label: 'Location', value: 'Mohali, Punjab, India' },
  { label: 'Availability', value: 'Open to opportunities' },
]
const skillCategories = [
  { icon: 'code', title: 'Languages', skills: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'C'] },
  { icon: 'server', title: 'Backend frameworks', skills: ['Django', 'DRF', 'FastAPI', 'Flask', 'SQLAlchemy', 'Laravel'] },
  { icon: 'layout', title: 'Frontend', skills: ['React.js', 'Next.js', 'Vue 3', 'Vite', 'Tailwind CSS'] },
  { icon: 'cloud', title: 'Cloud & DevOps', skills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS SQS', 'Docker', 'GitHub Actions', 'Digital Ocean'] },
  { icon: 'database', title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'Redis', 'Snowflake', 'GCP BigQuery', 'pgvector', 'Qdrant', 'Neo4j'] },
  { icon: 'sparkles', title: 'AI & automation', skills: ['OpenAI API', 'GPT-4', 'LangChain', 'Vision API', 'Playwright', 'N8N'] },
  { icon: 'plug', title: 'APIs & integrations', skills: ['REST APIs', 'Meta WhatsApp API', 'Odoo CRM', 'Masspay API', 'Veriff KYC'] },
  { icon: 'wrench', title: 'Tools & methods', skills: ['Git', 'Linux', 'Postman', 'Jira', 'Asana', 'Agile', 'SDLC', 'STLC'] },
]
const glance = [
  { area: 'Backend', tools: 'Django, DRF, FastAPI, Flask, Celery', level: 'Core strength' },
  { area: 'Frontend', tools: 'Vue 3, React, Next.js, Tailwind', level: 'Daily use' },
  { area: 'Cloud', tools: 'AWS (EC2, S3, RDS, SQS), Docker, GitHub Actions', level: 'Production' },
  { area: 'Data', tools: 'PostgreSQL, MySQL, Redis, Snowflake, BigQuery, pgvector, Qdrant, Neo4j', level: 'Production' },
  { area: 'AI / ML', tools: 'OpenAI, LangChain, Vision API, NumPy, scikit-learn', level: 'Building & learning' },
]
const interpersonal = [
  { icon: 'zap', label: 'Initiative driven' },
  { icon: 'search', label: 'Analytical thinking' },
  { icon: 'layers', label: 'Problem solving' },
  { icon: 'bulb', label: 'Critical thinking' },
  { icon: 'send', label: 'Communication' },
  { icon: 'users', label: 'Team leadership' },
  { icon: 'list', label: 'Multitasking' },
  { icon: 'target', label: 'Result-oriented' },
]
const education = [
  { degree: 'Master of Computer Application (MCA)', institution: 'Chandigarh University', location: 'Chandigarh', period: 'Jul 2022 – May 2024',
    desc: 'Specialised in cloud architecture, DevOps practices and modern software engineering — distributed systems, containerisation and cloud-native development.',
    tags: ['Cloud Computing', 'DevOps', 'Distributed Systems', 'Docker', 'AWS'] },
  { degree: 'Bachelor of Science — Computer Science', institution: 'Chandigarh University', location: 'Chandigarh', period: 'Jul 2019 – May 2022',
    desc: 'Core computer science covering algorithms, data structures, databases, operating systems and software engineering principles.',
    tags: ['Algorithms', 'Data Structures', 'Databases', 'OS', 'Software Engineering'] },
  { degree: '12th — Science (Non-Medical)', institution: 'Sri Dasmesh Academy', location: 'Anandpur Sahib, Punjab', period: '2018 – 2019',
    desc: 'Senior secondary with Physics, Chemistry and Mathematics — building strong analytical foundations.' },
  { degree: '10th — CBSE', institution: 'Guru Nanak Public School', location: 'Himachal Pradesh', period: '2016 – 2017',
    desc: 'Secondary education under the CBSE board.' },
]
const learningAreas = [
  { icon: 'sparkles', title: 'AI & LLMs', desc: 'LangChain, RAG architectures and advanced prompt engineering.' },
  { icon: 'cloud', title: 'Cloud architecture', desc: 'AWS certifications and cloud-native design patterns.' },
  { icon: 'cpu', title: 'Systems programming', desc: 'Exploring Rust and systems-level performance optimisation.' },
  { icon: 'chart', title: 'Data engineering', desc: 'Snowflake, BigQuery and modern data pipeline tooling.' },
  { icon: 'lock', title: 'Security', desc: 'OWASP standards, secure coding and web app security.' },
  { icon: 'check', title: 'Testing & quality', desc: 'TDD, integration testing and quality automation.' },
]
</script>