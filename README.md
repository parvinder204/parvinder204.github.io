# Parvinder Singh — Portfolio

> Personal developer portfolio built with **Vue 3 + Vite + Tailwind CSS**

🔗 **Live:** [parvinder204.github.io/portfolio](https://parvinder204.github.io/portfolio)

---

## ✨ Features

- ⚡ **Vue 3 + Vite** — lightning-fast HMR and build
- 🎨 **Tailwind CSS** — utility-first, fully responsive
- 🌓 **Black & Gold theme** — ink black with warm gold accents
- 📱 **Mobile-first** responsive design
- 🔀 **Vue Router** with hash history (GitHub Pages compatible)
- 💫 Custom cursor, scroll animations, page transitions
- 🗂️ Pages: Home, About, Experience, Services, Projects, Education, Contact

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Structure

```
src/
├── main.js           # App entry, router setup
├── App.vue           # Root layout, cursor, scroll-top
├── style.css         # Global styles + Tailwind directives
├── components/
│   ├── Navbar.vue    # Sticky navigation
│   └── Footer.vue    # Footer with marquee
└── views/
    ├── HomeView.vue
    ├── AboutView.vue
    ├── ExperienceView.vue
    ├── ServicesView.vue
    ├── ProjectsView.vue
    ├── EducationView.vue
    └── ContactView.vue
```

---

## 🚢 Deploy to GitHub Pages

### Option A — GitHub Actions (Recommended)
Push to `main` branch — the workflow in `.github/workflows/deploy.yml` auto-builds and deploys.

> **Enable in GitHub:** Settings → Pages → Source → **GitHub Actions**

### Option B — Manual

```bash
npm run build
# Then push the dist/ folder to the gh-pages branch
```

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Vue 3 (Composition API) |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | Vue Router 4 (hash mode) |
| Fonts | Playfair Display, DM Sans, JetBrains Mono |
| Deployment | GitHub Pages via Actions |

---

## 📬 Contact

**Parvinder Singh** · [techpinda1214@gmail.com](mailto:techpinda1214@gmail.com) · [GitHub](https://github.com/parvinder204)
