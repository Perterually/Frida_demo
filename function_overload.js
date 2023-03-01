// 重载方法的使用
console.log("Script loaded successfully ");
Java.perform(function x() {
    console.log("Inside java perform function");
    var string_class = Java.use("java.lang.String");
    //定位类
    var my_class = Java.use("com.example.demo.MainActivity");
    console.log("Java.Use.Successfully!");//定位类成功！
    //在这里更改类的方法的实现（implementation）重载
    my_class.fun.overload("int", "int").implementation = function (x, y) {
        //打印替换前的参数
        var my_string = string_class.$new("My TeSt String#####");
        //console.log( "original call: fun("+ x + ", " + y + ")");
        //把参数替换成2和5，依旧调用原函数
        this.fun(2, 2);
    }
});