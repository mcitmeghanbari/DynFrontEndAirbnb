import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyBkDtOverviewComponent } from './sty-bk-dt-overview.component';

describe('StyBkDtOverviewComponent', () => {
  let component: StyBkDtOverviewComponent;
  let fixture: ComponentFixture<StyBkDtOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyBkDtOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyBkDtOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
