import { Injectable } from '@angular/core';
import { EmployeeStore } from '../repository/employee-store';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {
  employeeList: Employee[];

  constructor() { }

  getAll(): Promise<Employee[]> {
    this.employeeList = JSON.parse(EmployeeStore.empObj);
    return Promise.resolve(this.employeeList);
  }
}
