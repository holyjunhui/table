export {formatTime};
/**
 * 格式化time
 * 2019-07-25T10:49:38Z  ->  2019-9-12 12:06:23
 * @param {*} timeStr
 */
const formatTime = timeStr => {
    let date = new Date(timeStr);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let d = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    return `${year}-${month}-${d} ${hour}:${minute}:${second}`;
};
