
import "reflect-metadata";
import "es6-shim"
// import "zone.js"

import { Component } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";

@Component({
    selector: "my-app",
    template: "<h1>First Angular 2 App</h1>"
})
class AppComponent {

}

bootstrap(AppComponent);

