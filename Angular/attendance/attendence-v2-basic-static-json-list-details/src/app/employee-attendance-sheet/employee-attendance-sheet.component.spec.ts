import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAttendanceSheetComponent } from './employee-attendance-sheet.component';

describe('EmployeeAttendanceSheetComponent', () => {
  let component: EmployeeAttendanceSheetComponent;
  let fixture: ComponentFixture<EmployeeAttendanceSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAttendanceSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAttendanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
