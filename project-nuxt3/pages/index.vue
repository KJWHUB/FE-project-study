<template>
  <div>
    <h1>pages/index.vue</h1>
    <button @click="uptoup">click</button>
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }">test</div>
    <div class="font" :class="classObject">obj</div>
  </div>
</template>

<script setup>
// 1번 방식
const isActive = ref(true);
const hasError = ref(true);

// 2번 방식
const classObject = reactive({
  active: true,
  "text-danger": false
});

// ====
const fontSize = ref("12px");

const uptoup = () => {
  fontSize.value = "50px";
};
</script>

<style lang="scss" scoped>
.active {
  color: yellowgreen;
}
.text-danger {
  font-size: 20px;
  color: red;
}
.font {
  font-size: v-bind(fontSize);
}
</style>
