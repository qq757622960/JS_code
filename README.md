> 常用代码段

* 位数补齐, 如 1=>01

```
var digit = function(num) {
    return num < 10 ? `0${(num | 0)}` : num;
}
```

* 根据时间戳 获取当前时间格式, 默认当前时间 如：1541756114124 => 2018-11-9 17:35:44

```
var date = function (timestamp) {
    var d = new Date(timestamp || new Date());
    return `${d.getFullYear()}-${digit(d.getMonth() + 1)}-${digit(d.getDate())} ${digit(d.getHours())}:${digit(d.getMinutes())}:${digit(d.getSeconds())}`;
}  
```
