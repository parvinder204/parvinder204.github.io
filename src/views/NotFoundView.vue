<template>
  <section class="min-h-screen grid place-items-center px-5 pt-24">
    <div class="glass glass-pad text-center max-w-lg w-full" style="padding-block:clamp(2rem,1rem+4vw,4rem);">
      <p class="hero-title gradient-text" style="font-size:clamp(4rem,3rem+8vw,8rem);">404</p>
      <h1 class="card-title mt-2">Page not found</h1>
      <p class="text-muted mt-3 mb-8">The page you're looking for doesn't exist or has moved.</p>
      <router-link to="/" class="btn btn-primary">Back home <Icon name="arrow-right" size="w-4 h-4" /></router-link>
    </div>
  </section>
</template>

<script setup>
import Icon from '../components/Icon.vue'
</script>
