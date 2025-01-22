import {
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  inject,
  isDevMode,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideSharedUiAlert } from '@insurance-shared-ui-alert';
import { MAT_DEFAULT_OPTIONS_OVERRIDES } from '@insurance-shared-util-web-sdk';
import { provideSharedDataSetting } from '@insurance-shared-data-setting';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideSharedUtilAppCore } from '@insurance-shared-util-app-core';
import { environment } from '../environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(appRoutes),
    provideSharedUiAlert(),
    provideStore(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    provideEffects([]),
    provideStoreDevtools({
      logOnly: !isDevMode(),
      connectInZone: true,
    }),
    provideSharedDataSetting(),
    provideSharedUtilAppCore(environment),
    StoreRouterConnectingModule,
    ...MAT_DEFAULT_OPTIONS_OVERRIDES,
  ],
};
