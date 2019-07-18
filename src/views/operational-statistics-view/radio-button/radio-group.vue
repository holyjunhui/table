<template>
  <div class="radio-group">
    <template v-for="(item,index) in dataList">
      <RadioButton
        :key="index"
        :name="index"
        :is-activate="currentIndex === index"
        :label="item.label"
        @click="handleClick"
      ></RadioButton>
    </template>
  </div>
</template>

<script>
import RadioButton from "./radio-button.vue";
export default {
  components: {
    RadioButton
  },
  data() {
    return {
      currentIndex: 0,
      dataList: [{ label: "待验证" }, { label: "已验证" }]
    };
  },
  methods: {
    handleClick(item) {
      this.currentIndex = Number(item.name);
      this.$emit("select", item);
    }
  }
};
</script>


<style lang="scss" scoped>
.radio-group {
  display: flex;
}
</style>
