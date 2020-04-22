import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyBkListComponent } from './sty-bk-list.component';

describe('StyBkListComponent', () => {
  let component: StyBkListComponent;
  let fixture: ComponentFixture<StyBkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyBkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyBkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
