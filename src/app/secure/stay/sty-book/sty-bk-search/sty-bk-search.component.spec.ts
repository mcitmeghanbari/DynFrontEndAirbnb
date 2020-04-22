import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyBkSearchComponent } from './sty-bk-search.component';

describe('StyBkSearchComponent', () => {
  let component: StyBkSearchComponent;
  let fixture: ComponentFixture<StyBkSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyBkSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyBkSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
