import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUploadSummaryComponent } from './admin-upload-summary.component';

describe('AdminUploadSummaryComponent', () => {
  let component: AdminUploadSummaryComponent;
  let fixture: ComponentFixture<AdminUploadSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUploadSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUploadSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
