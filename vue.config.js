module.exports = {
  pages: {
    qingjia: {
      entry: "src/views/shenpi/qingjia/main.js",
      template: "public/index.html",
      filename: "qingjia.html",
      title: "请假"
    },
    shenpiDetail: {
      entry: "src/views/shenpi/detail/main.js",
      template: "public/index.html",
      filename: "shenpiDetail.html",
      title: "我的审批"
    },
    submitSuccess: {
      entry: "src/views/shenpi/success/main.js",
      template: "public/index.html",
      filename: "submitSuccess.html"
    },
    shenpiPending: {
      entry: "src/views/shenpi/pending/main.js",
      template: "public/index.html",
      filename: "shenpiPending.html",
      title: "我的审批"
    },
    newsDetail: {
      entry: "src/views/newsDetail/main.js",
      template: "public/index.html",
      filename: "newsDetail.html",
      title: "消息详情"
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/css/helper.scss";
        `
      }
    }
  },

  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://joax.bxdins.cn",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
