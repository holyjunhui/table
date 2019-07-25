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
import {getAlertsSpamlink} from "@/api";
import Url from "url-parse";
import {formatTime} from "@/utils";
export default {
    components: {Widget, RollTabel},
    async created() {
        await this.updata();
    },
    data() {
        return {
            headData: ["网站", "时间", "URL数量"],
            bodyData: []
        };
    },
    methods: {
        async updata() {
            let spamlinkData = await getAlertsSpamlink();
            let rawData = spamlinkData.data;
            if (rawData) {
                this.bodyData = rawData.map(info => {
                    const url = Url(info.asset.url);
                    return [url.host, formatTime(info.created_at), info.count];
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
