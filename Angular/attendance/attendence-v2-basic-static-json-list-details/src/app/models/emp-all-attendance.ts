export interface EmpAllAttendance {
    empRevalId: string;
    empSalesforceId: string;
    empName: string;
    empEmailId: string;
    empAvgCheckInTimeForMonth: string;
    empAvgCheckOutTimeForMonth: string;
    empAvgWorkHoursForMonth: string;
    allDateDetailsList: SingleDateAttendance[];
}

interface SingleDateAttendance {
            currentDate: string;
            attendanceStatusType: string;
            leaveTypeForThisDate: string;
            checkIn: string;
            checkOut: string;
            workTimeForDay: string;
}
