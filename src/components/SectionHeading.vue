<template>
  <div :class="center ? 'text-center mx-auto' : ''" style="max-width: 46rem;">
    <p v-reveal class="section-label mb-3">{{ label }}</p>
    <component :is="tag" v-reveal="80" class="section-title">
      {{ title }}
      <span v-if="accent" class="gradient-text">{{ accent }}</span>
    </component>
    <div v-reveal="140" class="divider-accent mt-5" :class="center ? 'mx-auto' : ''" />
    <p v-if="$slots.default" v-reveal="200" class="lead text-muted mt-5"><slot /></p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  title: String,
  accent: String,
  center: Boolean,
  tag: { type: String, default: 'h2' },
})
</script>
