<template>
    <Widget title="资产情况">
        <div class="assestConditionView">
            <div class="assestConditionView-bg"></div>
            <div class="mountNode" ref="mountNode"></div>
            <div class="descriptionContainer">
                <div>
                    <p>累计执行扫描数</p>
                    <CountTo
                        class="item-value text-gradient"
                        :class="{monitorLargerCount: totalMonitorCount.toString().length > 6}"
                        :end-val="totalMonitorCount"
                        separator
                        :title="totalMonitorCount"
                    />
                    <span
                        class="text-gradient item-unit"
                        :class="{monitorLargerCount: totalMonitorCount.toString().length > 6}"
                    >次</span>
                </div>
                <div>
                    <p>累计监测页面</p>
                    <CountTo
                        class="item-value text-gradient"
                        :class="{pageLargerCount: totalMonitorPage.toString().length > 6}"
                        :end-val="totalMonitorPage"
                        separator
                        :title="totalMonitorPage"
                    />
                    <span
                        class="text-gradient item-unit"
                        :class="{pageLargerCount: totalMonitorPage.toString().length > 6}"
                    >个</span>
                </div>
            </div>
        </div>
    </Widget>
</template>

<script>
let chart;
const FLUSH_TIME = 1000 * 60 * 60;
import G2 from "@antv/g2";
import Widget from "@/components/Widget";
import {getAssetsSummary} from "@/api";
export default {
    components: {Widget},
    data() {
        return {
            chartData: [],
            totalMonitorCount: 0,
            totalMonitorPage: 0
        };
    },
    // async created() {
    //     this.updateChart();
    //     setInterval(() => {
    //         this.updateChart();
    //     }, FLUSH_TIME);
    // },

    mounted() {
        this.initChart();
        this.updateChart();
    },
    methods: {
        async updateChart() {
            const assetsSummaryData = await getAssetsSummary();
            const data = assetsSummaryData.data;

            /* const data = {
                total_monitor_count: 9560,
                total_monitor_page: 9214,
                monitoring: 30950,
                unmonitoring: 9900
            };*/
            this.totalMonitorCount = data.total_monitor_count;
            this.totalMonitorPage = data.total_monitor_page;
            this.chartData = this.processData(data);
            chart.changeData(this.chartData);
        },
        getTotalCount(data) {
            return data.monitoring + data.unmonitoring;
        },
        processData(rawData) {
            // const tempArr = [];
            const map = {
                monitoring: "已开启监测",
                unmonitoring: "未开启监测"
            };
            const totalCount = this.getTotalCount(rawData);
            if (!totalCount) {
                return;
            }
            return ["monitoring", "unmonitoring"].map(key => {
                const count = rawData[key];
                const percent = +(count / totalCount).toFixed(2);
                return {
                    item: map[key],
                    count,
                    percent
                };
            });
        },
        isClosedItem(info) {
            return false;
            // return info.item.includes("closed");
        },
        getLabelInfo() {
            const self = this;
            return {
                offset: 40,
                htmlTemplate(text, item) {
                    if (self.isClosedItem(item.point)) {
                        return "<div></div>";
                    }
                    const count = item.point.count;
                    const percent = (item.point.percent * 100).toFixed(2) + "%";
                    return `
								<div style="color:${item.color};width: 75px;text-align: center;font-size:14px;">
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
                height: 220,
                width: 380,
                padding: [60, 0, 0, 50]
            });
        },
        setChartSource() {
            chart.source(this.chartData);
        },

        setChartCoord() {
            chart.coord("theta", {
                radius: 0.99,
                innerRadius: 0.75
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
            return ["rgb(66,237,248)", "rgb(3,128,255)"];
            // eslint-disable-next-line no-unreachable
            return [
                "rgba(0,0,0,0)",
                "rgb(66,237,248)",
                "rgba(0,0,0,0)",
                "rgb(3,128,255)"
            ];
        },
        handleChart() {
            const interval = chart
                .intervalStack()
                .position("percent")
                .color("item", this.getChartColorList())
                .label("percent", this.getLabelInfo());

            chart.tooltip(false);
        },
        setChartLegend() {
            const self = this;
            chart.legend({
                position: "left",
                offsetX: 115,
                offsetY: -25,
                hoverable: false,
                useHtml: true,
                itemTpl(value, color, checked, index) {
                    if (self.isClosedItem({item: value})) {
                        return "<div></div>";
                    }
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
        left: -40px;
        top: -30px;
        box-sizing: border-box;
        width: 394px;
    }
    .assestConditionView-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: 78px 12px;
        background-image: url("../../assets/images/assest_circle.png");
    }
    .descriptionContainer {
        position: absolute;
        right: 0px;
        top: -8px;
        font-size: 12px;
        .item-value {
            font-size: 30px;
            font-weight: bold;
            line-height: 36px;
            font-family: "汉仪菱心体", sans-serif;
            letter-spacing: 2px;
        }
        p {
            margin: 5px 0;
        }

        .item-unit {
            font-size: 24px;
            font-weight: bold;
            line-height: 36px;
            font-family: "汉仪菱心体", sans-serif;
            letter-spacing: 2px;
        }
        .monitorLargerCount {
           font-size:16px;
				}
        .pageLargerCount {
           font-size:16px;
				}
    }
}
</style>

