import { Component } from '@angular/core';
import { AttendanceComponent } from '../../../shared/components/pages/attendance/attendance';

@Component({
  selector: 'app-attendance',
  imports: [AttendanceComponent],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css',
})
export class Attendance {}
