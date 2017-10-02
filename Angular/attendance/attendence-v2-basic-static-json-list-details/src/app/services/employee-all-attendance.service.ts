import { Injectable } from '@angular/core';
import { EmpAllAttendance } from '../models/emp-all-attendance';
import { Http } from '@angular/http';

@Injectable()
export class EmployeeAllAttendanceService {
  employeeList: EmpAllAttendance[];

    private urlBase = 'http://localhost:8080/';
    private empAllUrl = 'api/v1/all';  // URL to web API

    constructor(private http: Http) { }
    // Get all customers
    getAllAttendance(): Promise<EmpAllAttendance[]> {
      return this.http.get(this.urlBase + this.empAllUrl)
                 .toPromise()
                 .then(response => response.json() as EmpAllAttendance[])
                 .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('Error', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
}
