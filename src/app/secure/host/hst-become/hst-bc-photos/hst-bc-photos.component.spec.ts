import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HstBcPhotosComponent } from './hst-bc-photos.component';

describe('HstBcPhotosComponent', () => {
  let component: HstBcPhotosComponent;
  let fixture: ComponentFixture<HstBcPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HstBcPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HstBcPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
