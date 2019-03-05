<template>
  <div class="news-detail">
    <header>
      <h1>{{ this.title }}</h1>
      <h2>{{ this.showed_at }}</h2>
    </header>
    <div class="content">
      {{ this.content }}
      <!-- <img src="" />
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
      </p> -->
    </div>
  </div>
</template>

<script>
import { getUrlParam } from "@/lib/utils";

export default {
  name: "NewsDetail",

  computed: {
    id() {
      return getUrlParam("id");
    },

    token() {
      return "Bearer eyJpdiI6IlBPTEZtZWNDV2F5WXhJTVZ1dVhPOWc9PSIsInZhbHVlIjoiV1ZJOFZmU3daelQ3emlQNGNrRXJ3dDdmSmZwWHNzMkhSV1dSRlJXMnZ4ZzdNZDJKcnNXMkc5aFlEYmtHSUdJZUtZamdUSkJFXC93Mm9YOWpKbzhDaEc3aWpsV29nS1ZndXVTWGE2VmZocnZZPSIsIm1hYyI6IjM3NjJhMGU1NjY1Y2EyOTFiMDBjZmJmMzQ5ODE4M2RkNjQ1NDdhODE5MzUxYjc2NDg0Y2IwYzY2MjlkMGI2YzIifQ==";
    }
  },

  data() {
    return {
      titile: "",
      showed_at: "",
      content: ""
    };
  },

  methods: {
    getData() {
      this.get(
        `/api/v1/cm-columns/${this.id}}`,
        {},
        { Authorization: this.token }
      ).then(res => {
        console.log(res);
        const { title, showed_at, content } = res.data.data;
        this.titile = title;
        this.showed_at = showed_at;
        this.content = content;
      });
    }
  },

  created() {
    document.title = "消息详情";
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
