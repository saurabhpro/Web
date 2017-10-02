import { Component, OnInit } from '@angular/core';
import { EmpAllAttendance } from '../models/emp-all-attendance';
import { EmployeeAllAttendanceService } from '../services/employee-all-attendance.service';

@Component({
  selector: 'app-employee-attendance-sheet',
  templateUrl: './employee-attendance-sheet.component.html',
  styleUrls: ['./employee-attendance-sheet.component.css']
})
export class EmployeeAttendanceSheetComponent implements OnInit {

  employees: EmpAllAttendance[];
  selectedEmployee: EmpAllAttendance;

  constructor(private employeeService: EmployeeAllAttendanceService) { }

  getEmployees() {
    this.employeeService
      .getAllAttendance()
      .then(employees => this.employees = employees);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  selectedEmployeeDetails(employee: EmpAllAttendance): void {
    this.selectedEmployee = employee;
  }
}
