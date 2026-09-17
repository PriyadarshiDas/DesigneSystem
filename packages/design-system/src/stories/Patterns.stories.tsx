import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardHeader, Container, Grid, MetricCard, Page, SearchInput, Section, Stack } from '../index';
const meta = { title: 'Patterns/Responsive dashboard' } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Page><Container><Section><Stack gap={6}><CardHeader title="Operational overview" action={<SearchInput placeholder="Search" />} /><Grid columns={3}><MetricCard label="Active agents" value="12" /><MetricCard label="Healthy workflows" value="98%" /><MetricCard label="Median latency" value="1.1s" /></Grid><Card><CardHeader title="Responsive composition" description="Resize the viewport to see the grid collapse without component forks." /></Card></Stack></Section></Container></Page> };
