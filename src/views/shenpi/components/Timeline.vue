<template>
  <div class="timeline">
    <div class="datetime">
      2019.03.03 09:34
    </div>

    <div class="item">
      <div class="avatar">
        <div class="avatar-img">
          <img class="avatar-img" src="" />
        </div>
        <img class="img1" src="../img/faqi.png" />
      </div>
      <div class="right">
        <div class="title">发起申请</div>
        <div class="text">我</div>
      </div>
    </div>

    <div class="item">
      <div class="avatar">
        <img class="avatar-img" src="" />
        <img class="img2" src="../img/shenhezhong.png" />
      </div>
      <div class="right">
        <div class="title">第一审批人</div>
        <div class="text">陈博（审批中）</div>
      </div>
    </div>

    <div class="item">
      <div class="avatar">
        <img class="avatar-img" src="" />
        <img class="img3" src="../img/dailiuzhuan.png" />
      </div>
      <div class="right">
        <div class="title">第二审批人</div>
        <div class="text">张孟斌（审待流转）</div>
      </div>
    </div>

    <div class="item">
      <div class="avatar">
        <img class="avatar-img" src="" />
        <img class="img4" src="../img/faqi.png" />
      </div>
      <div class="right">
        <div class="title">少送人</div>
        <div class="text">2人</div>
        <div class="text">王宇、楚彦辉</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline"
};
</script>

<style scoped lang="scss">
.timeline {
  position: relative;
  margin-top: px2rem(36);
  padding: 0 px2rem(30) 0 px2rem(44);
  .datetime {
    position: absolute;
    top: px2rem(2);
    right: px2rem(30);
    line-height: px2rem(34);
    color: #b4b4b4;
    font-size: px2rem(24);
  }
  .item {
    position: relative;
    display: flex;
    width: 100%;
    height: px2rem(170);
    &:not(:last-child) {
      &:before {
        display: inline-block;
        position: absolute;
        left: px2rem(44);
        top: px2rem(88);
        transform: translateX(-50%);
        content: "";
        width: px2rem(6);
        height: px2rem(82);
        background-color: #e8e8e8;
      }
    }
    .avatar {
      position: relative;
      margin-right: px2rem(42);
      width: px2rem(88);
      height: px2rem(88);
      &-img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        background-color: #7f7272;
        img {
          width: 100%;
          min-height: 100%;
        }
      }

      .img1,
      .img2,
      .img3,
      .img4 {
        position: absolute;
        right: px2rem(-10);
        bottom: px2rem(-5);
        width: px2rem(42);
        height: px2rem(42) !important;
        z-index: 10000;
      }
    }
    .right {
      .title {
        margin-bottom: px2rem(12);
        line-height: px2rem(48);
        color: #0f0808;
        font-size: px2rem(34);
      }
      .text {
        margin-bottom: px2rem(6);
        line-height: px2rem(42);
        color: #b4b4b4;
        font-size: px2rem(30);
      }
    }
  }
}
</style>
