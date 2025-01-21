import { Route } from '@angular/router';
import { BrokerAdminFeatureAuthComponent } from './brokerAdmin-feature-auth.component';

export const authRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: BrokerAdminFeatureAuthComponent,
  },
];
