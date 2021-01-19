<template>
    <Widget title="探测资产总量">
        <div class="detectAssetView">
            <div class="mountNode" ref="mountNode"></div>
        </div>
    </Widget>
</template>

<script>
let chart;
const FLUSH_TIME = 1000 * 60 * 10;
import G2 from "@antv/g2";
import {getAssetsRecent} from "@/api";
import Widget from "@/components/Widget";
import list from "./data";
export default {
    components: {Widget},
    data() {
        return {
            chartData: [],
            list
        };
    },
    // async created() {
    //     this.updateChart();
    //     setInterval(async () => {
    //         this.updateChart();
    //     }, FLUSH_TIME);
    // },

    mounted() {
        this.initChart();
        this.updateChart();
    },
    methods: {
        async updateChart() {
            const assetsRecentData = await getAssetsRecent();
            this.chartData = this.processData(assetsRecentData.data);
            this.setSource();
            chart.changeData(this.chartData);
        },
        processData(rawData) {
            if (!rawData) {
                return [];
            }
            const tempArr = [];
            const typeMap = {
                high: "高危资产",
                online: "在线资产"
            };
            for (let i = 0, len = rawData.length; i < len; i++) {
                const item = rawData[i];
                const dateList = item.date.match(/\d+\-(\d+)\-(\d+)/);
                const date = `${dateList[1]}.${dateList[2]}`;
                ["high", "online"].forEach(key => {
                    const value = item[key];
                    const type = typeMap[key];
                    tempArr.push({date, value, type});
                });
            }
            return tempArr;
        },
        getAxisLineStyle() {
            return {
                stroke: "rgba(3,128,255,0.4)", // 坐标轴线的颜色
                lineDash: [2, 2],
                lineWidth: 1
            };
        },
        getAxisLabelOptions() {
            return {
                textStyle: {
                    fill: "white"
                }
            };
        },
        setAxis() {
            // 纵坐标轴
            chart.axis("value", {
                label: this.getAxisLabelOptions(),
                grid: {
                    lineStyle: this.getAxisLineStyle()
                }
            });

            // 横坐标轴
            chart.axis("date", {
                label: this.getAxisLabelOptions(),
                tickLine: null,
                line: this.getAxisLineStyle()
            });
        },
        setSource() {
            chart.source(this.chartData, {
                date: {
                    alias: "日期",
                    nice: false
                },
                value: {
                    alias: "占用率",
                    min: 0,
                    max: this.getMaxValue() + 200
                },
                type: {
                    type: "cat"
                }
            });
        },

        getMaxValue() {
            let maxNum = 0;
            this.chartData.forEach(item => {
                if (item.value > maxNum) {
                    maxNum = item.value;
                }
            });
            return maxNum;
        },
        setLegend() {
            chart.legend({
                useHtml: true,
                hoverable: false,
                containerTpl:
                    '<div class="g2-legend" style="">' + '<div class="g2-legend-list" style="display:flex;"  > ' + "</div>",
                itemTpl: (value, color, checked, index) => {
                    return `
				<div>
                    <div style="display:flex;align-items:center;width:80px;">
                        <div style="width:12px;height:12px;background:${color};border-radius: 50%" ></div>
                        <p style="padding-left:10px;color:white;font-size:14px;">${value}</p>
                    </div>
                </div>
              `;
                },
                position: "top-right",
                // offsetX: 100,
                // offsetY: -120,
                "g2-legend": {},
                "g2-legend-list": {
                    border: "none"
                }
            });
        },
        createChart() {
            chart = new G2.Chart({
                container: this.$refs.mountNode,
                height: 225,
                forceFit: true,
                padding: [60, 0, 30, 50]
            });
        },
        handleChart() {
            chart
                .line()
                .position("date*value")
                .shape("smooth")
                .color("type", ["rgb(0,255,255)", "#FACC14"])
                .size(4);
        },
        initChart() {
            this.createChart();
            this.setAxis();
            this.setLegend();
            this.handleChart();
            chart.render();
        }
    }
};
</script>

<style lang="scss" scoped>
.mountNode {
    position: relative;
    left: -15px;
}
</style>

