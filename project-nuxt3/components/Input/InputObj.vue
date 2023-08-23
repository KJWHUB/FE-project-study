<template>
  <div>
    <template v-for="item in props.testObj">
      <input
        :value="props.testObj[item]"
        type="text"
        @input="updodododododododo($event, props.testObj[item])"
      />
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  testObj: Object
});
const emit = defineEmits(["testup"]);

const updodododododododo = (e, item) => {
  emit("testup", e, item);
};
</script>
