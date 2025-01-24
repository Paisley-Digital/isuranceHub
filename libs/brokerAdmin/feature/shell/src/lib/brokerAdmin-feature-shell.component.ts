import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderDesktopComponent } from '@insurance-shared-ui-header-desktop';
import { MatSidenav, MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar.component';
import { isHandsetScreen } from '@insurance-shared-util-common';

@Component({
  selector: 'insurance-broker-admin-feature-shell',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderDesktopComponent,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavModule,
    RouterOutlet,
    SideBarComponent,
  ],
  templateUrl: './brokerAdmin-feature-shell.component.html',
  styleUrl: './brokerAdmin-feature-shell.component.scss',
})
export class BrokerAdminFeatureShellComponent {
  isHandsetScreen$ = isHandsetScreen();
}
