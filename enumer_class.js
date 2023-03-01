// 枚举所有类
Java.enumerateLoadedClasses({
    onMatch: function (instance) {
        // 搜索指定类
        if (instance.search('ntfy.ui') != -1) {
            console.log("[->]\t" + instance);
        }
    },
    onComplete: function () {
        console.log("[*] class enuemration complete");
    }
});