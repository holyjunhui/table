<template>
    <Widget title="高危告警检测">
        <div class="alarmDetectionView">
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
            headData: ["网站", "类型", "时间"],
            bodyData: mockData.itemList
        };
    }
};
</script>

<style lang="scss" scoped>
.alarmDetectionView {
    margin-top: 11px;
}
</style>

<style>
</style>
