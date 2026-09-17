export const primitiveColors = {
  neutral: { 0: '#ffffff', 50: '#faf8f7', 100: '#f2efed', 200: '#e6e1de', 300: '#d0c8c4', 400: '#a49a95', 500: '#7a6f6a', 600: '#5a504c', 700: '#413834', 800: '#2a2320', 900: '#1b1513', 950: '#110c0a' },
  brand: { 50: '#fff4ec', 100: '#ffe4d0', 200: '#fdc7a1', 300: '#fba36a', 400: '#f77f3a', 500: '#ef6014', 600: '#cf4709', 700: '#a9320c', 800: '#8a2a0e', 900: '#71250f' },
  rust: { 50: '#fcf4f3', 100: '#f9e5e1', 200: '#f2cac2', 300: '#dfa08f', 400: '#c87464', 500: '#ab5244', 600: '#92352f', 700: '#7a2c2b', 800: '#672829', 900: '#582527' },
  red: { 50: '#fff1f4', 100: '#ffe1e7', 200: '#ffc6d1', 300: '#fca4b6', 400: '#f4708c', 500: '#e33b5f', 600: '#d21f4b', 700: '#b01a40', 800: '#921a39', 900: '#7c1b34' },
  amber: { 50: '#fffaeb', 100: '#fdf0c6', 200: '#fbdf8a', 300: '#f8c94e', 400: '#e29b07', 500: '#c47607', 600: '#a55d05', 700: '#8a4b08', 800: '#75400f', 900: '#653811' },
  plum: { 50: '#fcf4fb', 100: '#f8e7f6', 200: '#f0cded', 300: '#e2a7dd', 400: '#cd79c7', 500: '#b254ab', 600: '#963e8e', 700: '#7b3374', 800: '#662c60', 900: '#562852' },
  green: { 50: '#f0f9f1', 100: '#dcf1de', 200: '#b7e3bd', 300: '#8ecf85', 400: '#56b264', 500: '#2f9350', 600: '#2f7d43', 700: '#29653a', 800: '#245332', 900: '#20452c' }
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
