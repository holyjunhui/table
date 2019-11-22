<template>
    <Widget title="近一周告警统计总览" class="overview-widget">
        <div class="switch-line">
            <el-select
                v-model="alertCategory"
                placeholder="请选择"
                size="small"
                @change="handleCategoryChange"
            >
                <el-option label="事件总览" value="all" />
                <el-option
                    v-for="item in categories"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code"
                />
            </el-select>
            <!-- <el-select
                v-model="range"
                placeholder="请选择"
                size="small"
                @change="handleTiemChange"
            >
                <el-option label="近一周" value="week" size="small" />
                <el-option label="近一月" value="month" size="small" />
            </el-select> -->
        </div>
        <div class="chart" ref="chart"></div>
        <ul class="status-list">
            <li class="status-item" v-for="item in status" :key="item.status">
                <h5>{{ (alert_status.find(l => l.code === item.status) || {}).name }}</h5>
                <p
                    class="text-gradient"
                    :class="{isLarge16Count: is16Active,
                             isLarge12Count: is12Active}"
                    :title="item.count"
                >
                    {{ item.count }}
                </p>
            </li>
        </ul>
    </Widget>
</template>

<script>
const FLUSH_TIME = 1000 * 60 * 60;

import G2 from "@antv/g2";
import Widget from "@/components/Widget";
// import data from "./data";
import {dateFormatter} from "@/utils/";

import {getAlertsRecent} from "@/api/";
export default {
    components: {Widget},
    data() {
        return {
            list: [],
            areaData: [],
            ticks: [],
            status: [],
            is16Active: false,
            is12Active: false,
            alertCategory: "all",
            range: "week",
            categories: [
                {
                    "code": "availability",
                    "name": "可用性"
                },
                {
                    "code": "content-change",
                    "name": "页面变更"
                },
                // {
                //     "code": "ddos",
                //     "name": "DDoS攻击"
                // },
                {
                    "code": "illegal-content",
                    "name": "违规内容"
                },
                {
                    "code": "spamlink",
                    "name": "网站黑链"
                },
                {
                    "code": "phishing",
                    "name": "钓鱼网站"
                },
                // {
                //     "code": "threat",
                //     "name": "威胁情报"
                // },
                {
                    "code": "trojan",
                    "name": "网页木马"
                },
                {
                    "code": "vul",
                    "name": "安全漏洞"
                }
            ]
        };
    },
    computed: {
        alert_status() {
            return this.$store.state.meta.alert_status || [];
        }
    },
    async created() {
        const data = await getAlertsRecent("week");
        // 告警线形图
        const arrayData = data.data.by_date;
        // 列表
        const arrayType = data.data.by_status;
        this.status = arrayType;
        this.status.forEach(item => {
            if (item.count.toString().length >= 5) {
                this.is16Active = true;
            } else if (item.count.toString().length >= 10) {
                this.is12Active = true;
            }
        });
        // 根据数据的大小显示不同的font-size
        const monitorData = this.formatter(arrayData);
        this.initAreaChart(monitorData);

    },
    mounted() {
        this.updata();
        setInterval(() => {
            this.updata();
        }, FLUSH_TIME);
    },
    methods: {
        async updata() {
            const data = await getAlertsRecent("week");
            const arrayData = data.data.by_date;
            this.areaData = arrayData;
            const monitorData = this.formatter(arrayData);
            // this.initAreaChart(monitorData);
            this.$nextTick(() => {
                this.areaChart.changeData(monitorData);
                this.areaChart.repaint();
            //    chart.changeData(this.formatter())
            });
        },
        initAreaChart(data) {
            const chart = new G2.Chart({
                container: this.$refs.chart,
                forceFit: true,
                height: 188,
                padding: [30, 20, 30, 20]
            });
            chart.source(data, {
                value: {min: 0},
                date_time: {
                    type: "time",
                    range: [0, 1],
                    ticks: this.ticks
                },
                availability: {
                    alias: "可用性"
                },
                "content-change": {
                    alias: "页面变更"
                },
                // ddos: {
                //     alias: "DDos攻击"
                // },
                "illegal-content": {
                    alias: "违规内容"
                },
                phishing: {
                    alias: "钓鱼网站"
                },
                spamlink: {
                    alias: "网站黑链"
                },
                // threat: {
                //     alias: "威胁情报"
                // },
                trojan: {
                    alias: "网页木马"
                },
                vul: {
                    alias: "安全漏洞"
                }
            });

            // chart.source(this.list);
            chart.axis("date_time", {
                line: {
                    lineWidth: 1,
                    stroke: "#02387E",
                    lineDash: [2, 3]
                },
                label: {
                    formatter: val => val.substr(5).replace("-", "."),
                    textStyle: {
                        fontSize: 12,
                        fill: "#FFF"
                    }
                },
                tickLine: null
            });
            chart.axis("totalValue", {
                line: false,
                title: false,
                label: false,
                grid: {
                    type: "line",
                    lineStyle: {
                        lineWidth: 1,
                        stroke: "#02387E",
                        lineDash: [2, 3]
                    }
                }
            });
            // chart.tooltip({showTitle: false});

            chart.tooltip({
                showTitle: true,
                crosshairs: {type: "y"},
                itemTpl: "<li data-index={index}>{name}: {value}</li>",
                follow: true,
                shared: true
            });
            const tooltipFields = "availability*ddos*spamlink*content-change*illegal-content*phishing*threat*trojan*vul";

            chart.area().position("date_time*totalValue").shape("smooth").color("l(90) 0:#0380FF 1:rgba(0, 0, 0, 0)")
                .opacity(1)
                .tooltip(false);
            chart.point().position("date_time*totalValue").size(3).style({
                fill: "#FFF",
                lineWidth: 7,
                stroke: "rgba(255, 255, 255, 0.3)"
            })
                .opacity("date_time", value => {
                    return this.ticks.indexOf(value) > -1 ? 1 : 0;
                })
                .label("date_time*totalValue", (date, value) => {
                    return this.ticks.indexOf(date) > -1 ? value : "";
                }, {
                    htmlTemplate: text => `<span class="value-label">${text}</span>`
                })
                .active(false);
            chart.line().position("date_time*totalValue").shape("smooth").opacity(0)
                .size(1.5)
                .tooltip(tooltipFields);
            chart.render();
            this.areaChart = chart;
        },
        handleCategoryChange() {
            const data = this.formatter(this.areaData);
            this.$nextTick(() => {
                this.areaChart.changeData(data);
                this.areaChart.repaint();
            //    chart.changeData(this.formatter())
            });
        },
        handleTiemChange(val) {
            // 貌似当前的时间监控数据没有，只能获取到当前时间前天的数据
            // const currentTime = new Date();
            // const oneWeekTime = 24 * 3600 * 7 * 1000;
            // const oneMonthTime = 24 * 3600 * 30 * 1000;
            // const computTime = val === "week" ? currentTime - oneWeekTime : currentTime - oneMonthTime;
            // const time =  {
            //     start: new Date(computTime),
            //     end: new Date(currentTime)
            // };

            getAlertsRecent(val).then(res => {
                this.areaData = res.data;
                const data = this.formatter(res.data.by_date);
                this.$nextTick(() => {
                    this.areaChart.source(data, {
                        date_time: {
                            type: "time",
                            range: [0, 1],
                            ticks: this.ticks
                        }
                    });
                    this.areaChart.changeData(data);
                    this.areaChart.repaint();
                });
            });

        },
        formatter(data) {
            // 深复制防止修改源数据
            const parseData = JSON.parse(JSON.stringify(data));
            if (data.length === 0) {
                return;
            }
            this.updateTicks(parseData);
            const formatData = parseData.map(item => {
                if (this.alertCategory !== "all") {
                    item.data = {
                        [this.alertCategory]: item.data[this.alertCategory]
                    };
                }
                const total = Object.values(item.data);
                item.totalValue = total.reduce((pre, next) => pre + next);
                item = {...item.data, ...item};

                return item;
            });
            return formatData;
        },
        updateTicks(data) {
            const tickCount = 7;
            const day = 1000 * 86400;
            const dateList = data.map(item => new Date(item.date_time)).sort((a, b) => a - b);
            const startDate = dateList[0];
            const endDate = dateList[dateList.length - 1];

            const dateGap = Math.max(Math.floor((endDate - startDate) / (tickCount - 1) / day), 1);
            this.ticks = new Array(tickCount).fill(0).map((_, index) => {
                return dateFormatter(new Date(+startDate + index * dateGap * day), "yyyy-MM-dd");
            });
        },
        dateFormat(value) {
            return dateFormatter(new Date(value), "yyyy-MM-dd hh:mm:ss");
        }
    }

};
</script>
<style lang="scss" scoped>
.overview-widget {
    margin-top: -12px;
}

.switch-line {
    height: 32px;
    text-align: right;
    position: relative;
    z-index: 100;
    margin: 7px 0 26px;
}

.status-list {
    display: flex;
    justify-content: center;
    margin: 0 0 -10px;
    padding: 0;
    list-style-type: none;

    .status-item {
        padding: 4px 0;
        text-align: center;
        width: 66px;
        height: 58px;
        background-color: rgba(3, 128, 255, 0.1);
        margin: 0 6px;
        .text-gradient {
            width: 66px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
				.isLarge16Count {
					font-size: 16px;
				}
				.isLarge12Count {
					font-size: 12px;
				}
    }

    h5 {
        height: 26px;
        line-height: 26px;
        margin: 0;
        font-size: 16px;
    }

    p {
        font-family: "汉仪菱心体", sans-serif;
        height: 32px;
        line-height: 32px;
        margin: 0;
        font-size: 30px;
    }
}
</style>

<style lang="scss">
.overview-widget {

    .switch-line {
        .el-select {
            width: 120px;
            margin-left: 12px;
        }

        .el-input__inner,
        .el-input__inner:focus,
        .el-select:hover .el-input__inner,
        .el-select .el-input.is-focus .el-input__inner {
            background-color: #030B1F;
            color: #0356A9;
            border-color: #0356A9;
            border-radius: 0;

            &::placeholder {
                color: #0356A9;
            }
        }

        .el-select .el-input .el-select__caret {
            color: #0356A9;
        }
    }

    .value-label {
        display: block;
        color: #FFF;
        font-size: 12px;
        background: rgba(58, 128, 247, 0.4);
        padding: 0 8px;
        height: 15px;
        line-height: 15px;
        border-radius: 8px;
    }
}

.el-select-dropdown.el-popper {
    color: #0356A9;
    background-color: #030B1F;
    border-color: #0356A9;
    border-radius: 0;

    .el-select-dropdown__item {
        color: #0356A9;

        &.selected {
            color: #0356A9;
        }

        &.hover {
            background-color: rgba(255, 255, 255, 0.06);
        }
    }

    &[x-placement^="bottom"] .popper__arrow {
        border-bottom-color: #0356A9;

        &::after {
            border-bottom-color: #030B1F;
        }
    }
}
</style>
