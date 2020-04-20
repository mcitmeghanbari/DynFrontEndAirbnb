import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HstBcCalendarComponent } from './hst-bc-calendar.component';

describe('HstBcCalendarComponent', () => {
  let component: HstBcCalendarComponent;
  let fixture: ComponentFixture<HstBcCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HstBcCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HstBcCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
