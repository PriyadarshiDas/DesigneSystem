# Agentverse Design System

## Design philosophy

Agentverse interfaces make complex intelligence feel calm, legible, and controllable. They expose state without manufacturing urgency, use visual effects only when those effects communicate live behavior, and preserve enough density for technical work without turning every surface into a dashboard.

Five principles guide the system:

1. **Meaning before decoration.** Color, motion, elevation, and emphasis must explain hierarchy or state.
2. **Agents are entities.** Identity, presence, capability, trust, ownership, and execution state are separate concepts with separate primitives.
3. **Calm by default.** Neutral surfaces carry most of the interface. Accents identify actions, product context, and exceptional states.
4. **One family, distinct products.** Geometry, type, interaction, and semantics remain shared. Product themes adjust accent, density, and composition.
5. **Accessible under pressure.** Keyboard operation, readable contrast, clear focus, useful labels, and reduced motion are system behavior.

## Foundation and token architecture

The dependency direction is strict:

```text
primitive palette and scales
  → semantic CSS tokens
    → primitive components
      → composite patterns
        → agent, social, and infrastructure patterns
          → product composition
```

Primitive palette values live in `src/tokens/colors.ts` and are mirrored into CSS only to construct themes. Components use semantic variables such as `--av-bg-surface`, `--av-fg-muted`, `--av-action-primary`, and `--av-agent-executing`. A component must never depend on `blue-500` or another raw palette step.

The public token modules cover color, spacing, radius, typography, shadow, motion, and z-index. CSS variables use the `--av-` namespace to avoid collisions.

## Themes

`DesignSystemProvider` owns color mode and product identity:

```tsx
<DesignSystemProvider product="universe" theme="dark">
  <Application />
</DesignSystemProvider>
```

`theme` accepts `light`, `dark`, or `system`. System mode observes the operating-system preference and responds to changes. `product` accepts `universe`, `social`, or a future registered product name.

Universe uses a precise blue action accent, grid-backed technical compositions, compact metadata, tables, workflows, and command surfaces. Social uses a calm mineral-green accent, wider reading rhythm, richer identity, feeds, comments, and reactions. Status colors never change meaning between products.

To add a product, define semantic overrides under `[data-av-product="name"]`. Avoid changing primitive component geometry. Validate action contrast, focus contrast, both color modes, and status recognition before release.

## Color philosophy

Neutral canvas and surface layers hold the interface. The ecosystem accent identifies the family. Product accents identify context and primary action. Functional colors communicate success, warning, danger, and information. Agent and social semantics add narrow, named meanings.

Color must not be the only signal. Status components pair color with labels, shapes, icons, or motion. Dense views should reserve strong color for the data that needs attention.

## Typography

The default sans stack favors Inter when available and uses native UI fonts as a reliable fallback. The mono stack is reserved for identifiers, timestamps, code, logs, endpoints, and operational metadata.

The type scale includes `display`, four heading levels, three body levels, `label`, `caption`, and `code`. Display and headings use slightly tightened tracking; body text stays open and readable. Product code should select from these roles rather than inventing font sizes.

## Spacing, radius, and elevation

Spacing uses a four-pixel base with the published scale `0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24`. Use smaller steps inside controls, middle steps for cards and groups, and larger steps for page rhythm.

Radii use `none`, `sm`, `md`, `lg`, `xl`, and `full`. Controls generally use `md`; cards use `lg`; dialogs may use `xl`; avatars and compact status objects may use `full`. Large radii should remain rare.

Shadows indicate elevation, not decoration. Most cards use a border with no shadow. Floating menus, dialogs, drawers, and active drag surfaces use the elevation scale.

## Motion and the Agentverse signature

Motion uses `fast`, `normal`, and `slow` durations with shared enter, exit, and standard curves. The signature behavior is an agent pulse and directional connection flow:

- an active agent may show one quiet expanding ring;
- executing or delegating state may animate a small status signal;
- live connections may move small markers in the direction of work;
- static status and text remain visible when animation is disabled.

Do not apply luminous edges to generic cards, navigation, or decorative backgrounds. `prefers-reduced-motion` collapses transitions and animations automatically.

## Component rules

Component props describe meaning: `variant="danger"`, `size="sm"`, `status="executing"`. They do not expose visual implementation flags. Shared primitives accept `className` for layout integration, but applications should not reach into internal selectors or replace semantic colors.

Primitive components contain behavior and visual contracts. Composite components combine them without product data fetching, authorization, routing, or workflow logic. Agent, social, and infrastructure components accept plain data and callbacks.

## Accessibility

The target is WCAG 2.2 AA. Every interactive component must support keyboard input, visible focus, disabled behavior, and an accessible name. Complex overlays use Radix behavior for focus containment, escape handling, portal order, and keyboard navigation. Native controls are preferred where their semantics are sufficient.

Icon-only buttons require `label`. Decorative icons are hidden from assistive technology. Loading states set `aria-busy`; errors use `aria-invalid` and alert semantics; progress exposes numeric range; current navigation uses `aria-current`. Touch targets should reach 40px in primary mobile flows even when the visual control is smaller.

Test light and dark modes, 200% zoom, keyboard-only use, screen-reader names, forced colors, and reduced motion. Storybook runs automated accessibility checks, but manual keyboard and reading-order reviews remain required for new patterns.

## Agent-specific UI language

An agent identity has a name, optional handle, avatar, verification, and presence. Presence describes availability; execution describes current work; badges describe operating mode or specialization; trust describes evidence or reputation. Do not collapse these into a single badge.

Use `AgentAvatar` wherever status must travel with identity. Use `AgentCard` for discoverable entities and `AgentMiniCard` inside selections, assignments, and connection views. Use `AgentStatus` for explicit state text. Use `AgentConnectionLine` only when direction matters.

Thinking, executing, waiting, delegating, and failed are operational states. Avoid human emotional language for autonomous systems. Show the action, tool, elapsed time, and recovery path when they help a person supervise the work.

## Social UI language

Social surfaces favor readable content, recognizable authorship, restrained chrome, and reversible interactions. Agent authors and human authors share the same post grammar. Agent verification and live status remain visible through the shared identity primitives.

Reactions use semantic social tokens. Counts and pressed state accompany icons. Feeds should preserve DOM order, heading structure, link purpose, and predictable focus when content loads.

## Universe UI language

Universe supports dense observation and control. Prefer tables for exact comparison, metric cards for a few scan-worthy measures, logs for ordered technical events, and workflow timelines for causal progress. Do not represent every relationship as a graph. Graph primitives are appropriate only when topology or flow is the information.

## Do and don't

| Do | Don't |
| --- | --- |
| Use `background.surface` for cards | Pick a neutral shade by eye |
| Use one primary action per region | Fill every card with accent buttons |
| Pair agent state color with text | Depend on a glowing dot alone |
| Compose `Surface` for visual grouping | Use `Card` for decorative padding |
| Keep product logic in applications | Add API calls to shared components |
| Use the icon abstraction and standard sizes | Mix icon libraries or custom stroke weights |
| Validate both product themes | Tune a component for one page only |

## Contribution guidelines

1. Start with a documented user need and check the public package for an existing primitive.
2. Decide whether the pattern is generic, agent-specific, social, infrastructure, or application-specific.
3. Add or reuse semantic tokens before styling.
4. Define the typed API, keyboard model, states, responsive behavior, and error behavior.
5. Add stories for default, variants, sizes, states, dark mode, loading, disabled, error, and mobile where applicable.
6. Add focused behavior and accessibility tests.
7. Run lint, typecheck, tests, package builds, product builds, and Storybook build.
8. Record breaking behavior in release notes and provide migration guidance.

## Versioning strategy

Follow semantic versioning. Patch releases fix behavior or visuals without changing the public contract. Minor releases add components, tokens, optional props, and variants. Major releases may remove exports, rename tokens, change required props, or alter interaction behavior. Deprecate public APIs for at least one minor release when practical. Keep tokens and components versioned together until their compatibility requirements justify separate packages.
