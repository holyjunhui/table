<template>
    <Widget title="地区告警排名">
        <div class="main-charts" ref="chart"></div>
    </Widget>
</template>

<script>
const FLUSH_TIME = 1000 * 60 * 60;

import G2 from "@antv/g2";
import Widget from "@/components/Widget";
// import list from "./data";
// import dataset from "./dataset";
import {getIndustryOrCityName} from "./chart";
import {getAlertsRank} from "@/api/index";

const colorMap = {
    "Asia": G2.Global.colors[0],
    "Americas": G2.Global.colors[1],
    "Europe": G2.Global.colors[2],
    "Oceania": G2.Global.colors[3]
};

export default {
    components: {Widget},
    mixins: [getIndustryOrCityName],
    data() {
        return {
            list: [],
            // dataset,
            areaChart: "",
            cityNameList: []
        };
    },
    computed: {
        cityList() {
            return this.$store.state.meta.location || [];
        }
    },

    async created() {
        const data = await getAlertsRank("2101");
        const arrayList = data.data;
        const list = this.formatter(arrayList);
        this.createdChart(list);
    },
    mounted() {
        // this.updateData();
        setInterval(() => {
            this.updateData();
        }, FLUSH_TIME);
    },
    methods: {
        // 求n-m之间的随机数
        mathRandom(n, m) {
            const c = m - n + 1;
            return Math.floor(Math.random() * c + n);
        },
        async updateData() {
            // 求重庆的排名
            const data = await getAlertsRank("2101");
            const arrayList = data.data;
            const list = this.formatter(arrayList);
            // this.list = list;
            this.$nextTick(() => {
                this.areaChart.changeData(list);
                this.areaChart.repaint();
            //    chart.changeData(this.formatter())
            });
        },
        formatter(dataset) {

            // 根据code得到城市名称
            const cityNameList = dataset.map(item => {
                return this.getItemName(item.location_code);
            });
            this.cityNameList = cityNameList;

            // 得到坐标系和大小
            const listArray = dataset.map((item, index) => {
                const array = [];

                for (const type in item.count) {
                    const typeCount = Math.floor(item.count[type] / 100 + 1);

                    for (let i = 0; i <= typeCount; i++) {
                        const locationList = {};
                        locationList.region = this.getItemName(item.location_code);
                        // 根据index做象限处理
                        if (index === 0) {
                            locationList.x = -this.mathRandom(80, 470);
                            locationList.y = this.mathRandom(100, 800);
                        } else if (index === 1) {
                            locationList.x = this.mathRandom(90, 450);
                            locationList.y = this.mathRandom(100, 900);
                        } else if (index === 2) {
                            locationList.x = -this.mathRandom(100, 470);
                            locationList.y = -this.mathRandom(150, 900);
                        } else {
                            locationList.x = this.mathRandom(80, 450);
                            locationList.y = -this.mathRandom(150, 850);
                        }
                        if (type === "high") {
                            locationList.size = 800;
                        } else if (type === "middle") {
                            locationList.size = 700;
                        } else if (type === "low") {
                            locationList.size = 600;
                        } else if (type === "info") {
                            locationList.size = 500;
                        }
                        array.push(locationList);
                    }

                }
                return array;
            });
            return listArray.flat();

        },
        createdChart(data) {

            const chart = new G2.Chart({
                container: this.$refs.chart,
                forceFit: true,
                height: 163,
                padding: 0
            });
            chart.source(data, {
                x: {
                    min: -500,
                    max: 500
                },
                y: {
                    min: -1000,
                    max: 1000
                }
            });
            chart.axis("x", false);
            chart.axis("y", false);
            chart.tooltip({
                showTitle: false
            });
            chart.guide().line({
                start: ["0%", "50%"], // 使用对象格式
                end: ["100%", "50%"],
                lineStyle: {
                    stroke: "#C9C9C9", // 线的颜色
                    lineDash: [0], // 虚线的设置
                    lineWidth: 1 // 线的宽度
                }
            });
            chart.guide().line({
                start: ["50%", "0%"], // 使用对象格式
                end: ["50%", "100%"],
                lineStyle: {
                    stroke: "#C9C9C9", // 线的颜色
                    lineDash: [0], // 虚线的设置
                    lineWidth: 1 // 线的宽度
                }
            });
            // 左上角象限
            chart.guide().text({
                position: ["0%", "50%"],
                content: this.cityNameList[0],
                style: {
                    fill: "#FFF",
                    textAlign: "left",
                    fontSize: 12
                },
                offsetY: -13
            });
            // 右上角
            chart.guide().text({
                position: ["100%", "50%"],
                content: this.cityNameList[1],
                style: {
                    fill: "#FFF",
                    textAlign: "right",
                    fontSize: 12
                },
                offsetY: -13
            });
            // 左下角
            chart.guide().text({
                position: ["0%", "50%"],
                content: this.cityNameList[2],
                style: {
                    fill: "#FFF",
                    textAlign: "left",
                    fontSize: 12
                },
                offsetY: 13
            });
            // 右下角
            chart.guide().text({
                position: ["100%", "50%"],
                content: this.cityNameList[3],
                style: {
                    fill: "#FFF",
                    textAlign: "right",
                    fontSize: 12
                },
                offsetY: 13
            });
            chart.legend(false);
            chart.point().position("x*y").size("size", [1, 10]).color("region", val => {
                return colorMap[val];
            })
                .shape("circle");

            chart.render();
            this.areaChart = chart;
        }
    }

};
</script>

<style lang="scss" scoped>
.count-to {
    font-size: 28px;
    font-weight: bold;
    font-family: "汉仪菱心体", "张海山草泥马体";
}
</style>
