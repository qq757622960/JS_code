/** 
 * @Author: YISHI 
 * @Date: 2019-06-04 15:34:21 
 * @Desc: 日期函数 
 */

function YsDate() {}


// 根据时间戳转换成时间格式
YsDate.prototype.toDateString = function (time, format) {

    var date = new Date(time || new Date());
    var ymd = [
        this.digit(date.getFullYear()),
        this.digit(date.getMonth() + 1),
        this.digit(date.getDate())
    ];
    var hms = [
        this.digit(date.getHours()),
        this.digit(date.getMinutes()),
        this.digit(date.getSeconds())
    ];

    format = format || 'yyyy-MM-dd HH:mm:ss';

    return format.replace(/yyyy/g, ymd[0])
            .replace(/MM/g, ymd[1])
            .replace(/dd/g, ymd[2])
            .replace(/HH/g, hms[0])
            .replace(/mm/g, hms[1])
            .replace(/ss/g, hms[2])
}

// 位数补齐, 小于 10 补 0
YsDate.prototype.digit = function(num) {
    return num < 10 ? `0${num}` : num
};


