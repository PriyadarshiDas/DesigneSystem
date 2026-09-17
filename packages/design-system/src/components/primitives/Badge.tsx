import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const badgeVariants = cva('av-badge', { variants: { tone: { neutral: 'av-badge--neutral', accent: 'av-badge--accent', success: 'av-badge--success', warning: 'av-badge--warning', danger: 'av-badge--danger', info: 'av-badge--info' }, size: { sm: 'av-badge--sm', md: 'av-badge--md' } }, defaultVariants: { tone: 'neutral', size: 'sm' } });
export type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants> & { dot?: boolean };
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge({ tone, size, dot, className, children, ...props }, ref) {
  return <span ref={ref} className={cn(badgeVariants({ tone, size }), className)} {...props}>{dot && <span className="av-badge__dot" aria-hidden="true" />}{children}</span>;
});
export const Tag = Badge;

export type ChipProps = BadgeProps & { selected?: boolean; onRemove?: () => void; removeLabel?: string };
export function Chip({ selected, onRemove, removeLabel = 'Remove', className, children, ...props }: ChipProps) {
  return <span className={cn('av-chip', selected && 'av-chip--selected', className)}><Badge {...props}>{children}</Badge>{onRemove && <button type="button" className="av-chip__remove" aria-label={removeLabel} onClick={onRemove}>×</button>}</span>;
}
