<template>
  <div>
    <input class="input" :value="name" @change="name = $event.target.value" />
    Hello! I can run in React, Vue, Solid, or Liquid!
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const name = ref("Alex");
const string = ref(1);

onMounted(() => {
  console.log(state);
});

function a() {}
</script>

<style scoped>
.input {
  color: red;
}
</style>