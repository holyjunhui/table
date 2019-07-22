<template>
    <div class="tableHead">
        <Item :item-data="headData" font="text-gradient"></Item>
    </div>
</template>

<script>
import Item from "./table-item.vue";
export default {
	components: {Item},
	props: ["headData"]
};
</script>

<style lang="scss" scoped>
</style>
