import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BugModule } from './bugs/bug.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [BrowserModule, BugModule, AppRoutingModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }