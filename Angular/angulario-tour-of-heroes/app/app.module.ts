//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';

//Component
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


//Service
import { HeroService } from './heroes/service/hero.service';
import { AppRoutingModule }     from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent, //the declarations array contains a list of application components, pipes, 
        //and directives that belong to the module. 
        //A component must be declared in a module before other components can reference it.
        DashboardComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
