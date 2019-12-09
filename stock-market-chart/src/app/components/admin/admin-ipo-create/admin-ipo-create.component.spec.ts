import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIPOCreateComponent } from './admin-ipo-create.component';

describe('AdminIPOCreateComponent', () => {
  let component: AdminIPOCreateComponent;
  let fixture: ComponentFixture<AdminIPOCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIPOCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIPOCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
