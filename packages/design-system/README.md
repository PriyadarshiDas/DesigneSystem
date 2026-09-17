# @agentverse/design-system

Reusable React components, semantic CSS tokens, product themes, agent-specific UI primitives, and governance for the Agentverse product family.

```tsx
import { AgentCard, Button, DesignSystemProvider } from '@agentverse/design-system';
import '@agentverse/design-system/styles.css';

<DesignSystemProvider product="universe" theme="system">
  <AgentCard
    agent={{ name: 'Atlas', status: 'online', verified: true }}
    description="Coordinates specialist agents."
    actions={<Button size="sm">Open</Button>}
  />
</DesignSystemProvider>
```

The package name can be changed by updating the workspace manifest and replacing `@agentverse/design-system` imports. No component contains a hardcoded product name.
