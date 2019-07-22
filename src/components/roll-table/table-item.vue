<template>
    <div class="tableItem">
        <template v-for="(item,index) in itemData">
            <div :key="index">
                <p :class="font">{{ item }}</p>
            </div>
        </template>
    </div>
</template>

<script>
export default {
	props: ["itemData", "font"]
};
</script>

<style lang="scss" scoped>
.tableItem {
	display: flex;
	justify-content: space-around;
	div {
		width: 33%;
		height: 100%;
		text-align: center;

		p {
			user-select: none;
			margin: 10px 0;
		}
	}
}
</style>
