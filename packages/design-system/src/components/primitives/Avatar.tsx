import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & { src?: string; alt: string; fallback?: ReactNode; size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' };
export const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(function Avatar({ src, alt, fallback, size = 'md', className, ...props }, ref) {
  const initials = alt.split(/\s+/).map((word) => word[0]).join('').slice(0, 2).toUpperCase();
  return <AvatarPrimitive.Root ref={ref} className={cn('av-avatar', `av-avatar--${size}`, className)} {...props}><AvatarPrimitive.Image className="av-avatar__image" src={src} alt={alt} /><AvatarPrimitive.Fallback className="av-avatar__fallback" delayMs={src ? 300 : 0}>{fallback ?? initials}</AvatarPrimitive.Fallback></AvatarPrimitive.Root>;
});

export function AvatarGroup({ children, max, className, label = 'People and agents' }: { children: ReactNode[]; max?: number; className?: string; label?: string }) {
  const visible = max ? children.slice(0, max) : children;
  const remainder = max ? Math.max(0, children.length - max) : 0;
  return <div className={cn('av-avatar-group', className)} aria-label={label}>{visible}{remainder > 0 && <span className="av-avatar-group__more">+{remainder}</span>}</div>;
}
