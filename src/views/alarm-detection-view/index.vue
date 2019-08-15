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
import {getAlertsHighSeverity} from "@/api";
import Url from "url-parse";
import {formatTime} from "@/utils";
export default {
    components: {Widget, RollTabel},
    data() {
        return {
            headData: ["网站", "类型", "时间"],
            bodyData: []
        };
    },
    async created() {
        await this.updata();
    },
    computed: {
        categories() {
            return this.$store.state.meta.alert_category || [];
        }
    },
    methods: {
        async updata() {
            const highSeverityData = await getAlertsHighSeverity();
            const rawData = highSeverityData.data;
            if (rawData) {
                this.bodyData = rawData.map(info => {
                    const url = Url(info.affected_url);
                    const category = (this.categories.find(item => item.code === info.category) || {}).name;
                    const time = formatTime(info.created_at);
                    return [url.host, category, time];
                });
            }
        }
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
