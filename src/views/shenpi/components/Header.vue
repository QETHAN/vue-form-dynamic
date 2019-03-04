<template>
  <div class="shenpi-header">
    <div class="avatar">
      <img src="" />
    </div>

    <div class="right">
      <div class="username">
        请假
        <div class="divider">&nbsp;—&nbsp;</div>
        楚彦辉
      </div>
      <div class="status">待审批</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.shenpi-header {
  display: flex;
  align-items: center;
  padding: 0 px2rem(30);
  height: px2rem(146);
  @include borderLine("bottom", #40979797);

  .avatar {
    margin-right: px2rem(36);
    width: px2rem(88);
    height: px2rem(88);
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      min-height: 100%;
    }
  }

  .right {
    .username {
      display: flex;
      align-items: center;
      margin-bottom: px2rem(2);
      line-height: px2rem(48);
      color: #0f0808;
      font-size: px2rem(34);
      .divider {
        display: flex;
        align-items: center;
      }
    }
    .status {
      line-height: px2rem(42);
      color: #f09213;
      font-size: px2rem(30);
    }
  }
}
</style>
