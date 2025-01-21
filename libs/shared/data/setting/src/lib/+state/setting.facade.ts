import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as SettingActions from './setting.actions';
import * as SettingSelectors from './setting.selectors';
import {
  ColorPalette,
  ColorScheme,
  FontSizeEntity,
  Language,
} from './setting.model';

@Injectable()
export class SettingFacade {
  private store = inject(Store);
  error$ = this.store.pipe(select(SettingSelectors.getSettingError));
  language$ = this.store.pipe(select(SettingSelectors.getSettingLanguage));
  theme$ = this.store.pipe(select(SettingSelectors.getSettingTheme));
  colorPalette$ = this.store.pipe(
    select(SettingSelectors.getSettingThemeColorPalette)
  );
  colorScheme$ = this.store.pipe(
    select(SettingSelectors.getSettingThemeColorScheme)
  );
  fontScheme$ = this.store.pipe(select(SettingSelectors.getSettingFontScheme));

  init() {
    this.store.dispatch(SettingActions.init());
  }

  changeLanguage(languageCode: Language['code']) {
    this.store.dispatch(SettingActions.changeLanguage({ languageCode }));
  }

  changeColorPalette(colorPaletteName: ColorPalette['name']) {
    this.store.dispatch(
      SettingActions.changeColorPalette({ colorPaletteName })
    );
  }

  changeColorScheme(colorScheme: ColorScheme) {
    this.store.dispatch(SettingActions.changeColorScheme({ colorScheme }));
  }

  changeFontSize(size: FontSizeEntity['size']) {
    this.store.dispatch(SettingActions.changeFontSize({ size }));
  }
}
