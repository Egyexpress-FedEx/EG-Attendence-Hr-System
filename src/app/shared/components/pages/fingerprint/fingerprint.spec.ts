import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fingerprint } from './fingerprint';

describe('Fingerprint', () => {
  let component: Fingerprint;
  let fixture: ComponentFixture<Fingerprint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fingerprint],
    }).compileComponents();

    fixture = TestBed.createComponent(Fingerprint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
