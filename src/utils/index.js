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

    let date = new Date(timeStr);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let d = date.getDate();
    let hour = format(date.getHours());
    let minute = format(date.getMinutes());
    let second = format(date.getSeconds());
    return `${year}-${month}-${d} ${hour}:${minute}:${second}`;
};

/**
 * 数组乱序
 * @param {} a
 */
const shuffle = a => {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
};
