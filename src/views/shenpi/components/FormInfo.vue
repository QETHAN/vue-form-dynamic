<template>
  <div class="form-info">
    <div class="item">
      <label>请假类型</label>
      <div class="text">病假</div>
    </div>

    <div class="item">
      <label>开始时间</label>
      <div class="text">2019.03.02 10:11</div>
    </div>

    <div class="item">
      <label>结束时间</label>
      <div class="text">2019.03.02 18:11</div>
    </div>

    <div class="item">
      <label>请假事由</label>
      <div class="text">生病</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormInfo"
};
</script>

<style scoped lang="scss">
.form-info {
  padding: 0 px2rem(30);
  .item {
    display: flex;
    align-items: center;
    margin-bottom: px2rem(20);
    &:last-child {
      margin-bottom: 0;
    }
    label {
      margin-right: px2rem(40);
      line-height: px2rem(42);
      color: #929292;
      font-size: px2rem(30);
    }
    .text {
      line-height: px2rem(42);
      color: #1a1a1a;
      font-size: px2rem(30);
    }
  }
}
</style>
