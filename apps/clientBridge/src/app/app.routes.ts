import { Route } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@insurance-clientBridge-feature-auth').then((m) => m.authRoutes),
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
