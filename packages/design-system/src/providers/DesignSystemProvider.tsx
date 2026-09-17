import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { ColorMode, ProductTheme } from '../themes';

type DesignSystemContextValue = {
  theme: ColorMode;
  resolvedTheme: Exclude<ColorMode, 'system'>;
  product: ProductTheme;
};

const DesignSystemContext = createContext<DesignSystemContextValue | null>(null);

export type DesignSystemProviderProps = {
  children: ReactNode;
  product?: ProductTheme;
  theme?: ColorMode;
  className?: string;
};

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function DesignSystemProvider({ children, product = 'universe', theme = 'system', className }: DesignSystemProviderProps) {
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(getSystemTheme);

  useEffect(() => {
    if (theme !== 'system' || typeof window.matchMedia !== 'function') return;
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setSystemTheme(query.matches ? 'dark' : 'light');
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, [theme]);

  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const value = useMemo(() => ({ theme, resolvedTheme, product }), [theme, resolvedTheme, product]);

  return (
    <DesignSystemContext.Provider value={value}>
      <div className={['av-root', className].filter(Boolean).join(' ')} data-av-theme={resolvedTheme} data-av-product={product}>
        {children}
      </div>
    </DesignSystemContext.Provider>
  );
}

export function useDesignSystem() {
  const context = useContext(DesignSystemContext);
  if (!context) throw new Error('useDesignSystem must be used inside DesignSystemProvider');
  return context;
}
