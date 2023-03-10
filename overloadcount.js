// 查看方法的重载
console.log("Script loaded successfully ");
Java.perform(function x() {
    //目标类
    var hook = Java.use("com.example.demo.MainActivity");
    //重载次数，fun为方法的名字
    var overloadCount = hook['fun'].overloads.length;
    //打印日志：追踪的方法有多少个重载
    console.log("Tracing " + 'fun' + " [" + overloadCount + " overload(s)]");
    //每个重载都进入一次
    for (var i = 0; i < overloadCount; i++) {
        //hook每一个重载
        hook['fun'].overloads[i].implementation = function () {
            console.warn("\n*** entered " + 'fun');

            //可以打印每个重载的调用栈，对调试有巨大的帮助，当然，信息也很多，尽量不要打印，除非分析陷入僵局
            Java.perform(function () {
                var bt = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
                console.log("\nBacktrace:\n" + bt);
            });
            // 打印参数
            if (arguments.length) console.log();
            for (var j = 0; j < arguments.length; j++) {
                console.log("arg[" + j + "]: " + arguments[j]);
            }
            //打印返回值
            var retval = this['fun'].apply(this, arguments); // rare crash (Frida bug?)
            console.log("\nretval: " + retval);
            console.warn("\n*** exiting " + 'fun');
            return retval;
        }
    }
    console.log(overloadCount)
    function stackTraceHere() {
        return Log.getStackTraceString(Exception.$new());
    }
});
