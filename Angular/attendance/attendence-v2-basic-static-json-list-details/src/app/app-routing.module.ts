import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAttendanceSheetComponent } from './employee-attendance-sheet/employee-attendance-sheet.component';

const routes: Routes = [
  {
    path: 'emp',
    children: [ {
      path: '',
      component: EmployeeListComponent
    }
  ]
  },
  {
    path: 'all',
    children: [ {
      path: '',
      component: EmployeeAttendanceSheetComponent
    }
  ]
  },
  {
    path: '**',
    redirectTo: 'emp'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
