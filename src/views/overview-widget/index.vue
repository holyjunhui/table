<template>
    <Widget title="近一周告警统计总览" class="overview-widget">
        <div class="switch-line">
            <el-select v-model="category" placeholder="请选择" size="small">
                <el-option label="事件总览" value="week" size="small" />
                <el-option label="近一月" value="month" size="small" />
            </el-select>
            <el-select v-model="range" placeholder="请选择" size="small">
                <el-option label="近一周" value="week" size="small" />
                <el-option label="近一月" value="month" size="small" />
            </el-select>
        </div>
        <div class="chart" ref="chart"></div>
        <ul class="status-list">
            <li class="status-item" v-for="item in status" :key="item.name">
                <h5>{{ item.name }}</h5>
                <p class="text-gradient">{{ item.value }}</p>
            </li>
        </ul>
    </Widget>
</template>

<script>
import G2 from "@antv/g2";
import Widget from "@/components/Widget";
import data from "./data";

export default {
    components: {Widget},
    data() {
        return {
            list: data,
            status: [
                {name: "未确认", value: 7929},
                {name: "已确认", value: 6000},
                {name: "待相应", value: 8239},
                {name: "待处理", value: 4943},
                {name: "已处理", value: 7343},
                {name: "已超时", value: 5292}
            ],
            category: "week",
            range: "week"
        };
    },

    mounted() {
        const chart = new G2.Chart({
            container: this.$refs.chart,
            forceFit: true,
            height: 188,
            padding: [5, 0, 25, 0]
        });
        chart.source(this.list);
        chart.axis("date", {
            line: {
                lineWidth: 1,
                stroke: "#02387E",
                lineDash: [2, 3]
            },
            label: {
                textStyle: {
                    fontSize: 12,
                    fill: "#FFF"
                }
            },
            tickLine: null
        });
        chart.axis("value", {
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
        chart.tooltip({showTitle: false});
        chart.area().position("date*value").shape("smooth").color("l(90) 0:#0380FF 1:rgba(0, 0, 0, 0)")
            .opacity(1)
            .tooltip(false);
        chart.point().position("date*value").size(3).style({
            fill: "#FFF",
            lineWidth: 7,
            stroke: "rgba(255, 255, 255, 0.3)"
        })
            .label("value", {
                htmlTemplate: text => `<span class="value-label">${text}</span>`
            })
            .active(false);
        chart.render();
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
