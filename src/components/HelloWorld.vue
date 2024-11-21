<template>
  <div>
    <h1>Hello, {{ name }}!</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    name: {
      type: String,
      default: "World",
    },
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
