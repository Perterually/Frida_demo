// 查看类的所有方法
console.log("Script loaded successfully ");
Java.perform(function x() {
    console.log("Inside java perform function");
    const Exception = Java.use('java.lang.Exception');
    const Log = Java.use('android.util.Log');

    //定位类
    var my_class = Java.use('java.lang.String');
    //查看所有类的方法
    var methodArr = my_class.class.getMethods();
    for (var m in methodArr) {
        console.log(methodArr[m]);
    }
    function stackTraceHere() {
        return Log.getStackTraceString(Exception.$new());
    }
});