export type ProductTheme = 'universe' | 'social' | (string & {});
export type ColorMode = 'light' | 'dark' | 'system';

export const productThemes = {
  universe: { accent: 'crimson', density: 'compact', energy: 'precise' },
  social: { accent: 'brand', density: 'comfortable', energy: 'warm' }
} as const;
