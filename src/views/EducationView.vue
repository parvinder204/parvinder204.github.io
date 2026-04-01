<template>
  <div class="pt-24" style="background:#faf9f6;">
    <section class="section-pad pb-0">
      <div class="max-w-7xl mx-auto">
        <p class="section-label animate-on-scroll">Academic Background</p>
        <h1 class="section-title animate-on-scroll" style="transition-delay:0.1s;">
          Education <em class="not-italic text-gradient-gold">& Learning.</em>
        </h1>
      </div>
    </section>

    <section class="section-pad">
      <div class="max-w-4xl mx-auto">
        <div class="relative pl-8 timeline-line space-y-10">
          <div v-for="(edu, i) in education" :key="edu.degree"
               class="relative animate-on-scroll" :style="{ transitionDelay:(i*0.12)+'s' }">
            <div class="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2"
                 :style="i===0 ? 'border-color:#b8860b; background:#faf9f6;' : 'border-color:rgba(26,18,8,0.2); background:#faf9f6;'" />
            <div class="card-dark p-8 group">
              <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 class="display-text text-xl font-black group-hover:text-[#b8860b] transition-colors"
                      style="color:#1a1208;">{{ edu.degree }}</h3>
                  <p class="font-bold mt-1" style="color:#b8860b;">{{ edu.institution }}</p>
                  <p class="text-sm font-medium mt-0.5" style="color:#6b5e45;">{{ edu.location }}</p>
                </div>
                <span class="mono-text text-xs font-bold px-4 py-2 border-2 whitespace-nowrap self-start"
                      style="border-color:#b8860b; color:#b8860b; background:#fdf8ee;">
                  {{ edu.period }}
                </span>
              </div>
              <p v-if="edu.desc" class="text-sm leading-relaxed" style="color:#3d2e0e;">{{ edu.desc }}</p>
              <div v-if="edu.tags" class="flex flex-wrap gap-2 mt-4">
                <span v-for="tag in edu.tags" :key="tag" class="skill-pill">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad" style="background:#f3efe6;">
      <div class="max-w-7xl mx-auto">
        <p class="section-label animate-on-scroll">Continuous Learning</p>
        <h2 class="section-title mb-10 animate-on-scroll" style="transition-delay:0.1s;">Always Growing.</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="(area, i) in learningAreas" :key="area.title"
               class="card-dark p-6 flex items-start gap-4 animate-on-scroll"
               :style="{ transitionDelay:(i*0.08)+'s' }">
            <span class="text-2xl shrink-0">{{ area.icon }}</span>
            <div>
              <h3 class="font-bold mb-1" style="color:#1a1208;">{{ area.title }}</h3>
              <p class="text-xs leading-relaxed" style="color:#6b5e45;">{{ area.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const education = [
  { degree:'Master of Computer Application (MCA)', institution:'Chandigarh University', location:'Chandigarh, India',
    period:'July 2022 – May 2024',
    desc:'Specialised in cloud architecture, DevOps practices, and modern software engineering. Distributed systems, containerisation, and cloud-native development.',
    tags:['Cloud Computing','DevOps','Distributed Systems','Docker','AWS'] },
  { degree:'Bachelor of Science — Computer Science', institution:'Chandigarh University', location:'Chandigarh, India',
    period:'July 2019 – May 2022',
    desc:'Core computer science education covering algorithms, data structures, databases, OS, and software engineering principles.',
    tags:['Algorithms','Data Structures','Databases','OS','Software Engineering'] },
  { degree:'12th — Science (Non-Medical)', institution:'Sri Dasmesh Academy', location:'Anandpur Sahib, Punjab',
    period:'2018 – 2019',
    desc:'Senior secondary with Physics, Chemistry, and Mathematics — building strong analytical foundations.' },
  { degree:'10th — CBSE', institution:'Guru Nanak Public School', location:'Himachal Pradesh, India', period:'2016 – 2017',
    desc:'Secondary education under CBSE board.' },
]
const learningAreas = [
  { icon:'🤖', title:'AI & LLMs',         desc:'LangChain, RAG architectures, and advanced prompt engineering.' },
  { icon:'☁️', title:'Cloud Architecture', desc:'AWS certifications and cloud-native design patterns.' },
  { icon:'🦀', title:'Systems Programming', desc:'Exploring Rust and systems-level performance optimisation.' },
  { icon:'📊', title:'Data Engineering',   desc:'Snowflake, BigQuery, and modern data pipeline tooling.' },
  { icon:'🔒', title:'Security',           desc:'OWASP standards, secure coding, and web app security.' },
  { icon:'🧪', title:'Testing & Quality',  desc:'TDD, integration testing, and quality automation.' },
]
</script>