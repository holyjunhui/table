export {formatTime, shuffle};
/**
 * 格式化time
 * 2019-07-25T10:49:38Z  ->  2019-9-12 12:06:23
 * @param {*} timeStr
 */
const formatTime = timeStr => {
    const format = n => {
        return n < 10 ? `0${n}` : n;
    };

    const date = new Date(timeStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const d = date.getDate();
    const hour = format(date.getHours());
    const minute = format(date.getMinutes());
    const second = format(date.getSeconds());
    return `${year}-${month}-${d} ${hour}:${minute}:${second}`;
};

/**
 * 数组乱序
 * @param {} a
 */
const shuffle = a => {
    let j, 
x, 
i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
};
/* eslint-disable require-unicode-regexp */
export const dateFormatter = (date, fmt) => {
    const o = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "h+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        "S": date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (const k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return fmt;
};
