<template>
    <Widget title="高危告警监测">
        <div class="alarmDetectionView">
            <RollTabel :head-data="headData" :body-data="bodyData" :show-num="6" />
        </div>
    </Widget>
</template>

<script>
const FLUSH_TIME = 1000 * 60 * 60;
import Widget from "@/components/Widget";
import RollTabel from "@/components/roll-table";
import mockData from "./mockdata.js";
import {getAlertsHighSeverity} from "@/api";
import list from "./data";
import Url from "url-parse";
import {formatTime} from "@/utils";
export default {
    components: {Widget, RollTabel},
    data() {
        return {
            headData: ["网站", "类型", "时间"],
            bodyData: [],
            list
        };
    },
    created() {
        this.updata();
        setInterval(() => {
            this.updata();
        }, FLUSH_TIME);
    },
    computed: {
        categories() {
            return this.$store.state.meta.alert_category || [];
        }
    },
    methods: {
        updata() {
            // const highSeverityData = await getAlertsHighSeverity();
            const rawData = this.list;
            if (rawData) {
                rawData.sort((a, b) => b.created_at - a.created_at);
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
