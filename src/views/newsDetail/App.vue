<template>
  <div class="news-detail">
    <header>
      <h1>这是新闻标题</h1>
      <h2>2019.03.03</h2>
    </header>
    <div class="content">
      <img src="" />
      <p>
        这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容
        这是新闻内容这是新闻内容这是新闻内容
        <img src="" />
        这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容
        这是新闻内容这是新闻内容这是新闻内容
      </p>

      <p>
        这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容
        这是新闻内容这是新闻内容这是新闻内容
        <img src="" />
        这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容
        这是新闻内容这是新闻内容这是新闻内容
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsDetail",

  methods: {
    getData() {}
  },

  created() {
    document.title = "消息详情";
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
