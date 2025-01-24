import { Route } from '@angular/router';
import { customerFeatureShellComponent } from './customer-feature-shell.component';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: customerFeatureShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'userManagement',
      },
      {
        path: 'userManagement',
        loadChildren: () =>
          import('@insurance-customer-feature-user-management').then(
            (m) => m.insuranceFeatureUserManagementRoutes
          ),
      },
    ],
  },
];
