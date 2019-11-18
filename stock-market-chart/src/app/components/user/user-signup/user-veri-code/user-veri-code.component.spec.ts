import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVeriCodeComponent } from './user-veri-code.component';

describe('UserVeriCodeComponent', () => {
  let component: UserVeriCodeComponent;
  let fixture: ComponentFixture<UserVeriCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVeriCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVeriCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
