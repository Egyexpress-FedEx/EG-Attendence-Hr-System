import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWorks } from './sidebar-works';

describe('SidebarWorks', () => {
  let component: SidebarWorks;
  let fixture: ComponentFixture<SidebarWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarWorks],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarWorks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
