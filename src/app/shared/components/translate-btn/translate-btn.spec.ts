import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateBtn } from './translate-btn';

describe('TranslateBtn', () => {
  let component: TranslateBtn;
  let fixture: ComponentFixture<TranslateBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateBtn],
    }).compileComponents();

    fixture = TestBed.createComponent(TranslateBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
