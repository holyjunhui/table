<template>
    <Widget title="近一周运维统计总览">
        <div class="operationalStatisticsView">
            <div class="mountNode" ref="mountNode"></div>
            <div class="osv-radioGroup-container">
                <RadioGroup @select="onRadioGroupSelect" />
            </div>
        </div>
    </Widget>
</template>
<script>
let chart;
const FLUSH_TIME = 1000 * 60 * 60;
import G2 from "@antv/g2";
import Widget from "@/components/Widget";
import RadioGroup from "./radio-button/radio-group.vue";
import {getOperationSummary, getMeta} from "@/api";
export default {
    components: {Widget, RadioGroup},
    data() {
        return {
            dataList: [],
            chartData: [],
            radioIndex: 0
        };
    },

    async created() {
        this.updateChart();
        setInterval(() => {
            this.updateChart();
        }, FLUSH_TIME);
    },
    mounted() {
        this.initChart();
    },
    methods: {
        async updateChart() {
            let operationSummaryData = await getOperationSummary();
            let metaData = await getMeta();
            this.dataList = this.processData(
                operationSummaryData.data,
                metaData.data.industry
            );

            this.updateChartData();
        },
        getNameByType(data) {
            return codeId => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].code === codeId) {
                        return data[i];
                    }
                }
            };
        },
        processData(rawData, mapInfo) {
            if (!rawData) return [];
            //注入数据
            const findCodeInfo = this.getNameByType(mapInfo);
            let tempArr = [];
            let validated = [];
            let waitValidated = [];
            tempArr.push(validated);
            tempArr.push(waitValidated);
            let typeMap = {
                validated_count: "已验证",
                wait_validated_count: "待验证"
            };
            for (let i = 0, len = rawData.length; i < len; i++) {
                let item = rawData[i];
                let typeInfo = findCodeInfo(item.industry_code);
                let type = typeInfo.name;
                validated.push({
                    type,
                    value: item.validated_count
                });

                waitValidated.push({
                    type,
                    value: item.wait_validated_count
                });
            }
            return tempArr;
        },
        setChartAxis() {
            // 设置横坐标轴
            chart.axis("type", {
                label: {
                    textStyle: {
                        fill: "#fff"
                    },
                    htmlTemplate(text) {
                        if (text.length > 3) {
                            const preText = text.slice(0, 2);
                            const laterText = text.slice(2);
                            return `
            <div class="g-label-container" style="text-align:center;width:50px;">
              <p style="font-size:12px;margin-bottom:0">${preText}</p>
              <p style="font-size:12px;margin:0">${laterText}</p>
            </div>
            `;
                        }
                        return `
            <p style="width:50px;font-size:12px;text-align:center;">${text}</p>
          `;
                    }
                }
            });
            // 设置纵坐标轴
            chart.axis("value", {
                label: null,
                grid: {
                    type: "line",
                    lineStyle: this.getAxisLineStyle()
                }
            });
        },
        initChart() {
            this.createChart();
            chart.source(this.mockData);
            this.setChartAxis();
            chart.tooltip(false);
            this.handleChart();
            chart.render();
        },
        createChart() {
            chart = new G2.Chart({
                container: this.$refs.mountNode,
                height: 237,
                forceFit: true,
                padding: [60, 0, 40, 0]
            });
        },
        handleChart() {
            chart
                .interval()
                .position("type*value")
                .color("l(100) 0:rgb(2,220,247) 1:rgb(3,131,245)")
                .opacity(1)
                .label("value", {
                    useHtml: true,
                    htmlTemplate: function htmlTemplate(text, item) {
                        const a = item.point;
                        return `
              <p style="font-size:13px">${a.value}</p>
            `;
                    }
                });
        },
        onRadioGroupSelect(item) {
            this.radioIndex = item.name;
            this.updateChartData();
        },
        updateChartData() {
            this.chartData = this.dataList[this.radioIndex];
            chart.changeData(this.chartData);
        },
        getAxisLineStyle() {
            return {
                stroke: "rgba(3,128,255,0.4)", // 坐标轴线的颜色
                lineDash: [2, 2],
                lineWidth: 1
            };
        }
    }
};
</script>

<style <style lang="scss" scoped>
.operationalStatisticsView {
    .osv-radioGroup-container {
        position: absolute;
        top: 42px;
        right: 45px;
    }
}
</style>
