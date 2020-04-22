import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HstBcRoomComponent } from './hst-bc-room.component';

describe('HstBcRoomComponent', () => {
  let component: HstBcRoomComponent;
  let fixture: ComponentFixture<HstBcRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HstBcRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HstBcRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
