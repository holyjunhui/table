<template>
  <widget title="探测资产总量">
    <div class="detectAssetView">
      <div class="mountNode" ref="mountNode"></div>
    </div>
  </widget>
</template>

<script>
let chart;
import G2 from "@antv/g2";
import Widget from "@/components/Widget";
export default {
  components: { Widget },
  data() {
    return {
      mockData: [
        {
          time: 7.1,
          value: 190,
          type: "在线资产"
        },
        {
          time: 7.1,
          value: 320,
          type: "高危资产"
        },
        {
          time: 7.2,
          value: 290,
          type: "在线资产"
        },
        {
          time: 7.2,
          value: 300,
          type: "高危资产"
        },
        {
          time: 7.3,
          value: 590,
          type: "在线资产"
        },
        {
          time: 7.3,
          value: 790,
          type: "高危资产"
        },
        {
          time: 7.4,
          value: 90,
          type: "在线资产"
        },
        {
          time: 7.4,
          value: 190,
          type: "高危资产"
        },
        {
          time: 7.5,
          value: 490,
          type: "在线资产"
        },
        {
          time: 7.5,
          value: 890,
          type: "高危资产"
        },
        {
          time: 7.6,
          value: 590,
          type: "在线资产"
        },
        {
          time: 7.6,
          value: 490,
          type: "高危资产"
        },
        {
          time: 7.7,
          value: 290,
          type: "在线资产"
        },
        {
          time: 7.7,
          value: 100,
          type: "高危资产"
        }
      ]
    };
  },

  mounted() {
    this.initChart();
  },
  methods: {
    getAxisLineStyle() {
      return {
        stroke: "rgb(36,44,68)", // 坐标轴线的颜色
        lineDash: [2, 3],
        lineWidth: 3
      };
    },
    getAxisLabelOptions() {
      return {
        textStyle: {
          fill: "white"
        }
      };
    },
    setAxis() {
      // 纵坐标轴
      chart.axis("value", {
        label: this.getAxisLabelOptions(),
        grid: {
          lineStyle: this.getAxisLineStyle()
        }
      });

      // 横坐标轴
      chart.axis("time", {
        label: this.getAxisLabelOptions(),
        tickLine: null,
        line: this.getAxisLineStyle()
      });
    },
    setSource() {
      chart.source(this.mockData, {
        time: {
          alias: "时间",
          // 如果数据是时间戳的话，打开这个注释
          //   type: 'time',
          mask: "MM:ss",
          nice: false
        },
        value: {
          alias: "占用率",
          min: 0,
          max: 1000
        },
        type: {
          type: "cat"
        }
      });
    },
    setLegend() {
      chart.legend({
        position: "right-top",
        useHtml: true,
        hoverable: false,
        containerTpl:
          '<div class="g2-legend">' +
          '<div class="g2-legend-list" style="display:flex;"  > ' +
          "</div>",
        itemTpl: (value, color, checked, index) => {
          return `
                <div>
                    <div style="display:flex;align-items:center;">
                        <div style="width:13px;height:13px;background:${color};border-radius: 50%" ></div>
                        <p style="padding-left:5px;color:white;">${value}</p>
                    </div>
                </d>
              `;
        },
        offsetX: -100,
        offsetY: -20,
        "g2-legend": {},
        "g2-legend-list": {
          border: "none"
        }
      });
    },
    createChart() {
      chart = new G2.Chart({
        container: this.$refs.mountNode,
        height: 305,
        padding: [60, 10, 20, 50]
      });
    },
    handleChart() {
      chart
        .line()
        .position("time*value")
        .shape("smooth")
        .color("type", ["rgb(250,192,62)", "rgb(63,205,215)"])
        .size(4);
    },
    initChart() {
      this.createChart();
      this.setAxis();
      this.setSource();
      this.setLegend();
      this.handleChart();
      chart.render();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

