import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

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
      .getAll()
      .then(employees => this.employees = employees);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  selectedEmployeeDetails(employee: Employee): void {
    this.selectedEmployee = employee;
  }

}
