import { forwardRef, type CSSProperties, type HTMLAttributes } from 'react';
import type { SpacingToken } from '../../tokens';
import { cn } from '../../utils/cn';

type LayoutProps = HTMLAttributes<HTMLDivElement> & { gap?: SpacingToken };
const gapStyle = (gap: SpacingToken | undefined): CSSProperties | undefined => gap === undefined ? undefined : { gap: `var(--av-space-${gap})` };

export const Stack = forwardRef<HTMLDivElement, LayoutProps>(function Stack({ gap = 4, style, className, ...props }, ref) { return <div ref={ref} className={cn('av-stack', className)} style={{ ...gapStyle(gap), ...style }} {...props} />; });
export const Inline = forwardRef<HTMLDivElement, LayoutProps & { align?: 'start' | 'center' | 'end'; wrap?: boolean }>(function Inline({ gap = 3, align = 'center', wrap = false, style, className, ...props }, ref) { return <div ref={ref} className={cn('av-inline', `av-align--${align}`, wrap && 'av-wrap', className)} style={{ ...gapStyle(gap), ...style }} {...props} />; });
export const Cluster = forwardRef<HTMLDivElement, LayoutProps>(function Cluster({ className, ...props }, ref) { return <Inline ref={ref} wrap className={cn('av-cluster', className)} {...props} />; });
export const Grid = forwardRef<HTMLDivElement, LayoutProps & { columns?: 1 | 2 | 3 | 4 }>(function Grid({ columns = 2, gap = 4, style, className, ...props }, ref) { return <div ref={ref} className={cn('av-grid', `av-grid--${columns}`, className)} style={{ ...gapStyle(gap), ...style }} {...props} />; });
export const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { size?: 'sm' | 'md' | 'lg' | 'full' }>(function Container({ size = 'lg', className, ...props }, ref) { return <div ref={ref} className={cn('av-container', `av-container--${size}`, className)} {...props} />; });
export const Page = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Page({ className, ...props }, ref) { return <main ref={ref} className={cn('av-page', className)} {...props} />; });
export const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(function Section({ className, ...props }, ref) { return <section ref={ref} className={cn('av-section', className)} {...props} />; });
export const SplitPane = forwardRef<HTMLDivElement, LayoutProps & { ratio?: '1:1' | '1:2' | '2:1' }>(function SplitPane({ ratio = '1:1', className, ...props }, ref) { return <div ref={ref} className={cn('av-split', `av-split--${ratio.replace(':', '-')}`, className)} {...props} />; });
