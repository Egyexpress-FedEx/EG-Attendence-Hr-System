import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerprintDevice } from './fingerprint-device';

describe('FingerprintDevice', () => {
  let component: FingerprintDevice;
  let fixture: ComponentFixture<FingerprintDevice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FingerprintDevice],
    }).compileComponents();

    fixture = TestBed.createComponent(FingerprintDevice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
