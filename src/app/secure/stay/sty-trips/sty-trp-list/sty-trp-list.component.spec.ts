import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyTrpListComponent } from './sty-trp-list.component';

describe('StyTrpListComponent', () => {
  let component: StyTrpListComponent;
  let fixture: ComponentFixture<StyTrpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyTrpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyTrpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
