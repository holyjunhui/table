<template>
    <div class="container">
        <div class="search">
            <el-form :inline="true" :rules="rules" :model="form" ref="form" class="demo-form-inline">
                <el-form-item prop="date" label="日期范围：">
                    <el-date-picker
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
                    <el-button @click="handleSearch('search')" type="primary">查询</el-button>
                    <el-button @click="handleSearch('down')">下载</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="table-wrap">
            <el-table
                :data="tableData"
                :span-method="objectSpanMethod"
                border
                :header-cell-style="headerStyle"
                :cell-style="cellStyle"
                style="font-size: 15px;"
            >
                <el-table-column label="YING LONG POWER ">
                    <el-table-column
                        prop="index0"
                        label=""
                        width="160"
                    />
                    <el-table-column
                        prop="index1"
                        label=""
                        width="160"
                    />
                </el-table-column>
                <el-table-column
                    prop="index2"
                    label="时间1抄见数"
                />
                <el-table-column
                    prop="index3"
                    label="时间2抄见数"
                />
                <el-table-column
                    prop="index4"
                    label="用量"
                />
                <el-table-column
                    prop="index5"
                    width="120"
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
                    width="240"
                    label=""
                />

                <el-table-column
                    prop="index9"
                    label="时间1抄见数"
                />
                <el-table-column
                    prop="index10"
                    label="时间2抄见数"
                />
                <el-table-column
                    prop="index11"
                    label="用量"
                />
                <el-table-column
                    prop="index12"
                    label="三级合计"
                />
            </el-table>
        </div>
    </div>
</template>

<script>
import {downHomeData, getHomeData} from "@/api/index";
export default {
    data() {
        return {
            form: {
                date: ""
            },
            rules: {
                date: [{required: true, message: "请选择日期", trigger: "change"}]
            },
            tableData: []
        };
    },
    // mounted() {
    //     this.getHomeData();
    // },
    methods: {
        getHomeData() {
            const start = this.form.date && this.form.date[0];
            const end = this.form.date && this.form.date[1];
            getHomeData({start, end}).then(res => {
                this.tableData = res.data;
            });
        },
        downHomeData() {
            const start = this.form.date && this.form.date[0];
            const end = this.form.date && this.form.date[1];
            const origin = window.location.origin;
            console.log("origin", origin, window.location);

            window.location.href = `${origin}/jinshan/report_export?start=${start}&end=${end}`;
        },
        handleSearch(type) {
            this.$refs.form.validate(valid => {
                if (valid) {
                    type === "search" ? this.getHomeData() : this.downHomeData();
                } else {
                    return false;
                }
            });
        },
        headerStyle({row, column, rowIndex, columnIndex}) {
            if (rowIndex === 1) {
                return {display: "none"};
            }
        },
        cellStyle({row, column, rowIndex, columnIndex}) {
            if (columnIndex === 0) {
                if (rowIndex === 0) {
                    return {
                        background: "#5AB032"
                    };
                } else if (rowIndex === 50) {
                    return {
                        background: "#FFDA48"
                    };
                } else if (rowIndex === 56) {
                    return {
                        background: "#93BFE3"
                    };
                }
            } else if (columnIndex === 1) {
                if ([0, 10, 22, 31].includes(rowIndex)) {
                    return {
                        background: "#5AB032"
                    };
                } else if ([50, 51, 52, 53, 54, 55].includes(rowIndex)) {
                    return {
                        background: "#FFDA48"
                    };
                } else if ([56, 58].includes(rowIndex)) {
                    return {
                        background: "#93BFE3"
                    };
                }
            } else if (columnIndex === 5) {
                if ([0].includes(rowIndex)) {
                    return {
                        background: "#5AB032"
                    };
                } else if ([50].includes(rowIndex)) {
                    return {
                        background: "#FFDA48"
                    };
                } else if ([56].includes(rowIndex)) {
                    return {
                        background: "#93BFE3"
                    };
                }
            } else if (columnIndex === 6) {
                if ([0, 22].includes(rowIndex)) {
                    return {
                        background: "#9ED287"
                    };
                } else if ([50, 52, 54].includes(rowIndex)) {
                    return {
                        background: "#FFE68D"
                    };
                } else if ([56, 58].includes(rowIndex)) {
                    return {
                        background: "#B7D8F1"
                    };
                }
            } else if (columnIndex === 7) {
                if ([0, 8, 10, 17, 22, 31].includes(rowIndex)) {
                    return {
                        background: "#DFF0D9"
                    };
                } else if ([50, 51, 52, 53, 54, 55].includes(rowIndex)) {
                    return {
                        background: "#FFE68D"
                    };
                } else if ([56, 57, 58, 59].includes(rowIndex)) {
                    return {
                        background: "#B7D8F1"
                    };
                }
            } else if (columnIndex === 8) {
                if ([50, 51, 52, 53, 54, 55].includes(rowIndex)) {
                    return {
                        background: "#FFF1CB"
                    };
                } else if ([56, 57, 58, 59].includes(rowIndex)) {
                    return {
                        background: "#DAEBF7"
                    };
                }
                return {
                    background: "#DFF0D9"
                };

            } else if (columnIndex === 12) {
                if ([0].includes(rowIndex)) {
                    return {
                        background: "#DFF0D9"
                    };
                } else if ([50, 51, 52, 53, 54, 55].includes(rowIndex)) {
                    return {
                        background: "#FFE68D"
                    };
                } else if ([56, 57, 58, 59].includes(rowIndex)) {
                    return {
                        background: "#B7D8F1"
                    };
                }
            }
        },
        objectSpanMethod({row, column, rowIndex, columnIndex}) {
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
            } else if (columnIndex === 7) {
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
                } else if ([50, 51, 52, 53, 54, 55, 56, 57, 58, 59].includes(rowIndex)) {
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
                return {
                    rowspan: 1,
                    colspan: 1
                };
            } else if (columnIndex === 9) {

                return {
                    rowspan: 1,
                    colspan: 1
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

		}
	}
</style>
