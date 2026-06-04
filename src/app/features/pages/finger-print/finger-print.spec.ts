import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerPrint } from './finger-print';

describe('FingerPrint', () => {
  let component: FingerPrint;
  let fixture: ComponentFixture<FingerPrint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FingerPrint],
    }).compileComponents();

    fixture = TestBed.createComponent(FingerPrint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
