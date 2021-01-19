<template>
    <Widget title="高危告警类型">
        <div class="alarmTypeView">
            <div class="mountNode" ref="mountNode"></div>
            <!-- <div class="maskBox">
                <div class="circle1">
                    <div class="circle2">
                        <div class="circle3"></div>
                    </div>
                </div>
            </div> -->
        </div>
    </Widget>
</template>

<script>
let chart;
const FLUSH_TIME = 1000 * 60 * 60;
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";
import Widget from "@/components/Widget";
import utils from "./utils";
import {getAlertsHighSeveritySummary} from "@/api";
import {shuffle} from "../../utils";

import list from "./data";
export default {
    components: {Widget},
    data() {
        return {
            chartData: [],
            list
        };
    },

    async created() {
        await this.updateChart();
        setInterval(() => {
            this.updateChart();
        }, FLUSH_TIME);
    },
    mounted() {
        this.initChart();
        this.updateChart();
    },
    computed: {
        categories() {
            return this.$store.state.meta.alert_category || [];
        }
    },
    methods: {
        async updateChart() {
            const highSeveritySummaryData = await getAlertsHighSeveritySummary();
            const data = highSeveritySummaryData.data || [];
            // const data = this.list;
            const sliceData = data;
            // this.chartData = this.processData(data);
            this.chartData = this.processData(sliceData);
            // 乱序
            // this.chartData = shuffle(this.chartData);
            // this.chartData = this.chartData.slice(0, 5);
            const ds = new DataSet();
            const dv = ds.createView().source(this.chartData);
            dv.transform({
                type: "percent",
                field: "population",
                dimension: "type",
                as: "percent"
            });
            chart.source(dv, {
                num: {
                    type: "log"
                }
            });
            chart.render();
            // this.renderLabel();
        },
        processData(rawData) {
            const tempArr = [];
            const totalCount = this.getTotalCount(rawData);
            rawData.forEach(info => {
                const num = info.count;
                const population = +(num / totalCount).toFixed(2);
                if (info.category !== "ddos" && info.category !== "threat") {
                    tempArr.push({
                        type: (
                            this.categories.find(item => item.code === info.category) || {}
                        ).name,
                        num,
                        population
                    });
                }
            });
            return tempArr;
        },
        getTotalCount(data) {
            return data.reduce((total, info) => {
                // eslint-disable-next-line no-return-assign
                return total += info.count;
            }, 0);
        },
        setChartLegend() {
            chart.legend({
                position: "right",
                offsetY: 0,
                offsetX: 17,
                useHtml: true,
                hoverable: false,
                itemTpl: (value, color, checked, index) => {
                    color = this.getLegendColorList()[index];
                    return `
						<div class="g2-legend-list-item" data-value="${value}">
							<div style="display:flex;margin-bottom: 10px;align-items: center;width:120px;">
								<div class=" g2-legend-item-icon" style="background:${color};width:10px;height:10px;"></div>
								<div style="margin-left:10px; color:white;">${value}</div>
							</div>
						</div>
					`;
                }
            });
        },
        setChartCoord() {
            chart.coord("polar", {
                innerRadius: 0.2
            });
        },

        createChart() {
            chart = new G2.Chart({
                container: this.$refs.mountNode,
                // forceFit: true,
                height: 200,
                width: 380,
                padding: [35, 100, 10, -30]
            });
        },

        getLabelInfo() {
            return {
                formatter() {
                    return "";
                }
            };
        },
        getLegendColorList() {
            return [
                "rgb(249,147,91)",
                "rgb(3,128,255)",
                "rgb(41,220,235)",
                "rgb(255,216,46)",
                "rgb(50,224,100)",
                "rgb(251,163,0)",
                "rgb(246,124,52)",
                "rgb(146,124,52)",
                "rgb(16,228,234)",
                "rgb(46,124,52)"
            ];
        },

        getColorList() {
            return [
                "rgb(249,147,91)",
                "rgb(3,128,255)",
                "rgb(41,220,235)",
                "rgb(255,216,46)",
                "rgb(50,224,100)",
                "rgb(251,163,0)",
                "rgb(246,124,52)",
                "rgb(146,124,52)",
                "rgb(16,228,234)",
                "rgb(46,124,52)"
            ];
        },

        handleChart() {
            chart
                .interval()
                .position("type*num")
                .color("type", this.getColorList())
                .opacity(1)
                .label("percent", {
                    offset: -13,
                    // autoRotate: false,
                    formatter(text) {
                        return (text * 100).toFixed(0) + "%";
                    },
                    textStyle: {
                        textAlign: "center",
                        shadowBlur: 2,
                        fill: "#fff"
                    }
                })
                .tooltip("type*num", (item, num) => {
                    return {
                        name: item,
                        value: num
                    };
                });
            // chart.tooltip(false);
        },
        initChart() {
            this.createChart();
            this.setChartLegend();
            this.setChartCoord();
            chart.axis(false);
            this.handleChart();
        },
        renderLabel() {
            utils.drawPieLabel(chart, this.getColorList());
        }
    }
};
</script>

<style lang="scss" scoped>
.alarmTypeView {
    position: relative;
    top: 10px;
    height: 200px;

    .mountNode {
        position: relative;
        box-sizing: border-box;
        background-repeat: no-repeat;
        background-position: 30px 12px;
        background-image: url("../../assets/images/type_circle.png");
        width: 394px;
        margin: 0 auto;
    }

    .maskBox {
        top: -120px;
        left: 96px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 60px;
        height: 60px;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
        }

        .circle1 {
            width: 60px;
            height: 60px;
            background: rgb(0, 25, 57);
            border-radius: 50%;
        }

        .circle2 {
            width: 45px;
            height: 45px;
            background: rgb(115, 200, 250);
            border-radius: 50%;
        }

        .circle3 {
            width: 35px;
            height: 35px;
            background: rgb(20, 50, 90);
            border-radius: 50%;
        }
    }
}
</style>

