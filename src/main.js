import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ExperienceView from './views/ExperienceView.vue'
import WorkView from './views/WorkView.vue'
import BlogView from './views/BlogView.vue'
import BlogPostView from './views/BlogPostView.vue'
import ContactView from './views/ContactView.vue'
import NotFoundView from './views/NotFoundView.vue'

const routes = [
  { path: '/', component: HomeView, meta: { title: 'Home' } },
  { path: '/about', component: AboutView, meta: { title: 'About & Education' } },
  { path: '/experience', component: ExperienceView, meta: { title: 'Experience' } },
  { path: '/work', component: WorkView, meta: { title: 'Projects & Services' } },
  { path: '/blog', component: BlogView, meta: { title: 'Blog' } },
  { path: '/blog/:slug', component: BlogPostView, meta: { title: 'Blog' } },
  { path: '/contact', component: ContactView, meta: { title: 'Contact' } },
  // Old URLs from the previous layout keep working
  { path: '/projects', redirect: '/work' },
  { path: '/services', redirect: '/work' },
  { path: '/education', redirect: '/about' },
  { path: '/:pathMatch(.*)*', component: NotFoundView, meta: { title: '404' } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  if (to.meta.title && to.path.startsWith('/blog/')) return // post view sets its own title
  document.title = `${to.meta.title ? to.meta.title + ' — ' : ''}Parvinder Singh`
})

const app = createApp(App)

// v-reveal="delayMs" → fades/rises the element in when it scrolls into view
const io = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' })
  : null

app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.animationDelay = `${binding.value}ms`
    if (io) io.observe(el); else el.classList.add('in')
  },
  unmounted(el) { if (io) io.unobserve(el) },
})

app.use(router).mount('#app')
