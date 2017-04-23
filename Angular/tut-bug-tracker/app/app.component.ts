import { Component } from '@angular/core';

//remove if not used in the testing contructor
import { FirebaseConfigService } from './core/service/firebase-config.service'

@Component({
    selector: 'my-app',
    template: `
    <navbar></navbar>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `,
    styles: [`
    .container{
        margin-top: 5rem;
    }
    `]
})
export class AppComponent {

    //constructor for testing the firebase config startup TODO remove
    constructor(private service: FirebaseConfigService) {}  //no use only for logging
}