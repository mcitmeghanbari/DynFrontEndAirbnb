import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HstBecomeComponent } from './hst-become.component';

describe('HstBecomeComponent', () => {
  let component: HstBecomeComponent;
  let fixture: ComponentFixture<HstBecomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HstBecomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HstBecomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
