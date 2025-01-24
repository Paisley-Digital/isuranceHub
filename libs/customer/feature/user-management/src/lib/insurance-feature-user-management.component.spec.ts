import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceFeatureUserManagementComponent } from './insurance-feature-user-management.component';

describe('InsuranceFeatureUserManagementComponent', () => {
  let component: InsuranceFeatureUserManagementComponent;
  let fixture: ComponentFixture<InsuranceFeatureUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceFeatureUserManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceFeatureUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
