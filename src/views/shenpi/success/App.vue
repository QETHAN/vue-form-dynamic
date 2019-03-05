<template>
  <div class="submit-success">
    <div class="header">
      <img src="../img/success.png" />
      <div class="text1">提交成功</div>
      <div class="text2">已提交申请，等待审批</div>
    </div>

    <Divider />

    <Timeline />
  </div>
</template>

<script>
import Divider from "../components/Divider";
import Timeline from "../components/Timeline";

export default {
  name: "SubmitSuccess",

  components: {
    Divider,
    Timeline
  },

  created() {
    // this.$createDialog({
    //   type: "alert",
    //   title: "Alert",
    //   content: "dialog content"
    // }).show();
  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
