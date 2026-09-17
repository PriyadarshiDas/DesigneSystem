import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { LoaderCircle } from '../../icons/Icon';
import { cn } from '../../utils/cn';

const buttonVariants = cva('av-button', {
  variants: {
    variant: { primary: 'av-button--primary', secondary: 'av-button--secondary', outline: 'av-button--outline', ghost: 'av-button--ghost', danger: 'av-button--danger' },
    size: { xs: 'av-button--xs', sm: 'av-button--sm', md: 'av-button--md', lg: 'av-button--lg' },
    fullWidth: { true: 'av-button--full' }
  },
  defaultVariants: { variant: 'primary', size: 'md' }
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
  loading?: boolean;
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ asChild, variant, size, fullWidth, loading = false, disabled, iconLeading, iconTrailing, className, children, ...props }, ref) {
  const Component = asChild ? Slot : 'button';
  return (
    <Component ref={ref} className={cn(buttonVariants({ variant, size, fullWidth }), className)} disabled={asChild ? undefined : disabled || loading} aria-busy={loading || undefined} {...props}>
      {loading ? <LoaderCircle className="av-button__spinner" aria-hidden="true" /> : iconLeading}
      <span>{children}</span>
      {iconTrailing}
    </Component>
  );
});

export type IconButtonProps = Omit<ButtonProps, 'iconLeading' | 'iconTrailing'> & { label: string };
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton({ label, children, className, ...props }, ref) {
  return <Button ref={ref} className={cn('av-icon-button', className)} aria-label={label} {...props}>{children}</Button>;
});

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'default' | 'muted' | 'accent'; external?: boolean };
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ variant = 'default', external, className, children, ...props }, ref) {
  return <a ref={ref} className={cn('av-link', `av-link--${variant}`, className)} rel={external ? 'noreferrer' : props.rel} target={external ? '_blank' : props.target} {...props}>{children}</a>;
});

export { buttonVariants };
