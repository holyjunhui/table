<template>
    <Widget title="资产情况">
        <div class="assestConditionView">
            <div class="mountNode" ref="mountNode"></div>
            <div class="descriptionContainer">
                <div>
                    <p>累计执行扫描数</p>
                    <CountTo class="item-value text-gradient" :end-val="scanNum" separator />
                    <span class="text-gradient item-unit">次</span>
                </div>
                <div>
                    <p>累计监测页面</p>
                    <CountTo class="item-value text-gradient" :end-val="monitorNum" separator />
                    <span class="text-gradient item-unit">个</span>
                </div>
            </div>
        </div>
    </Widget>
</template>

<script>
let chart;
import G2 from "@antv/g2";
import Widget from "@/components/Widget";
export default {
    components: {Widget},
    data() {
        return {
            scanNum: 9856,
            monitorNum: 568,
            mockData: [
                {
                    item: "other1.closed",
                    count: 21,
                    percent: 0.1
                },
                {
                    item: "未开启检测",
                    count: 40,
                    percent: 0.4
                },
                {
                    item: "other2.closed",
                    count: 21,
                    percent: 0.1
                },
                {
                    item: "已开启检测",
                    count: 21,
                    percent: 0.4
                }
            ]
        };
    },

    mounted() {
        this.initChart();
    },
    methods: {
        getLabelInfo() {
            return {
                offset: 40,
                htmlTemplate(text, item, index) {
                    const count = item.point.count;
                    const percent = item.point.percent + "%";
                    return `
								<div style="color:${item.color};width: 75px;text-align: center;">
								<span class="title" style=" display: inline-block; width: 50px">
									${percent}
								</span>
								<div style="background:${item.color};width:100%;height:1px;margin:0px auto;padding:0px;overflow:hidden;"></div>
								<span >
									${count}
								</span>
								</div>
							`;
                }
            };
        },

        createChart() {
            chart = new G2.Chart({
                container: this.$refs.mountNode,
                animate: false,
                height: 300,
                width: 400
            });
        },
        setChartSource() {
            chart.source(this.mockData, {
                percent: {
                    formatter: function formatter(val) {
                        val = val * 100 + "%";
                        return val;
                    }
                }
            });
        },

        setChartCoord() {
            chart.coord("theta", {
                radius: 0.75,
                innerRadius: 0.8
            });
        },
        setChartTooltip() {
            chart.tooltip({
                showTitle: false,
                itemTpl:
                    '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
            });
        },

        getChartColorList() {
            return [
                "rgba(0,0,0,0)",
                "rgb(15,220,220)",
                "rgba(0,0,0,0)",
                "rgb(65,130,250)"
            ];
        },
        handleChart() {
            var interval = chart
                .intervalStack()
                .position("percent")
                .color("item", this.getChartColorList())
                .label("percent", this.getLabelInfo())
                .tooltip("item*percent", function(item, percent) {
                    percent = percent * 100 + "%";
                    return {
                        name: item,
                        value: percent
                    };
                });
        },
        setChartLegend() {
            chart.legend({
                position: "left",
                offsetX: 107,
                offsetY: -33,
                hoverable: false,
                useHtml: true,
                itemTpl: function(value, color, checked, index) {
                    if (value.includes("closed")) return "<div></div>";
                    return `
						<div class="g2-legend-list-item" data-value="${value}">
							<div style="display:flex;margin-bottom: 5px;align-items: center;font-size:11px;">
								<div class=" g2-legend-item-icon" style="background:${color};width:10px;height:10px;"></div>
								<div style="margin-left:5px; color:white;">${value}</div>
							</div>
						</div>
					`;
                }
            });
        },

        initChart() {
            this.createChart();
            this.setChartSource();
            this.setChartCoord();
            this.setChartTooltip();
            this.setChartLegend();
            this.handleChart();
            chart.render();
        }
    }
};
</script>

<style lang="scss" scoped>
.assestConditionView {
    position: relative;
    .mountNode {
        position: relative;
        left: -85px;
        padding-top: 50px;
        box-sizing: border-box;
        background-repeat: no-repeat;
        background-position: 133px 68px;
        background-image: url("../../assets/images/circle.png");
    }
    .descriptionContainer {
        position: absolute;
        right: 0px;
        top: -8px;
        font-size: 12px;
        .item-value {
            font-size: 22px;
            font-weight: bold;
            line-height: 36px;
            font-family: "汉仪菱心体", sans-serif;
            letter-spacing: 2px;
        }
        p {
            margin: 5px 0;
        }

        .item-unit {
            font-size: 20px;
            font-weight: bold;
            line-height: 36px;
            font-family: "汉仪菱心体", sans-serif;
            letter-spacing: 2px;
        }
    }
}
</style>

