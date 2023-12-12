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
    return { name: "Alex", string: 1 };
  },

  mounted() {
    console.log(this.state);
  },

  methods: { a: function a() {} },
});
</script>

<style scoped>
.input {
  color: red;
}
</style>