import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { CircleAlert, CircleX, Info, LoaderCircle } from '../../icons/Icon';
import { Button, type ButtonProps } from '../primitives/Button';
import { cn } from '../../utils/cn';

export const Spinner = ({ size = 'md', label = 'Loading', className }: { size?: 'sm' | 'md' | 'lg'; label?: string; className?: string }) => <span className={cn('av-spinner', `av-spinner--${size}`, className)} role="status"><LoaderCircle aria-hidden="true" /><span className="av-sr-only">{label}</span></span>;

export function Progress({ value, max = 100, label }: { value?: number; max?: number; label: string }) {
  const indeterminate = value === undefined; const percent = indeterminate ? 0 : Math.max(0, Math.min(100, value / max * 100));
  return <div className="av-progress-wrap"><div className="av-progress__meta"><span>{label}</span>{!indeterminate && <span>{Math.round(percent)}%</span>}</div><div className={cn('av-progress', indeterminate && 'av-progress--indeterminate')} role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={max} aria-valuenow={value}><span style={{ width: indeterminate ? '35%' : `${percent}%` }} /></div></div>;
}

export const Skeleton = ({ width, height, className }: { width?: string | number; height?: string | number; className?: string }) => <span className={cn('av-skeleton', className)} aria-hidden="true" style={{ width, height }} />;

export type AlertProps = HTMLAttributes<HTMLDivElement> & { tone?: 'info' | 'success' | 'warning' | 'danger'; title?: string };
export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert({ tone = 'info', title, className, children, ...props }, ref) {
  const AlertIcon = tone === 'danger' ? CircleX : tone === 'warning' ? CircleAlert : Info;
  return <div ref={ref} className={cn('av-alert', `av-alert--${tone}`, className)} role={tone === 'danger' ? 'alert' : 'status'} {...props}><AlertIcon aria-hidden="true" /><div>{title && <strong>{title}</strong>}<div>{children}</div></div></div>;
});

export type EmptyStateProps = { icon?: ReactNode; title: string; description?: ReactNode; action?: ReactNode; className?: string };
export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) { return <div className={cn('av-empty-state', className)}>{icon && <div className="av-empty-state__icon">{icon}</div>}<h3>{title}</h3>{description && <p>{description}</p>}{action}</div>; }
export function ErrorState(props: Omit<EmptyStateProps, 'icon'> & { retry?: ButtonProps }) { return <EmptyState icon={<CircleAlert aria-hidden="true" />} {...props} action={props.retry ? <Button variant="secondary" {...props.retry}>Try again</Button> : props.action} />; }

export type ToastProps = HTMLAttributes<HTMLDivElement> & { title: string; description?: string; tone?: 'default' | 'success' | 'danger'; action?: ReactNode };
export function Toast({ title, description, tone = 'default', action, className, ...props }: ToastProps) { return <div className={cn('av-toast', `av-toast--${tone}`, className)} role="status" {...props}><div><strong>{title}</strong>{description && <p>{description}</p>}</div>{action}</div>; }
