System.register(["reflect-metadata", "es6-shim", "angular2/platform/browser", "./hello"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, hello_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (hello_1_1) {
                hello_1 = hello_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(hello_1.HelloComponent);
        }
    }
});
