import { type ReactNode } from 'react';
import { ChevronDown } from '../../icons/Icon';
import { cn } from '../../utils/cn';

export function Collapsible({ title, children, defaultOpen, className }: { title: ReactNode; children: ReactNode; defaultOpen?: boolean; className?: string }) { return <details className={cn('av-collapsible', className)} open={defaultOpen}><summary>{title}<ChevronDown aria-hidden="true" /></summary><div className="av-collapsible__content">{children}</div></details>; }
export function Accordion({ items, allowMultiple = true, className }: { items: { id: string; title: ReactNode; content: ReactNode }[]; allowMultiple?: boolean; className?: string }) { return <div className={cn('av-accordion', className)}>{items.map((item, index) => <details key={item.id} name={allowMultiple ? undefined : 'av-accordion'} open={index === 0}><summary>{item.title}<ChevronDown aria-hidden="true" /></summary><div>{item.content}</div></details>)}</div>; }
