import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImportExcelComponent } from './admin-import-excel.component';

describe('AdminImportExcelComponent', () => {
  let component: AdminImportExcelComponent;
  let fixture: ComponentFixture<AdminImportExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImportExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImportExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
