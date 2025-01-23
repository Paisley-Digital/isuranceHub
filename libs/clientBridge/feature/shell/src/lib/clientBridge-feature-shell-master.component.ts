import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { SideBarComponent } from './side-bar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderDesktopComponent } from '@insurance-shared-ui-header-desktop';
import { isHandsetScreen } from '@insurance-shared-util-common';

@Component({
  selector: 'insurance-insurance-feature-shell-master',
  imports: [
    CommonModule,
    MatSidenavContainer,
    SideBarComponent,
    MatSidenavModule,
    RouterOutlet,
    HeaderDesktopComponent,
  ],
  templateUrl: './clientBridge-feature-shell-master.component.html',
  styleUrl: './clientBridge-feature-shell-master.component.scss',
})
export class ClientBridgeFeatureShellMasterComponent {
  isHandsetScreen$ = isHandsetScreen();
}
