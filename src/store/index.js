import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import {
    getMetaList
} from "@/utils/auth";

export default new Vuex.Store({
    state: {
        meta: getMetaList()
    },
    mutations: {},
    actions: {}
});
