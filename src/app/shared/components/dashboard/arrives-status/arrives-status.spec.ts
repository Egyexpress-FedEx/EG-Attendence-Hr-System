import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivesStatus } from './arrives-status';

describe('ArrivesStatus', () => {
  let component: ArrivesStatus;
  let fixture: ComponentFixture<ArrivesStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrivesStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrivesStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
