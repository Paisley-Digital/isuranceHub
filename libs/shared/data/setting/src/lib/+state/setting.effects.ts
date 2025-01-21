import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LocalStorageService } from '@insurance-shared-util-local-storage';
import { SettingUtils } from './setting.utils';
import * as SettingActions from './setting.actions';
import { StorageKey } from './setting.constants';
import { ColorScheme } from './setting.model';
import { tap } from 'rxjs';
import { fetch, pessimisticUpdate } from '@nx/angular';

@Injectable()
export class SettingEffects {
  private readonly actions$ = inject(Actions);
  private settingUtils = inject(SettingUtils);
  private localeStorage = inject(LocalStorageService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingActions.init),
      fetch({
        run: () => {
          const languageCode = this.localeStorage.getItem(
            StorageKey.PREFERRED_LANGUAGE
          );
          const colorPaletteName = this.localeStorage.getItem(
            StorageKey.PREFERRED_COLOR_PALETTE
          );
          const colorScheme = this.localeStorage.getItem(
            StorageKey.PREFERRED_COLOR_SCHEME
          ) as ColorScheme | null;
          const fontSize = Number(
            this.localeStorage.getItem(StorageKey.PREFERRED_FONT_SIZE)
          );

          this.settingUtils.changeLanguage(languageCode);
          this.settingUtils.changeColorPalette(colorPaletteName);
          this.settingUtils.changeColorScheme(colorScheme);
          this.settingUtils.changeFontSize(fontSize);

          return SettingActions.loadSettingSuccess({
            languageCode,
            colorPaletteName,
            colorScheme,
          });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return SettingActions.loadSettingFailure({ error });
        },
      })
    )
  );

  changeLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingActions.changeLanguage),
      pessimisticUpdate({
        run: (action) => {
          this.settingUtils.changeLanguage(action.languageCode);

          return SettingActions.changeLanguageSuccess();
        },
        onError: (action, error) => {
          console.error('Error', error);
          return SettingActions.changeLanguageFailure({ error });
        },
      })
    )
  );

  changeColorPalette$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingActions.changeColorPalette),
      pessimisticUpdate({
        run: ({ colorPaletteName }) => {
          this.settingUtils.changeColorPalette(colorPaletteName);

          return SettingActions.changeColorPaletteSuccess();
        },
        onError: (_action, error) => {
          console.error('Error', error);
          return SettingActions.changeColorPaletteFailure({ error });
        },
      })
    )
  );

  changeColorScheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingActions.changeColorScheme),
      pessimisticUpdate({
        run: ({ colorScheme }) => {
          this.settingUtils.changeColorScheme(colorScheme);

          return SettingActions.changeColorSchemeSuccess({ colorScheme });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return SettingActions.changeColorSchemeFailure({ error });
        },
      })
    )
  );

  changeFontSize$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingActions.changeFontSize),
      pessimisticUpdate({
        run: ({ size }) => {
          this.settingUtils.changeFontSize(size);

          return SettingActions.changeFontSchemeSuccess();
        },
        onError: (_action, error) => {
          console.error('Error', error);
          return SettingActions.changeFontSchemeFailure({ error });
        },
      })
    )
  );

  loadSettingSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SettingActions.loadSettingSuccess),
        tap((setting) =>
          setting.colorScheme
            ? this.settingUtils.updateThemeColorMetaTag(setting.colorScheme)
            : null
        )
      ),
    { dispatch: false }
  );

  changeColorSchemeSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SettingActions.changeColorSchemeSuccess),
        tap(({ colorScheme }) =>
          this.settingUtils.updateThemeColorMetaTag(colorScheme)
        )
      ),
    { dispatch: false }
  );
}
