<template>
  <div class="my-select">
    <label>{{ this.name }}</label>
    <div class="right">
      <span>请选择</span>
      <img src="@/views/shenpi/img/arrow-right.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MySelect",

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
.my-select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: px2rem(90);
  color: #0f0808;
  font-size: px2rem(34);
  background-color: white;
  .right {
    span {
      margin-right: px2rem(30);
      color: #b4b4b4;
      font-size: px2rem(34);
    }
    img {
      width: px2rem(12);
      height: px2rem(20);
    }
  }
}
</style>
