import { type HTMLAttributes, type ReactNode } from 'react';
import { Activity, Bot, CheckCircle2, ShieldCheck, Sparkles } from '../../icons/Icon';
import { cn } from '../../utils/cn';
import { Avatar, type AvatarProps } from '../primitives/Avatar';
import { Badge, type BadgeProps } from '../primitives/Badge';
import { Card } from '../primitives/Surface';
import { Inline, Stack } from '../layout/Layout';

export type AgentStatusValue = 'online' | 'offline' | 'thinking' | 'executing' | 'waiting' | 'delegating' | 'failed';
const statusLabels: Record<AgentStatusValue, string> = { online: 'Online', offline: 'Offline', thinking: 'Thinking', executing: 'Executing', waiting: 'Waiting', delegating: 'Delegating', failed: 'Failed' };

export function AgentStatus({ status, showLabel = true, className }: { status: AgentStatusValue; showLabel?: boolean; className?: string }) {
  return <span className={cn('av-agent-status', `av-agent-status--${status}`, className)}><span className="av-agent-status__signal" aria-hidden="true" />{showLabel ? statusLabels[status] : <span className="av-sr-only">{statusLabels[status]}</span>}</span>;
}

export type AgentAvatarProps = AvatarProps & { status?: AgentStatusValue; verified?: boolean; active?: boolean };
export function AgentAvatar({ status = 'offline', verified, active, className, ...props }: AgentAvatarProps) {
  return <span className={cn('av-agent-avatar', active && 'av-agent-avatar--active', className)}><Avatar {...props} /><span className={cn('av-agent-avatar__status', `av-agent-avatar__status--${status}`)} aria-label={statusLabels[status]} />{verified && <span className="av-agent-avatar__verified" aria-label="Verified"><CheckCircle2 aria-hidden="true" /></span>}</span>;
}

export type AgentBadgeKind = 'autonomous' | 'human-controlled' | 'verified' | 'system' | 'specialist' | 'experimental';
export function AgentBadge({ kind, ...props }: Omit<BadgeProps, 'children'> & { kind: AgentBadgeKind }) { return <Badge tone={kind === 'experimental' ? 'warning' : kind === 'verified' ? 'success' : 'accent'} {...props}>{kind.replace('-', ' ')}</Badge>; }
export const CapabilityBadge = (props: BadgeProps) => <Badge tone="accent" {...props} />;
export const ToolBadge = (props: BadgeProps) => <Badge tone="neutral" {...props} />;
export const ModelBadge = (props: BadgeProps) => <Badge tone="info" {...props} />;
export const ProviderBadge = (props: BadgeProps) => <Badge tone="neutral" {...props} />;
export const AgentRelationshipBadge = (props: BadgeProps) => <Badge tone="accent" {...props} />;

export function TrustIndicator({ score, label = 'Trust score', compact = false }: { score: number; label?: string; compact?: boolean }) {
  const normalized = Math.max(0, Math.min(100, score));
  return <span className={cn('av-trust', compact && 'av-trust--compact')} aria-label={`${label}: ${normalized} out of 100`}><ShieldCheck aria-hidden="true" /><span>{normalized}</span>{!compact && <span className="av-trust__label">{label}</span>}</span>;
}

export function AgentActivityIndicator({ label = 'Agent is processing', size = 'md' }: { label?: string; size?: 'sm' | 'md' | 'lg' }) { return <span className={cn('av-agent-activity', `av-agent-activity--${size}`)} role="status"><span /><span /><span /><span className="av-sr-only">{label}</span></span>; }
export const AgentThinkingIndicator = AgentActivityIndicator;

export function AgentPresence({ status, label }: { status: AgentStatusValue; label?: string }) { return <span aria-label={label}><AgentStatus status={status} showLabel /></span>; }

export type AgentIdentity = { name: string; handle?: string; avatar?: string; status?: AgentStatusValue; verified?: boolean };
export type AgentCardProps = HTMLAttributes<HTMLDivElement> & { agent: AgentIdentity; description: string; capabilities?: string[]; owner?: string; model?: string; provider?: string; trust?: number; actions?: ReactNode };
export function AgentCard({ agent, description, capabilities = [], owner, model, provider, trust, actions, className, ...props }: AgentCardProps) {
  return <Card className={cn('av-agent-card', className)} interactive {...props}><Stack gap={5}><div className="av-agent-card__head"><AgentAvatar src={agent.avatar} alt={agent.name} status={agent.status} verified={agent.verified} size="lg" active={agent.status === 'executing'} /><div className="av-agent-card__identity"><Inline gap={2}><strong>{agent.name}</strong>{agent.verified && <CheckCircle2 className="av-verified-icon" aria-label="Verified" />}</Inline>{agent.handle && <span>{agent.handle}</span>}</div>{trust !== undefined && <TrustIndicator score={trust} compact />}</div><p className="av-agent-card__description">{description}</p>{capabilities.length > 0 && <div className="av-agent-card__badges">{capabilities.map((capability) => <CapabilityBadge key={capability}>{capability}</CapabilityBadge>)}</div>}<div className="av-agent-card__meta">{owner && <span>Owner <strong>{owner}</strong></span>}{model && <ModelBadge>{model}</ModelBadge>}{provider && <ProviderBadge>{provider}</ProviderBadge>}</div>{actions && <div className="av-agent-card__actions">{actions}</div>}</Stack></Card>;
}

export function AgentMiniCard({ agent, subtitle, action }: { agent: AgentIdentity; subtitle?: ReactNode; action?: ReactNode }) { return <div className="av-agent-mini"><AgentAvatar src={agent.avatar} alt={agent.name} status={agent.status} verified={agent.verified} size="sm" /><div><strong>{agent.name}</strong><span>{subtitle ?? agent.handle}</span></div>{action}</div>; }

export function AgentProfileHeader({ agent, description, badges, actions, cover }: { agent: AgentIdentity; description?: ReactNode; badges?: ReactNode; actions?: ReactNode; cover?: ReactNode }) { return <Card padding="none" className="av-agent-profile"><div className="av-agent-profile__cover">{cover}</div><div className="av-agent-profile__body"><AgentAvatar src={agent.avatar} alt={agent.name} size="xl" status={agent.status} verified={agent.verified} active={agent.status === 'online'} /><div className="av-agent-profile__copy"><h1>{agent.name}</h1>{agent.handle && <span>{agent.handle}</span>}{description && <p>{description}</p>}{badges && <div>{badges}</div>}</div>{actions && <div className="av-agent-profile__actions">{actions}</div>}</div></Card>; }

export function AgentMetric({ label, value, change, icon }: { label: string; value: ReactNode; change?: string; icon?: ReactNode }) { return <div className="av-agent-metric">{icon}<div><span>{label}</span><strong>{value}</strong>{change && <small>{change}</small>}</div></div>; }
export function AgentReputation({ score, label = 'Reputation' }: { score: number; label?: string }) { return <AgentMetric label={label} value={score.toLocaleString()} icon={<Sparkles aria-hidden="true" />} />; }

export function AgentMention({ agent, onClick }: { agent: AgentIdentity; onClick?: () => void }) { return <button type="button" className="av-agent-mention" onClick={onClick}><AgentAvatar src={agent.avatar} alt={agent.name} size="xs" status={agent.status} /><span>@{agent.handle?.replace(/^@/, '') ?? agent.name}</span></button>; }

export type AgentMessageProps = { agent: AgentIdentity; children: ReactNode; timestamp?: string; direction?: 'incoming' | 'outgoing'; state?: ReactNode; tools?: ReactNode };
export function AgentMessage({ agent, children, timestamp, direction = 'incoming', state, tools }: AgentMessageProps) { return <div className={cn('av-agent-message', `av-agent-message--${direction}`)}><AgentAvatar src={agent.avatar} alt={agent.name} status={agent.status} size="sm" /><div className="av-agent-message__content"><div className="av-agent-message__meta"><strong>{agent.name}</strong>{timestamp && <time>{timestamp}</time>}</div><div className="av-agent-message__bubble">{children}</div>{tools}{state && <div className="av-agent-message__state">{state}</div>}</div></div>; }
export const AgentConversationBubble = AgentMessage;

export function AgentConnection({ from, to, status = 'active', label }: { from: AgentIdentity; to: AgentIdentity; status?: 'active' | 'idle' | 'failed'; label?: string }) { return <div className={cn('av-agent-connection', `av-agent-connection--${status}`)}><AgentMiniCard agent={from} /><AgentConnectionLine status={status} label={label} /><AgentMiniCard agent={to} /></div>; }
export function AgentConnectionLine({ status = 'active', label }: { status?: 'active' | 'idle' | 'failed'; label?: string }) { return <div className={cn('av-connection-line', `av-connection-line--${status}`)} aria-label={label ?? `${status} connection`}><span /><i /><i /><i /></div>; }

export function AgentExecutionState({ state, detail }: { state: AgentStatusValue; detail?: ReactNode }) { return <div className="av-execution-state"><AgentStatus status={state} />{detail && <span>{detail}</span>}</div>; }

export function AgentSelector({ agents, value, onChange, label = 'Select agent' }: { agents: AgentIdentity[]; value?: string; onChange: (name: string) => void; label?: string }) { return <label className="av-agent-selector"><span className="av-sr-only">{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}><option value="">{label}</option>{agents.map((agent) => <option key={agent.name} value={agent.name}>{agent.name}</option>)}</select></label>; }

export function AgentCommandMenu({ commands }: { commands: { label: string; description?: string; onSelect: () => void }[] }) { return <div className="av-command-list" role="menu">{commands.map((command) => <button key={command.label} type="button" role="menuitem" onClick={command.onSelect}><Bot aria-hidden="true" /><span><strong>{command.label}</strong>{command.description && <small>{command.description}</small>}</span></button>)}</div>; }

export function AgentActivityItem({ agent, action, timestamp, icon = <Activity /> }: { agent: AgentIdentity; action: ReactNode; timestamp?: string; icon?: ReactNode }) { return <div className="av-activity-item"><span className="av-activity-item__icon">{icon}</span><div><span><strong>{agent.name}</strong> {action}</span>{timestamp && <time>{timestamp}</time>}</div></div>; }
export const AgentEvent = AgentActivityItem;
export function AgentTimeline({ children, label = 'Agent activity timeline' }: { children: ReactNode; label?: string }) { return <div className="av-agent-timeline" aria-label={label}>{children}</div>; }
