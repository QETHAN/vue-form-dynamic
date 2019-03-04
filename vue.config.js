module.exports = {
  pages: {
    qingjia: {
      entry: "src/views/qingjia/main.js",
      template: "public/index.html",
      filename: "qingjia.html",
      title: "请假"
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
    disableHostCheck: true
    // proxy: {
    //   // "/api": {
    //   //   target: "http://ggpigapi.keputuo.com",
    //   //   ws: true,
    //   //   changeOrigin: true
    //   // }
    // }
  }
};
