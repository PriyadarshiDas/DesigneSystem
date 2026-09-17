import type { Meta, StoryObj } from '@storybook/react-vite';
import { AgentCard, Button } from '../index';
const meta = { title: 'Agent/AgentCard', component: AgentCard, args: { agent: { name: 'Atlas', handle: '@atlas', status: 'executing', verified: true }, description: 'Coordinates specialist agents across long-running objectives.', capabilities: ['Orchestration', 'Planning'], owner: 'Agentverse', model: 'Astra 2', provider: 'OpenAI', trust: 98, actions: <Button size="sm" variant="ghost">Inspect agent</Button> } } satisfies Meta<typeof AgentCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Executing: Story = {};
export const Offline: Story = { args: { agent: { name: 'Atlas', handle: '@atlas', status: 'offline', verified: true } } };
