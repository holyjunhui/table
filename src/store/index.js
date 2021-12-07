import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import {
    getMetaList, setMetaList
} from "@/utils/auth";
import {getMeta, getUserInfo} from "@/api";
import {geojsonMap} from "@/views/map-widget/data";

export default new Vuex.Store({
    state: {
        meta: getMetaList() || {},
        geoConfig: {}
    },
    mutations: {
        setMeta(state, meta) {
            setMetaList(meta);
            state.meta = meta;
        },
        setGeoConfig(state, data){
            state.geoConfig = geojsonMap[data.id];
        }
    },
    actions: {
        async initMeta({
            commit
        }) {
            const resp = await getMeta();
            commit("setMeta", resp.data);
        },
        async getGeoConfig({
            commit
        }) {
            const resp = await getUserInfo();
            commit("setGeoConfig", resp.data);
        }
    }
});
