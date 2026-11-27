<template>
  <div ref="root" class="relative">
    <button :id="id" type="button" class="field flex items-center justify-between gap-3 text-left cursor-pointer"
            :class="open ? '!border-accent !shadow-[0_0_0_3px_rgb(var(--c-accent)/0.2)]' : ''"
            aria-haspopup="listbox" :aria-expanded="open" :aria-controls="listId"
            @click="toggle" @keydown="onKeydown">
      <span class="truncate" :class="modelValue ? 'text-fg' : 'text-muted'">{{ modelValue || placeholder }}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="w-4 h-4 shrink-0 text-accent transition-transform duration-300" :class="open ? 'rotate-180' : ''" aria-hidden="true">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>

    <transition name="slide-down">
      <ul v-if="open" :id="listId" role="listbox" tabindex="-1" :aria-activedescendant="`${listId}-${active}`"
          class="absolute left-0 right-0 z-40 max-h-64 overflow-auto p-1.5 space-y-0.5"
          :class="openUp ? 'bottom-full mb-2' : 'top-full mt-2'"
          style="border-radius:1rem;background:rgb(var(--c-base)/0.94);border:1px solid var(--glass-bd);box-shadow:var(--shadow),inset 0 1px 0 var(--glass-hi);-webkit-backdrop-filter:blur(18px) saturate(150%);backdrop-filter:blur(18px) saturate(150%);">
        <li v-for="(opt, i) in items" :key="opt.value" :id="`${listId}-${i}`" role="option" :aria-selected="opt.value === modelValue"
            class="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-sm cursor-pointer transition-colors"
            :class="[i === active ? 'bg-accent/20' : '', opt.value === modelValue ? 'text-accent font-semibold' : opt.value === '' ? 'text-muted' : 'text-fg']"
            @mouseenter="active = i" @click="choose(opt.value)">
          <span>{{ opt.label }}</span>
          <svg v-if="opt.value === modelValue && opt.value !== ''" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  options: { type: Array, default: () => [] },
  placeholder: { type: String, default: 'Select…' },
  id: { type: String, default: 'select' },
})
const emit = defineEmits(['update:modelValue'])

const root = ref(null)
const open = ref(false)
const openUp = ref(false)
const active = ref(0)
const listId = computed(() => `${props.id}-list`)
// First row lets people clear their choice
const items = computed(() => [{ value: '', label: props.placeholder }, ...props.options.map((o) => ({ value: o, label: o }))])

const show = () => {
  const r = root.value.getBoundingClientRect()
  openUp.value = window.innerHeight - r.bottom < 280 && r.top > window.innerHeight - r.bottom
  active.value = Math.max(0, items.value.findIndex((i) => i.value === props.modelValue))
  open.value = true
}
const close = () => { open.value = false }
const toggle = () => (open.value ? close() : show())
const choose = (v) => { emit('update:modelValue', v); close() }

const onKeydown = (e) => {
  const n = items.value.length
  if (e.key === 'Escape') { close(); return }
  if (['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', ' '].includes(e.key)) e.preventDefault()
  if (!open.value) { if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) show(); return }
  if (e.key === 'ArrowDown') active.value = (active.value + 1) % n
  else if (e.key === 'ArrowUp') active.value = (active.value - 1 + n) % n
  else if (e.key === 'Home') active.value = 0
  else if (e.key === 'End') active.value = n - 1
  else if (e.key === 'Enter' || e.key === ' ') choose(items.value[active.value].value)
}

const onOutside = (e) => { if (root.value && !root.value.contains(e.target)) close() }
onMounted(() => document.addEventListener('pointerdown', onOutside))
onUnmounted(() => document.removeEventListener('pointerdown', onOutside))
</script>