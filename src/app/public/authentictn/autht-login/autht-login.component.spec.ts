import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthtLoginComponent } from './autht-login.component';

describe('AuthtLoginComponent', () => {
  let component: AuthtLoginComponent;
  let fixture: ComponentFixture<AuthtLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthtLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthtLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
