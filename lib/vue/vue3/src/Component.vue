<template>
  <div>
    <input class="input" :value="name" @change="name = $event.target.value" />
    Hello! I can run in React, Vue, Solid, or Liquid!
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("Alex");
</script>

<style scoped>
.input {
  color: red;
}
</style>