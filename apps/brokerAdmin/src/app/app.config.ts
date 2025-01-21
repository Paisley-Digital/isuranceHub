import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideSharedUiAlert } from '@insurance-shared-ui-alert';
import { provideSharedDataSetting } from '@insurance-shared-data-setting';
import { MAT_DEFAULT_OPTIONS_OVERRIDES } from '@insurance-shared-util-web-sdk';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideSharedUiAlert(),
    provideSharedDataSetting(),
    ...MAT_DEFAULT_OPTIONS_OVERRIDES,
  ],
};
