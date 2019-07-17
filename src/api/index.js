import axios from "axios";

const service = axios.create({
    baseURL: "",
    timeout: 16000,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});

const getIndex = params => {
    return service.get("/api/index", {params});
};

export {
    getIndex
};
