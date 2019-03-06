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

const data = require("@/lib/data.json");
console.log(data);

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
      return "Bearer eyJpdiI6IlBPTEZtZWNDV2F5WXhJTVZ1dVhPOWc9PSIsInZhbHVlIjoiV1ZJOFZmU3daelQ3emlQNGNrRXJ3dDdmSmZwWHNzMkhSV1dSRlJXMnZ4ZzdNZDJKcnNXMkc5aFlEYmtHSUdJZUtZamdUSkJFXC93Mm9YOWpKbzhDaEc3aWpsV29nS1ZndXVTWGE2VmZocnZZPSIsIm1hYyI6IjM3NjJhMGU1NjY1Y2EyOTFiMDBjZmJmMzQ5ODE4M2RkNjQ1NDdhODE5MzUxYjc2NDg0Y2IwYzY2MjlkMGI2YzIifQ==";
    }
  },

  data() {
    return {
      // list: [],
      formData: {}, // 表单数据对象

      list: data.list.map(item => {
        return { ...item, type: "My" + this.capitalizeFirstLetter(item.type) };
      })

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
        const pageData = res.data.data.find(item => item.id == this.id);
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
        flow_id: "",
        form_value: this.formData
      };
      console.log("[formData]", data).then(res => {
        console.log(res);
      });
    }
  },

  created() {
    // this.getData();
  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";
.test {
  height: 100px;
}
</style>
