<template>
  <div class="my-date" @click="showFormatPicker">
    <label>{{ this.name }}</label>
    <div class="right">
      <span>请选择</span>
      <img src="@/views/shenpi/img/arrow-right.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDate",

  props: {
    type: String,
    name: String,
    options: Object,
    mykey: String,
    formData: Object
  },

  methods: {
    showFormatPicker() {
      if (!this.formatPicker) {
        this.formatPicker = this.$createDatePicker({
          title: "",
          min: new Date(2019, 0, 1),
          max: new Date(2019, 11, 31),
          value: new Date(),
          format: {
            year: "YYYY年",
            month: "MM月",
            date: "DD 日"
          },
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        });
      }

      this.formatPicker.show();
    },

    selectHandle(date, selectedVal, selectedText) {
      this.formData[this.mykey] = selectedText.join(" ");
      this.$createDialog({
        type: "warn",
        content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(
          ", "
        )} <br/> - text: ${selectedText.join(" ")}`,
        icon: "cubeic-alert"
      }).show();
    },

    cancelHandle() {
      this.$createToast({
        type: "correct",
        txt: "Picker canceled",
        time: 1000
      }).show();
    }
  }
};
</script>

<style scoped lang="scss">
.my-date {
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
      font-size: px2rem(30);
    }
    img {
      width: px2rem(12);
      height: px2rem(20);
    }
  }
}
</style>
