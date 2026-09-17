import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type SurfaceProps = HTMLAttributes<HTMLDivElement> & { tone?: 'default' | 'subtle' | 'elevated' | 'inset'; padding?: 'none' | 'sm' | 'md' | 'lg' };
export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(function Surface({ tone = 'default', padding = 'md', className, ...props }, ref) {
  return <div ref={ref} className={cn('av-surface', `av-surface--${tone}`, `av-pad--${padding}`, className)} {...props} />;
});

export type CardProps = SurfaceProps & { interactive?: boolean };
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card({ interactive, className, ...props }, ref) {
  return <Surface ref={ref} className={cn('av-card', interactive && 'av-card--interactive', className)} {...props} />;
});

export function CardHeader({ title, description, action, className, ...props }: HTMLAttributes<HTMLDivElement> & { title: ReactNode; description?: ReactNode; action?: ReactNode }) {
  return <div className={cn('av-card-header', className)} {...props}><div><div className="av-card-header__title">{title}</div>{description && <div className="av-card-header__description">{description}</div>}</div>{action}</div>;
}

export const Divider = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(function Divider({ className, ...props }, ref) {
  return <hr ref={ref} className={cn('av-divider', className)} {...props} />;
});
export const Separator = Divider;
