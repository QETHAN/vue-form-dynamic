<template>
  <div class="my-checkbox">
    <div class="name">
      ><span v-if="options.required" class="required">*</span>{{ name }}
    </div>
    <cube-radio-group
      v-model="formData[mykey]"
      :options="options.options"
      position="right"
    />
  </div>
</template>

<script>
export default {
  name: "MyCheckbox",

  props: {
    type: String,
    name: String,
    options: Object,
    mykey: String,
    formData: Object
  },

  data() {
    return {
      val: ""
    };
  }
};
</script>

<style scoped lang="scss">
.my-checkbox {
  background: white;
  .name {
    margin-top: px2rem(12);
    line-height: px2rem(48);
    color: #0f0808;
    font-size: px2rem(34);
  }
}
</style>
