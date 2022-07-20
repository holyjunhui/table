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
                                    <h3>YING LONG POWER</h3>
                                    <div class="block-content-container">
                                        <div class="first-block-wrap">
                                            <div class="one">
                                                <h3>{{ blockData[0] && blockData[0].name }}</h3>
                                                <span>{{ blockData[0] && blockData[0].value }}</span>
                                            </div>
                                            <div class="two">
                                                <h3>{{ blockData[1] && blockData[1].name }}</h3>
                                                <span>{{ blockData[1] && blockData[1].value }}</span>
                                            </div>
                                        </div>
                                        <div class="second-block-wrap">
                                            <h3>{{ blockData[2] && blockData[2].name }}</h3>
                                            <span>{{ blockData[2] && blockData[2].value }}</span>
                                        </div>
                                        <div class="three-block-wrap">
                                            <div class="one">
                                                <h3>{{ blockData[3] && blockData[3].name }}</h3>
                                                <span>{{ blockData[3] && blockData[3].value }}</span>
                                            </div>
                                            <div class="two">
                                                <h3>{{ blockData[4] && blockData[4].name }}</h3>
                                                <span>{{ blockData[4] && blockData[4].value }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="yinglong-table">
                                <div class="yinglong-pie-wrap">
                                    <h3>YING LONG POWER</h3>
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
                                    <el-table
                                        v-if="secondTableData.length"
                                        :show-header="false"
                                        :data="secondTableData"
                                        :span-method="YinLongObjectSpanMethod"
                                        size="mini"
                                        :header-cell-style="headerStyle"
                                        :cell-style="secondCellStyle"
                                        height="240"
                                        style="font-size: 8px; line-height: 14px"
                                    >
                                        <el-table-column label="">
                                            <el-table-column
                                                prop="index0"
                                                align="center"
                                            />
                                            <el-table-column
                                                prop="index1"
                                                align="center"
                                            />

                                            <el-table-column
                                                prop="index2"
                                                align="center"
                                            />
                                            <el-table-column
                                                prop="index3"
                                                align="center"
                                            />
                                            <el-table-column
                                                align="center"
                                                prop="index4"
                                            />
                                            <el-table-column
                                                align="center"
                                                prop="index5"
                                            />
                                            <el-table-column
                                                prop="index6"
                                                align="center"
                                            />
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </div>
                        <div class="yinglong-line">
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
            lineData: {
                xais: [],
                yais: []
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
            const otherChart = this.$eCharts.init(this.$refs.otherChart);
            const colors = ["#ee9ca7", "#4e54c8"];
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
                title: {
                    text: "YING LONG POWER"
                },
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
                    right: "4%",
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
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new this.$eCharts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "rgb(128, 255, 165)"
                                },
                                {
                                    offset: 1,
                                    color: "rgb(1, 191, 236)"
                                }
                            ])
                        },
                        emphasis: {
                            focus: "series"
                        },
                        data: this.lineData.yais
                    }
                ]
            };

            myChart.setOption(option);
            otherChart.setOption(otherOption);

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
                        name: r[2].index0,
                        value: r[3].index0
                    },
                    {
                        name: r[4].index0,
                        value: r[5].index0
                    },

                    {
                        name: r[0].index0,
                        value: r[1].index0
                    },

                    {
                        name: r[2].index6,
                        value: r[3].index6
                    },
                    {
                        name: r[4].index4,
                        value: r[5].index4
                    }
                ];
                this.blockData = blockData.map(item => {
                    const name = item.name.indexOf("POWER") !== -1 ? item.name.slice(0, item.name.indexOf("POWER")) : item.name;
                    return {
                        ...item,
                        name
                    };
                });
                this.pieData = res.data.pie.map(item => this.mapTree(item));
                this.lineData = res.data.pie_data || {
                    xais: [],
                    yais: []
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

        },
        YinLongObjectSpanMethod(item) {
            const {rowIndex, columnIndex} = item;
            if (rowIndex === 0) {
                return {
                    rowspan: 1,
                    colspan: 7
                };

            } else if (rowIndex === 1) {
                return {
                    rowspan: 1,
                    colspan: 7
                };
            } else if (rowIndex === 2) {
                if (columnIndex === 0) {
                    return {
                        rowspan: 1,
                        colspan: 6
                    };
                } else if (columnIndex === 6) {
                    return {
                        rowspan: 1,
                        colspan: 1
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            } else if (rowIndex === 3) {
                if (columnIndex === 0) {
                    return {
                        rowspan: 1,
                        colspan: 6
                    };
                } else if (columnIndex === 6) {
                    return {
                        rowspan: 5,
                        colspan: 1
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            } else if (rowIndex === 4) {
                if (columnIndex === 0) {
                    return {
                        rowspan: 1,
                        colspan: 4
                    };
                } else if (columnIndex === 4) {
                    return {
                        rowspan: 1,
                        colspan: 2
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            } else if (rowIndex === 5) {
                if (columnIndex === 0) {
                    return {
                        rowspan: 1,
                        colspan: 4
                    };
                } else if (columnIndex === 4) {
                    return {
                        rowspan: 1,
                        colspan: 2
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0
                };
            }
            return {
                rowspan: 1,
                colspan: 1
            };

        },
        secondCellStyle(item) {
            const {rowIndex, columnIndex} = item;
            if (rowIndex === 0) {
                return {
                    background: "#ee9ca7",
                    borderBottom: "1px solid #000",
                    borderRight: "1px solid #000"

                };
            } else if (rowIndex === 2) {
                return {
                    background: "#8f94fb",
                    borderBottom: "1px solid #000",
                    borderRight: "1px solid #000"

                };
            } else if (rowIndex === 4) {
                if (columnIndex !== 6) {
                    return {
                        background: "#4ac29a",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000",
                        padding: 0
                    };
                }
            } else if (rowIndex === 6) {
                if (columnIndex !== 6) {
                    return {
                        background: "#DDEBF7",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"

                    };
                }
            }
            return {
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000"
            };
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

			.el-table__body-wrapper{
				border-top: 1px solid #000;
				border-bottom: 1px solid #000;
				border-left: 1px solid #000;
			}
		}
		.yinglong-wrap {
			background: rgba(0, 0, 0, 0.1);
			padding-bottom: 10px;
			.chart-wrap {
				display: flex;
				width: 100%;
				overflow: auto;
				.block-wrap {
					flex: 2;
					background: transparent;
					.block-container {
						background-color: #fff;
						margin: 20px 10px 10px 20px;
						padding: 5px 25px 5px 25px;
						.block-content-container {
							display: flex;
							.first-block-wrap, .second-block-wrap, .three-block-wrap {
								flex: 2
							}
							.one, .two, .second-block-wrap {
								color: #fff;
								box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
								margin-bottom: 20px;
								border-radius: 10px;
								padding: 20px;
								display: flex;
								align-items: center;
								justify-content: center;
								flex-flow: column nowrap;
								h3 {
									font-size: 18px;
									text-align: center;
								}
								span {
									font-size: 20px;
									text-align: center;
								}
							}
							.one {
								background: linear-gradient(to right, #ee9ca7,#ffdde1);
								height: 124.28px;
								box-sizing: border-box;

							}
							.two {
								background: linear-gradient(to right, #4e54c8,#8f94fb);
								height: 124.28px;
								box-sizing: border-box;
							}

							.second-block-wrap {
								background: linear-gradient(to right, #4ac29a, #bdfff3);
								align-self: stretch;
								margin: 0 20px 20px 20px;

							}
						}
					}
				}
				.yinglong-table {
					flex: 2;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background: #fff;
					margin: 20px 20px 10px 10px;
					.yinglong-pie-wrap {
						position: relative;
						flex:2;
						h3 {
							position: absolute;
							left: 25px;
						}
						.pie-container {
							display: flex;
							justify-content: center;
							align-items: center;
							height: 350px;
						}
					}
				}
			}
			.yinglong-line {
					padding: 10px;
					background-color: #fff;
					margin: 0 20px;
					padding: 10px;
			}
			.other-container {
					height: 345px;
			}

		}
	}

</style>
<style lang="scss" >
.yinglong-table-container {
	position: relative;
	flex: 3;
	height: 100%;
	background: #fff;
	.yinglong-logo {
		width: 300px;
		height: 80px;
		position: relative;
		top: 40px;
		z-index: 200;
	}
	.el-table {
		&::before {
			height: 0 !important;
		}
		border: none;
		.el-table__body-wrapper {
			width: 350px;
			overflow: hidden !important;
			display: flex;
			justify-content: center;
			align-items: flex-end;
			.el-table__body {
				width: 350px !important;
				transform: scale(0.6);
				box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);

				.el-table__row {
					.el-table__cell {
						padding: 0;
						.cell {
							line-height: 20px;
							padding: 0;
						}
					}
				}
			}
		}
	}
}
</style>
