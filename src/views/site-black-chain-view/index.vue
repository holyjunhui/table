<template>
    <Widget title="网站黑链">
        <div class="siteBlackChainView">
            <RollTabel :head-data="headData" :body-data="bodyData" :show-num="6" />
        </div>
    </Widget>
</template>

<script>
import Widget from "@/components/Widget";
import RollTabel from "@/components/roll-table";
import mockData from "./mockdata.js";
export default {
	components: {Widget, RollTabel},
	data() {
		return {
			headData: ["网站", "时间", "URL数量"],
			bodyData: mockData.itemList
		};
	}
};
</script>

<style lang="scss" scoped>
.siteBlackChainView {
	margin-top: 15px;
}
</style>

<style>
</style>
