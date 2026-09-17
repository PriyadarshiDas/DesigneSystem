export const primitiveColors = {
  neutral: { 0: '#ffffff', 50: '#f7f8f8', 100: '#eef0f1', 200: '#dfe3e5', 300: '#c7cdd0', 400: '#98a2a7', 500: '#6b767c', 600: '#4c575d', 700: '#343e43', 800: '#20292e', 900: '#141b1f', 950: '#0b1013' },
  brand: { 50: '#edfbf7', 100: '#d2f5e9', 200: '#a8ead6', 300: '#70d8bd', 400: '#38bfa1', 500: '#1da184', 600: '#12806a', 700: '#126656', 800: '#125146', 900: '#10443b' },
  blue: { 50: '#eff7ff', 100: '#dcecff', 200: '#b9d9ff', 300: '#86bdff', 400: '#4c98ff', 500: '#2672f3', 600: '#1757d6', 700: '#1745ad', 800: '#193c88', 900: '#1a356d' },
  violet: { 50: '#f7f3ff', 100: '#eee8ff', 200: '#dfd4ff', 300: '#c7afff', 400: '#ab80ff', 500: '#8f50f4', 600: '#7c33dc', 700: '#6826b8', 800: '#57239a', 900: '#48207d' },
  cyan: { 50: '#ebfdff', 100: '#cef8ff', 200: '#a2efff', 300: '#63e3fd', 400: '#1dcced', 500: '#02aecd', 600: '#078aa7', 700: '#0d6f87', 800: '#135b6f', 900: '#144c5e' },
  green: { 50: '#effcf4', 100: '#daf7e6', 200: '#b7edcf', 300: '#83dcae', 400: '#49c287', 500: '#25a66d', 600: '#188656', 700: '#166b47', 800: '#15553b', 900: '#124632' },
  amber: { 50: '#fff9eb', 100: '#feefc7', 200: '#fcdd8b', 300: '#fac650', 400: '#f7ae25', 500: '#e78f0b', 600: '#c76d07', 700: '#9f4d0a', 800: '#833d10', 900: '#6f3211' },
  red: { 50: '#fff2f2', 100: '#ffe1e1', 200: '#ffc8c8', 300: '#ffa2a2', 400: '#fa6b6b', 500: '#ef3e3e', 600: '#d52525', 700: '#b31d1d', 800: '#941e1e', 900: '#7b2020' }
} as const;

export const semanticColorNames = [
  'background.canvas', 'background.surface', 'background.elevated', 'background.subtle',
  'foreground.primary', 'foreground.secondary', 'foreground.muted', 'foreground.inverse',
  'border.default', 'border.subtle', 'border.strong', 'border.focus',
  'action.primary', 'action.primaryHover', 'action.primaryForeground', 'action.secondary', 'action.ghost',
  'status.success', 'status.warning', 'status.danger', 'status.info',
  'agent.online', 'agent.busy', 'agent.offline', 'agent.executing', 'agent.waiting', 'agent.error',
  'social.like', 'social.repost', 'social.reply', 'social.mention'
] as const;
export type SemanticColorName = typeof semanticColorNames[number];
