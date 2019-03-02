<template>
  <div>
    <form>
      <InputFactory
        v-for="item in list"
        :key="item.key"
        :type="item.type"
        :name="item.name"
        :mykey="item.key"
        :options="item.options"
        :formData="formData"
      >
      </InputFactory>
    </form>
  </div>
</template>

<script>
import InputFactory from "./components/InputFactory";
const data = require("@/lib/data.json");
console.log(data);
export default {
  name: "oa-form",

  components: {
    InputFactory
  },

  data() {
    return {
      list: data.list.map(item => {
        return { ...item, type: "My" + this.capitalizeFirstLetter(item.type) };
      }),
      formData: {}
    };
  },

  methods: {
    capitalizeFirstLetter(str) {
      return [str[0].toUpperCase(), ...str.slice(1)].join("");
    }
  },

  mounted() {
    console.log(this.list);
  }
};
</script>

<style scoped></style>
