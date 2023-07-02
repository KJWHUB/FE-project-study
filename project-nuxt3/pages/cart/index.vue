<template>
  <div>
    <h3>pages/cart/index.vue</h3>
    <p>{{ $route.meta.title }}</p>
    <NuxtLink to="/"><button>go home</button></NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  // middleware: "auth"
  title: "cart이다.",
  layout: "custom"
});
</script>
