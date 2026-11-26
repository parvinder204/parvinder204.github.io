<template>
  <div class="pt-28 sm:pt-32">
    <section class="section-pad !pt-6">
      <div class="container-x">
        <SectionHeading tag="h1" label="Get in touch" title="Let's" accent="connect.">
          Whether you have a project, a job opportunity or just want to say hello — I'm always open. Reach out and I'll reply promptly.
        </SectionHeading>

        <div class="grid lg:grid-cols-5 gap-6 lg:gap-10 mt-12 items-start">
          <!-- Info -->
          <div class="lg:col-span-2 space-y-4">
            <a v-for="(c, i) in contactInfo" :key="c.label" v-reveal="i * 80" :href="c.href" :target="c.href.startsWith('http') ? '_blank' : null" rel="noopener"
               class="glass glass-hover flex items-center gap-4 p-4 sm:p-5 group text-fg">
              <span class="icon-tile"><Icon :name="c.icon" size="w-5 h-5" /></span>
              <span class="min-w-0">
                <span class="block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">{{ c.label }}</span>
                <span class="block font-semibold text-sm sm:text-base break-words text-fg group-hover:text-accent transition-colors">{{ c.value }}</span>
              </span>
            </a>

            <div v-reveal="260" class="glass glass-pad" style="border-left:3px solid rgb(var(--c-accent));">
              <div class="flex items-center gap-3 mb-3">
                <span class="relative flex w-2.5 h-2.5"><span class="absolute inline-flex w-full h-full rounded-full bg-accent opacity-70 animate-ping" /><span class="relative inline-flex w-2.5 h-2.5 rounded-full bg-accent" /></span>
                <span class="font-mono text-xs font-bold uppercase tracking-[0.18em]">Currently available</span>
              </div>
              <p class="text-sm text-muted leading-relaxed">
                Open to <strong class="text-fg">full-time engineering roles</strong>, freelance projects and technical consulting.
                Based in Mohali — open to remote / hybrid.
              </p>
            </div>

            <div v-reveal="340" class="flex gap-2">
              <a v-for="s in socialLinks" :key="s.label" :href="s.url" target="_blank" rel="noopener" :aria-label="s.label" class="btn btn-glass">
                <Icon :name="s.icon" size="w-4 h-4" />{{ s.label }}
              </a>
            </div>
          </div>

          <!-- Form -->
          <div v-reveal="120" class="lg:col-span-3 glass glass-pad">
            <h2 class="card-title mb-6 flex items-center gap-3"><Icon name="send" size="w-5 h-5 text-accent" /> Send a message</h2>

            <form @submit.prevent="handleSubmit" class="space-y-5" novalidate>
              <!-- honeypot -->
              <input v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;opacity:0;height:0;width:0;" />

              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label for="c-name" class="field-label">Your name *</label>
                  <input id="c-name" v-model="form.name" type="text" autocomplete="name" placeholder="Jane Doe" class="field" :aria-invalid="!!errors.name" />
                  <p v-if="errors.name" class="text-xs font-semibold mt-1.5 text-accent">{{ errors.name }}</p>
                </div>
                <div>
                  <label for="c-email" class="field-label">Email address *</label>
                  <input id="c-email" v-model="form.email" type="email" autocomplete="email" placeholder="you@example.com" class="field" :aria-invalid="!!errors.email" />
                  <p v-if="errors.email" class="text-xs font-semibold mt-1.5 text-accent">{{ errors.email }}</p>
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label for="c-subject" class="field-label">Subject</label>
                  <input id="c-subject" v-model="form.subject" type="text" placeholder="Project inquiry / Job opportunity" class="field" />
                </div>
                <div>
                  <label for="c-budget" class="field-label">Budget (optional)</label>
                  <select id="c-budget" v-model="form.budget" class="field">
                    <option value="">Select project budget…</option>
                    <option>Under ₹50,000</option>
                    <option>₹50,000 – ₹2,00,000</option>
                    <option>₹2,00,000 – ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                    <option>Full-time role</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="c-message" class="field-label">Message *</label>
                <textarea id="c-message" v-model="form.message" rows="5" placeholder="Tell me about your project…" class="field resize-none" :aria-invalid="!!errors.message" />
                <p v-if="errors.message" class="text-xs font-semibold mt-1.5 text-accent">{{ errors.message }}</p>
              </div>

              <button type="submit" :disabled="submitting" class="btn btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
                <template v-if="submitting">Sending…</template>
                <template v-else-if="submitted"><Icon name="check" size="w-4 h-4" /> Message sent!</template>
                <template v-else>Send message <Icon name="send" size="w-4 h-4" /></template>
              </button>

              <p v-if="status.text" role="status" class="text-center text-sm font-semibold animate-fade-up" :class="status.type === 'ok' ? 'text-fg' : 'text-accent'">{{ status.text }}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from 'emailjs-com'
import Icon from '../components/Icon.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { profile, socials } from '../data/profile'

const form = reactive({ name: '', email: '', subject: '', budget: '', message: '', website: '' })
const errors = reactive({ name: '', email: '', message: '' })
const status = reactive({ type: '', text: '' })
const submitting = ref(false)
const submitted = ref(false)
let lastSubmittedAt = 0

const validate = () => {
  errors.name = errors.email = errors.message = ''
  let ok = true
  if (!form.name.trim()) { errors.name = 'Name is required.'; ok = false }
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) { errors.email = 'A valid email is required.'; ok = false }
  if (form.message.trim().length < 10) { errors.message = 'Please write at least 10 characters.'; ok = false }
  return ok
}

const handleSubmit = async () => {
  status.text = ''
  if (!validate()) return
  if (form.website) return // honeypot tripped (bot)

  const now = Date.now()
  if (now - lastSubmittedAt < 30000) { status.type = 'err'; status.text = 'Please wait a few seconds before sending again.'; return }

  // Links are fine, but a flood of them is a spam signal
  if ((form.message.match(/https?:\/\//gi) || []).length > 2) {
    status.type = 'err'; status.text = 'Please include at most two links in your message.'; return
  }

  lastSubmittedAt = now
  submitting.value = true
  try {
    await emailjs.send('service_rugksvp', 'template_g5o1l9y', {
      from_name: form.name, from_email: form.email, subject: form.subject, message: form.message, budget: form.budget,
    }, 'zByUo2ZZXyM_A_rfe')
    submitted.value = true
    status.type = 'ok'; status.text = "Thanks for reaching out! I'll reply within 24 hours."
    Object.assign(form, { name: '', email: '', subject: '', budget: '', message: '', website: '' })
    setTimeout(() => { submitted.value = false }, 5000)
  } catch (error) {
    console.error('EmailJS Error:', error)
    status.type = 'err'; status.text = `Couldn't send the message. Please email me directly at ${profile.email}.`
  } finally {
    submitting.value = false
  }
}

const contactInfo = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: 'phone' },
  { label: 'Location', value: profile.location, href: 'https://maps.google.com/?q=Mohali+Punjab+India', icon: 'pin' },
]
const socialLinks = socials.filter((s) => s.url.startsWith('http'))
</script>