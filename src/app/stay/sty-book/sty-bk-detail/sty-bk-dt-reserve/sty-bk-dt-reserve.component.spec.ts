import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyBkDtReserveComponent } from './sty-bk-dt-reserve.component';

describe('StyBkDtReserveComponent', () => {
  let component: StyBkDtReserveComponent;
  let fixture: ComponentFixture<StyBkDtReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyBkDtReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyBkDtReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
