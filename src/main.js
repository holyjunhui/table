import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import dayjs from "dayjs";
import {Select, Option, Loading, Message} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./style/style.scss";
import "normalize.css";
import countTo from "vue-count-to";
Vue.component("CountTo", countTo);

Vue.prototype.dayjs = dayjs;
Vue.config.productionTip = false;
Vue.use(Loading);
Vue.use(Select);
Vue.use(Option);
Vue.prototype.$message = Message;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
