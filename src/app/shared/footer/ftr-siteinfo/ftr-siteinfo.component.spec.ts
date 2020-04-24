import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrSiteinfoComponent } from './ftr-siteinfo.component';

describe('FtrSiteinfoComponent', () => {
  let component: FtrSiteinfoComponent;
  let fixture: ComponentFixture<FtrSiteinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrSiteinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrSiteinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
