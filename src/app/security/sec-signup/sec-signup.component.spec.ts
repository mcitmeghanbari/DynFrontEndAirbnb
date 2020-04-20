import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecSignupComponent } from './sec-signup.component';

describe('SecSignupComponent', () => {
  let component: SecSignupComponent;
  let fixture: ComponentFixture<SecSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
