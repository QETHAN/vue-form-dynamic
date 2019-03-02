<template>
  <div>
    <div>{{ this.mykey }}</div>
    <input v-model="formData[mykey]" />
  </div>
</template>

<script>
export default {
  name: "MyInput",

  props: {
    type: String,
    name: String,
    options: Object,
    mykey: String,
    formData: Object
  }
};
</script>

<style scoped></style>
