import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HstBcAmenitiesComponent } from './hst-bc-amenities.component';

describe('HstBcAmenitiesComponent', () => {
  let component: HstBcAmenitiesComponent;
  let fixture: ComponentFixture<HstBcAmenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HstBcAmenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HstBcAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
