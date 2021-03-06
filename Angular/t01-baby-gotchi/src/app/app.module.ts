import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BabiesComponent } from './babies/babies.component';


// other imports...

/* Angular Fire */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { RandomPickerService } from './random-picker.service';
// Environment configuration

@NgModule({
  declarations: [
    AppComponent,
    BabiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [RandomPickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
