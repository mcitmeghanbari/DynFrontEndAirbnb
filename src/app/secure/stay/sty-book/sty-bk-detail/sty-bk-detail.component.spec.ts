import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyBkDetailComponent } from './sty-bk-detail.component';

describe('StyBkDetailComponent', () => {
  let component: StyBkDetailComponent;
  let fixture: ComponentFixture<StyBkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyBkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyBkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
