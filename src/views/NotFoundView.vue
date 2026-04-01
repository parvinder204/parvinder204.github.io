<template>
  <div class="min-h-screen flex items-center justify-center section-pad bg-white text-black">
    <div class="text-center">
      <p class="display-text text-[10rem] md:text-[14rem] font-black leading-none text-gradient-gold opacity-20 select-none">
        404
      </p>

      <h1 class="display-text text-3xl md:text-4xl font-bold text-black -mt-8 mb-4">
        Page Not Found
      </h1>

      <p class="text-gray-600 mb-10 max-w-md mx-auto">
        Looks like this route doesn't exist. Let's get you back on track.
      </p>

      <router-link to="/" class="btn-primary">
        ← Back to Home
      </router-link>
    </div>
  </div>
</template>