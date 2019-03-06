<template>
  <div class="my-select">
    <label
      >><span v-if="options.required" class="required">*</span>{{ name }}</label
    >
    <div class="right">
      <template v-if="!val">
        <span>{{ options.placeholder || "请选择" }}</span>
        <img class="img1" src="@/views/shenpi/img/arrow-right.png" />
      </template>
      <template v-else>
        <span>{{ val }}</span>
        <div class="del">
          <img class="img2" src="../img/del.png" @click.stop="handleDel" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
const column1 = [
  { text: "剧毒", value: "剧毒" },
  { text: "蚂蚁", value: "蚂蚁" },
  { text: "幽鬼", value: "幽鬼" }
];
export default {
  name: "MySelect",

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
  },

  created() {
    this.picker = this.$createPicker({
      title: "",
      data: [column1],
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    });

    this.picker.show();
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
