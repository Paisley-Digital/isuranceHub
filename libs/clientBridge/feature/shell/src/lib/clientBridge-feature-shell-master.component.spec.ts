import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientBridgeFeatureShellMasterComponent } from './clientBridge-feature-shell-master.component';

describe('InsuranceFeatureShellMasterComponent', () => {
  let component: ClientBridgeFeatureShellMasterComponent;
  let fixture: ComponentFixture<ClientBridgeFeatureShellMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientBridgeFeatureShellMasterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientBridgeFeatureShellMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
