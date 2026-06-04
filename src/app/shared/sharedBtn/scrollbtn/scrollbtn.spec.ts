import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scrollbtn } from './scrollbtn';

describe('Scrollbtn', () => {
  let component: Scrollbtn;
  let fixture: ComponentFixture<Scrollbtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scrollbtn],
    }).compileComponents();

    fixture = TestBed.createComponent(Scrollbtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
