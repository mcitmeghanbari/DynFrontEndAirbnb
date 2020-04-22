import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HstBcPriceComponent } from './hst-bc-price.component';

describe('HstBcPriceComponent', () => {
  let component: HstBcPriceComponent;
  let fixture: ComponentFixture<HstBcPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HstBcPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HstBcPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
