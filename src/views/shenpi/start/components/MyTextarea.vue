<template>
  <div class="my-textarea">
    <div class="name">{{ this.name }}</div>
    <textarea
      rows="4"
      v-model="formData[mykey]"
      :placeholder="options.placeholder"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "MyTextarea",

  props: {
    type: String,
    name: String,
    options: Object,
    mykey: String,
    formData: Object
  }
};
</script>

<style scoped lang="scss">
.my-textarea {
  height: px2rem(236);
  background-color: white;
  .name {
    // margin-top: px2rem(22);
    line-height: px2rem(48);
    color: #0f0808;
    font-size: px2rem(34);
  }

  textarea {
    padding: px2rem(10) 0;
    width: 100%;
    line-height: px2rem(42);
    font-size: px2rem(30);
    border: none;
    outline: none;
  }
}
@include textarea-placeholder(#b4b4b4, px2rem(30));
</style>
