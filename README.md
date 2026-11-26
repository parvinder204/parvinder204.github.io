# Parvinder Singh — Portfolio

Personal developer portfolio built with **Vue 3 + Vite + Tailwind CSS**.

## Features

- **Brand palette** — Floral White `#fffcf2`, Silver `#ccc5b9`, Charcoal Brown `#403d39`, Carbon Black `#252422`, Spicy Paprika `#eb5e28`
- **Dark / light theme** with a toggle (remembers the choice, follows the system by default)
- **Glassmorphism** — frosted cards, floating glass navbar, cursor-follow spotlight, ambient blurred backdrop
- **Fully responsive** — fluid root font size, `clamp()`-based headings and buttons, tables that stack into cards on phones
- **Blog** — searchable / filterable articles on AI, Python, neural networks and data science, with table of contents and copy-able code blocks
- **Merged sections** — Education lives in *About*; Projects + Services live together in *Work*
- Hash routing (GitHub Pages compatible), scroll-reveal animations, reading-progress bar, accessible focus states, reduced-motion support

## Quick start

```bash
npm install
npm run dev       # dev server
npm run build     # production build → dist/
npm run preview   # preview the build
```

## Structure

```
src/
├── main.js                 # router + v-reveal directive
├── App.vue                 # shell: ambient background, progress bar, layout
├── style.css               # theme tokens, glass system, fluid type, tables
├── composables/useTheme.js # dark/light toggle
├── components/             # Navbar, Footer, Icon (SVG set), SectionHeading
├── data/
│   ├── profile.js          # contact details, nav links, socials
│   ├── projects.js         # projects, services, process
│   └── blogs.js            # blog posts (add new posts here)
└── views/                  # Home, About, Experience, Work, Blog, BlogPost, Contact, 404
```

## Changing colours

All colours are CSS variables in `src/style.css` (`:root[data-theme='dark']` and `[data-theme='light']`) and are mapped to Tailwind tokens in `tailwind.config.js` (`bg-base`, `text-fg`, `text-muted`, `text-accent`, `border-line`, …). Edit them once and the whole site updates.

## Adding a blog post

Open `src/data/blogs.js` and add an object to `posts` with a unique `slug`, `title`, `excerpt`, `category`, `icon`, `date`, `readTime`, `tags` and a `blocks` array (`p`, `h2`, `ul`, `ol`, `code`, `callout`, `table`). It appears on the Blog page and Home automatically.

## Deploy (GitHub Pages)

Push to `main` (or `master`) — `.github/workflows/deploy.yml` builds and deploys.
Enable once in GitHub: **Settings → Pages → Source → GitHub Actions**.

## Contact

**Parvinder Singh** · [techpinda1214@gmail.com](mailto:techpinda1214@gmail.com) · [GitHub](https://github.com/parvinder204)
