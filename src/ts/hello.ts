

import { Component } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";
import { CoursesComponent} from "./courses.component";

// Hello, app
@Component({
    selector: "my-app",
    template: "<div><h1>Hello Angular 2 </h1><courses></courses></div>",
    directives: [CoursesComponent]
})

export class HelloComponent {

}