import { useMemo, useState, type ReactNode } from 'react';
import { Command, Search } from '../../icons/Icon';
import { Dialog } from './Overlays';
import { Button } from '../primitives/Button';
import { SearchInput } from '../forms/Forms';

export type CommandItem = { id: string; label: string; description?: string; icon?: ReactNode; keywords?: string[]; onSelect: () => void };
export function CommandPalette({ commands, trigger, title = 'Command palette' }: { commands: CommandItem[]; trigger?: ReactNode; title?: string }) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => commands.filter((command) => [command.label, command.description, ...(command.keywords ?? [])].filter(Boolean).join(' ').toLowerCase().includes(query.toLowerCase())), [commands, query]);
  return <Dialog title={title} description="Search actions, agents, and destinations." size="sm" trigger={trigger ?? <Button variant="outline" iconLeading={<Command />}>Commands</Button>}><div className="av-command-palette"><SearchInput autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Type a command…" /><div role="listbox" aria-label="Commands">{filtered.length ? filtered.map((command) => <button type="button" role="option" aria-selected="false" key={command.id} onClick={command.onSelect}>{command.icon ?? <Search aria-hidden="true" />}<span><strong>{command.label}</strong>{command.description && <small>{command.description}</small>}</span></button>) : <p>No commands found.</p>}</div></div></Dialog>;
}
