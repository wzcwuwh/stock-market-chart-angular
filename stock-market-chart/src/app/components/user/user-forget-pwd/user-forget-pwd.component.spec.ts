import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForgetPwdComponent } from './user-forget-pwd.component';

describe('UserForgetPwdComponent', () => {
  let component: UserForgetPwdComponent;
  let fixture: ComponentFixture<UserForgetPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserForgetPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserForgetPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
