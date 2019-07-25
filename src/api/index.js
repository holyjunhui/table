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

const getAlertsTotal = () => service.get("/v1/situation/alerts/total");

export {
    getAlertsTotal
};
