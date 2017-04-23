import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    title = 'Tour of Heroes';
    //version 1
    //hero = 'Windstorm'
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}

//Hero object class - somewhat like model
export class Hero {
    id: number;
    name: string;
}