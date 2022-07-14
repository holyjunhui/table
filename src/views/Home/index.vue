<template>
    <div class="container">
        <div class="search">
            <el-form :inline="true" :rules="rules" :model="form" ref="form" class="demo-form-inline">
                <el-form-item prop="date" label="日期范围：">
                    <el-date-picker
                        size="small"
                        unlink-panels
                        v-model="form.date"
                        type="datetimerange"
                        range-separator="-"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="[&quot;00:00:00&quot;,&quot;23:59:59&quot;]"
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
                    <div class="yinglong-wrap">
                        <div class="yinglong-table">
                            <el-table
                                v-if="secondTableData.length"
                                :show-header="false"
                                :data="secondTableData"
                                :span-method="YinLongObjectSpanMethod"
                                border
                                :header-cell-style="headerStyle"
                                :cell-style="secondCellStyle"
                                style="font-size: 14px;"
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
                                        width="120"
                                    />
                                    <el-table-column
                                        align="center"
                                        prop="index5"
                                        width="120"
                                    />
                                    <el-table-column
                                        prop="index6"
                                        align="center"
                                        min-width="200"
                                    />
                                </el-table-column>
                            </el-table>
                            <div v-else><el-empty description="暂无数据" :image-size="50" /></div>
                        </div>
                        <div
                            class="chart-container"
                            v-if="pieData.length"
                            ref="chart"
                            :style="{width: '100%'}"
                            auto-size
                        >
                        </div>
                    </div>
                    <el-divider v-if="secondTableData.length" />
                    <div
                        class="other-container"
                        ref="otherChart"
                        v-if="secondTableData.length"
                        :style="{width: '100%'}"
                        auto-size
                    >
                    </div>
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
                date: []
            },
            start: "时间1",
            end: "时间2",
            rules: {
                date: [{required: true, message: "请选择日期", trigger: "change"}]
            },
            tableData: [],
            secondTableData: [],
            activeName: "first",
            pieData: [],
            barData: {
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

            const option = {
                tooltip: {
                    trigger: "item",
                    formatter: "{b} {c} KWH"
                },
                series: {
                    type: "sunburst",
                    // color: colors,
                    data: this.pieData,
                    radius: [0, "100%"],
                    label: {
                        rotate: "radial",
                        // color: "#fff",
                        formatter: "{b} {@score}"
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
                        type: "shadow"
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
                        data: this.barData.xais || [],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "value"
                    }
                ],
                series: [
                    {
                        name: "Direct",
                        type: "bar",
                        barWidth: "50%",
                        data: this.barData.yais || []
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
                this.pieData = res.data.pie.map((item, index) => this.mapTree(item, index, 0));
                this.barData = res.data.pie_data || {
                    xais: [],
                    yais: []
                };
            });
        },
        mapTree(org, num, level) {
            // const colors = [
            //     "#FF7853",
            //     "#ebb40f",
            //     "#187a2f",
            //     "#0aa3b5",
            //     "#da1d23",
            //     "#37A2DA",
            //     "#32C5E9",
            //     "#67E0E3",
            //     "#9FE6B8",
            //     "#FFDB5C",
            //     "#ff9f7f",
            //     "#fb7293",
            //     "#E062AE",
            //     "#E690D1",
            //     "#e7bcf3",
            //     "#9d96f5",
            //     "#8378EA",
            //     "#96BFFF"
            // ];

            const haveChildren = Array.isArray(org.child) && org.child.length > 0;
            const name = org.name.endsWith("POWER") ? org.name.slice(0, org.name.indexOf("POWER")) : org.name;
            return {
                // 分别将我们查询出来的值做出改变他的key
                name,
                value: org.value,
                // itemStyle: {
                //     color: colors[this.num++]

                // },
                // 判断它是否存在子集，若果存在就进行再次进行遍历操作，知道不存在子集便对其他的元素进行操作
                children: haveChildren ? org.child.map((i, l) => this.mapTree(i, l, level + 1)) : []
            };
        },

        downHomeData(type) {
            const origin = window.location.origin;

            type === "all" ? window.open(`${origin}/jinshan/report_export?start=${this.start}&end=${this.end}`) : window.open(`${origin}/jinshan/report_yinglong_export?start=${this.start}&end=${this.end}`);
        },

        handleSearch(type) {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.start = dayjs(this.form.date && this.form.date[0]).format("YYYY-MM-DD HH:mm:ss");
                    this.end = dayjs(this.form.date && this.form.date[1]).format("YYYY-MM-DD HH:mm:ss");
                    type === "search" ? this.getHomeData() : this.downHomeData(type);
                    if (this.activeName === "second") {
                        setTimeout(() => {
                            this.pieData.length && this.initChart();
                        }, 500);
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
                    background: "#F9AB6B",
                    borderBottom: "1px solid #000",
                    borderRight: "1px solid #000"

                };
            } else if (rowIndex === 2) {
                return {
                    background: "#FFD966",
                    borderBottom: "1px solid #000",
                    borderRight: "1px solid #000"

                };
            } else if (rowIndex === 4) {
                if (columnIndex !== 6) {
                    return {
                        background: "#FFF2CC",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000"

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
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			overflow: auto;
			.yinglong-table {
				flex: 4;
			}
			.chart-container {
				flex: 2;
				display: flex;
				justify-content: center;
				align-items: center;
				min-height: 450px;
			}
		}
		.other-container {
			width: 100%;
			min-height: 450px;
		}
	}

</style>
