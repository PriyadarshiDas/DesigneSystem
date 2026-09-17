import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import axe from 'axe-core';
import { AgentStatus, Button, DesignSystemProvider, IconButton, Plus } from '../index';

describe('design-system contracts', () => {
  it('exposes loading semantics and disables a busy button', () => {
    render(<Button loading>Create agent</Button>);
    const button = screen.getByRole('button', { name: 'Create agent' });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
  });

  it('applies resolved product and theme attributes', () => {
    const { container } = render(<DesignSystemProvider product="social" theme="dark"><span>Content</span></DesignSystemProvider>);
    expect(container.firstChild).toHaveAttribute('data-av-product', 'social');
    expect(container.firstChild).toHaveAttribute('data-av-theme', 'dark');
  });

  it('provides text for non-visual agent state', () => {
    render(<AgentStatus status="executing" showLabel={false} />);
    expect(screen.getByText('Executing')).toHaveClass('av-sr-only');
  });

  it('has no automated accessibility violations in core controls', async () => {
    const { container } = render(<DesignSystemProvider theme="light"><Button>Create agent</Button><IconButton label="Add agent"><Plus /></IconButton></DesignSystemProvider>);
    const results = await axe.run(container, { rules: { 'color-contrast': { enabled: false } } });
    expect(results.violations).toEqual([]);
  });
});
