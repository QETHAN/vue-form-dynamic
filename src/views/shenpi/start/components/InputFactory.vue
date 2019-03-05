<template>
  <div>
    <Divider />
    <component
      :is="comInput"
      :type="type"
      :name="name"
      :options="options"
      :mykey="mykey"
      :formData="formData"
    ></component>
  </div>
</template>

<script>
import Divider from "@/views/shenpi/components/Divider";
import MyInput from "./MyInput";
import MyTextarea from "./MyTextarea";
import MyDate from "./MyDate";
import MyCheckbox from "./MyCheckbox";

const inputMap = {
  Divider,
  MyInput,
  MyTextarea,
  MyDate,
  MyCheckbox
};

export default {
  name: "InputFactory",

  components: inputMap,

  props: {
    name: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    mykey: {
      type: String,
      default: ""
    },
    formData: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  computed: {
    comInput() {
      return inputMap[this.type];
    }
  }
};
</script>

<style scoped></style>
