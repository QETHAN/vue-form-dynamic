<template>
  <div class="my-number">
    <div class="name">
      ><span v-if="options.required" class="required">*</span>{{ name }}
    </div>
    <input
      type="number"
      v-model="formData[mykey]"
      :placeholder="options.placeholder || '请输入'"
    />
  </div>
</template>

<script>
export default {
  name: "MyNumber",

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
.my-number {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: px2rem(90);
  background-color: white;
  .name {
    margin-right: px2rem(60);
    line-height: px2rem(48);
    color: #0f0808;
    font-size: px2rem(34);
  }

  input {
    flex: 1;
    line-height: px2rem(42);
    font-size: px2rem(30);
    text-align: right;
    border: none;
    outline: none;
  }
  @include input-placeholder(#b4b4b4, px2rem(30));
  @include removeNumberSpin;
}
</style>
