<template>
  <div class="pt-24" style="background:#faf9f6;">
    <section class="section-pad pb-0">
      <div class="max-w-7xl mx-auto">
        <p class="section-label animate-on-scroll">Get In Touch</p>
        <h1 class="section-title animate-on-scroll" style="transition-delay:0.1s;">
          Let's <em class="not-italic text-gradient-gold">Connect.</em>
        </h1>
      </div>
    </section>

    <section class="section-pad">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">

        <div class="lg:col-span-2 space-y-7">
          <p class="text-base leading-relaxed animate-on-scroll" style="color:#3d2e0e;">
            Whether you have a project, job opportunity, or want to say hello — 
            I'm always open. Reach out and I'll reply promptly.
          </p>

          <div class="space-y-4 animate-on-scroll" style="transition-delay:0.1s;">
            <a v-for="c in contactInfo" :key="c.label" :href="c.href" target="_blank" rel="noopener"
               class="flex items-start gap-4 group">
              <div class="w-11 h-11 border-2 flex items-center justify-center shrink-0 transition-all duration-300"
                   style="border-color:rgba(26,18,8,0.12);"
                   @mouseenter="e => { e.currentTarget.style.borderColor='#b8860b'; e.currentTarget.style.background='#fdf8ee'; }"
                   @mouseleave="e => { e.currentTarget.style.borderColor='rgba(26,18,8,0.12)'; e.currentTarget.style.background='transparent'; }">
                <span v-html="c.icon" class="w-5 h-5" style="color:#b8860b;" />
              </div>
              <div>
                <p class="mono-text text-xs font-bold tracking-wider" style="color:#9c8a6e;">{{ c.label }}</p>
                <p class="text-sm font-bold mt-0.5 group-hover:text-[#b8860b] transition-colors" style="color:#1a1208;">
                  {{ c.value }}
                </p>
              </div>
            </a>
          </div>

          <div class="animate-on-scroll" style="transition-delay:0.2s;">
            <p class="section-label mb-4">Social & Code</p>
            <div class="flex gap-3">
              <a v-for="s in socials" :key="s.label" :href="s.url" target="_blank" rel="noopener"
                 :aria-label="s.label"
                 class="flex items-center gap-2 px-4 py-2.5 border-2 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5"
                 style="border-color:rgba(26,18,8,0.12); color:#6b5e45;"
                 @mouseenter="e => { e.currentTarget.style.borderColor='#b8860b'; e.currentTarget.style.color='#b8860b'; }"
                 @mouseleave="e => { e.currentTarget.style.borderColor='rgba(26,18,8,0.12)'; e.currentTarget.style.color='#6b5e45'; }">
                <span v-html="s.icon" class="w-3.5 h-3.5" />
                {{ s.label }}
              </a>
            </div>
          </div>

          <div class="card-dark p-6 animate-on-scroll"
               style="border-left: 4px solid #b8860b; transition-delay:0.3s;">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span class="mono-text text-xs font-bold tracking-wider" style="color:#15803d;">CURRENTLY AVAILABLE</span>
            </div>
            <p class="text-sm leading-relaxed" style="color:#3d2e0e;">
              Open to <strong class="font-bold" style="color:#1a1208;">full-time engineering roles</strong>, freelance projects,
              and technical consulting. Based in Mohali — open to remote/hybrid.
            </p>
          </div>
        </div>

        <div class="lg:col-span-3 animate-on-scroll" style="transition-delay:0.2s;">
          <div class="card-dark p-8">
            <h2 class="display-text text-xl font-black mb-6" style="color:#1a1208;">Send a Message</h2>

            <form @submit.prevent="handleSubmit" class="space-y-5" novalidate>
              <input
                type="text"
                v-model="form.website"
                style="display:none"
              />
              <div class="grid md:grid-cols-2 gap-5">
                <div>
                  <label class="mono-text text-xs font-bold tracking-wider block mb-2" style="color:#6b5e45;">YOUR NAME *</label>
                  <input v-model="form.name" type="text" placeholder="Parvinder Singh" required
                         class="w-full px-4 py-3 text-sm font-medium transition-colors duration-300 focus:outline-none"
                         style="background:#faf9f6; border:2px solid rgba(26,18,8,0.12); color:#1a1208;"
                         @focus="e => e.target.style.borderColor='#b8860b'"
                         @blur="e => e.target.style.borderColor='rgba(26,18,8,0.12)'" />
                  <p v-if="errors.name" class="text-xs font-semibold mt-1" style="color:#dc2626;">{{ errors.name }}</p>
                </div>
                <div>
                  <label class="mono-text text-xs font-bold tracking-wider block mb-2" style="color:#6b5e45;">EMAIL ADDRESS *</label>
                  <input v-model="form.email" type="email" placeholder="you@example.com" required
                         class="w-full px-4 py-3 text-sm font-medium transition-colors duration-300 focus:outline-none"
                         style="background:#faf9f6; border:2px solid rgba(26,18,8,0.12); color:#1a1208;"
                         @focus="e => e.target.style.borderColor='#b8860b'"
                         @blur="e => e.target.style.borderColor='rgba(26,18,8,0.12)'" />
                  <p v-if="errors.email" class="text-xs font-semibold mt-1" style="color:#dc2626;">{{ errors.email }}</p>
                </div>
              </div>

              <div>
                <label class="mono-text text-xs font-bold tracking-wider block mb-2" style="color:#6b5e45;">SUBJECT *</label>
                <input v-model="form.subject" type="text" placeholder="Project Inquiry / Job Opportunity..."
                       class="w-full px-4 py-3 text-sm font-medium transition-colors duration-300 focus:outline-none"
                       style="background:#faf9f6; border:2px solid rgba(26,18,8,0.12); color:#1a1208;"
                       @focus="e => e.target.style.borderColor='#b8860b'"
                       @blur="e => e.target.style.borderColor='rgba(26,18,8,0.12)'" />
              </div>

              <div>
                <label class="mono-text text-xs font-bold tracking-wider block mb-2" style="color:#6b5e45;">BUDGET (OPTIONAL)</label>
                <select v-model="form.budget"
                        class="w-full px-4 py-3 text-sm font-medium transition-colors duration-300 focus:outline-none"
                        style="background:#faf9f6; border:2px solid rgba(26,18,8,0.12); color:#6b5e45;"
                        @focus="e => e.target.style.borderColor='#b8860b'"
                        @blur="e => e.target.style.borderColor='rgba(26,18,8,0.12)'">
                  <option value="">Select project budget...</option>
                  <option>Under ₹50,000</option>
                  <option>₹50,000 – ₹2,00,000</option>
                  <option>₹2,00,000 – ₹5,00,000</option>
                  <option>₹5,00,000+</option>
                  <option>Full-time Role</option>
                </select>
              </div>

              <div>
                <label class="mono-text text-xs font-bold tracking-wider block mb-2" style="color:#6b5e45;">MESSAGE *</label>
                <textarea v-model="form.message" rows="5" placeholder="Tell me about your project..."
                          class="w-full px-4 py-3 text-sm font-medium resize-none transition-colors duration-300 focus:outline-none"
                          style="background:#faf9f6; border:2px solid rgba(26,18,8,0.12); color:#1a1208;"
                          @focus="e => e.target.style.borderColor='#b8860b'"
                          @blur="e => e.target.style.borderColor='rgba(26,18,8,0.12)'" />
                <p v-if="errors.message" class="text-xs font-semibold mt-1" style="color:#dc2626;">{{ errors.message }}</p>
              </div>

              <button type="submit" :disabled="submitting"
                      class="w-full py-4 font-bold text-sm tracking-wide transition-all duration-300
                             disabled:opacity-50 disabled:cursor-not-allowed"
                      style="background:#1a1208; color:#faf9f6; box-shadow:4px 4px 0 #b8860b;"
                      @mouseenter="e => { if(!submitting) { e.currentTarget.style.background='#b8860b'; e.currentTarget.style.boxShadow='4px 4px 0 #1a1208'; e.currentTarget.style.transform='translate(-2px,-2px)'; }}"
                      @mouseleave="e => { e.currentTarget.style.background='#1a1208'; e.currentTarget.style.boxShadow='4px 4px 0 #b8860b'; e.currentTarget.style.transform='none'; }">
                <span v-if="!submitting && !submitted">Send Message →</span>
                <span v-else-if="submitting">Sending...</span>
                <span v-else>✓ Message Sent!</span>
              </button>

              <p v-if="submitted" class="text-center text-xs font-bold mono-text" style="color:#15803d;">
                Thanks for reaching out! I'll reply within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const form = reactive({ name:'', email:'', subject:'', budget:'', message:'' })
const errors = reactive({ name:'', email:'', message:'' })
const submitting = ref(false)
const submitted = ref(false)

const validate = () => {
  let valid = true
  errors.name = errors.email = errors.message = ''
  if (!form.name.trim())                               { errors.name = 'Name is required.'; valid = false }
  if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) { errors.email = 'Valid email required.'; valid = false }
  if (!form.message.trim())                             { errors.message = 'Message is required.'; valid = false }
  return valid
}

// const handleSubmit = async () => {
//   if (!validate()) return
//   submitting.value = true
//   await new Promise(r => setTimeout(r, 1500))
//   submitting.value = false
//   submitted.value = true
//   setTimeout(() => { Object.assign(form,{name:'',email:'',subject:'',budget:'',message:''}); submitted.value = false }, 5000)
// }

import emailjs from 'emailjs-com'

let lastSubmittedAt = 0

const handleSubmit = async () => {
  if (!validate()) return
  if (form.website) return

  const now = Date.now()
  if (now - lastSubmittedAt < 30000) {
    alert('Please wait before sending again')
    return
  }

  if (form.message.length < 10) {
    errors.message = 'Message too short'
    return
  }

  const spamWords = ['http', 'www', 'crypto']
  if (spamWords.some(w => form.message.toLowerCase().includes(w))) {
    alert('Spam detected')
    return
  }

  lastSubmittedAt = now
  submitting.value = true

  try {
    await emailjs.send(
      'service_rugksvp',        
      'template_g5o1l9y',       
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        budget: form.budget
      },
      'zByUo2ZZXyM_A_rfe'       
    )

    submitted.value = true

    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      budget: '',
      message: '',
      website:''
    })

  } catch (error) {
    console.error('EmailJS Error:', error)
    alert('Failed to send message')
  }

  submitting.value = false
}

const contactInfo = [
  { label:'EMAIL', value:'techpinda1214@gmail.com', href:'mailto:techpinda1214@gmail.com',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
  { label:'PHONE', value:'+91-7807952796', href:'tel:+917807952796',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>` },
  { label:'LOCATION', value:'Nalagarh, Solan, HP — India', href:'https://maps.google.com/?q=Mohali+India',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>` },
]
const socials = [
  { label:'GitHub', url:'https://github.com/parvinder204',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>` },
  { label:'LinkedIn', url:'https://linkedin.com',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>` },
]
</script>