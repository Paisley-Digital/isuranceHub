import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideSharedUiAlert } from '@insurance-shared-ui-alert';
import { provideSharedDataSetting } from '@insurance-shared-data-setting';
import { MAT_DEFAULT_OPTIONS_OVERRIDES } from '@insurance-shared-util-web-sdk';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
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
    importProvidersFrom(),
    provideSharedDataSetting(),
    ...MAT_DEFAULT_OPTIONS_OVERRIDES,
  ],
};
