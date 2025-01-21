import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrokerAdminFeatureAuthComponent } from './brokerAdmin-feature-auth.component';

describe('InsuranceBrokerAdminFeatureAuthComponent', () => {
  let component: BrokerAdminFeatureAuthComponent;
  let fixture: ComponentFixture<BrokerAdminFeatureAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerAdminFeatureAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrokerAdminFeatureAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
