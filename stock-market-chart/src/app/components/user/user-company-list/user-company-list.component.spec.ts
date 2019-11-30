import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompanyListComponent } from './user-company-list.component';

describe('UserCompanyListComponent', () => {
  let component: UserCompanyListComponent;
  let fixture: ComponentFixture<UserCompanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompanyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
