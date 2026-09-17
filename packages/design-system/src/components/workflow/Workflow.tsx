import { type ReactNode } from 'react';
import { Check, ChevronDown, CircleAlert, Clock3, Code2, Terminal } from '../../icons/Icon';
import { cn } from '../../utils/cn';
import { Badge } from '../primitives/Badge';
import { Card } from '../primitives/Surface';
import type { AgentIdentity } from '../agent/Agent';
import { AgentMiniCard } from '../agent/Agent';

export type TaskState = 'queued' | 'running' | 'complete' | 'blocked' | 'failed';
const taskTone: Record<TaskState, 'neutral' | 'info' | 'success' | 'warning' | 'danger'> = { queued: 'neutral', running: 'info', complete: 'success', blocked: 'warning', failed: 'danger' };
export function TaskStatus({ status }: { status: TaskState }) { return <Badge tone={taskTone[status]} dot>{status}</Badge>; }

export function TaskCard({ title, description, status, assignee, meta, actions }: { title: string; description?: ReactNode; status: TaskState; assignee?: AgentIdentity; meta?: ReactNode; actions?: ReactNode }) { return <Card className="av-task-card" interactive><div className="av-task-card__top"><TaskStatus status={status} />{meta}</div><h3>{title}</h3>{description && <p>{description}</p>}<div className="av-task-card__bottom">{assignee && <AgentMiniCard agent={assignee} />}{actions}</div></Card>; }

export type WorkflowStepProps = { title: string; description?: ReactNode; state: TaskState; index?: number; meta?: ReactNode };
export function WorkflowStep({ title, description, state, index, meta }: WorkflowStepProps) { const Icon = state === 'complete' ? Check : state === 'failed' ? CircleAlert : Clock3; return <div className={cn('av-workflow-step', `av-workflow-step--${state}`)}><div className="av-workflow-step__marker">{index ?? <Icon aria-hidden="true" />}</div><div className="av-workflow-step__content"><div><strong>{title}</strong><TaskStatus status={state} /></div>{description && <p>{description}</p>}{meta}</div></div>; }
export function WorkflowTimeline({ children, label = 'Workflow progress' }: { children: ReactNode; label?: string }) { return <div className="av-workflow-timeline" aria-label={label}>{children}</div>; }

export function ToolInvocation({ name, input, state = 'complete', duration }: { name: string; input?: ReactNode; state?: TaskState; duration?: string }) { return <details className="av-tool-call"><summary><span><Terminal aria-hidden="true" /><strong>{name}</strong></span><span><TaskStatus status={state} />{duration && <small>{duration}</small>}<ChevronDown aria-hidden="true" /></span></summary>{input && <div className="av-tool-call__body">{input}</div>}</details>; }
export function ToolResult({ children, status = 'success' }: { children: ReactNode; status?: 'success' | 'error' }) { return <div className={cn('av-tool-result', `av-tool-result--${status}`)}><Code2 aria-hidden="true" /><div>{children}</div></div>; }

export function ExecutionLog({ entries, label = 'Execution log' }: { entries: { time: string; level: 'info' | 'success' | 'warning' | 'error'; message: string }[]; label?: string }) { return <div className="av-execution-log" role="log" aria-label={label}>{entries.map((entry, index) => <div key={`${entry.time}-${index}`} className={`av-execution-log__row av-execution-log__row--${entry.level}`}><time>{entry.time}</time><span>{entry.level}</span><code>{entry.message}</code></div>)}</div>; }
