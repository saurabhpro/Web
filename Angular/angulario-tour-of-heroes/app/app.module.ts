//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

//Component
import { AppComponent } from './app.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule // <-- import the FormsModule before binding with [(ngModel)]
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
