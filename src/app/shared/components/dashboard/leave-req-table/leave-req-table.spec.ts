import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveReqTable } from './leave-req-table';

describe('LeaveReqTable', () => {
  let component: LeaveReqTable;
  let fixture: ComponentFixture<LeaveReqTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveReqTable],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveReqTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
