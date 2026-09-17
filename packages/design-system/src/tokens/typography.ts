export const typography = {
  family: { sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', mono: '"IBM Plex Mono", "SFMono-Regular", Consolas, monospace' },
  style: {
    display: { size: '3.5rem', lineHeight: '1.04', weight: 620, tracking: '-0.045em' },
    'heading-xl': { size: '2.25rem', lineHeight: '1.12', weight: 620, tracking: '-0.035em' },
    'heading-lg': { size: '1.75rem', lineHeight: '1.2', weight: 620, tracking: '-0.025em' },
    'heading-md': { size: '1.375rem', lineHeight: '1.25', weight: 600, tracking: '-0.018em' },
    'heading-sm': { size: '1.0625rem', lineHeight: '1.35', weight: 600, tracking: '-0.01em' },
    'body-lg': { size: '1.0625rem', lineHeight: '1.65', weight: 400, tracking: '-0.006em' },
    'body-md': { size: '0.9375rem', lineHeight: '1.55', weight: 400, tracking: '0' },
    'body-sm': { size: '0.8125rem', lineHeight: '1.5', weight: 400, tracking: '0.003em' },
    label: { size: '0.8125rem', lineHeight: '1.25', weight: 600, tracking: '0.005em' },
    caption: { size: '0.75rem', lineHeight: '1.4', weight: 500, tracking: '0.012em' },
    code: { size: '0.8125rem', lineHeight: '1.55', weight: 450, tracking: '-0.006em' }
  }
} as const;
export type TypographyStyle = keyof typeof typography.style;
