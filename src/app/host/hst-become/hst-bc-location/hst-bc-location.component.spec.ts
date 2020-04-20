import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HstBcLocationComponent } from './hst-bc-location.component';

describe('HstBcLocationComponent', () => {
  let component: HstBcLocationComponent;
  let fixture: ComponentFixture<HstBcLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HstBcLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HstBcLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
