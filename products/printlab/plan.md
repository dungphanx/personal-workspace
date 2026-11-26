**English** · [Tiếng Việt](plan.vi.md)

# PrintLab – plan

Snapshot 2026-11-26. Requirements live in the linked issues; this page only orders them. Product page: [README.md](README.md).

## Vision

The easiest way to find, customise and print 3D models, from the browser or the phone.

## Goals

- Usable by anyone on a public HTTPS address
- Catalogue rich enough to be the first place users look
- Every deployment traceable to a released version

## Non-goals

- High availability or multi-region before there are users
- Re-hosting third-party model files

## Milestones and backlog

### [M1 – Public environment](https://github.com/dungphanx/personal-workspace/milestone/1)

PrintLab is the top priority across products since 2026-11-26. Go public first on hosting we already run (US-66), with moderation in place (US-67); the cloud environment (US-2) follows once there are users.

| Priority | Item |
| --- | --- |
| P0 | [US-66](https://github.com/dungphanx/personal-workspace/issues/66) Go public now on existing hosting at no extra monthly cost |
| P0 | [TASK-3](https://github.com/dungphanx/personal-workspace/issues/3) Tag releases for components that have none (US-66 runs released versions only) |
| P1 | [US-67](https://github.com/dungphanx/personal-workspace/issues/67) Owner reviews reported posts and restores or removes them |
| P1 | [TASK-42](https://github.com/dungphanx/personal-workspace/issues/42) Monitor and back up the public environment (US-66 covers the first address) |
| Later | [US-2](https://github.com/dungphanx/personal-workspace/issues/2) Cloud environment, once there are users |

### [M2 – Popular catalogue](https://github.com/dungphanx/personal-workspace/milestone/2)

| Priority | Item |
| --- | --- |
| P2 | [US-4](https://github.com/dungphanx/personal-workspace/issues/4) Popular MyMiniFactory models in the catalogue |
| Done | [US-20](https://github.com/dungphanx/personal-workspace/issues/20) Catalogue seeded from Model Crawler exports (website v0.3.1, API v0.2.0) |

### Next: printing workflow and community (no milestone yet)

Ideas researched on 2026-11-20 from other model libraries and printer tools. Milestones are set when the public environment is done.

| Priority | Item |
| --- | --- |
| Done | [US-29](https://github.com/dungphanx/personal-workspace/issues/29) Export a customised model as 3MF and open it in your own slicer (website v0.2.0) |
| P2 | [US-30](https://github.com/dungphanx/personal-workspace/issues/30) Decide on direct printing to closed-firmware printers (Anycubic Kobra X) |
| Done | [US-31](https://github.com/dungphanx/personal-workspace/issues/31) Tested print profiles per printer and filament (website v0.3.0) |
| P2 | [US-33](https://github.com/dungphanx/personal-workspace/issues/33) Richer studio parameters (done) and user-published parametric models (open) |
| P2 | [US-35](https://github.com/dungphanx/personal-workspace/issues/35) Print history and cost (done), print queue (open) |
| Done | [US-36](https://github.com/dungphanx/personal-workspace/issues/36) Getting-started guide and printer setup wizard in the product |
| Done | [US-32](https://github.com/dungphanx/personal-workspace/issues/32) Remixes and "I made this" photos |
| Done | [US-34](https://github.com/dungphanx/personal-workspace/issues/34) Filament spool tracking |

### Next: grow and keep users after launch (no milestone yet)

Added on 2026-11-26 when PrintLab became the top priority.

| Priority | Item |
| --- | --- |
| P1 | [US-68](https://github.com/dungphanx/personal-workspace/issues/68) Model pages show up in search and preview when shared (after US-66) |
| P1 | [US-69](https://github.com/dungphanx/personal-workspace/issues/69) Phone notification when a print finishes or fails |
| P2 | [US-70](https://github.com/dungphanx/personal-workspace/issues/70) Likely causes and fixes when a print is marked failed |

### Later: trust and reach (no milestone yet)

Added on 2026-11-24 from the open items on the product page.

| Priority | Item |
| --- | --- |
| P1 | [US-41](https://github.com/dungphanx/personal-workspace/issues/41) New accounts confirm their email before publishing or commenting |
| Later | [US-43](https://github.com/dungphanx/personal-workspace/issues/43) Install the mobile app from the app stores |

## Risks

- Monthly cloud cost creeps up as usage grows
- External sources change their APIs or terms

## Open decisions

- Domain for the first public address (owner, US-66)
- Timing of the cloud environment (owner, US-2; after there are users)
