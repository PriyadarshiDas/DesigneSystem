# Component Guidelines

## Choosing a container

Use `Card` when content represents an independent entity or action: an agent, task, resource, post, or metric. Use `Surface` when grouping content visually without entity semantics. Use `Section` for page rhythm and `Container` for readable page width. Avoid nested cards; use dividers, stacks, or a subtle surface inside a card.

## Actions and navigation

Use `Button` for actions and `Link` or `NavItem` for navigation. Choose `primary` for the main action in a region, `secondary` for a supporting action, `outline` for lower emphasis with a visible boundary, `ghost` for compact toolbars, and `danger` only for destructive or high-risk actions. Use `IconButton` only when the icon is widely understood and always provide `label`.

Use `TopNav` for product-level identity and global controls. Use `Sidebar` for persistent desktop destinations, `SubNav` for nearby views, and `Tabs` for peer panels that share context. Tabs are not a substitute for page navigation when each destination needs a URL.

## Forms

Wrap inputs in `Field` when they need a visible label, hint, or error. Use `Input` for one line, `Textarea` for longer free-form content, `Select` for a short known list, `Radio` when all options should be visible, `Checkbox` for independent choices, `Switch` for settings that take effect immediately, and `Slider` only when approximate adjustment is acceptable.

Errors should explain how to recover. Keep the user's input after validation. Loading actions should use the button's `loading` state rather than changing its label unpredictably.

## Feedback and overlays

Use `Alert` for inline page feedback, `Toast` for short non-blocking confirmation, `Progress` for measurable work, and `Spinner` for brief indeterminate work. Use `Skeleton` only when the final layout is known.

Use `Dialog` for focused decisions or short tasks, `AlertDialog` for consequential confirmation, and `Drawer` or `Sheet` for supporting detail that preserves page context. Use `Popover` for compact transient content, `DropdownMenu` for action lists, and `Tooltip` for terse supplementary labels. Essential instructions must remain visible without hover.

## Agent components

Use `AgentAvatar` when an avatar must expose presence or execution. Use plain `Avatar` for people or identities without agent state. `AgentCard` supports discovery and comparison; `AgentMiniCard` supports assignment, selection, and compact references; `AgentProfileHeader` anchors a full profile.

Use `AgentBadge` for operating type, `CapabilityBadge` for what an agent can do, `ToolBadge` for callable tools, `ModelBadge` and `ProviderBadge` for runtime metadata, and `TrustIndicator` for an evidence-backed score. Do not use trust as a decorative percentage.

Use `AgentActivityIndicator` when work is actively progressing and the exact step is unavailable. Prefer `AgentExecutionState` when a named state and detail exist. Use `AgentConnection` or `AgentConnectionLine` for directed delegation, messaging, or data transfer; avoid them for simple membership.

`AgentMessage` represents conversational output. `ToolInvocation` and `ToolResult` show machine actions attached to a message or run. `TaskCard`, `TaskStatus`, `WorkflowStep`, `WorkflowTimeline`, and `ExecutionLog` represent increasingly technical execution detail.

## Social components

Use `PostCard` as the semantic article container and compose it with `PostHeader`, `PostActions`, media, and comment patterns. Use `PostComposer` when the surrounding application owns draft persistence and submission. Use `Feed` for ordered content and `ActivityFeed` for notifications or action history.

Use `CommentThread` for actual reply nesting, and keep nesting shallow on mobile. Use `ReactionBar` for multiple lightweight responses and `PostActions` for the standard reply, repost, like, and share actions. Use `SocialProfileCard` for discovery; use `AgentCard` when capabilities and trust matter more than social identity.

## Data and infrastructure

Use `Stat` inside another surface and `MetricCard` when a measure needs independent visual weight. Use `Table` for authored markup and `DataTable` for typed array data. The current `DataTable` intentionally omits sorting, selection, pagination, and virtualization; applications should compose those controls until requirements stabilize.

Use `StatusPanel` and `HealthIndicator` for service health, `EventLog` for human-readable events, `ExecutionLog` or `LogViewer` for technical output, `CodeBlock` for source, `JSONViewer` for structured payloads, and `KeyValueList` for compact metadata.

Use `NodeCard` and `GraphEdge` only when network topology is meaningful. A full workflow canvas should live as a separate package or later design-system module once pan, zoom, selection, keyboard navigation, and large-graph performance requirements are defined.

## Ownership rule

Do not create local application versions of shared primitives. Product applications own business-specific compositions, data access, permissions, routing, and domain copy. Generic reusable UI belongs in `packages/design-system` after its API has been validated by more than one context.
