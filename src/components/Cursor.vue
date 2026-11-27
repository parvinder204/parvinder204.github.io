<template>
  <div v-if="enabled" class="cursor-layer" aria-hidden="true">
    <!-- trailing ring: dashed + rotating → turns into a frosted-glass lens on interactive elements -->
    <div ref="ring" class="cursor-pos">
      <div class="cursor-scale" :class="{ 'is-hover': hover, 'is-down': down, 'is-hidden': hidden }">
        <span class="cursor-spin" />
      </div>
    </div>
    <!-- precise dot -->
    <div ref="dot" class="cursor-pos">
      <span class="cursor-dot" :class="{ 'is-hover': hover, 'is-down': down, 'is-hidden': hidden }" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const enabled = ref(false)
const hover = ref(false)
const down = ref(false)
const hidden = ref(true)
const ring = ref(null)
const dot = ref(null)

const HOVER_SEL = 'a, button, [role="tab"], [role="option"], summary, label[for], .glass-hover, .cursor-hover'
const TEXT_SEL = 'input, textarea, [contenteditable="true"]'

let x = -100, y = -100, rx = -100, ry = -100, raf = 0, ease = 0.18

const place = () => {
  rx += (x - rx) * ease
  ry += (y - ry) * ease
  if (dot.value) dot.value.style.transform = `translate3d(${x}px,${y}px,0)`
  if (ring.value) ring.value.style.transform = `translate3d(${rx}px,${ry}px,0)`
  raf = requestAnimationFrame(place)
}

const onMove = (e) => {
  x = e.clientX; y = e.clientY
  if (hidden.value && !e.target.closest?.(TEXT_SEL)) { rx = x; ry = y }
  const t = e.target
  const isText = !!t.closest?.(TEXT_SEL)
  hidden.value = isText // keep the native I-beam while typing
  const target = t.closest?.(HOVER_SEL)
  hover.value = !!target && !isText
}
const onDown = (e) => {
  down.value = true
  if (e.target.closest?.(TEXT_SEL)) return
  const r = document.createElement('span')
  r.className = 'cursor-ripple'
  r.style.left = e.clientX + 'px'
  r.style.top = e.clientY + 'px'
  document.body.appendChild(r)
  setTimeout(() => r.remove(), 700)
}
const onUp = () => { down.value = false }
const onLeave = () => { hidden.value = true }

onMounted(() => {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  if (!fine) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) ease = 1
  enabled.value = true
  document.documentElement.classList.add('custom-cursor')
  window.addEventListener('pointermove', onMove, { passive: true })
  window.addEventListener('pointerdown', onDown, { passive: true })
  window.addEventListener('pointerup', onUp, { passive: true })
  document.documentElement.addEventListener('mouseleave', onLeave)
  raf = requestAnimationFrame(place)
})
onUnmounted(() => {
  cancelAnimationFrame(raf)
  document.documentElement.classList.remove('custom-cursor')
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerdown', onDown)
  window.removeEventListener('pointerup', onUp)
  document.documentElement.removeEventListener('mouseleave', onLeave)
})
</script>

<style>
/* Hide the system cursor only where the custom one is active; keep the I-beam for text fields */
html.custom-cursor, html.custom-cursor * { cursor: none !important; }
html.custom-cursor input, html.custom-cursor textarea, html.custom-cursor [contenteditable='true'] { cursor: text !important; }

.cursor-layer { position: fixed; inset: 0; z-index: 9999; pointer-events: none; }
.cursor-pos { position: fixed; left: 0; top: 0; width: 0; height: 0; will-change: transform; }

/* Ring */
.cursor-scale {
  position: absolute; left: -.7rem; top: -.7rem; width: 1.4rem; height: 1.4rem; border-radius: 9999px;
  display: grid; place-items: center;
  transition: transform .35s cubic-bezier(.2,.8,.2,1), background-color .3s, box-shadow .3s, opacity .25s;
}
.cursor-spin {
  position: absolute; inset: 0; border-radius: 9999px;
  border: 1.5px dashed rgb(var(--c-accent)); opacity: .8;
  animation: cursorSpin 9s linear infinite;
  transition: border-color .3s, opacity .3s;
}
.cursor-scale.is-hover {
  transform: scale(1.45);               /* ≈ 2rem: a gentle halo, never a big blob */
  background: rgb(var(--c-accent) / 0.08); /* no blur → text underneath stays fully readable */
  box-shadow: 0 0 14px rgb(var(--c-accent) / 0.35);
}
.cursor-scale.is-hover .cursor-spin { border-style: solid; border-color: rgb(var(--c-accent) / 0.7); animation-duration: 4s; }
.cursor-scale.is-down { transform: scale(0.8); }
.cursor-scale.is-hover.is-down { transform: scale(1.15); }
.cursor-scale.is-hidden { opacity: 0; }


/* Dot */
.cursor-dot {
  position: absolute; left: -.15rem; top: -.15rem; width: .3rem; height: .3rem; border-radius: 9999px;
  background: rgb(var(--c-accent)); box-shadow: 0 0 8px rgb(var(--c-accent) / 0.9);
  transition: transform .25s cubic-bezier(.2,.8,.2,1), opacity .2s;
}
.cursor-dot.is-hover { transform: scale(1.3); }
.cursor-dot.is-down { transform: scale(1.8); }
.cursor-dot.is-hidden { opacity: 0; }

/* Click ripple (spawned from JS on <body>) */
.cursor-ripple {
  position: fixed; z-index: 9998; width: .8rem; height: .8rem; margin: -.4rem 0 0 -.4rem; border-radius: 9999px; pointer-events: none;
  border: 1.5px solid rgb(var(--c-accent)); animation: cursorRipple .65s cubic-bezier(.2,.7,.2,1) forwards;
}
@keyframes cursorSpin { to { transform: rotate(360deg); } }
@keyframes cursorRipple { from { opacity: .9; transform: scale(.4); } to { opacity: 0; transform: scale(3); } }

@media (prefers-reduced-motion: reduce) {
  .cursor-spin { animation: none; }
  .cursor-ripple { display: none; }
}
</style>