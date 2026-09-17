import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity, AgentAvatar, AgentCard, Badge, Bell, Bot, Button, Card, CardHeader, CheckCircle2,
  CommandPalette, Container, DataTable, DesignSystemProvider, Dialog, EnvironmentBadge,
  GitBranch, Grid, HealthIndicator, IconButton, Layers3, MetricCard, Moon, NavItem, Network,
  Page, SearchInput, Server, Settings2, Sidebar, Sparkles, Stack, Sun, Tabs, TabsContent, TabsList,
  TabsTrigger, TaskCard, ToolInvocation, TopNav, TrustIndicator, WorkflowStep, WorkflowTimeline,
  type ColorMode, type DataColumn
} from '@agentverse/design-system';
import '@agentverse/design-system/styles.css';
import './styles.css';

const agents = [
  { name: 'Atlas Orchestrator', handle: '@atlas', status: 'executing' as const, verified: true },
  { name: 'Scout Research', handle: '@scout', status: 'online' as const, verified: true },
  { name: 'Relay Operator', handle: '@relay', status: 'waiting' as const }
];

const runs = [
  { id: 'run_8B42', agent: 'Atlas', workflow: 'Market synthesis', state: 'Executing', latency: '1.2s', tokens: '18.4k' },
  { id: 'run_8B41', agent: 'Scout', workflow: 'Source verification', state: 'Complete', latency: '842ms', tokens: '7.1k' },
  { id: 'run_8B40', agent: 'Relay', workflow: 'Report delivery', state: 'Waiting', latency: '—', tokens: '2.8k' }
];
type Run = typeof runs[number];
const columns: DataColumn<Run>[] = [
  { key: 'id', header: 'Run', render: (value) => <code>{String(value)}</code> },
  { key: 'agent', header: 'Agent' },
  { key: 'workflow', header: 'Workflow' },
  { key: 'state', header: 'State', render: (value) => <Badge tone={value === 'Complete' ? 'success' : value === 'Executing' ? 'info' : 'warning'} dot>{String(value)}</Badge> },
  { key: 'latency', header: 'Latency', align: 'right' },
  { key: 'tokens', header: 'Tokens', align: 'right' }
];

function Brand() { return <div className="product-brand"><span className="product-mark"><Bot /></span><span><strong>Agent Universe</strong><small>Control plane</small></span></div>; }

function App() {
  const [theme, setTheme] = useState<ColorMode>('dark');
  return <DesignSystemProvider product="universe" theme={theme}>
    <div className="universe-shell">
      <TopNav brand={<Brand />} primary={<><Badge tone="success" dot>All systems nominal</Badge><span className="nav-context">prod-us-east-1</span></>} actions={<><SearchInput className="top-search" placeholder="Search agents, runs, tools…" /><CommandPalette commands={[{ id: 'new-agent', label: 'Create agent', description: 'Configure a new autonomous worker', onSelect: () => undefined }, { id: 'run', label: 'Start workflow', description: 'Launch from a saved workflow', onSelect: () => undefined }]} /><IconButton label="Notifications" variant="ghost"><Bell /></IconButton><IconButton label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} variant="ghost" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun /> : <Moon />}</IconButton><AgentAvatar alt="Priyadarshi Das" status="online" size="sm" /></>} />
      <div className="universe-body">
        <Sidebar header={<div className="workspace-switcher"><span>AV</span><div><strong>Agentverse</strong><small>Production workspace</small></div></div>} footer={<NavItem href="#settings" icon={<Settings2 />}>Settings</NavItem>}>
          <span className="nav-label">Workspace</span><NavItem href="#overview" icon={<Layers3 />} active>Overview</NavItem><NavItem href="#agents" icon={<Bot />} badge={<Badge>12</Badge>}>Agents</NavItem><NavItem href="#workflows" icon={<GitBranch />}>Workflows</NavItem><NavItem href="#network" icon={<Network />}>Network</NavItem><span className="nav-label">Observe</span><NavItem href="#runs" icon={<Activity />}>Runs</NavItem><NavItem href="#resources" icon={<Server />}>Infrastructure</NavItem>
        </Sidebar>
        <Page className="universe-main">
          <Container size="full">
            <Stack gap={8}>
              <div className="page-heading"><div><div className="eyebrow"><span /> LIVE CONTROL PLANE</div><h1>Good evening, Priyadarshi.</h1><p>Your agent network is stable. Atlas is coordinating three active workflows across 12 agents.</p></div><Dialog title="Create an agent" description="Start with identity and capability. Runtime settings can be added later." trigger={<Button iconLeading={<Sparkles />}>Create agent</Button>} footer={<Button>Create agent</Button>}><Stack gap={4}><SearchInput placeholder="Agent name" /><Card tone="subtle"><strong>Agent identity preview</strong><p className="muted-copy">A unique agent pulse appears when this agent is active.</p></Card></Stack></Dialog></div>
              <Grid columns={4} gap={3}><MetricCard label="Active agents" value="9 / 12" detail="2 executing · 1 waiting" trend="up" icon={<Bot />} /><MetricCard label="Success rate" value="98.7%" detail="+1.4% this week" trend="up" icon={<CheckCircle2 />} /><MetricCard label="Median latency" value="1.08s" detail="-86ms from baseline" trend="up" icon={<Activity />} /><MetricCard label="Token volume" value="2.4M" detail="72% of daily budget" icon={<Sparkles />} /></Grid>
              <div className="universe-grid">
                <Stack gap={4}><CardHeader title="Agent fleet" description="Availability, trust, and current execution state" action={<Button variant="ghost" size="sm">View all</Button>} /><Grid columns={3} gap={3}>{agents.map((agent, index) => <AgentCard key={agent.name} agent={agent} description={index === 0 ? 'Routes complex objectives across specialist agents and resolves dependencies.' : index === 1 ? 'Researches trusted sources and produces evidence-backed summaries.' : 'Handles delivery, webhooks, and resilient downstream handoffs.'} capabilities={index === 0 ? ['Orchestration', 'Planning'] : index === 1 ? ['Research', 'Analysis'] : ['Delivery', 'Webhooks']} owner="Agentverse" model={index === 0 ? 'Astra 2' : 'Sol 1.5'} provider="OpenAI" trust={index === 0 ? 98 : index === 1 ? 96 : 91} actions={<Button variant="ghost" size="sm">Inspect agent</Button>} />)}</Grid></Stack>
                <Card className="workflow-panel"><CardHeader title="Live workflow" description="market-intelligence-v4" action={<HealthIndicator status="healthy" label="Running" />} /><div className="workflow-meta"><EnvironmentBadge>production</EnvironmentBadge><TrustIndicator score={98} compact /></div><WorkflowTimeline><WorkflowStep state="complete" title="Interpret objective" description="Scope and constraints extracted" /><WorkflowStep state="complete" title="Delegate research" description="4 specialist tasks dispatched" /><WorkflowStep state="running" title="Synthesize evidence" description="Atlas is resolving source conflicts" /><WorkflowStep state="queued" title="Publish briefing" description="Waiting for synthesis" /></WorkflowTimeline><ToolInvocation name="knowledge.search" state="complete" duration="624 ms" input="query: agent infrastructure market 2026" /></Card>
              </div>
              <Card><div className="table-header"><CardHeader title="Recent executions" description="Live and completed workflow runs" /><Tabs defaultValue="all"><TabsList><TabsTrigger value="all">All</TabsTrigger><TabsTrigger value="active">Active</TabsTrigger><TabsTrigger value="failed">Failed</TabsTrigger></TabsList><TabsContent value="all" /></Tabs></div><DataTable data={runs} columns={columns} caption="Recent agent executions" /></Card>
              <section><CardHeader title="Queued work" description="Tasks awaiting resources or review" /><Grid columns={3} gap={3}><TaskCard title="Evaluate retrieval benchmark" status="queued" description="Compare five vector strategies against the new corpus." assignee={agents[1]} meta={<span className="muted-copy">P1</span>} /><TaskCard title="Reconcile provider costs" status="running" description="Normalize inference cost across three providers." assignee={agents[0]} /><TaskCard title="Approve outbound report" status="blocked" description="Human review required before external delivery." assignee={agents[2]} /></Grid></section>
            </Stack>
          </Container>
        </Page>
      </div>
    </div>
  </DesignSystemProvider>;
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
