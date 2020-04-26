import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyBkDtOvSummaryComponent } from './sty-bk-dt-ov-summary.component';

describe('StyBkDtOvSummaryComponent', () => {
  let component: StyBkDtOvSummaryComponent;
  let fixture: ComponentFixture<StyBkDtOvSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyBkDtOvSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyBkDtOvSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
