import { ColorPalette, FontSizeEntity } from './setting.model';

export enum StorageKey {
  PREFERRED_LANGUAGE = 'preferred-language',
  PREFERRED_COLOR_PALETTE = 'preferred-color-palette',
  PREFERRED_COLOR_SCHEME = 'preferred-color-scheme',
  PREFERRED_FONT_SIZE = 'preferred-font-size',
}

export const COLOR_PALETTES: readonly ColorPalette[] = [
  {
    name: 'theme--default',
    title: `Default`,
    primary: '#2c92f2',
    accent: '#f89b17',
    default: true,
  },
  {
    name: 'theme--spring',
    title: `Spring`,
    primary: '#ea366c',
    accent: '#3392d6',
  },
  {
    name: 'theme--autumn',
    title: `Autumn`,
    primary: '#f85f31',
    accent: '#53899c',
  },
];

export const LANGUAGES = [
  {
    code: 'ar',
    name: 'العربیة',
  },
  {
    code: 'en',
    name: 'English',
  },
] as const;

export const fontSizes: FontSizeEntity[] = [
  { title: 'Small', size: 16 },
  {
    title: 'Medium',
    size: 18,
  },
  { title: 'Large', size: 20 },
];

export const themeTitles: Record<string, string> = {
  light: 'Light',
  dark: 'Dark',
};
