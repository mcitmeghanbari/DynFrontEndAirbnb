import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrNavlinksComponent } from './ftr-navlinks.component';

describe('FtrNavlinksComponent', () => {
  let component: FtrNavlinksComponent;
  let fixture: ComponentFixture<FtrNavlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrNavlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrNavlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
