import {
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  importProvidersFrom,
  inject,
  isDevMode,
  LOCALE_ID,
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
import { overrideLocaleData } from '@insurance-clientBridge-shared-util-locales';

function initializeEnvironment() {
  const localeId = inject(LOCALE_ID);

  overrideLocaleData(localeId);
}

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
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: initializeEnvironment,
    },
    importProvidersFrom(),
    provideSharedDataSetting(),
    ...MAT_DEFAULT_OPTIONS_OVERRIDES,
  ],
};
