import { forwardRef, useId, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { Check, Search } from '../../icons/Icon';
import { cn } from '../../utils/cn';

export type FieldProps = { label: string; hint?: string; error?: string; required?: boolean; htmlFor?: string; children: ReactNode; className?: string };
export function Field({ label, hint, error, required, htmlFor, children, className }: FieldProps) {
  return <div className={cn('av-field', error && 'av-field--error', className)}><label className="av-field__label" htmlFor={htmlFor}>{label}{required && <span aria-hidden="true"> *</span>}</label>{children}{(error || hint) && <div className="av-field__message" role={error ? 'alert' : undefined}>{error || hint}</div>}</div>;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean; iconLeading?: ReactNode; iconTrailing?: ReactNode };
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ invalid, iconLeading, iconTrailing, className, ...props }, ref) {
  return <span className={cn('av-input-shell', invalid && 'av-input-shell--invalid', props.disabled && 'av-input-shell--disabled', className)}>{iconLeading && <span className="av-input-shell__icon">{iconLeading}</span>}<input ref={ref} className="av-input" aria-invalid={invalid || undefined} {...props} />{iconTrailing && <span className="av-input-shell__icon">{iconTrailing}</span>}</span>;
});

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }>(function Textarea({ invalid, className, ...props }, ref) {
  return <textarea ref={ref} className={cn('av-textarea', invalid && 'av-textarea--invalid', className)} aria-invalid={invalid || undefined} {...props} />;
});

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(function Select({ className, children, ...props }, ref) {
  return <select ref={ref} className={cn('av-select', className)} {...props}>{children}</select>;
});

export type CheckboxProps = Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'children'> & { label?: ReactNode };
export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox({ label, className, id, ...props }, ref) {
  const generatedId = useId(); const controlId = id ?? generatedId;
  return <span className="av-choice"><CheckboxPrimitive.Root ref={ref} id={controlId} className={cn('av-checkbox', className)} {...props}><CheckboxPrimitive.Indicator><Check aria-hidden="true" /></CheckboxPrimitive.Indicator></CheckboxPrimitive.Root>{label && <label htmlFor={controlId}>{label}</label>}</span>;
});

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & { label: ReactNode };
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio({ label, className, id, ...props }, ref) {
  const generatedId = useId(); const controlId = id ?? generatedId;
  return <span className="av-choice"><input ref={ref} id={controlId} type="radio" className={cn('av-radio', className)} {...props} /><label htmlFor={controlId}>{label}</label></span>;
});

export type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & { label?: ReactNode };
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch({ label, className, id, ...props }, ref) {
  const generatedId = useId(); const controlId = id ?? generatedId;
  return <span className="av-choice"><SwitchPrimitive.Root ref={ref} id={controlId} className={cn('av-switch', className)} {...props}><SwitchPrimitive.Thumb className="av-switch__thumb" /></SwitchPrimitive.Root>{label && <label htmlFor={controlId}>{label}</label>}</span>;
});

export type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { label: string; showValue?: boolean };
export const Slider = forwardRef<HTMLSpanElement, SliderProps>(function Slider({ label, showValue, value, defaultValue, className, ...props }, ref) {
  const current = value?.[0] ?? defaultValue?.[0];
  return <div className="av-slider-field"><div className="av-slider-field__meta"><span>{label}</span>{showValue && <output>{current}</output>}</div><SliderPrimitive.Root ref={ref} className={cn('av-slider', className)} value={value} defaultValue={defaultValue} {...props}><SliderPrimitive.Track className="av-slider__track"><SliderPrimitive.Range className="av-slider__range" /></SliderPrimitive.Track><SliderPrimitive.Thumb className="av-slider__thumb" aria-label={label} /></SliderPrimitive.Root></div>;
});

export const SearchInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type' | 'iconLeading'>>(function SearchInput({ placeholder = 'Search', ...props }, ref) {
  return <Input ref={ref} type="search" placeholder={placeholder} iconLeading={<Search aria-hidden="true" />} {...props} />;
});
