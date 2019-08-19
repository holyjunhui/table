<template>
    <div>
        <div id="map" ref="mapbox"></div>
    </div>
</template>

<script>
import {getAlertsStatsByLocation} from "@/api/";
import Vue from "vue";
import mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";
import "mapbox-gl/dist/mapbox-gl.css";

import hechuanGeo from "@/data/hechuan.json";
// import coordArray from "@/data/coord.js";

import popupComponent from "./popup";
import markerComponent from "./marker";

const config = {
    token: "pk.eyJ1IjoieGlzaXRhbiIsImEiOiJjanhlMnlpbmkwa3FsM3BvMGc3amI3dGJzIn0.bnZCEqJZiS_JslbODiGhlQ",
    style: "mapbox://styles/xisitan/cjxeadugr0hin1ds1z5zzdg0o",
    zoom: 9.5,
    center: [106.325, 30.11]
};

export default {
    name: "Mapbox",
    data() {
        return {
            data: [],
            mapList: [],
            map: null,
            timer: null,
            pauseAnimate: false,
            duration: 20000,
            markers: [],
            currentIndex: 0
        };
    },
    created() {
        this.fetchData();

    },
    async mounted() {
        await this.fetchData();
        await this.initMap();
        this.initMapLayer(this.map);
        this.startAnimate();
    },
    computed: {
        categories() {
            return this.$store.state.meta.alert_category || [];
        },
        alert_status() {
            return this.$store.state.meta.alert_status || [];
        },
        severity() {
            return this.$store.state.meta.severity || [];
        }
    },
    beforeDestroy() {
        window.clearInterval(this.timer);
    },
    methods: {
        async fetchData() {
            const formatterList = [];
            const data = await getAlertsStatsByLocation("500117");
            const list = this.formatter(data.data);
            formatterList.push(list);
            this.data = formatterList;
            // console.log("this.data", this.data);
        },
        formatter(data) {
            // console.log("data4444444zC", data);
            const list = {};
            const alerts = data.alerts;
            const location = data.location;
            if (!location || !alerts) {
                // 预设信息
                list.coordinates = [106.31802875449, 30.118708260134];
                return;
            }
            list.coordinates = [+location.lng, +location.lat];
            list.area = location.name;

            list.name = (this.alert_status.find(item => item.code === alerts.status) || {}).name;
            list.level = (this.severity.find(item => item.code === alerts.severity) || {}).name;
            list.type = (this.categories.find(item => item.code === alerts.category) || {}).name;
            list.address = alerts.affected_url;
            // console.log("lislislisli", list);
            return list;
        },
        initMap() {
            mapboxgl.accessToken = config.token;
            this.map = new mapboxgl.Map({
                container: this.$refs.mapbox,
                style: config.style,
                minZoom: config.zoom - 0.1,
                maxZoom: config.zoom + 0.1,
                center: config.center,
                zoom: config.zoom,
                pitch: 50,
                bearing: 0,
                interactive: false
            });

            return new Promise(resolve => this.map.on("load", resolve));
        },

        initMapLayer(map) {
            // this.addLineLayer(map);
            this.addFillLayer(map);
            this.addMaskLayer(map);
            this.addSymbolLayer(map);
            // 中心点
            this.addCenterPoint(map);
        },

        addLineLayer(map) {
            map.addLayer({
                "id": "line",
                "type": "line",
                "source": {
                    "type": "geojson",
                    "lineMetrics": true,
                    "data": hechuanGeo
                },
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "#FFF",
                    "line-width": 2,
                    "line-dasharray": [2, 3]
                }
            });
        },

        addFillLayer(map) {
            map.addLayer({
                "id": "fill",
                "type": "fill",
                "source": {
                    "type": "geojson",
                    "data": hechuanGeo
                },
                "layout": {},
                "paint": {
                    "fill-color": "#4890f6",
                    "fill-opacity": 0.3
                }
            });
        },

        addMaskLayer(map) {
            const bounds = [
                config.center[0] + 0.9,
                config.center[1] + 0.8,
                config.center[0] - 0.9,
                config.center[1] - 0.8
            ];
            const mask = turf.polygon(hechuanGeo.geometry.coordinates);

            const polyMask = function polyMask(mask, bounds) {
                const bboxPoly = turf.bboxPolygon(bounds);
                return turf.difference(bboxPoly, mask);
            };

            map.addSource("mask", {
                "type": "geojson",
                "data": polyMask(mask, bounds)
            });

            map.addLayer({
                "id": "zmask",
                "source": "mask",
                "type": "fill",
                "paint": {
                    "fill-color": "#030D27",
                    "fill-opacity": 0.95
                }
            });
        },

        addSymbolLayer(map) {
            this.data.forEach(value => {
                const popup = new Vue({
                    render(createElement) {
                        return createElement(popupComponent, {props: {value}});
                    }
                }).$mount().$el;

                const point = new Vue({render: create => create(markerComponent)}).$mount().$el;
                const marker = new mapboxgl.Marker(point);

                marker.setLngLat(value.coordinates);
                marker.setPopup(new mapboxgl.Popup({offset: 9}).setDOMContent(popup));
                marker.addTo(map);

                this.markers.push(marker);
            });
        },

        addCenterPoint(map) {
            const point = document.createElement("div");
            point.className = "center-marker";
            new mapboxgl.Marker(point).setLngLat(config.center).addTo(map);
        },

        startAnimate() {
            this.mapAnimation();
            this.timer = window.setInterval(() => {
                if (!this.pauseAnimate) {
                    this.currentIndex = (this.currentIndex + 1) % this.data.length;
                    this.mapAnimation();
                }
            }, this.duration);
        },

        mapAnimation() {
            this.markers.forEach(marker => {
                if (marker.getPopup().isOpen()) {
                    marker.togglePopup();
                }
            });

            this.markers[this.currentIndex].togglePopup();
            const current = this.data[this.currentIndex];

            const bearing = Math.atan2(config.center[0] - current.coordinates[0], config.center[1] - current.coordinates[1]) / Math.PI * 180;
            // 计算距离，自动放大
            this.map.easeTo({bearing, duration: 1000, animate: true});
        }
    }
};
</script>

<style lang="scss">
#map {
    height: 560px;
    width: 640px;

    canvas {
        -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
    }

    // 中心点
    .center-marker {
        background: #F00;
        width: 4px;
        height: 4px;
        border-radius: 50%;
    }

    .mapboxgl-popup-content {
        color: #FFF;
        background: #000;
        border-radius: 5px;
        min-width: 200px;
        text-align: left;
        padding: 15px 20px;
        box-sizing: border-box;
        opacity: 0.8;

        > p {
            margin: 0;
            margin-bottom: 3px;
            font-size: 12px;
        }
    }

    .mapboxgl-popup-tip {
        border-top-color: #000;
        opacity: 0.8;
    }

    .mapboxgl-ctrl-bottom-left, .mapboxgl-ctrl-bottom-right {
        display: none;
    }

    .mapboxgl-popup-close-button {
        color: #CCC;
        width: 20px;
        box-sizing: content-box;
        display: block;
        font-size: 20px;
        padding-top: 5px;
    }

    .mapboxgl-popup {
        max-width: 200px;
    }
}
</style>
