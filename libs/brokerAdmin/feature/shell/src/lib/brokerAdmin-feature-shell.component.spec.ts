import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrokerAdminFeatureShellComponent } from './brokerAdmin-feature-shell.component';

describe('BrokerAdminFeatureShellComponent', () => {
  let component: BrokerAdminFeatureShellComponent;
  let fixture: ComponentFixture<BrokerAdminFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerAdminFeatureShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrokerAdminFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
