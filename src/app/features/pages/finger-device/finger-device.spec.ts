import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerDevice } from './finger-device';

describe('FingerDevice', () => {
  let component: FingerDevice;
  let fixture: ComponentFixture<FingerDevice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FingerDevice],
    }).compileComponents();

    fixture = TestBed.createComponent(FingerDevice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
