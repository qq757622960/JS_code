> 常用代码段

> Ajax

* JSONP(参数式 JSON)
```
/**
 * JSONP(参数式JSON)
 * 
 * 组成: 回调函数和数据, 如: callback({ "name": "xfj" })
 * 回调函数是当响应到来时应该在页面中调用的函数, 回调函数的名字一般在请求中指定的。
 * 
 * 原理: JSONP 通过动态创建 script 标签, 由于 script 的 src 属性有能力不受限制地从其他域加载资源
 * 所以, 在请求完成后, 就立即执行回调函数。
 */

// 原生方式
var url = 'http://b2b2c.shopnctest.com/dema/mo_bile/index.php';
var script = document.createElement('script');
script.src = `${url}?act=goods&op=goods_list&keyword=%E7%BE%8E%E9%A3%9F&page=10&curpage=1&keyword=%E7%BE%8E%E9%A3%9F&_=1541912868853&callback=jsonp1`;
document.body.insertBefore(script, document.body.firstChild);

function jsonp1(response) {
    console.log(response);
}

// jQuery 方式
$.ajax({
    type: "get",
    url: "http://b2b2c.shopnctest.com/dema/mo_bile/index.php?act=goods&op=goods_list&keyword=%E7%BE%8E%E9%A3%9F&page=10&curpage=1&keyword=%E7%BE%8E%E9%A3%9F&_=1541912868853&callback=jsonp1",
    data: "",
    dataType: "jsonp",  // jsonp
    success: function (response) {
        console.log(response);
    }
});
```

> 引用类型

* 生成一个随机数
```
/**
 * 值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
 * @param  {Number} min 最小值
 * @param  {Number} max 最大值
 * @return {Number} 生成一个 min-max 之间的数值
 */
var random = function(min, max) {
    var choices = max - min + 1;
    return Math.floor(Math.random() * choices + min);
}
```

* 将 HTML 字符串转换成 转义字符
```
/**
 * 将 HTML 字符串转换成 转义字符, 如: 
 * <p class="text">haha</p> => &lt;p class=&quot;text&quot;&gt;haha&lt;/p&gt;
 * @param  {String} text 要转换的HTML标签
 * @return {String} 转换后的字符串
 */
var htmlEscape = function (text) {
    return text.replace(/[<>"&]/g, function (match, pos, input) {
        switch (match) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "\"":
                return "&amp;";
            case "&":
                return "&quot;";
        }
    });
}
```

* 搜索某个字符在字符串中出现的 下标
```
/**
 * 搜索某个字符在字符串中出现的 下标, 如: xiafujianandmengminxue 中 i 的下标
 * @param {String} str 要搜索的字符串
 * @param {String} char 要搜索的字符
 * @return {Array} 返回下标数组
 */
var findChar = function (str, char) {
    var pos = str.indexOf(char),
        arr = [];
    while (pos > -1) {
        arr.push(pos);
        pos = str.indexOf(char, pos + 1)
    }
    return arr;
}
```

* 位数补齐, 如 1=>01

```
/**
 * 位数补齐 1=>01
 * @param  {String|Number} num 
 * @return {String|Number}
 */
var digit = function(num) {
    return num < 10 ? `0${(num | 0)}` : num;
}
```

* 根据时间戳 获取当前时间格式, 默认当前时间 如：1541756114124 => 2018-11-9 17:35:44

```
/**
 * 根据时间戳 获取当前时间格式, 默认当前时间
 * @param  {Number?} timestamp 1541756114124
 * @return {String} 2018-11-9 17:35:44
 */
var date = function (timestamp) {
    var d = new Date(timestamp || new Date());
    return `${d.getFullYear()}-${digit(d.getMonth() + 1)}-${digit(d.getDate())} ${digit(d.getHours())}:${digit(d.getMinutes())}:${digit(d.getSeconds())}`;
}  

```
