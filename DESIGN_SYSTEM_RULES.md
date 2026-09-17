# Design System Rules for AI Coding Agents

These rules apply to every application that consumes `@agentverse/design-system`.

1. Never introduce arbitrary colors. Use semantic design tokens.
2. Never introduce arbitrary spacing when a token exists.
3. Never create another Button, Input, Dialog, Menu, Avatar, Badge, Card, or other shared primitive inside an application.
4. Never directly style shared-component internals. Use the public API, compose around the component, or propose a reusable variant.
5. Search the design-system exports before creating UI.
6. If a generic pattern appears three or more times, evaluate promoting it to the design system. Do not promote it automatically if its behavior is business-specific.
7. Keep business rules, data fetching, authorization, analytics, and product routing inside applications.
8. Place generic reusable UI in `packages/design-system` with a typed API, story, and tests appropriate to its risk.
9. Use semantic token names such as `background.surface`, `action.primary`, and `agent.executing`.
10. Maintain light, dark, Universe, and Social compatibility.
11. Preserve keyboard behavior, focus visibility, accessible names, contrast, disabled state, loading state, and error recovery.
12. Never use inline hex, RGB, HSL, OKLCH, or named colors in application UI.
13. Never use arbitrary Tailwind values such as `text-[#...]`, `p-[13px]`, or `rounded-[17px]` without a documented, reviewed exception.
14. Do not duplicate icons or mix icon libraries. Import icons through `@agentverse/design-system`.
15. Do not bypass the component library for dialogs, menus, forms, buttons, tooltips, popovers, or agent identity.
16. Do not import Radix, Lucide, shadcn internals, or design-system private paths from applications.
17. Do not hardcode product names inside shared primitive components.
18. Use semantic props: `variant="danger"`, `status="executing"`, `size="sm"`. Do not add visual boolean props such as `orange`, `rounded`, or `shadow`.
19. Respect `prefers-reduced-motion`. Motion must communicate state or relationship.
20. Test responsive behavior at mobile, tablet, desktop, and large desktop sizes.

Before finishing any UI change, run the workspace lint and typecheck commands. For shared-component changes, also run tests, builds, and Storybook build. Read `DESIGN_SYSTEM.md` and `COMPONENT_GUIDELINES.md` before introducing a new public component.
