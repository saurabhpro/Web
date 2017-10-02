import { TestBed, inject } from '@angular/core/testing';

import { EmployeeAllAttendanceService } from './employee-all-attendance.service';

describe('EmployeeAllAttendanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeAllAttendanceService]
    });
  });

  it('should be created', inject([EmployeeAllAttendanceService], (service: EmployeeAllAttendanceService) => {
    expect(service).toBeTruthy();
  }));
});
