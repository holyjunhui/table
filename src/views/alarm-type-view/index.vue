<template>
    <Widget title="高危告警类型">
        <div class="alarmTypeView">
            <div class="mountNode" ref="mountNode"></div>
            <div class="maskBox">
                <div class="circle1">
                    <div class="circle2">
                        <div class="circle3"></div>
                    </div>
                </div>
            </div>
        </div>
    </Widget>
</template>

<script>
let chart;
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";
import Widget from "@/components/Widget";
import utils from "./utils";

export default {
    components: {Widget},
    data() {
        return {
            mockData: [
                {
                    type: "内容变更",
                    num: "2788",
                    population: 50.1
                },
                {
                    type: "违规内容",
                    num: "2788",
                    population: 36.1
                },
                {
                    type: "黑链",
                    num: "2788",
                    population: 34.05
                },
                {
                    type: "可用性",
                    num: "2788",
                    population: 34.05
                },
                {
                    type: "木马",
                    num: "2788",
                    population: 30.7
                }
            ]
        };
    },

    mounted() {
        // TODO  2.调整坐标
        this.initChart();
    },
    methods: {
        setChartLegend() {
            chart.legend({
                position: "right",
                offsetY: -10,
                offsetX: 5,
                useHtml: true,
                hoverable: false,
                itemTpl: (value, color, checked, index) => {
                    color = this.getLegendColorList()[index];
                    return `
						<div class="g2-legend-list-item" data-value="${value}">
							<div style="display:flex;margin-bottom: 10px;align-items: center;width:80px;">
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
                width: 350,
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
                "rgb(249,147,51)",
                "rgb(3,128,255)",
                "rgb(41,220,135)",
                "rgb(255,216,46)",
                "rgb(50,224,200)"
            ];
        },

        getColorList() {
            return [
                "l(360) 0:rgb(251,163,50) 1:rgb(246,124,52)",
                "l(360) 0:rgb(33,102,244) 1:rgb(87,160,251)",
                "l(360) 0:rgb(16,228,234) 1:rgb(0,255,234)",
                "l(360) 0:rgb(255,223,76) 1:rgb(255,204,0)",
                "l(360) 0:rgb(59,237,151) 1:rgb(26,206,121)"
            ];
        },

        handleChart() {
            chart
                .interval()
                .position("type*population")
                .color("type", this.getColorList())
                .opacity(1);

            chart.tooltip(false);
        },
        initChart() {
            this.createChart();
            this.setChartLegend();
            this.setChartCoord();
            const ds = new DataSet();
            const dv = ds.createView().source(this.mockData);
            dv.transform({
                type: "percent",
                field: "population",
                dimension: "type",
                as: "percent"
            });
            chart.source(dv);
            chart.axis(false);
            this.handleChart();
            chart.render();
            this.renderLabel();
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
        box-sizing: border-box;
        background-repeat: no-repeat;
        background-position: 12px 12px;
        background-image: url("../../assets/images/type_circle.png");
    }

    .maskBox {
        top: -123px;
        left: 80px;
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

