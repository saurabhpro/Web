import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { EmployeeStore } from '../repository/employee-store';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService) { }

  getEmployees() {
    this.employeeService
      .getAllEmpBasic()
      .then(
      employees => this.employees = employees,
      (err) => {
        console.log('Switching to local data copy');
        this.employees = JSON.parse(EmployeeStore.empObj);
      });
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  selectedEmployeeDetails(employee: Employee): void {
    this.selectedEmployee = employee;
  }

}
