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
                offsetY: 0,
                useHtml: true,
                hoverable: false,
                itemTpl: (value, color, checked, index) => {
                    return `
						<div class="g2-legend-list-item" data-value="${value}">
							<div style="display:flex;margin-bottom: 15px;align-items: center;">
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
                height: 200,
                width: 347,
                padding: [10, 100, 10, -20]
            });
        },

        getLabelInfo() {
            return {};
            return {
                offset: 25,
                htmlTemplate(text, item, index) {
                    const number = item.point.num;
                    const percent = item.point.population + "%";
                    return `
								<div style="color:${item.color};width: 75px;text-align: center;">
								<span class="title" style=" display: inline-block; width: 50px">
									${percent}
								</span>
								<div style="background:${item.color};width:100%;height:1px;margin:0px auto;padding:0px;overflow:hidden;"></div>
								<span >
									${number}
								</span>
								</div>
							`;
                }
            };
        },

        getColorList() {
            return [
                "rgb(252,144,56)",
                "rgb(0,128,255)",
                "rgb(40,150,135)",
                "rgb(255,218,31)",
                "rgb(40,230,200)"
            ];
        },

        handleChart() {
            chart
                .interval()
                .position("type*population")
                .color("type", this.getColorList())
                .opacity(1);
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
        background-position: 19px 6px;
        background-image: url("../../assets/images/type_circle.png");
    }

    .maskBox {
        top: -135px;
        left: 85px;
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

