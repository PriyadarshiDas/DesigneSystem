# Migration Strategy

## Current validation

The repository began without product code, so `apps/universe` and `apps/social` are representative screens rather than migrations of existing screens. Both consume only the public `@agentverse/design-system` package entry and stylesheet. They validate that one component and token system can produce a technical control plane and a content-first social experience.

## Adoption sequence

1. Add the design-system package and stylesheet to the product shell.
2. Wrap the application with `DesignSystemProvider`, selecting the product and color mode.
3. Map existing global colors, type roles, spacing, radii, shadows, and layers to semantic tokens.
4. Replace global primitives in this order: buttons and links, form controls, overlays, surfaces, navigation, feedback.
5. Replace identity and status UI with agent primitives.
6. Migrate one representative workflow per product and compare behavior, accessibility, density, and responsive layout.
7. Promote only repeated generic compositions. Keep domain logic local.
8. Remove legacy styles and direct primitive-library imports after each migrated area is stable.

## Governance rollout

Adopt the exported ESLint restrictions in application configurations. Begin restricted imports as errors. Begin arbitrary-value detection as warnings, inventory legitimate exceptions, then tighten it after token gaps are closed. CI should require lint, typecheck, tests, package builds, product builds, and Storybook build.

## Compatibility and release

Publish the package from its workspace with semantic versions. Products should pin compatible major versions and update through reviewed pull requests. Record token renames, removed props, changed keyboard behavior, and visual rebaselines in migration notes.

## Next deliberate expansions

A production data grid, command system with keyboard shortcuts, virtualized log viewer, toast manager, form adapter, and accessible workflow canvas need real product requirements before their APIs become stable. Build each against representative product use cases rather than expanding the checklist with shallow wrappers.
