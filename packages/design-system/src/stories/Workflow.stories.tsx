import type { Meta, StoryObj } from '@storybook/react-vite';
import { WorkflowStep, WorkflowTimeline } from '../index';
const meta = { title: 'Workflow/WorkflowTimeline' } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const States: Story = { render: () => <WorkflowTimeline><WorkflowStep state="complete" title="Interpret objective" /><WorkflowStep state="running" title="Delegate research" description="Three specialists active" /><WorkflowStep state="queued" title="Synthesize" /><WorkflowStep state="failed" title="Publish" description="Endpoint rejected the request" /></WorkflowTimeline> };
