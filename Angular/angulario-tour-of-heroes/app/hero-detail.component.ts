import { Component, Input } from '@angular/core';
import { Hero } from './hero'

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent {
    @Input() hero: Hero;
    /*
        The hero property is an input property
    Later in this page, the parent AppComponent will tell the child HeroDetailComponent which hero to 
    display by binding its selectedHero to the hero property of the HeroDetailComponent. The binding will look like this:

    <hero-detail [hero]="selectedHero"></hero-detail>

    Putting square brackets around the hero property, to the left of the equal sign (=), makes it the target of a property 
    binding expression. You must declare a target binding property to be an input property. Otherwise, Angular rejects the
    binding and throws an error.
    */
}
