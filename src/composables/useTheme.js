import { ref } from 'vue'

const theme = ref(document.documentElement.getAttribute('data-theme') || 'dark')

export function useTheme() {
  const setTheme = (t) => {
    theme.value = t
    document.documentElement.setAttribute('data-theme', t)
    try { localStorage.setItem('theme', t) } catch (e) { /* storage may be blocked */ }
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', t === 'dark' ? '#252422' : '#fffcf2')
  }
  const toggleTheme = () => setTheme(theme.value === 'dark' ? 'light' : 'dark')
  return { theme, setTheme, toggleTheme }
}
