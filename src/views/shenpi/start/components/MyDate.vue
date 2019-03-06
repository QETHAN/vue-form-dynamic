<template>
  <div class="my-date" @click="showFormatPicker">
    <label
      ><span v-if="options.required" class="required">*</span>{{ name }}</label
    >
    <div class="right">
      <template v-if="!val">
        <span>请选择</span>
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
export default {
  name: "MyDate",

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

  methods: {
    handleDel() {
      this.val = this.formData[this.mykey] = "";
    },

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
      // this.$set(`formData.${this.mykey}`, selectedText.join(" "));
      this.val = this.formData[this.mykey] = selectedText.join(" ");
    },

    cancelHandle() {}
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
    display: flex;
    align-items: center;
    height: 100%;
    span {
      margin-right: px2rem(20);
      color: #b4b4b4;
      font-size: px2rem(30);
    }
    .img1 {
      width: px2rem(12);
      height: px2rem(20);
    }
    .del {
      display: flex;
      justify-content: center;
      align-items: center;
      width: px2rem(46);
      height: 100%;
      text-align: center;
    }
    .img2 {
      width: px2rem(36);
      height: px2rem(36);
    }
  }
}
</style>
