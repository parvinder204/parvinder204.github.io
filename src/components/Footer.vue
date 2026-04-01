<template>
  <footer style="background:#f3efe6; border-top: 1.5px solid rgba(26,18,8,0.1);">
    <!-- Marquee -->
    <div class="py-4 overflow-hidden" style="border-bottom:1px solid rgba(26,18,8,0.07);">
      <div class="marquee-inner">
        <span v-for="(tech, i) in [...techs, ...techs]" :key="i"
          class="mono-text text-xs tracking-widest uppercase shrink-0 px-4 font-semibold"
          style="color:rgba(26,18,8,0.25);">
          {{ tech }} &nbsp;·&nbsp;
        </span>
      </div>
    </div>

    <div class="section-pad !py-14">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-3 mb-5">
            <div class="w-11 h-11 border-2 border-[#b8860b] flex items-center justify-center">
              <span class="display-text text-sm font-black text-[#b8860b]">PS</span>
            </div>
            <div>
              <p class="font-bold text-[#1a1208]">Parvinder Singh</p>
              <p class="mono-text text-xs tracking-wider font-semibold" style="color:#b8860b;">FULL STACK DEVELOPER</p>
            </div>
          </div>
          <p class="text-sm leading-relaxed max-w-xs" style="color:#6b5e45;">
            Building scalable systems, AI integrations, and clean digital experiences from Mohali, India.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <p class="section-label mb-5">Navigation</p>
          <ul class="grid grid-cols-2 gap-y-2 gap-x-4">
            <li v-for="link in navLinks" :key="link.path">
              <router-link :to="link.path"
                class="text-sm font-medium transition-colors duration-300 hover:text-[#b8860b]"
                style="color:#6b5e45;">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <p class="section-label mb-5">Get In Touch</p>
          <div class="space-y-3">
            <a href="mailto:techpinda1214@gmail.com"
               class="flex items-center gap-3 text-sm font-medium hover:text-[#b8860b] transition-colors"
               style="color:#6b5e45;">
              <svg class="w-4 h-4 shrink-0" style="color:#b8860b;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              techpinda1214@gmail.com
            </a>
            <a href="tel:+917807952796"
               class="flex items-center gap-3 text-sm font-medium hover:text-[#b8860b] transition-colors"
               style="color:#6b5e45;">
              <svg class="w-4 h-4 shrink-0" style="color:#b8860b;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +91-7807952796
            </a>
            <p class="flex items-center gap-3 text-sm font-medium" style="color:#6b5e45;">
              <svg class="w-4 h-4 shrink-0" style="color:#b8860b;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Nalagarh, Solan, HP — India
            </p>
          </div>
          <div class="flex gap-3 mt-5">
            <a v-for="s in socials" :key="s.label" :href="s.url" target="_blank" rel="noopener"
               :aria-label="s.label"
               class="w-9 h-9 border-2 flex items-center justify-center transition-all duration-300
                      hover:-translate-y-0.5 hover:shadow-[2px_2px_0_#b8860b]"
               style="border-color:rgba(26,18,8,0.15); color:#6b5e45;"
               @mouseenter="e => e.currentTarget.style.borderColor='#b8860b'"
               @mouseleave="e => e.currentTarget.style.borderColor='rgba(26,18,8,0.15)'">
              <span v-html="s.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="max-w-7xl mx-auto mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
           style="border-top:1px solid rgba(26,18,8,0.08);">
        <p class="mono-text text-xs font-semibold" style="color:rgba(26,18,8,0.3);">
          © {{ new Date().getFullYear() }} PARVINDER SINGH — ALL RIGHTS RESERVED
        </p>
       
      </div>
    </div>
  </footer>
</template>

<script setup>
const navLinks = [
  { path:'/', label:'Home' },{ path:'/about', label:'About' },
  { path:'/experience', label:'Experience' },{ path:'/services', label:'Services' },
  { path:'/projects', label:'Projects' },{ path:'/education', label:'Education' },
  { path:'/contact', label:'Contact' },
]
const techs = ['Python','Django','FastAPI','Flask','React.js','Vue.js','Next.js','PostgreSQL','AWS','Docker','Redis','TypeScript','OpenAI','LangChain']
const socials = [
  { label:'GitHub', url:'https://github.com/parvinder204',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>` },
  { label:'LinkedIn', url:'https://www.linkedin.com/in/parvinder-singh-7651932b2',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>` },
  { label:'Email', url:'mailto:techpinda1214@gmail.com',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
]
</script>