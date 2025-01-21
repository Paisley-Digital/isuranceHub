import { Route } from '@angular/router';
import { authGuard } from '../../../clientBridge/src/app/guards/auth.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@insurance-brokerAdmin-feature-auth').then((m) => m.authRoutes),
  },
  {
    path: 'console',
    canActivateChild: [authGuard],
    loadChildren: () =>
      import('@insurance-clientBridge-feature-shell').then(
        (m) => m.shellRoutes
      ),
  },
];
