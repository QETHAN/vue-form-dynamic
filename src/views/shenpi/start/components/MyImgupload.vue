<template>
  <div class="my-imgupload">
    <div class="name">
      ><span v-if="options.required" class="required">*</span>{{ name }}
    </div>
    <cube-upload
      action="//jsonplaceholder.typicode.com/photos/"
      :max="options.length"
      :simultaneous-uploads="1"
      @files-added="filesAdded"
    />
  </div>
</template>

<script>
export default {
  name: "MyImgupload",

  props: {
    type: String,
    name: String,
    options: Object,
    mykey: String,
    formData: Object
  },

  methods: {
    filesAdded(files) {
      let hasIgnore = false;
      const maxSize = 1 * 1024 * 1024; // 1M
      for (let k in files) {
        const file = files[k];
        if (file.size > maxSize) {
          file.ignore = true;
          hasIgnore = true;
        }
      }
      hasIgnore &&
        this.$createToast({
          type: "warn",
          time: 1000,
          txt: "You selected >1M files"
        }).show();
    }
  }
};
</script>

<style lang="scss">
.my-imgupload {
  display: flex;
  align-items: center;
  height: px2rem(200);

  .name {
    margin-top: px2rem(12);
    margin-bottom: px2rem(10);
    line-height: px2rem(48);
    color: #0f0808;
    font-size: px2rem(34);
  }

  .cube-upload-def .cube-upload-btn,
  .cube-upload-def .cube-upload-file {
    margin-bottom: 0;
  }
}
</style>
