<template>
  <div>
    <h1>pages/product/[id].vue</h1>
    <p>{{ $route.path }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
console.log(route);
</script>
