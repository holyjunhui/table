<template>
    <div class="map-widget" v-loading="loading">
        <CertCountTo :end-val="data.count" :duration="4000" :format="formatNumber" />
    </div>
</template>

<script>
import CertCountTo from "@/components/CertCountTo";
export default {
    name: "Map",
    components: {CertCountTo},
    data() {
        return {
            loading: false,
            data: {}
        };
    },

    created() {
        this.loading = true;
        this.fetchData();
        this.loading = false;
    },

    methods: {
        async fetchData() {
            const data = await new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        count: Math.round(Math.random() * 40000 + 100)
                    });
                }, 1000);
            });

            this.data = data;
        },

        formatNumber(value) {
            let num = "000000" + value.toFixed(0);
            const rgx = /(\d+)(\d{3})/;
            while (rgx.test(num)) {
                num = num.replace(rgx, "$1,$2");
            }

            num = num.substr(-7);
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
        font-size: 56px;
        color: #FFF;
        text-shadow: rgba(255, 255, 255, 0.35) 0 0 7px;
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
            width: 70px;
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
