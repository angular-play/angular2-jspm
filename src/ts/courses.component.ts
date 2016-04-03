
import { Component } from "angular2/core"
import { CourseService} from "./course.service";

@Component({
    selector: "courses",
    template: `
        <h2>Courses</h2>
        {{title}}
        <ul>
            <li *ngFor="#item of courses">
                {{item}}
            </li>
        <ul>
        `,
    providers: [CourseService]
})
export class CoursesComponent {
    title = "The title of couses page";
    courses: string[] = []

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourse();
    }
}