import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdrNavbarComponent } from './hdr-navbar.component';

describe('HdrNavbarComponent', () => {
  let component: HdrNavbarComponent;
  let fixture: ComponentFixture<HdrNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdrNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdrNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
