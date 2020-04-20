import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HstBcTitleComponent } from './hst-bc-title.component';

describe('HstBcTitleComponent', () => {
  let component: HstBcTitleComponent;
  let fixture: ComponentFixture<HstBcTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HstBcTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HstBcTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
