import { forwardRef, type ReactNode } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Check, ChevronRight, X } from '../../icons/Icon';
import { IconButton } from '../primitives/Button';
import { cn } from '../../utils/cn';

export function Tooltip({ children, content, side = 'top', delayDuration = 350 }: { children: ReactNode; content: ReactNode; side?: 'top' | 'right' | 'bottom' | 'left'; delayDuration?: number }) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration}><TooltipPrimitive.Root><TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger><TooltipPrimitive.Portal><TooltipPrimitive.Content className="av-tooltip" side={side} sideOffset={7}>{content}<TooltipPrimitive.Arrow className="av-tooltip__arrow" /></TooltipPrimitive.Content></TooltipPrimitive.Portal></TooltipPrimitive.Root></TooltipPrimitive.Provider>;
}

export function Popover({ trigger, children, align = 'center', sideOffset = 8 }: { trigger: ReactNode; children: ReactNode; align?: 'start' | 'center' | 'end'; sideOffset?: number }) {
  return <PopoverPrimitive.Root><PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger><PopoverPrimitive.Portal><PopoverPrimitive.Content className="av-popover" align={align} sideOffset={sideOffset}>{children}<PopoverPrimitive.Arrow className="av-popover__arrow" /></PopoverPrimitive.Content></PopoverPrimitive.Portal></PopoverPrimitive.Root>;
}

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuContent = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>>(function DropdownMenuContent({ className, sideOffset = 6, ...props }, ref) { return <DropdownMenuPrimitive.Portal><DropdownMenuPrimitive.Content ref={ref} className={cn('av-menu', className)} sideOffset={sideOffset} {...props} /></DropdownMenuPrimitive.Portal>; });
export const DropdownMenuItem = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }>(function DropdownMenuItem({ className, inset, ...props }, ref) { return <DropdownMenuPrimitive.Item ref={ref} className={cn('av-menu__item', inset && 'av-menu__item--inset', className)} {...props} />; });
export const DropdownMenuCheckboxItem = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>>(function DropdownMenuCheckboxItem({ className, children, ...props }, ref) { return <DropdownMenuPrimitive.CheckboxItem ref={ref} className={cn('av-menu__item av-menu__item--check', className)} {...props}><span className="av-menu__indicator"><DropdownMenuPrimitive.ItemIndicator><Check /></DropdownMenuPrimitive.ItemIndicator></span>{children}</DropdownMenuPrimitive.CheckboxItem>; });
export const DropdownMenuSubTrigger = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>>(function DropdownMenuSubTrigger({ className, children, ...props }, ref) { return <DropdownMenuPrimitive.SubTrigger ref={ref} className={cn('av-menu__item', className)} {...props}>{children}<ChevronRight className="av-menu__chevron" /></DropdownMenuPrimitive.SubTrigger>; });
export const DropdownMenuSubContent = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>>(function DropdownMenuSubContent({ className, ...props }, ref) { return <DropdownMenuPrimitive.SubContent ref={ref} className={cn('av-menu', className)} {...props} />; });
export const DropdownMenuLabel = DropdownMenuPrimitive.Label;
export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;

export const ContextMenu = ContextMenuPrimitive.Root;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuContent = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>>(function ContextMenuContent({ className, ...props }, ref) { return <ContextMenuPrimitive.Portal><ContextMenuPrimitive.Content ref={ref} className={cn('av-menu', className)} {...props} /></ContextMenuPrimitive.Portal>; });
export const ContextMenuItem = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item>>(function ContextMenuItem({ className, ...props }, ref) { return <ContextMenuPrimitive.Item ref={ref} className={cn('av-menu__item', className)} {...props} />; });
export const ContextMenuSeparator = ContextMenuPrimitive.Separator;

export type DialogProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> & { trigger?: ReactNode; title: string; description?: ReactNode; children: ReactNode; footer?: ReactNode; size?: 'sm' | 'md' | 'lg'; hideClose?: boolean };
export function Dialog({ trigger, title, description, children, footer, size = 'md', hideClose, ...rootProps }: DialogProps) {
  return <DialogPrimitive.Root {...rootProps}>{trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}<DialogPrimitive.Portal><DialogPrimitive.Overlay className="av-dialog__overlay" /><DialogPrimitive.Content className={cn('av-dialog', `av-dialog--${size}`)}><div className="av-dialog__header"><div><DialogPrimitive.Title className="av-dialog__title">{title}</DialogPrimitive.Title>{description && <DialogPrimitive.Description className="av-dialog__description">{description}</DialogPrimitive.Description>}</div>{!hideClose && <DialogPrimitive.Close asChild><IconButton label="Close" variant="ghost" size="sm"><X aria-hidden="true" /></IconButton></DialogPrimitive.Close>}</div><div className="av-dialog__body">{children}</div>{footer && <div className="av-dialog__footer">{footer}</div>}</DialogPrimitive.Content></DialogPrimitive.Portal></DialogPrimitive.Root>;
}

export const DialogClose = DialogPrimitive.Close;

export type AlertDialogProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root> & { trigger?: ReactNode; title: string; description: ReactNode; children?: ReactNode; footer: ReactNode; size?: 'sm' | 'md' };
export function AlertDialog({ trigger, title, description, children, footer, size = 'sm', ...rootProps }: AlertDialogProps) {
  return <AlertDialogPrimitive.Root {...rootProps}>{trigger && <AlertDialogPrimitive.Trigger asChild>{trigger}</AlertDialogPrimitive.Trigger>}<AlertDialogPrimitive.Portal><AlertDialogPrimitive.Overlay className="av-dialog__overlay" /><AlertDialogPrimitive.Content className={cn('av-dialog', `av-dialog--${size}`)}><div className="av-dialog__header"><div><AlertDialogPrimitive.Title className="av-dialog__title">{title}</AlertDialogPrimitive.Title><AlertDialogPrimitive.Description className="av-dialog__description">{description}</AlertDialogPrimitive.Description></div></div>{children && <div className="av-dialog__body">{children}</div>}<div className="av-dialog__footer">{footer}</div></AlertDialogPrimitive.Content></AlertDialogPrimitive.Portal></AlertDialogPrimitive.Root>;
}
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;

export type DrawerProps = DialogProps & { side?: 'left' | 'right' | 'bottom' };
export function Drawer({ side = 'right', trigger, title, description, children, footer, hideClose, ...rootProps }: DrawerProps) {
  return <DialogPrimitive.Root {...rootProps}>{trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}<DialogPrimitive.Portal><DialogPrimitive.Overlay className="av-dialog__overlay" /><DialogPrimitive.Content className={cn('av-drawer', `av-drawer--${side}`)}><div className="av-dialog__header"><div><DialogPrimitive.Title className="av-dialog__title">{title}</DialogPrimitive.Title>{description && <DialogPrimitive.Description className="av-dialog__description">{description}</DialogPrimitive.Description>}</div>{!hideClose && <DialogPrimitive.Close asChild><IconButton label="Close" variant="ghost" size="sm"><X /></IconButton></DialogPrimitive.Close>}</div><div className="av-dialog__body">{children}</div>{footer && <div className="av-dialog__footer">{footer}</div>}</DialogPrimitive.Content></DialogPrimitive.Portal></DialogPrimitive.Root>;
}
export const Sheet = Drawer;
