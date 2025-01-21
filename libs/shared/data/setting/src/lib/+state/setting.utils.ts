import { Inject, Injectable, LOCALE_ID, PLATFORM_ID } from '@angular/core';
import {
  DOCUMENT,
  isPlatformBrowser,
  LocationStrategy,
  PlatformLocation,
} from '@angular/common';
import { Environment, ENVIRONMENT } from '@insurance-shared-util-web-sdk';
import { LocalStorageService } from '@insurance-shared-util-local-storage';

import {
  COLOR_PALETTES,
  fontSizes,
  LANGUAGES,
  StorageKey,
} from './setting.constants';
import {
  Theme,
  Language,
  ColorPalette,
  ColorScheme,
  FontSizeEntity,
} from './setting.model';
import { Meta } from '@angular/platform-browser';

export function findColorPaletteByName(
  colorPaletteName: ColorPalette['name'] | null
) {
  return COLOR_PALETTES.find((palette) => palette.name === colorPaletteName);
}

export function findFontSizeBySize(size: FontSizeEntity['size']) {
  return fontSizes.find((fontSize) => fontSize.size === size);
}

export function findLanguageByCode(languageCode: Language['code'] | null) {
  return LANGUAGES.find((language) => language.code === languageCode);
}

@Injectable()
export class SettingUtils {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(ENVIRONMENT) private environment: Environment,
    @Inject(PLATFORM_ID) private platformId: Record<string, unknown>,
    @Inject(LOCALE_ID) private localeId: string,
    private meta: Meta,
    private platformLocation: PlatformLocation,
    private locationStrategy: LocationStrategy,
    private localStorage: LocalStorageService
  ) {}

  changeColorPalette(colorPaletteName: Theme['colorPalette']['name'] | null) {
    if (isPlatformBrowser(this.platformId) && colorPaletteName) {
      this.localStorage.setItem(
        StorageKey.PREFERRED_COLOR_PALETTE,
        colorPaletteName
      );
      const colorPalette = COLOR_PALETTES.find(
        (palette) => palette.name === colorPaletteName
      );
      const colorPaletteValues = COLOR_PALETTES.filter(
        (palette) => !palette.default
      ).map((palette) => palette.name) as string[];

      this.document.body.classList.remove(...colorPaletteValues);

      if (colorPalette?.name) {
        this.document.body.classList.add(colorPalette.name);
      }
    }
  }

  changeColorScheme(colorScheme: Theme['colorScheme'] | null) {
    if (isPlatformBrowser(this.platformId) && colorScheme) {
      this.localStorage.setItem(StorageKey.PREFERRED_COLOR_SCHEME, colorScheme);
      if (colorScheme === 'light') {
        this.document.body.classList.remove('color-scheme-dark');
      } else {
        this.document.body.classList.add('color-scheme-dark');
      }
    }
  }

  changeLanguage(languageCode: Language['code'] | null) {
    if (
      isPlatformBrowser(this.platformId) &&
      this.environment.production &&
      languageCode
    ) {
      this.localStorage.setItem(StorageKey.PREFERRED_LANGUAGE, languageCode);
      if (this.localeId !== languageCode) {
        const pathname = this.platformLocation.pathname.replace(
          this.locationStrategy.getBaseHref(),
          `/${languageCode}/`
        );
        this.document.location.href = pathname + this.platformLocation.search;
      }
    }
  }

  updateThemeColorMetaTag(colorScheme: ColorScheme) {
    this.meta.updateTag({
      name: 'theme-color',
      content: colorScheme === 'light' ? '#FFFFFF' : '#232938',
    });
  }

  changeFontSize(size: FontSizeEntity['size'] | null) {
    if (isPlatformBrowser(this.platformId) && size) {
      this.localStorage.setItem(
        StorageKey.PREFERRED_FONT_SIZE,
        size.toString()
      );
      this.document.documentElement.style.fontSize = `${size}px`;
    }
  }
}
