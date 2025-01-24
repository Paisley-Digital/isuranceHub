import { Route } from '@angular/router';
import { BrokerAdminFeatureShellComponent } from './brokerAdmin-feature-shell.component';
import { insuranceFeatureUserManagementRoutes } from '../../../user-management/src';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: BrokerAdminFeatureShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'userManagement',
      },
      {
        path: 'userManagement',
        loadChildren: () =>
          import('@insurance-brokerAdmin-feature-user-management').then(
            (m) => m.insuranceFeatureUserManagementRoutes
          ),
      },
    ],
  },
];
