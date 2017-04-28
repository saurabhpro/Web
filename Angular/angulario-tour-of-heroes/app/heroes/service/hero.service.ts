import { Injectable } from '@angular/core';

import { Hero } from '../model/hero';
import { HEROES } from '../constant/mock-heroes';
/*
The @Injectable() decorator tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.

Although the HeroService doesn't have any dependencies at the moment, applying the @Injectable() decorator ​from the start ensures consistency and future-proofing.
*/
@Injectable()
export class HeroService {

    /*
    The HeroService could get Hero data from anywhere—a web service, local storage, or a mock data source. 
    Removing data access from the component means you can change your mind about the implementation anytime, 
    without touching the components that need hero data.

    Eventually, the hero data will come from a remote server. When using a remote server, users don't have 
    to wait for the server to respond; additionally, you aren't able to block the UI during the wait.
    To coordinate the view with the response, you can use Promises, which is an asynchronous technique that 
    changes the signature of the getHeroes() method.

    The hero service makes a Promise
    A Promise essentially promises to call back when the results are ready. You ask an asynchronous service 
    to do some work and give it a callback function. The service does that work and eventually calls the function 
    with the results or an error.

    You're still mocking the data. You're simulating the behavior of an ultra-fast, zero-latency server, 
    by returning an immediately resolved Promise with the mock heroes as the result.
    */

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

}
