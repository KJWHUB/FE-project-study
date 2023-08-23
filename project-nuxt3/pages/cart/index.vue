<template>
  <div>
    <h3>pages/cart/index.vue</h3>
    <p>{{ $route.meta.title }}</p>
    <InputBasicInput :text="text" @upupup="upupup"></InputBasicInput>
    <InputObj :testObj="obj" @testup="testup"></InputObj>
    <NuxtLink to="/"><button>go home</button></NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  // middleware: "auth"
  title: "cart이다.",
  layout: "custom"
});

const text = ref("aa");
const obj = ref({
  ko: "",
  en: "",
  ja: "",
  cn: "",
  tw: ""
});

const upupup = (a) => {
  text.value = a;
  console.log("bomo", a);
};

const testup = (a, b) => {
  console.log(a, b);
};
</script>
