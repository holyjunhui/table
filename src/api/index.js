import axios from "axios";
import {
    Message as message,
    Notification as notification
} from "element-ui";

import {getToken} from "../utils/auth";
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api的base_url
    timeout: process.env.VUE_APP_REQUEST_TOME_OUT, // request timeout
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});

service.interceptors.request.use(config => {
    config.headers.Authorization = process.env.NODE_ENV === "production" ? `Bearer ${getToken()}` : "Bearer 360";
    return config;
});

service.interceptors.response.use(response => {
    const body = response.data;
    if (!body.ok) {
        const msg = body.messages.join(",");
        message({message: ` ${msg}`, type: "error"});
        return Promise.reject(new Error(`${msg}`));
    }

    return body;
}, error => {
    // StatusPreconditionFailed 没有登陆权限就重新登陆
    const msg = error.response.data.msg || error.toString();
    if (error.response.status === 412) {
        message({
            message: "登录失效，请重新登录，即将跳转到登录",
            type: "error"
        });
        setTimeout(() => {
            window.location = "https://yuntan.360.cn";
        }, 3000);
    } else {
        message({message: `${msg}`, type: "error"});
    }
    return Promise.reject(new Error(msg));
});

const getMeta = () => service.get("/v1/meta");
const getAlertsTotal = () => service.get("/v1/situation-test/alerts/total");
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
