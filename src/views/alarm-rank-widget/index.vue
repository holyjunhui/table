<template>
    <Widget title="地区告警排名">
        <div class="main-charts" ref="chart"></div>
    </Widget>
</template>

<script>
import G2 from "@antv/g2";
import Widget from "@/components/Widget";
import list from "./data";

const colorMap = {
    "Asia": G2.Global.colors[0],
    "Americas": G2.Global.colors[1],
    "Europe": G2.Global.colors[2],
    "Oceania": G2.Global.colors[3]
};

export default {
    components: {Widget},

    data() {
        return {
            list
        };
    },

    mounted() {
        const chart = new G2.Chart({
            container: this.$refs.chart,
            forceFit: true,
            height: 163,
            padding: 0
        });
        chart.source(this.list);
        chart.axis("x", false);
        chart.axis("y", false);
        chart.tooltip({
            showTitle: false
        });
        chart.guide().line({
            start: ["0%", "50%"], // 使用对象格式
            end: ["100%", "50%"],
            lineStyle: {
                stroke: "#C9C9C9", // 线的颜色
                lineDash: [0], // 虚线的设置
                lineWidth: 1 // 线的宽度
            }
        });
        chart.guide().line({
            start: ["50%", "0%"], // 使用对象格式
            end: ["50%", "100%"],
            lineStyle: {
                stroke: "#C9C9C9", // 线的颜色
                lineDash: [0], // 虚线的设置
                lineWidth: 1 // 线的宽度
            }
        });
        chart.guide().text({
            position: ["0%", "50%"],
            content: "长沙市",
            style: {
                fill: "#FFF",
                textAlign: "left",
                fontSize: 12
            },
            offsetY: 13
        });
        chart.guide().text({
            position: ["0%", "50%"],
            content: "湘潭市",
            style: {
                fill: "#FFF",
                textAlign: "left",
                fontSize: 12
            },
            offsetY: -13
        });
        chart.guide().text({
            position: ["100%", "50%"],
            content: "永州市",
            style: {
                fill: "#FFF",
                textAlign: "right",
                fontSize: 12
            },
            offsetY: -13
        });
        chart.guide().text({
            position: ["100%", "50%"],
            content: "岳阳市",
            style: {
                fill: "#FFF",
                textAlign: "right",
                fontSize: 12
            },
            offsetY: 13
        });
        chart.legend(false);
        chart.point().position("x*y").size("size", [1, 8]).color("region", val => {
            return colorMap[val];
        })
            .shape("circle");

        chart.render();
    }
};
</script>

<style lang="scss" scoped>
.count-to {
    font-size: 28px;
    font-weight: bold;
    font-family: "汉仪菱心体", "张海山草泥马体";
}
</style>
