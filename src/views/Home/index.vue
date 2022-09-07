<template>
    <div class="container">
        <div class="search">
            <el-form :inline="true" :rules="rules" :model="form" ref="form" class="demo-form-inline">
                <el-form-item prop="start" label="日期范围：">
                    <el-date-picker
                        size="small"
                        v-model="form.start"
                        type="datetime"
                        placeholder="请输入日期"
                        default-time="00:00:00"
                    />
                </el-form-item>
                <el-form-item>
                    <span>-</span>
                </el-form-item>
                <el-form-item prop="end">
                    <el-date-picker
                        size="small"
                        props="end"
                        v-model="form.end"
                        type="datetime"
                        placeholder="请输入日期"
                        default-time="23:59:59"
                    />
                </el-form-item>

                <el-form-item>
                    <el-button size="small" @click="handleSearch('search')" type="primary">查询</el-button>
                    <el-button size="small" @click="handleSearch('all')">All下载</el-button>
                    <el-button size="small" @click="handleSearch('ying')">YingLong下载</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="table-wrap">
            <el-tabs type="border-card" v-model="activeName" @tab-click="handleChange">
                <el-tab-pane label="All" name="first">
                    <el-table
                        v-if="tableData.length"
                        :data="tableData"
                        :span-method="objectSpanMethod"
                        border
                        :header-cell-style="headerStyle"
                        :cell-style="cellStyle"
                        style="font-size: 14px;"
                    >
                        <el-table-column label="YING LONG POWER ">
                            <el-table-column
                                prop="index0"
                                label=""
                                min-width="280"
                            />
                            <el-table-column
                                prop="index1"
                                label=""
                                min-width="160"
                            />
                        </el-table-column>
                        <el-table-column
                            prop="index2"
                            min-width="220"
                            :label="start + ' 抄见数'"
                        />
                        <el-table-column
                            prop="index3"
                            min-width="220"
                            :label="end + ' 抄见数'"
                        />
                        <el-table-column
                            prop="index4"
                            label="用量"
                        />
                        <el-table-column
                            prop="index5"
                            min-width="180"
                            label="二级合计（损耗XX%）"
                        />
                        <el-table-column
                            prop="index6"
                            width="100"
                            label=""
                        />
                        <el-table-column
                            prop="index7"
                            width="125"
                            label=""
                        />
                        <el-table-column
                            prop="index8"
                            width="125"
                            label=""
                        />
                        <el-table-column
                            prop="index9"
                            width="125"
                            label=""
                        />
                        <el-table-column
                            prop="index10"
                            width="240"
                            label=""
                        />

                        <el-table-column
                            prop="index11"
                            min-width="220"
                            :label="start + ' 抄见数'"
                        />
                        <el-table-column
                            prop="index12"
                            min-width="220"
                            :label="end + ' 抄见数'"
                        />
                        <el-table-column
                            prop="index13"
                            label="用量"
                        />
                        <el-table-column
                            prop="index14"
                            label="三级合计"
                        />
                    </el-table>
                    <div v-else><el-empty description="暂无数据" :image-size="50" /></div>
                </el-tab-pane>
                <el-tab-pane label="YingLong" name="second">
                    <div class="yinglong-wrap" v-if="pieData.length">
                        <div class="chart-wrap">
                            <div class="block-wrap">
                                <div class="block-container">
                                    <div class="yinglong-time">
                                        <h3 class="title">能耗统计</h3>
                                        <span>{{ start + ' - ' + end }}</span>
                                    </div>
                                    <div class="block-content-container">
                                        <div class="second-block-wrap">
                                            <h4>{{ blockData[0] && blockData[0].name }}</h4>
                                            <span>{{ blockData[0] && blockData[0].value + ' KWH' }}</span>
                                            <div class="block-content">
                                                <p>{{ blockData[1] && blockData[1].name }} <span>{{ (((blockData[1].value) / (blockData[1].value + blockData[2].value)) * 100).toFixed(2) + '%' }}</span></p>
                                                <p>{{ blockData[2] && blockData[2].name }} <span>{{ (((blockData[2].value) / (blockData[1].value + blockData[2].value)) * 100).toFixed(2) + '%' }}</span></p>
                                            </div>
                                            <div
                                                class="block-line"
                                                ref="blokcLine1"
                                            >
                                            </div>
                                        </div>
                                        <div class="first-block-wrap">
                                            <div class="one">
                                                <h4>{{ blockData[1] && blockData[1].name }}</h4>
                                                <span>{{ blockData[1] && blockData[1].value + ' KWH' }}</span>

                                                <div class="block-content">
                                                    <p>{{ blockData[3] && blockData[3].name }} <span>{{ (((blockData[3].value) / (blockData[3].value + blockData[4].value)) * 100).toFixed(2) + '%' }}</span></p>
                                                    <p>{{ blockData[4] && blockData[4].name }} <span>{{ (((blockData[4].value) / (blockData[3].value + blockData[4].value)) * 100).toFixed(2) + '%' }}</span></p>
                                                </div>
                                                <div
                                                    class="block-line"
                                                    ref="blokcLine2"
                                                >
                                                </div>
                                            </div>
                                            <div class="two">
                                                <h4>{{ blockData[2] && blockData[2].name }}</h4>
                                                <span>{{ blockData[2] && blockData[2].value + ' KWH' }}</span>
                                                <div class="block-content">
                                                    <p>{{ blockData[2] && blockData[2].name }} <span>{{ (((blockData[2].value) / (blockData[2].value)) * 100).toFixed(2) + '%' }}</span></p>
                                                    <p></p>
                                                </div>
                                                <div
                                                    class="block-line"
                                                    ref="blokcLine3"
                                                >
                                                </div>
                                            </div>
                                        </div>

                                        <div class="three-block-wrap">
                                            <div class="one">
                                                <h4>{{ blockData[3] && blockData[3].name }}</h4>
                                                <span>{{ blockData[3] && blockData[3].value + ' KWH' }}</span>
                                                <div class="block-content">
                                                    <p>{{ blockData[9] && blockData[9].name }} <span>{{ (((blockData[9].value) / (blockData[9].value + blockData[10].value)) * 100).toFixed(2) + '%' }}</span></p>
                                                    <p>{{ blockData[10] && blockData[10].name }} <span>{{ (((blockData[10].value) / (blockData[9].value + blockData[10].value)) * 100).toFixed(2) + '%' }}</span></p>
                                                </div>
                                                <div
                                                    class="block-line"
                                                    ref="blokcLine4"
                                                >
                                                </div>
                                            </div>
                                            <div class="two">
                                                <h4>{{ blockData[4] && blockData[4].name }}</h4>
                                                <span>{{ blockData[4] && blockData[4].value + ' KWH' }}</span>
                                                <div class="block-content4">
                                                    <div>
                                                        <p>{{ blockData[5] && blockData[5].name }} <span>{{ (((blockData[5].value) / (blockData[5].value + blockData[6].value + blockData[7].value + blockData[8].value)) * 100).toFixed(2) + '%' }}</span></p>
                                                        <p>{{ blockData[6] && blockData[6].name }} <span>{{ (((blockData[6].value) / (blockData[5].value + blockData[6].value + blockData[7].value + blockData[8].value)) * 100).toFixed(2) + '%' }}</span></p>
                                                    </div>
                                                    <div>
                                                        <p>{{ blockData[7] && blockData[7].name }} <span>{{ (((blockData[7].value) / (blockData[5].value + blockData[6].value + blockData[7].value + blockData[8].value)) * 100).toFixed(2) + '%' }}</span></p>
                                                        <p>{{ blockData[8] && blockData[8].name }} <span>{{ (((blockData[8].value) / (blockData[5].value + blockData[6].value + blockData[7].value + blockData[8].value)) * 100).toFixed(2) + '%' }}</span></p>
                                                    </div>
                                                </div>
                                                <div
                                                    class="block-line"
                                                    ref="blokcLine5"
                                                >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="yinglong-table">
                                <div class="yinglong-pie-wrap">
                                    <h3>能耗占比</h3>
                                    <div
                                        class="pie-container"
                                        v-if="pieData.length"
                                        ref="chart"
                                        auto-size
                                    >
                                    </div>
                                </div>
                                <div class="yinglong-table-container">
                                    <img src="../../assets/images/logo.jpg" alt="logo" class="yinglong-logo" />
                                    <div class="yinglong-bar" ref="barChart"></div>
                                </div>
                            </div>
                        </div>
                        <div class="yinglong-line">
                            <div class="yinglong-time">
                                <h3>YING LONG POWER</h3>
                                <span>{{ start + ' - ' + end }}</span>
                            </div>
                            <div
                                class="other-container"
                                ref="otherChart"
                                v-if="secondTableData.length"
                                :style="{width: '99%'}"
                                auto-size
                            >
                            </div>
                        </div>
                    </div>
                    <div v-else><el-empty description="暂无数据" :image-size="50" /></div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import {getHomeData} from "@/api/index";
import dayjs from "dayjs";

export default {
    data() {
        return {
            form: {
                start: "",
                end: ""
            },
            start: "",
            end: "",
            rules: {
                start: [{required: true, message: "请选择日期", trigger: "change"}],
                end: [{required: true, message: "请选择日期", trigger: "change"}]
            },
            tableData: [],
            secondTableData: [],
            activeName: "first",
            pieData: [],
            blockData: [],
            barData: {
                xAxis: [],
                yAxis: []
            },
            lineData: {
                xais: [],
                yais: [],
                yais2: []

            }
        };
    },

    methods: {
        handleChange(v) {
            if (v.name === "second") {
                setTimeout(() => {
                    this.pieData.length && this.initChart();
                }, 500);
            }
        },
        initChart() {
            const myChart = this.$eCharts.init(this.$refs.chart);
            const barChart = this.$eCharts.init(this.$refs.barChart);
            const otherChart = this.$eCharts.init(this.$refs.otherChart);
            const blockLineChart1 = this.$eCharts.init(this.$refs.blokcLine1);
            const blockLineChart2 = this.$eCharts.init(this.$refs.blokcLine2);
            const blockLineChart3 = this.$eCharts.init(this.$refs.blokcLine3);
            const blockLineChart4 = this.$eCharts.init(this.$refs.blokcLine4);
            const blockLineChart5 = this.$eCharts.init(this.$refs.blokcLine5);

            const colors = ["#4ac29a", "#4e54c8", "#C2756F"];
            const option = {
                tooltip: {
                    trigger: "item",
                    formatter: "{b} {c}"
                },
                series: {
                    type: "sunburst",
                    color: colors,
                    data: this.pieData,
                    radius: [0, "100%"],
                    label: {
                        rotate: "radial",
                        color: "#fff",
                        fontSize: 10
                    }
                }
            };

            const otherOption = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross",
                        label: {
                            backgroundColor: "#6a7985"
                        }
                    }
                },
                grid: {
                    left: "3%",
                    right: "3%",
                    bottom: "3%",
                    containLabel: true
                },
                xAxis: [
                    {
                        type: "category",
                        data: this.lineData.xais,
                        boundaryGap: false
                    }
                ],
                yAxis: [
                    {
                        type: "value"
                    }
                ],
                series: [
                    {
                        type: "line",
                        lineStyle: {
                            width: 0
                        },
                        color: ["#6961f2"],
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new this.$eCharts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "#726ED7"
                                },
                                {
                                    offset: 1,
                                    color: "#6961f2"
                                }
                            ])
                        },
                        emphasis: {
                            focus: "series"
                        },
                        data: this.lineData.yais
                    },
                    {
                        type: "line",
                        lineStyle: {
                            width: 0
                        },
                        color: ["#f36762"],
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new this.$eCharts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "#DB8F87"
                                },
                                {
                                    offset: 1,
                                    color: "#f36762"
                                }
                            ])
                        },
                        emphasis: {
                            focus: "series"
                        },
                        data: this.lineData.yais2
                    }
                ]
            };

            const barOption = {

                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    }
                },
                grid: {
                    top: "30",
                    left: "2%",
                    right: "3%",
                    bottom: "20",
                    containLabel: true
                },
                xAxis: {
                    type: "value",
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: "category",
                    data: this.barData.yAxis
                },
                series: [
                    {
                        name: "2011",
                        type: "bar",
                        itemStyle: {
                            color: "#DB8F87"
                        },
                        data: this.barData.xAxis
                    }
                ]
            };
            const blockLineOption = num => {
                return {
                    xAxis: {
                        type: "category",
                        show: false,
                        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "ff", "aa", "fda", "fea"]
                    },
                    yAxis: {
                        type: "value",
                        show: false
                    },
                    grid: {
                        top: "1%",
                        left: "1%",
                        right: "1%",
                        bottom: "1%",
                        containLabel: true
                    },
                    series: [
                        {
                            data: [20, 30, 24, 35, 30, 23, 29, 20, 35, 30, 25],
                            type: "line",
                            stack: "Total",
                            showSymbol: false,
                            lineStyle: {
                                color: colors[num]
                            }
                        }
                    ]
                };
            };

            myChart.setOption(option);
            otherChart.setOption(otherOption);
            barChart.setOption(barOption);
            blockLineChart1.setOption(blockLineOption(0));
            blockLineChart2.setOption(blockLineOption(2));
            blockLineChart3.setOption(blockLineOption(1));
            blockLineChart4.setOption(blockLineOption(2));
            blockLineChart5.setOption(blockLineOption(2));

            myChart.on("click", params => {
                if (params.data) {
                    if (params.data.child) {
                        myChart.setOption({
                            series: [{
                                data: params.data.child
                            }],
                            // 返回按钮
                            graphic: [
                                {
                                    type: "text",
                                    right: "3%",
                                    top: "3%",
                                    style: {
                                        text: "返回",
                                        fontSize: 16,
                                        fill: "red"
                                    },
                                    onclick: () => {
                                        myChart.setOption(option);
                                    }
                                }
                            ]
                        });
                    }
                }
            });
        },

        getHomeData() {

            getHomeData({start: this.start, end: this.end}).then(res => {
                this.tableData = res.data.all;
                this.secondTableData = res.data.YING;
                const r = res.data.YING;
                const blockData = [

                    {
                        name: r[0].index0,
                        value: r[1].index0
                    },
                    {
                        name: r[2].index0,
                        value: r[3].index0
                    },
                    {
                        name: r[2].index6,
                        value: r[3].index6
                    },

                    {
                        name: r[4].index4,
                        value: r[5].index4
                    },
                    {
                        name: r[4].index0,
                        value: r[5].index0
                    },
                    {
                        name: r[6].index0,
                        value: r[7].index0
                    },
                    {
                        name: r[6].index1,
                        value: r[7].index1
                    },
                    {
                        name: r[6].index2,
                        value: r[7].index2
                    },
                    {
                        name: r[6].index3,
                        value: r[7].index3
                    },
                    {
                        name: r[6].index4,
                        value: r[7].index4
                    },
                    {
                        name: r[6].index5,
                        value: r[7].index5
                    }
                ];
                this.blockData = blockData.map(item => {
                    const name = item.name.indexOf("POWER") !== -1 ? item.name.slice(0, item.name.indexOf("POWER")) : item.name;
                    const value = item.value.indexOf("KWH") !== -1 ? item.value.slice(0, item.value.indexOf("KWH")) : item.value;
                    return {
                        ...item,
                        name,
                        value: +value
                    };
                });
                console.log("blockData", this.blockData);
                const barData = this.blockData.slice(5);
                const xAxis = [];
                const yAxis = [];
                barData.forEach(item => {
                    yAxis.push(item.name);
                    xAxis.push(item.value);
                });
                this.barData = {
                    xAxis,
                    yAxis
                };
                console.log("this.barData", this.barData);
                this.pieData = res.data.pie.map(item => this.mapTree(item));
                this.lineData = res.data.pie_data || {
                    xais: [],
                    yais: [],
                    yais2: []
                };
            });
        },
        mapTree(org) {
            const haveChildren = Array.isArray(org.child) && org.child.length > 0;
            const name = org.name.endsWith("POWER") ? org.name.slice(0, org.name.indexOf("POWER")) : org.name;
            return {
                // 分别将我们查询出来的值做出改变他的key
                name,
                value: org.value,

                // 判断它是否存在子集，若果存在就进行再次进行遍历操作，知道不存在子集便对其他的元素进行操作
                children: haveChildren ? org.child.map(i => this.mapTree(i)) : []
            };
        },

        downHomeData(type) {
            const origin = window.location.origin;

            type === "all" ? window.open(`${origin}/jinshan/report_export?start=${this.start}&end=${this.end}`) : window.open(`${origin}/jinshan/report_yinglong_export?start=${this.start}&end=${this.end}`);
        },

        handleSearch(type) {

            this.$refs.form.validate(valid => {
                if (valid) {
                    if (this.form.end.valueOf() > this.form.start.valueOf()) {
                        this.start = dayjs(this.form.start).format("YYYY-MM-DD HH:mm:ss");
                        this.end = dayjs(this.form.end).format("YYYY-MM-DD HH:mm:ss");
                        type === "search" ? this.getHomeData() : this.downHomeData(type);
                        if (this.activeName === "second") {
                            setTimeout(() => {
                                this.pieData.length && this.initChart();
                            }, 500);
                        }
                    } else {
                        this.$message.warning("结束日期比开始日期早");
                    }
                } else {
                    return false;
                }
            });
        },

        headerStyle(item) {
            const {rowIndex} = item;
            if (rowIndex === 1) {
                return {display: "none"};
            }
        },
        cellStyle(item) {
            const {rowIndex, columnIndex} = item;
            if (columnIndex === 0) {
                if (rowIndex === 0) {
                    return {
                        background: "#5AB032",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"

                    };
                } else if (rowIndex === 50) {
                    return {
                        background: "#FFDA48",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"
                    };
                } else if (rowIndex === 56) {
                    return {
                        background: "#93BFE3",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"
                    };
                }
            } else if (columnIndex === 1) {
                if ([0, 10, 22, 31].includes(rowIndex)) {
                    return {
                        background: "#5AB032",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"
                    };
                } else if ([50, 51, 52, 53, 54, 55].includes(rowIndex)) {
                    return {
                        background: "#FFDA48",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"
                    };
                } else if ([56, 58].includes(rowIndex)) {
                    return {
                        background: "#93BFE3",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"
                    };
                }
            } else if (columnIndex === 5) {
                if ([0].includes(rowIndex)) {
                    return {
                        background: "#5AB032",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"
                    };
                } else if ([50, 51].includes(rowIndex)) {
                    return {
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"
                    };
                }
            } else if (columnIndex === 6) {
                if ([0, 22].includes(rowIndex)) {
                    return {
                        background: "#9ED287",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"
                    };
                } else if ([50, 51].includes(rowIndex)) {
                    return {
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"
                    };
                }
            } else if (columnIndex === 7) {
                if ([50, 51].includes(rowIndex)) {
                    return {
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"
                    };
                }
                return {
                    background: "#B7D8F1",
                    borderBottom: "1px solid #000",
                    borderRight: "1px solid #000"
                };

            } else if (columnIndex === 8) {
                if ([50, 51].includes(rowIndex)) {
                    return {
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"
                    };
                }
                return {
                    background: "#FFF1CB",
                    borderBottom: "1px solid #000",
                    borderRight: "1px solid #000"
                };

            } else if (columnIndex === 9) {
                if ([50, 51].includes(rowIndex)) {
                    return {
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"
                    };
                }
                return {
                    background: "#DDEBF7",
                    borderBottom: "1px solid #000",
                    borderRight: "1px solid #000"
                };

            }
            return {
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000"
            };
        },
        objectSpanMethod(item) {
            const {rowIndex, columnIndex} = item;
            if (columnIndex === 0) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 50,
                        colspan: 1
                    };
                } else if (rowIndex === 50) {
                    return {
                        rowspan: 6,
                        colspan: 1
                    };
                } else if (rowIndex === 56) {
                    return {
                        rowspan: 4,
                        colspan: 1
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };

            } else if (columnIndex === 1) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 10,
                        colspan: 1
                    };
                } else if (rowIndex === 10) {
                    return {
                        rowspan: 12,
                        colspan: 1
                    };
                } else if (rowIndex === 22) {
                    return {
                        rowspan: 9,
                        colspan: 1
                    };
                } else if (rowIndex === 31) {
                    return {
                        rowspan: 19,
                        colspan: 1
                    };
                } else if ([50, 51, 52, 53, 54, 55].includes(rowIndex)) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                } else if ([56, 58].includes(rowIndex)) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            } else if (columnIndex === 2) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 10,
                        colspan: 1
                    };
                } else if (rowIndex === 10) {
                    return {
                        rowspan: 12,
                        colspan: 1
                    };
                } else if (rowIndex === 22) {
                    return {
                        rowspan: 9,
                        colspan: 1
                    };
                } else if (rowIndex === 31) {
                    return {
                        rowspan: 19,
                        colspan: 1
                    };
                } else if ([50, 51, 52, 53, 54, 55].includes(rowIndex)) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                } else if ([56, 58].includes(rowIndex)) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            } else if (columnIndex === 3) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 10,
                        colspan: 1
                    };
                } else if (rowIndex === 10) {
                    return {
                        rowspan: 12,
                        colspan: 1
                    };
                } else if (rowIndex === 22) {
                    return {
                        rowspan: 9,
                        colspan: 1
                    };
                } else if (rowIndex === 31) {
                    return {
                        rowspan: 19,
                        colspan: 1
                    };
                } else if ([50, 51, 52, 53, 54, 55].includes(rowIndex)) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                } else if ([56, 58].includes(rowIndex)) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            } else if (columnIndex === 4) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 10,
                        colspan: 1
                    };
                } else if (rowIndex === 10) {
                    return {
                        rowspan: 12,
                        colspan: 1
                    };
                } else if (rowIndex === 22) {
                    return {
                        rowspan: 9,
                        colspan: 1
                    };
                } else if (rowIndex === 31) {
                    return {
                        rowspan: 19,
                        colspan: 1
                    };
                } else if ([50, 51, 52, 53, 54, 55].includes(rowIndex)) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                } else if ([56, 58].includes(rowIndex)) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            } else if (columnIndex === 5) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 50,
                        colspan: 1
                    };
                } else if (rowIndex === 50) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                } else if (rowIndex === 51) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            } else if (columnIndex === 6) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 22,
                        colspan: 1
                    };
                } else if (rowIndex === 22) {
                    return {
                        rowspan: 28,
                        colspan: 1
                    };
                } else if (rowIndex === 50) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                } else if (rowIndex === 51) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                } else if (rowIndex === 52) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            } else if (columnIndex === 7) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 22,
                        colspan: 1
                    };
                } else if (rowIndex === 22) {
                    return {
                        rowspan: 28,
                        colspan: 1
                    };
                } else if (rowIndex === 50) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                } else if (rowIndex === 51) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                } else if (rowIndex === 52) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            } else if (columnIndex === 8) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 8,
                        colspan: 1
                    };
                } else if (rowIndex === 8) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                } else if (rowIndex === 10) {
                    return {
                        rowspan: 7,
                        colspan: 1
                    };
                } else if (rowIndex === 17) {
                    return {
                        rowspan: 5,
                        colspan: 1
                    };
                } else if (rowIndex === 22) {
                    return {
                        rowspan: 9,
                        colspan: 1
                    };
                } else if (rowIndex === 31) {
                    return {
                        rowspan: 19,
                        colspan: 1
                    };
                } else if (rowIndex === 50) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                } else if (rowIndex === 51) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            } else if (columnIndex === 9) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 8,
                        colspan: 1
                    };
                } else if (rowIndex === 8) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                } else if (rowIndex === 10) {
                    return {
                        rowspan: 7,
                        colspan: 1
                    };
                } else if (rowIndex === 17) {
                    return {
                        rowspan: 5,
                        colspan: 1
                    };
                } else if (rowIndex === 22) {
                    return {
                        rowspan: 9,
                        colspan: 1
                    };
                } else if (rowIndex === 31) {
                    return {
                        rowspan: 19,
                        colspan: 1
                    };
                } else if (rowIndex === 50) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                } else if (rowIndex === 51) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            } else if (columnIndex === 10) {
                return {
                    rowspan: 1,
                    colspan: 1
                };
            } else if (columnIndex === 11) {

                return {
                    rowspan: 1,
                    colspan: 1
                };
            } else if (columnIndex === 12) {

                return {
                    rowspan: 1,
                    colspan: 1
                };
            } else if (columnIndex === 13) {

                return {
                    rowspan: 1,
                    colspan: 1
                };
            } else if (columnIndex === 14) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 50,
                        colspan: 1
                    };
                } else if (rowIndex === 50) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                } else if (rowIndex === 52) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                } else if (rowIndex === 54) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                } else if (rowIndex === 56) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                } else if (rowIndex === 58) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            }

        }
    }
};
</script>
<style lang="scss" scoped>
	.el-button {
			box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
	}
	.container {
		padding: 20px;
		background: #f8f9fd;
		min-width: 1234px;
		overflow: auto;
		.search {
			padding: 0 20px;
			background: #fff;
			.el-form-item {
				margin-top: 22px;
			}
		}
		.table-wrap {
			margin-top: 20px;
			background: #fff;
			width: 100%;
			.el-tabs {
				width: 100%;
			}
			.el-table__body-wrapper{
				border-top: 1px solid #000;
				border-bottom: 1px solid #000;
				border-left: 1px solid #000;
			}
		}
		.yinglong-wrap {
			background: rgba(0, 0, 0, 0.1);
			padding-bottom: 10px;
			min-width: 1234px;
			overflow: auto;
			.yinglong-time {
				display: flex;
				justify-content: space-between;
				padding: 10px 0px;
				padding-bottom: 5px;
				border-bottom: 3px solid #9F99F5;
				margin-bottom: 10px;
				h3 {
						margin: 0px;
				}
				span {
					margin-right: 20px;
					font-size: 16px;
				}
			}
			.chart-wrap {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.block-wrap {
					flex: 2;
					background: transparent;
					margin: 20px 20px 10px 20px;
					box-shadow: 0px 0px 5px 10px rgba(0, 0, 0, 0.2);
					border-radius: 20px;
					.block-container {
						background-color: rgba(255,255,255, 0.6);
						border-radius: 20px;
						padding: 0px 25px 0px 25px;
						.title {
							margin: 0;
						}
						.block-content-container {
							display: flex;

							.block-line {
								height: 40px;
								position: relative;
								bottom: -15px;
							}
							.first-block-wrap {
								margin: 0 20px 0px 20px;
							}
							.first-block-wrap, .second-block-wrap, .three-block-wrap {
								flex: 2
							}
							.one, .two, .second-block-wrap {
								color: #fff;
								box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
								margin-bottom: 20px;
								border-radius: 10px;
								padding: 10px;
								flex-flow: column nowrap;
								position: relative;
								h4 {
									font-size: 16px;
									line-height: 20px;
									margin: 0 0 0 10px;
								}
								span {
									font-size: 16px;
									margin-left: 10px;

								}
							}
							.one {
								background: linear-gradient(to right, #DB8F87,#f36762);
								box-sizing: border-box;
								display: flex;
								justify-content: space-between;
								.block-content {
									p {
										display: flex;
										justify-content: flex-end;
										margin: 5px 0;
										font-size: 12px;
										span {
											font-size: 12px;
										}
									}
								}
							}
							.two {
								background: linear-gradient(to right, #726ED7,#6961f2);
								box-sizing: border-box;
								display: flex;
								justify-content: space-between;
								.block-content {
									margin: 5px 10px 5px 10px;
									p {
										display: flex;
										justify-content: flex-end;
										margin: 5px 0;
										font-size: 14px;
										span {
											font-size: 14px;
										}
									}
								}
								.block-content4 {
									display: flex;
									justify-content: space-between;
									align-items: center;
										div {
											flex: 1;
											margin-right: 10px;
											p {
												display: flex;
												justify-content: space-between;
												font-size: 12px;
												margin: 5px 0;
												span {
													font-size: 12px;
												}
											}
										}
								}
							}

							.second-block-wrap {
								background: #12998e;
								align-self: stretch;
								margin: 0 0px 20px 20px;
								display: flex;
								justify-content: space-between;
								h4 {
									margin: 20px 10px;
									font-size: 20px;
								}
								span {
									font-size: 18px;
								}
								.block-line {
									height: 100px;
									position: relative;
									top: 0;
								}
								.block-content {
									margin-bottom: 15px;
									p {
										text-align: right;
										margin: 5px 0;
										font-size: 14px;
										span {
											margin-left: 50px;
											font-size: 14px;
										}
									}
								}
							}

							.three-block-wrap {
								.two {
									background: linear-gradient(to right, #DB8F87,#f36762);
								}
							}
						}
					}
				}
				.yinglong-table {
					flex: 2;
					display: flex;
					align-self: stretch;
					align-items: center;
					background: rgba(255,255,255, 0.6);
					margin: 20px 20px 10px 10px;
					box-shadow: 0px 0px 5px 10px rgba(0, 0, 0, 0.2);
					border-radius: 20px;

					.yinglong-pie-wrap {
						position: relative;
						min-width: 300px;
						padding-left: 15px;
						border-radius: 20px;
						background: rgba(255,255,255, 0.6);
						h3 {
							position: absolute;
							min-width: 240px;
							left: 25px;
							top: -10px;
							z-index: 200;
							padding-bottom: 5px;
							border-bottom: 3px solid #9F99F5;
						}
						.pie-container {
							display: flex;
							justify-content: center;
							align-items: center;
							margin-top: 30px;
							height: 337px;
						}
					}

					.yinglong-table-container {
						position: relative;
						width: 50%;
						flex: 1;
						padding: 0 0 0 10px;
						border-radius: 20px;
						background: rgba(255,255,255, 0.6);
						.yinglong-logo {
							min-width: 300px;
							height: 80px;
							position: relative;
							top: 15px;
							z-index: 200;
						}
						.yinglong-bar {
							height: 292px;

						}
					}
				}
			}
			.yinglong-line {
					padding: 10px 25px;
					background-color: rgba(255,255,255, 0.6);
					box-shadow: 0px 0px 5px 10px rgba(0, 0, 0, 0.2);
					border-radius: 20px;
					margin: 15px 20px;
					width: auto;
				.other-container {
						height: 320px;
				}
			}

		}
	}

</style>
