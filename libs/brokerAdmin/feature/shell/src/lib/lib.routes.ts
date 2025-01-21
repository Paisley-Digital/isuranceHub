import { Route } from '@angular/router';
import { BrokerAdminFeatureShellComponent } from './brokerAdmin-feature-shell.component';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: BrokerAdminFeatureShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
];
