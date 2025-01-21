export type ColorScheme = 'light' | 'dark';

export interface ColorPalette {
  name: string;
  title: string;
  primary: string;
  accent: string;
  default?: boolean;
}

export interface Language {
  code: string;
  name: string;
}

export interface Theme {
  colorPalette: ColorPalette;
  colorScheme: ColorScheme;
}

export interface FontSizeEntity {
  title: string;
  size: number;
}

export interface SettingEntity {
  language: Language;
  theme: Theme;
  fontSize: FontSizeEntity;
}

export interface DataStatus {
  loading: boolean;
  loaded: boolean;
  //eslint-disable-next-line  @typescript-eslint/no-explicit-any
  error?: any;
}
