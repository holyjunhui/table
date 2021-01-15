import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import {
    getMetaList, setMetaList
} from "@/utils/auth";
import {getMeta} from "@/api";

export default new Vuex.Store({
    state: {
        meta: getMetaList() || {}
    },
    mutations: {
        setMeta(state, meta) {
            setMetaList(meta);
            state.meta = meta;
        }
    },
    actions: {
        async initMeta({
            commit
        }) {
            const resp = await getMeta();
            commit("setMeta", resp.data);
        }
    }
});
