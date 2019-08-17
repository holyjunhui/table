<template>
    <Widget title="网站黑链">
        <div class="siteBlackChainView">
            <RollTabel :head-data="headData" :body-data="bodyData" :show-num="6" />
        </div>
    </Widget>
</template>

<script>
const FLUSH_TIME = 1000 * 60 * 60;
import Widget from "@/components/Widget";
import RollTabel from "@/components/roll-table";
import {getAlertsSpamlink} from "@/api";
import Url from "url-parse";
import {formatTime} from "@/utils";
import list from "./data";
export default {
    components: {Widget, RollTabel},
    created() {
        this.updata();
        setInterval(() => {
            this.updata();
        }, FLUSH_TIME);
    },
    data() {
        return {
            headData: ["网站", "URL数量", "时间"],
            bodyData: [],
            list
        };
    },
    methods: {
        updata() {
            // const spamlinkData = await getAlertsSpamlink();
            const rawData = this.list;
            if (rawData) {
                rawData.sort((a, b) => b.created_at - a.created_at);
                this.bodyData = rawData.map(info => {
                    const url = Url(info.asset.url);
                    return [url.host, info.count, formatTime(info.created_at)];
                });
            }
        }
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
