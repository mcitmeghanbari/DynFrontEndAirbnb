import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyTrpDetailComponent } from './sty-trp-detail.component';

describe('StyTrpDetailComponent', () => {
  let component: StyTrpDetailComponent;
  let fixture: ComponentFixture<StyTrpDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyTrpDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyTrpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
