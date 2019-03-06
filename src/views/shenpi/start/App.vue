<template>
  <div class="shenpi-start">
    <form>
      <InputFactory
        v-for="item in list"
        :key="item.key"
        :type="item.type"
        :name="item.name"
        :mykey="item.model"
        :options="item.options"
        :formData="formData"
        class="input-item"
      >
      </InputFactory>
    </form>

    <div class="action" @click="handleSubmit">
      <div class="btn-long">提交</div>
    </div>
  </div>
</template>

<script>
import InputFactory from "./components/InputFactory";
import { getUrlParam } from "@/lib/utils";

// const data = require("@/lib/data.json");
// console.log(data);

export default {
  name: "oa-form",

  components: {
    InputFactory
  },

  computed: {
    typeId() {
      return getUrlParam("type_id");
    },

    id() {
      return getUrlParam("id");
    },

    token() {
      return "Bearer eyJpdiI6IkR4bXl2KzFuVGVpUmh1Ym9WV1pVblE9PSIsInZhbHVlIjoiTjBza3l2MTdUbDEzOEowM3VnajJiVVNsTStkUjdPbUVYUklmcit3clFwNzU2ckl6MFZtV0V6M0RxSU9KSUZLcW50OVFxYzhadWJsdUlVU2xlRnBpcXh6Mjh5NVJ4S2dSM0NDR3lSVUR1RTg9IiwibWFjIjoiODE0ZTZmNzNjZjFiNjBhNzEzNmQ3ZjFiMjg4YTY2ZWNmY2ZlNmE4ZDBlNWIzZDRlNGViOGYyMGUzYmUzNDI4OSJ9";
    }
  },

  data() {
    return {
      list: [],
      formData: {} // 表单数据对象

      // list: data.list.map(item => {
      //   return { ...item, type: "My" + this.capitalizeFirstLetter(item.type) };
      // })

      // formData: {}
    };
  },

  methods: {
    capitalizeFirstLetter(str) {
      return [str[0].toUpperCase(), ...str.slice(1)].join("");
    },

    getData() {
      this.get(
        `/api/v1/approve/types/${this.typeId}/flows`,
        {},
        { Authorization: this.token }
      ).then(res => {
        console.log(res, "[id]", this.id);
        const pageData = res.data.data.find(item => {
          console.log(item.id);
          return item.id == this.id;
        });
        console.log("[pageData]", pageData);
        if (pageData) {
          const form_data = JSON.parse(pageData.form_data);
          this.list = form_data.list.map(item => {
            return {
              ...item,
              type: "My" + this.capitalizeFirstLetter(item.type)
            };
          });
          console.log("[list]", this.list);
        }
      });
    },

    submitFormData() {
      this.post("/api/v1/approve/applies");
    },

    handleSubmit() {
      const data = {
        flow_id: this.id,
        form_value: this.formData
      };
      console.log("[formData]", data);
      this.post("/api/v1/approve/applies", data).then(res => {
        console.log(res);
      });
    }
  },

  created() {
    this.getData();
  }
};
</script>

<style lang="scss">
@import "./index.scss";
.test {
  height: 100px;
}
</style>
