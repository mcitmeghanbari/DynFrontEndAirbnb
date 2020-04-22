import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentictnComponent } from './authentictn.component';

describe('AuthentictnComponent', () => {
  let component: AuthentictnComponent;
  let fixture: ComponentFixture<AuthentictnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentictnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentictnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
