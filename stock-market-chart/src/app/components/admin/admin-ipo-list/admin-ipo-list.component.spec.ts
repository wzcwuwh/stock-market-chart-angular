import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIPOListComponent } from './admin-ipo-list.component';

describe('AdminIPOListComponent', () => {
  let component: AdminIPOListComponent;
  let fixture: ComponentFixture<AdminIPOListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIPOListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIPOListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
