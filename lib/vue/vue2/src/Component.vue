<template>
  <div>
    <input class="input" :value="name" @change="name = $event.target.value" />
    Hello! I can run in React, Vue, Solid, or Liquid!
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-component",

  data() {
    return { name: "Alex" };
  },
});
</script>

<style scoped>
.input {
  color: red;
}
</style>