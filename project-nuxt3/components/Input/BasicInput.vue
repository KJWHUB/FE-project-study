<template>
  <input :value="props.text" @input="updateInput($event)" />
</template>

<script setup>
const props = defineProps({
  text: String
});
const emit = defineEmits(["upupup"]);

const updateInput = (e) => {
  console.log(e);
  emit("upupup", e.target.value);
};
</script>
