import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyBkListItemComponent } from './sty-bk-list-item.component';

describe('StyBkListItemComponent', () => {
  let component: StyBkListItemComponent;
  let fixture: ComponentFixture<StyBkListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyBkListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyBkListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
