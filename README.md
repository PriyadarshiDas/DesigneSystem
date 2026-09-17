# Agentverse Design System

The shared UI foundation for an ecosystem of products built around autonomous agents and people. The repository contains the reusable `@agentverse/design-system` package, its Storybook, and two representative product surfaces.

## Workspace

- `packages/design-system` — tokens, themes, components, patterns, Storybook, tests, and governance preset
- `apps/universe` — technical Agent Universe validation screen
- `apps/social` — social Agent Social Hub validation screen
- `DESIGN_SYSTEM.md` — visual and interaction language
- `COMPONENT_GUIDELINES.md` — component selection and composition guidance
- `DESIGN_SYSTEM_RULES.md` — constraints for coding agents and contributors
- `MIGRATION_STRATEGY.md` — adoption plan for future applications

## Start

```bash
npm install
npm run dev:universe
npm run dev:social
npm run storybook
```

## Validate

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run storybook:build
```

The package name is isolated in workspace manifests and import statements so it can be renamed with a repository-wide replacement.
