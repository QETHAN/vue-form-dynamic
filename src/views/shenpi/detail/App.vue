<template>
  <div class="shenpi">
    <Header />
    <FormInfo class="m-t-30 m-b-90" />
    <Divider />
    <Timeline />
  </div>
</template>

<script>
import Header from "../components/Header";
import FormInfo from "../components/FormInfo";
import Divider from "../components/Divider";
import Timeline from "../components/Timeline";

export default {
  name: "ShenpiDetail",

  components: {
    Header,
    FormInfo,
    Divider,
    Timeline
  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
