import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import dayjs from "dayjs";
import {Input, Icon, Button, Carousel, CarouselItem, Loading, Message} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.prototype.dayjs = dayjs;
Vue.config.productionTip = false;
Vue.use(Input);
Vue.use(Icon);
Vue.use(Button);
Vue.use(CarouselItem);
Vue.use(Carousel);
Vue.use(Loading);
Vue.prototype.$message = Message;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
