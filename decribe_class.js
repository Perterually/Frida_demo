// 查看类的所有字段
Java.perform(function x() {
    describeJavaClass("com.demo.demo")
    function describeJavaClass(className) {
        var jClass = Java.use(className);
        console.log(JSON.stringify({
            _name: className,
            _methods: Object.getOwnPropertyNames(jClass.__proto__).filter(m => {
                return !m.startsWith('$') // filter out Frida related special properties
                    || m == 'class' || m == 'constructor' // optional
            }),
            _fields: jClass.class.getFields().map(f => {
                return f.toString()
            })
        }, null, 2));
    }
})