import { Component } from '@angular/core';
import { ArrivesStatus } from '../../dashboard/arrives-status/arrives-status';
import { LeaveReqTable } from '../../dashboard/leave-req-table/leave-req-table';

@Component({
  selector: 'app-dashboardCom',
  imports: [ArrivesStatus,LeaveReqTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboardcomonents {}
