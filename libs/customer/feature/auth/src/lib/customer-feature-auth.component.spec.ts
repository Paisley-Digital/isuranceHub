import { ComponentFixture, TestBed } from '@angular/core/testing';
import { customerFeatureAuthComponent } from './customer-feature-auth.component';

describe('InsurancecustomerFeatureAuthComponent', () => {
  let component: customerFeatureAuthComponent;
  let fixture: ComponentFixture<customerFeatureAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [customerFeatureAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(customerFeatureAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
