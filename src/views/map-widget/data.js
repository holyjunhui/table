import hechuanGeo from "@/data/hechuan.json";
import shenyangGeo from "@/data/shenyang.json";
import changchunGeo from "@/data/changchun.json";

export const geojsonMap = {
    "13": {
        center: [106.325, 30.11],
        geo: hechuanGeo,
        code: "500117",
        title: "合川区"
    },
    "372": {
        center: [123.432, 41.809],
        geo: shenyangGeo,
        code: "2101",
        title: "沈阳市"
    },
    "362": {
        center: [125.352, 43.88],
        geo: changchunGeo,
        code: "2201",
        title: "长春市"
    },
    "9": {
        center: [123.432, 41.809],
        geo: shenyangGeo,
        code: "2101",
        title: "沈阳市"
    }
};
