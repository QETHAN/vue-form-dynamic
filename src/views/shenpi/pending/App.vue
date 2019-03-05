<template>
  <div class="shenpi-pending">
    <Header class="m-b-30" />
    <FormInfo class="p-b-65" />
    <Divider />
    <div class="shenhe">
      <div class="type">
        <div
          class="btn"
          :class="{ 'btn-active': type === 1 }"
          @click="handleClickType(1)"
        >
          同意
        </div>
        <div
          class="btn"
          :class="{ 'btn-active': type === 2 }"
          @click="handleClickType(2)"
        >
          拒绝
        </div>
        <div
          class="btn"
          :class="{ 'btn-active': type === 3 }"
          @click="handleClickType(3)"
        >
          退回
        </div>
      </div>

      <div class="yijian">
        <textarea rows="4" placeholder="请输入审核意见"></textarea>
      </div>
    </div>
    <div class="action">
      <div class="btn-long">提交</div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import FormInfo from "../components/FormInfo";
import Divider from "../components/Divider";

export default {
  name: "ShenpiPending",

  components: {
    Header,
    FormInfo,
    Divider
  },

  data() {
    return { type: 1 };
  },

  methods: {
    handleClickType(type) {
      this.type = type;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
