import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyTripsComponent } from './sty-trips.component';

describe('StyTripsComponent', () => {
  let component: StyTripsComponent;
  let fixture: ComponentFixture<StyTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
