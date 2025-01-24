import { ComponentFixture, TestBed } from '@angular/core/testing';
import { customerFeatureShellComponent } from './customer-feature-shell.component';

describe('customerFeatureShellComponent', () => {
  let component: customerFeatureShellComponent;
  let fixture: ComponentFixture<customerFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [customerFeatureShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(customerFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
