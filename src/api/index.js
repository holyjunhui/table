import axios from "axios";
import {
    Message as message
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
    // config.headers.Authorization = process.env.NODE_ENV === "production" ? `Bearer ${getToken()}` : "Bearer 360";
    // config.headers.Authorization = process.env.NODE_ENV === "production" ? `Bearer ${getToken()}` : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzM4ODc5NTEsImp0aSI6IjkiLCJpYXQiOjE1NzM4MDE1NTEsImlzcyI6Im1hcnZlbC5jbG91ZC5kZXRlY3RpdmUiLCJuYmYiOjE1NzM4MDE1NTF9.SOMrMNE2NkP-8c6Gt9jVQAYH6BZ-1Ie794zr6lFYkvA";
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
});

service.interceptors.response.use(response => {
    const body = response.data;
    if (!body.ok) {
        message({message: ` ${body.msg}`, type: "error"});
        return Promise.reject(new Error(`${body.msg}`));
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
            window.location.href = "/";
        }, 3000);
    } else {
        message({message: `${msg}`, type: "error"});
    }
    return Promise.reject(new Error(msg));
});

const getMeta = () => service.get("/v1/meta");
// const getAlertsTotal = () => service.get("/v1/situation/alerts-test/total");
const getAlertsTotal = () => service.get("/v1/situation/alerts/total");
// 中间地图接口
const getAlertsStatsByLocation = locationCode => service.get(`/v1/situation/alerts/stats-by-location/${locationCode}`);
const getAlertsRecent = range => service.get("/v1/situation/alerts/recent", {params: {range}});
const getAlertsHighSeverity = () => service.get("/v1/situation/alerts/high-severity");
const getAlertsHighSeveritySummary = () => service.get("/v1/situation/alerts/high-severity/summary");
const getAlertsSpamlink = () => service.get("/v1/situation/alerts/spamlink");
// 地区告警排名
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
