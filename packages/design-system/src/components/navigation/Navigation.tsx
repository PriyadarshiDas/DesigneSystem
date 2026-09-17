import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { Menu, PanelLeft } from '../../icons/Icon';
import { IconButton } from '../primitives/Button';
import { cn } from '../../utils/cn';

export const Tabs = TabsPrimitive.Root;
export const TabsList = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(function TabsList({ className, ...props }, ref) { return <TabsPrimitive.List ref={ref} className={cn('av-tabs__list', className)} {...props} />; });
export const TabsTrigger = forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(function TabsTrigger({ className, ...props }, ref) { return <TabsPrimitive.Trigger ref={ref} className={cn('av-tabs__trigger', className)} {...props} />; });
export const TabsContent = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(function TabsContent({ className, ...props }, ref) { return <TabsPrimitive.Content ref={ref} className={cn('av-tabs__content', className)} {...props} />; });

export type NavItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean; icon?: ReactNode; badge?: ReactNode };
export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(function NavItem({ active, icon, badge, className, children, ...props }, ref) { return <a ref={ref} className={cn('av-nav-item', active && 'av-nav-item--active', className)} aria-current={active ? 'page' : undefined} {...props}>{icon && <span className="av-nav-item__icon">{icon}</span>}<span>{children}</span>{badge && <span className="av-nav-item__badge">{badge}</span>}</a>; });

export type TopNavProps = HTMLAttributes<HTMLElement> & { brand: ReactNode; primary?: ReactNode; actions?: ReactNode };
export function TopNav({ brand, primary, actions, className, ...props }: TopNavProps) { return <header className={cn('av-top-nav', className)} {...props}><div className="av-top-nav__brand">{brand}</div>{primary && <nav className="av-top-nav__primary" aria-label="Primary">{primary}</nav>}<div className="av-top-nav__actions">{actions}</div></header>; }

export type SidebarProps = HTMLAttributes<HTMLElement> & { header?: ReactNode; footer?: ReactNode; label?: string };
export function Sidebar({ header, footer, label = 'Sidebar', className, children, ...props }: SidebarProps) { return <aside className={cn('av-sidebar', className)} {...props}>{header && <div className="av-sidebar__header">{header}</div>}<nav className="av-sidebar__nav" aria-label={label}>{children}</nav>{footer && <div className="av-sidebar__footer">{footer}</div>}</aside>; }

export function SubNav({ children, label = 'Secondary navigation', className }: { children: ReactNode; label?: string; className?: string }) { return <nav className={cn('av-subnav', className)} aria-label={label}>{children}</nav>; }

export function MobileNav({ triggerLabel = 'Open navigation', children }: { triggerLabel?: string; children: ReactNode }) { return <details className="av-mobile-nav"><summary aria-label={triggerLabel}><Menu aria-hidden="true" /></summary><div className="av-mobile-nav__panel">{children}</div></details>; }

export function Breadcrumb({ items, className }: { items: { label: ReactNode; href?: string }[]; className?: string }) { return <nav className={cn('av-breadcrumb', className)} aria-label="Breadcrumb"><ol>{items.map((item, index) => <li key={index}>{item.href ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}</li>)}</ol></nav>; }

export function Pagination({ page, totalPages, onPageChange, label = 'Pagination' }: { page: number; totalPages: number; onPageChange: (page: number) => void; label?: string }) { return <nav className="av-pagination" aria-label={label}><IconButton label="Previous page" variant="outline" size="sm" disabled={page <= 1} onClick={() => onPageChange(page - 1)}><PanelLeft aria-hidden="true" /></IconButton><span>Page {page} of {totalPages}</span><IconButton label="Next page" variant="outline" size="sm" disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}><PanelLeft className="av-flip" aria-hidden="true" /></IconButton></nav>; }
