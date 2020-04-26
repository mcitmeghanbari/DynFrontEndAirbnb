import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyBkDtPhotosComponent } from './sty-bk-dt-photos.component';

describe('StyBkDtPhotosComponent', () => {
  let component: StyBkDtPhotosComponent;
  let fixture: ComponentFixture<StyBkDtPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyBkDtPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyBkDtPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
