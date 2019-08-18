/**
 * 根据 key 和type 获取城市或者行业名称
 * @param {String} key
 * @param {String} type industry or city
 */
export const getIndustryOrCityName = {
    methods: {
        getItemName(key, type) {
            if (type === "industry") {
                return this.industryList[key] || "其他";
            }
            const provinceCode = key.slice(0, 2);
            for (let i = 0; i < this.cityList.length; i++) {
                if (this.cityList[i].code === provinceCode) {
                    const province = this.cityList[i].children;
                    const cityCode = key.slice(0, 4);
                    for (let j = 0; j < province.length; j++) {
                        if (province[j].code === cityCode) {
                            const xian = province[j].children;
                            for (let k = 0; k < xian.length; k++) {
                                if (xian[k].code === key) {
                                    return xian[k].name;
                                }
                            }
                        }
                    }
                }
            }
            return "其他";
        }
    }
};
