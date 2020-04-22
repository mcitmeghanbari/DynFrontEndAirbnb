import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyBookComponent } from './sty-book.component';

describe('StyBookComponent', () => {
  let component: StyBookComponent;
  let fixture: ComponentFixture<StyBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
