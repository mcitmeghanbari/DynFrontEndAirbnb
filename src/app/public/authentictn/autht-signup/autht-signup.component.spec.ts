import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthtSignupComponent } from './autht-signup.component';

describe('AuthtSignupComponent', () => {
  let component: AuthtSignupComponent;
  let fixture: ComponentFixture<AuthtSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthtSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthtSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
