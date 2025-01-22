import {
  API_ROOT,
  ENVIRONMENT,
  Environment,
  IMAGES_PATH,
  DEFAULT_API_ERROR_MESSAGE,
} from '@insurance-shared-util-web-sdk';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

export function provideSharedUtilAppCore({
  imagesPath,
  apiRoot,
  ...config
}: Environment): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: ENVIRONMENT,
      useValue: config,
    },
    {
      provide: IMAGES_PATH,
      useValue: imagesPath,
    },
    {
      provide: API_ROOT,
      useValue: apiRoot,
    },
    {
      provide: DEFAULT_API_ERROR_MESSAGE,
      useValue: 'Please try again later.',
    },
  ]);
}
