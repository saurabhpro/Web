import { Component, OnInit } from '@angular/core';

import { Hero } from './heroes/model/hero';
import { HeroService } from './heroes/service/hero.service';

//Decorator
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [HeroService]

})
export class AppComponent implements OnInit {
    heroes: Hero[];                //The heroes type isn't defined because TypeScript infers it from the HEROES array.

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

    /*
    Don't use new with the HeroService
How should the AppComponent acquire a runtime concrete HeroService instance?

You could create a new instance of the HeroService with new like this:

COPY CODE
heroService = new HeroService(); // don't do this
However, this option isn't ideal for the following reasons:

The component has to know how to create a HeroService. If you change the HeroService constructor, you must find and update every place you created the service. Patching code in multiple places is error prone and adds to the test burden.
You create a service each time you use new. What if the service caches heroes and shares that cache with others? You couldn't do that.
With the AppComponent locked into a specific implementation of the HeroService, switching implementations for different scenarios, such as operating offline or using different mocked versions for testing, would be difficult.
   
   The constructor itself does nothing. The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.

Now Angular knows to supply an instance of the HeroService when it creates an AppComponent.
To teach the injector how to make a HeroService, add the following providers array property to the bottom of the component metadata in the @Component call.

Inject the HeroService
Instead of using the new line, you'll add two lines.

Add a constructor that also defines a private property.
Add to the component's providers metadata.

    */
    constructor(private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.getHeroes();
    }


}
