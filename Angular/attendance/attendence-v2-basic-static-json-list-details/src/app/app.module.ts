import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAttendanceSheetComponent } from './employee-attendance-sheet/employee-attendance-sheet.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeAllAttendanceService } from './services/employee-all-attendance.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeAttendanceSheetComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [EmployeeService, EmployeeAllAttendanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
