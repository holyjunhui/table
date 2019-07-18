<template>
  <widget title="近一周运维统计总览">
    <div class="operationalStatisticsView">
      <div class="mountNode" ref="mountNode"></div>
      <div class="osv-radioGroup-container">
        <RadioGroup @select="onRadioGroupSelect" />
      </div>
    </div>
  </widget>
</template>
<script>
let chart;
import G2 from "@antv/g2";
import Widget from "@/components/Widget";
import RadioGroup from "./radio-button/radio-group.vue";
export default {
  components: { Widget, RadioGroup },
  data() {
    return {
      radio: "待验证",
      mockData: [
        {
          type: "金融业",
          value: 3500
        },
        {
          type: "农林牧业",
          value: 3000
        },
        {
          type: "电力水产业",
          value: 2500
        },
        {
          type: "建筑业",
          value: 2000
        },
        {
          type: "批发零售业",
          value: 1500
        },
        {
          type: "交通运输业",
          value: 800
        },
        {
          type: "嘿嘿运输业",
          value: 400
        },
        {
          type: "啦啦运输业",
          value: 200
        },
        {
          type: "哈哈运输业",
          value: 700
        },
        {
          type: "呵呵运输业",
          value: 900
        }
      ]
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    setChartAxis() {
      // 设置横坐标轴
      chart.axis("type", {
        label: {
          textStyle: {
            fill: "#fff"
          },
          htmlTemplate(text, item, index) {
            if (text.length > 3) {
              const preText = text.slice(0, 2);
              const laterText = text.slice(2);
              return `
            <div class="g-label-container" style="text-align:center;width:50px;">
              <p style="font-size:12px;margin-bottom:0">${preText}</p>
              <p style="font-size:12px;margin:0">${laterText}</p>
            </div>
            `;
            } else {
              return `
            <p style="width:50px;font-size:12px;text-align:center;">${text}</p>
          `;
            }
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
        height: 305,
        padding: [60, 0, 40, 0]
      });
    },
    handleChart() {
      chart
        .interval()
        .position("type*value")
        .color("l(100) 0:rgb(16,244,247) 1:rgb(2,133,251)")
        .opacity(1)
        .label("value", {
          useHtml: true,
          htmlTemplate: function htmlTemplate(text, item) {
            var a = item.point;
            return `
              <p style="font-size:13px">${a.value}</p>
            `;
          }
        });
    },
    onRadioGroupSelect(item) {
      //TODO  这里需要切换数据
    },
    getAxisLineStyle() {
      return {
        stroke: "rgb(36,44,68)", // 坐标轴线的颜色
        lineDash: [2, 3],
        lineWidth: 3
      };
    }
  }
};
</script>

<style <style lang="scss" scoped>
.operationalStatisticsView {
  .osv-radioGroup-container {
    position: absolute;
    top: 35px;
    right: 50px;
  }
}
</style>
