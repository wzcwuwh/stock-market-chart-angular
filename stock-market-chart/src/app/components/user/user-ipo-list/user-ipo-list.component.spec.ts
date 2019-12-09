import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIpoListComponent } from './user-ipo-list.component';

describe('UserIpoListComponent', () => {
  let component: UserIpoListComponent;
  let fixture: ComponentFixture<UserIpoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIpoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIpoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
