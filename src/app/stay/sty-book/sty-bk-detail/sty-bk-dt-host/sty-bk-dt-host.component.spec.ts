import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyBkDtHostComponent } from './sty-bk-dt-host.component';

describe('StyBkDtHostComponent', () => {
  let component: StyBkDtHostComponent;
  let fixture: ComponentFixture<StyBkDtHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyBkDtHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyBkDtHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
