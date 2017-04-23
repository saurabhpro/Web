import { Component } from '@angular/core';
import { Hero } from './hero'

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

//Decorator
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    heroes = HEROES;                //The heroes type isn't defined because TypeScript infers it from the HEROES array.

    title = 'Tour of Heroes';
    //version 1
    //hero = 'Windstorm'
    //version 2
    // hero: Hero = {
    //     id: 1,
    //     name: 'Windstorm'
    // };
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

}
