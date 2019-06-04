/** 
 * @Author: YISHI 
 * @Date: 2019-06-04 18:02:02 
 * @Desc: 测试用例 
 */

var ysdate = new YsDate();

QUnit.test("测试位数补齐不传值的情况", function (assert) {
    var value = undefined;
    assert.equal(value, ysdate.digit(), "测试位数补齐不传值的情况");
});

QUnit.test("测试位数补齐", function (assert) {
    var value = "02";
    assert.equal(value, ysdate.digit(2), "测试位数补齐");
});

QUnit.test("空值测试", function (assert) {
    var value = "2019-06-04 18:04:31";
    assert.equal(value, ysdate.toDateString(1559642671503), "测试 format 空值情况");
});

