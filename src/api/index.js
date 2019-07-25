import axios from "axios";
import {Message as message} from "element-ui";

const service = axios.create({
    baseURL: "",
    timeout: 16000,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});

service.interceptors.request.use(config => {
    config.headers.Authorization = "Bearer 360";
    return config;
});

service.interceptors.response.use(response => {
    const body = response.data;
    if (!body.ok) {
        const msg = body.messages.join(",");
        message({message: `接口返回错误: ${msg}`, type: "error"});
        return Promise.reject(new Error(`接口返回错误: ${msg}`));
    }

    return body;
}, error => {
    const msg = error.response.data.msg || error.toString();
    message({message: `接口请求失败: ${msg}`, type: "error"});
    return Promise.reject(new Error("请求接口失败: " + msg));
});

const getMeta = () => service.get("/v1/meta");
const getAlertsTotal = () => service.get("/v1/situation/alerts/total");
const getAlertsStatsByLocation = locationCode => service.get(`/v1/situation/alerts/stats-by-location/${locationCode}`);
const getAlertsRecent = range => service.get("/v1/situation/alerts/recent", {params: {range}});
const getAlertsHighSeverity = () => service.get("/v1/situation/alerts/high-severity");
const getAlertsHighSeveritySummary = () => service.get("/v1/situation/alerts/high-severity/summary");
const getAlertsSpamlink = () => service.get("/v1/situation/alerts/spamlink");
const getAlertsRank = location_code => service.get("/v1/situation/alerts/rank", {params: {location_code}});
const getAlertsSummaryToday = () => service.get("/v1/situation/alerts/summary-today");
const getAssetsRecent = () => service.get("/v1/situation/assets/recent");
const getAssetsSummary = () => service.get("/v1/situation/assets/summary");
const getOperationSummary = () => service.get("/v1/situation/operation/summary");

export {
    getMeta,
    getAlertsTotal,
    getAlertsStatsByLocation,
    getAlertsRecent,
    getAlertsHighSeverity,
    getAlertsHighSeveritySummary,
    getAlertsSpamlink,
    getAlertsRank,
    getAlertsSummaryToday,
    getAssetsRecent,
    getAssetsSummary,
    getOperationSummary
};
