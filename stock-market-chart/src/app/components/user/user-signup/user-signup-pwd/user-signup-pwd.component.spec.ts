import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignupPwdComponent } from './user-signup-pwd.component';

describe('UserSignupPwdComponent', () => {
  let component: UserSignupPwdComponent;
  let fixture: ComponentFixture<UserSignupPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSignupPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignupPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
