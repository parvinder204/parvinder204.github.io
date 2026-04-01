import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Route views
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ExperienceView from './views/ExperienceView.vue'
import ServicesView from './views/ServicesView.vue'
import ProjectsView from './views/ProjectsView.vue'
import EducationView from './views/EducationView.vue'
import ContactView from './views/ContactView.vue'
import NotFoundView from './views/NotFoundView.vue'

const routes = [
  { path: '/', component: HomeView, meta: { title: 'Home' } },
  { path: '/about', component: AboutView, meta: { title: 'About' } },
  { path: '/experience', component: ExperienceView, meta: { title: 'Experience' } },
  { path: '/services', component: ServicesView, meta: { title: 'Services' } },
  { path: '/projects', component: ProjectsView, meta: { title: 'Projects' } },
  { path: '/education', component: EducationView, meta: { title: 'Education' } },
  { path: '/contact', component: ContactView, meta: { title: 'Contact' } },
  { path: '/:pathMatch(.*)*', component: NotFoundView, meta: { title: '404' } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  document.title = `${to.meta.title ? to.meta.title + ' — ' : ''}Parvinder Singh`
})

createApp(App).use(router).mount('#app')
