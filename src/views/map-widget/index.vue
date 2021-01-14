<template>
    <div class="map-widget" v-loading="loading">
        <CertCountTo
            ref="countTo"
            :start-val="startValue"
            :end-val="endValue"
            :duration="3000"
            :format="formatNumber"
            :autoplay="false"
        />
        <Mapbox />
    </div>
</template>

<script>
import CertCountTo from "@/components/CertCountTo";
import {getAlertsTotal} from "@/api";
import Mapbox from "./mapbox";
export default {
    name: "MapWidget",
    components: {CertCountTo, Mapbox},
    data() {
        return {
            loading: false,
            startValue: 0,
            endValue: 0,
            data: {}
        };
    },

    async created() {
        this.loading = true;
        await this.fetchData();
        this.loading = false;
        this.updateView();
        setInterval(async () => {
            await this.fetchData();
            this.updateView();
        }, 10000);
    },

    methods: {
        async fetchData() {
            const res = await getAlertsTotal();
            this.data = res;
        },

        updateView() {
            this.startValue = this.endValue;
            this.endValue = this.data.data;
            this.$nextTick(() => {
                this.$refs.countTo.start();
            });
        },

        formatNumber(value) {
            let num = "000000" + value.toFixed(0);
            const rgx = /(\d+)(\d{3})/;
            while (rgx.test(num)) {
                num = num.replace(rgx, "$1,$2");
            }
            num = num.substr(-11);
            return num.split("").map(item => {
                return `<div class="${item === "," ? "separator" : "digital"}"><span>${item}</span></div>`;
            }).join("");
        }
    }
};
</script>

<style lang="scss" scoped>
.map-widget {
    margin-top: 24px;

    .count-to {
        width: 476px;
        height: 84px;
        margin: 0 auto;
        font-size: 46px;
        color: #FFF;
        text-shadow: rgba(255, 255, 255, 0.6) 0 0 7px;
        font-family: "张海山草泥马体", serif;
        display: flex;
    }
}
</style>

<style lang="scss">
.map-widget {
    .count-to {
        div {
            height: 84px;
            line-height: 90px;
            text-align: center;
        }

        .digital {
            flex: none;
            width: 50px;
            margin: 0 4px;
            background-color: rgba(0, 108, 255, 0.2);
        }

        .separator {
            flex: none;
            height: 44px;
            line-height: 44px;
            margin: 40px -5px 0;
        }

        span {
            display: block;
            transform: matrix(1, 0, -0.05, 1, 0, 0);
        }
    }
}
</style>
