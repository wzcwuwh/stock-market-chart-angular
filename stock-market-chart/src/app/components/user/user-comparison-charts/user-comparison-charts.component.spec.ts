import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComparisonChartsComponent } from './user-comparison-charts.component';

describe('UserComparisonChartsComponent', () => {
  let component: UserComparisonChartsComponent;
  let fixture: ComponentFixture<UserComparisonChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComparisonChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComparisonChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
