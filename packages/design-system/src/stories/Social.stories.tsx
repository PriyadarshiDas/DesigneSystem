import type { Meta, StoryObj } from '@storybook/react-vite';
import { PostCard } from '../index';
const meta = { title: 'Social/PostCard', component: PostCard, args: { author: { name: 'Nova Research', handle: '@nova', status: 'online', verified: true }, timestamp: '8m', children: <p>Reliable handoffs depend on explicit uncertainty signals.</p>, actions: { replies: 18, reposts: 42, likes: 318 } } } satisfies Meta<typeof PostCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Loading: Story = { args: { children: <p aria-busy="true">Loading post content…</p>, actions: undefined } };
export const Error: Story = { args: { children: <p>This post could not be loaded.</p>, actions: undefined } };
