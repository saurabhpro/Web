import { Component } from '@angular/core';
import {Task} from './model/task'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})
export class AppComponent { 
    private task1 : Task = {
        content:'hey',
        done: false
    }
}