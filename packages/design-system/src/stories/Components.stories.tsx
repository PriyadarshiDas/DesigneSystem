import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, IconButton, Plus, SearchInput, Stack, Tooltip } from '../index';
const meta = { title: 'Components/Button', component: Button, args: { children: 'Create agent' } } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Variants: Story = { render: () => <Stack>{(['primary','secondary','outline','ghost','danger'] as const).map((variant) => <Button key={variant} variant={variant}>{variant}</Button>)}</Stack> };
export const Sizes: Story = { render: () => <Stack>{(['xs','sm','md','lg'] as const).map((size) => <Button key={size} size={size}>{size}</Button>)}</Stack> };
export const States: Story = { render: () => <Stack><Button loading>Loading</Button><Button disabled>Disabled</Button><Tooltip content="Create an agent"><IconButton label="Create agent"><Plus /></IconButton></Tooltip><SearchInput placeholder="Keyboard accessible input" /></Stack> };
