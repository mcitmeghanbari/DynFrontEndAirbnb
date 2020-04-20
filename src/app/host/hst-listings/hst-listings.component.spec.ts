import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HstListingsComponent } from './hst-listings.component';

describe('HstListingsComponent', () => {
  let component: HstListingsComponent;
  let fixture: ComponentFixture<HstListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HstListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HstListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
