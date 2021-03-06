import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import dayjs from "dayjs";
import ElementUI from "element-ui";

import * as echarts from "echarts";
Vue.prototype.$eCharts = echarts;
import "element-ui/lib/theme-chalk/index.css";
import "./style/style.scss";
import "normalize.css";
Vue.prototype.dayjs = dayjs;
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
