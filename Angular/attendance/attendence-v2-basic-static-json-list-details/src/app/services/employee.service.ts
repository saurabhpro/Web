import { Injectable } from '@angular/core';
import { EmployeeStore } from '../repository/employee-store';
import { Employee } from '../models/employee';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {
  employeeList: Employee[];

  // private urlBase = 'http://localhost:8080/';
  private empBasicUrl = 'api/v1/emp';  // URL to web API

  constructor(private http: Http) { }

  // Get all customers
  getAllEmpBasic(): Promise<Employee[]> {
    return this.http.get(this.empBasicUrl)
               .toPromise()
               .then(response => response.json() as Employee[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /*
  getAll(): Promise<Employee[]> {
    this.employeeList = JSON.parse(EmployeeStore.empObj);
    return Promise.resolve(this.employeeList);
  }*/
}
