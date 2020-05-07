import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyTrpListItemComponent } from './sty-trp-list-item.component';

describe('StyTrpListItemComponent', () => {
  let component: StyTrpListItemComponent;
  let fixture: ComponentFixture<StyTrpListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyTrpListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyTrpListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
