**English** · [Tiếng Việt](plan.vi.md)

# PrintLab – plan

Snapshot 2026-11-20. Requirements live in the linked issues; this page only orders them. Product page: [README.md](README.md).

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

| Priority | Item |
| --- | --- |
| P0 | [US-2](https://github.com/dungphanx/personal-workspace/issues/2) Anyone can use PrintLab on a public HTTPS address |
| P1 | [TASK-3](https://github.com/dungphanx/personal-workspace/issues/3) Tag releases for components that have none |

### [M2 – Popular catalogue](https://github.com/dungphanx/personal-workspace/milestone/2)

| Priority | Item |
| --- | --- |
| P2 | [US-4](https://github.com/dungphanx/personal-workspace/issues/4) Popular MyMiniFactory models in the catalogue |
| P2 | [US-20](https://github.com/dungphanx/personal-workspace/issues/20) Catalogue seeded from Model Crawler exports (shared with Model Crawler) |

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

## Risks

- Monthly cloud cost creeps up as usage grows
- External sources change their APIs or terms

## Open decisions

- Timing of the public environment (owner)
