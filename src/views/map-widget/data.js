// 获取地图geojson https://hxkj.vip/demo/echartsMap/
import hechuanGeo from "@/data/hechuan.json";
import chinaGeo from "@/data/china.json";
import shenyangGeo from "@/data/shenyang.json";
import changchunGeo from "@/data/changchun.json";
import chaoyangGeo from "@/data/chaoyang.json";
export const geojsonMap = {
    "13": {
        center: [106.325, 30.11],
        geo: hechuanGeo,
        code: "500117",
        userId: 13,
        title: "合川区"
    },
    "372": {
        center: [123.432, 41.809],
        geo: shenyangGeo,
        code: "2101",
        userId: 372,
        title: "沈阳市"
    },
    "362": {
        center: [125.352, 43.88],
        geo: changchunGeo,
        code: "2201",
        userId: 362,
        title: "长春市"
    },
    "9": {
        center: [123.432, 41.809],
        geo: shenyangGeo,
        code: "2101",
        userId: 9,
        title: "沈阳市"
    },
    "781": {
        center: [116.43, 39.92],
        geo: chaoyangGeo,
        userId: 781,
        code: "110105",
        title: "广电"
    }
};
