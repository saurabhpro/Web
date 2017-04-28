import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../heroes/model/hero';
import { HeroService } from '../heroes/service/hero.service';
@Component({
    moduleId:module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    /*@Input() hero: Hero;
    
        The hero property is an input property
    Later in this page, the parent AppComponent will tell the child HeroDetailComponent which hero to 
    display by binding its selectedHero to the hero property of the HeroDetailComponent. The binding will look like this:

    <hero-detail [hero]="selectedHero"></hero-detail>

    Putting square brackets around the hero property, to the left of the equal sign (=), makes it the target of a property 
    binding expression. You must declare a target binding property to be an input property. Otherwise, Angular rejects the
    binding and throws an error.
    */
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}

