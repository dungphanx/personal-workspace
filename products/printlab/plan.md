**English** · [Tiếng Việt](plan.vi.md)

# PrintLab – plan

Snapshot 2026-11-28. Requirements live in the linked issues; this page only orders them. Product page: [README.md](README.md).

## Vision

The place to find, learn and share 3D printing: good models, clear guides and a helpful community.

## Direction (2026-11-28)

PrintLab focuses on content: models, guides, learning material, community posts and search. It stops investing in printer control, because the printer makers' own apps and slicers already handle printing well. Printer features that have shipped (USB and network printing, notifications, spools, print history) stay and get fixes, but no new work.

## Goals

- The first place beginners look for a model or an answer about 3D printing
- Search brings most new visitors to guides, collections and model pages
- Every deployment traceable to a released version

## Non-goals

- New printer-control features (queues, direct printing to closed-firmware printers, remote printer settings)
- High availability or multi-region before there are users
- Re-hosting third-party model files

## Milestones and backlog

### Now: content foundation (no milestone yet)

| Priority | Item |
| --- | --- |
| P0 | [US-75](https://github.com/dungphanx/personal-workspace/issues/75) Step-by-step 3D printing guides on PrintLab |
| P0 | [TASK-77](https://github.com/dungphanx/personal-workspace/issues/77) One consistent brand: favicon, logo, default share image |
| P1 | [US-76](https://github.com/dungphanx/personal-workspace/issues/76) Search engines find and rank guides and collections |
| P1 | [US-41](https://github.com/dungphanx/personal-workspace/issues/41) New accounts confirm their email (needed before community posts) |

### Next: content and community (no milestone yet)

| Priority | Item |
| --- | --- |
| P1 | [US-78](https://github.com/dungphanx/personal-workspace/issues/78) Hand-picked collections of models |
| P1 | [US-79](https://github.com/dungphanx/personal-workspace/issues/79) Material guides: which filament and how to print it |
| P1 | [US-80](https://github.com/dungphanx/personal-workspace/issues/80) Makers publish build logs and tips (after US-41) |
| P2 | [US-81](https://github.com/dungphanx/personal-workspace/issues/81) Model pages show difficulty and how others printed the model |

### [M1 – Public environment](https://github.com/dungphanx/personal-workspace/milestone/1)

| Priority | Item |
| --- | --- |
| Live | [US-66](https://github.com/dungphanx/personal-workspace/issues/66) Public on existing hosting at no extra monthly cost (live since 2026-11-26) |
| P1 | [TASK-3](https://github.com/dungphanx/personal-workspace/issues/3) Tag releases for components that have none |
| P1 | [TASK-42](https://github.com/dungphanx/personal-workspace/issues/42) Monitor and back up the public environment |
| Done | [US-67](https://github.com/dungphanx/personal-workspace/issues/67) Owner reviews reported posts and restores or removes them |
| Later | [US-2](https://github.com/dungphanx/personal-workspace/issues/2) Cloud environment, once there are users |

### [M2 – Popular catalogue](https://github.com/dungphanx/personal-workspace/milestone/2)

| Priority | Item |
| --- | --- |
| P1 | [US-4](https://github.com/dungphanx/personal-workspace/issues/4) Popular MyMiniFactory models in the catalogue (more models to browse) |
| Done | [US-20](https://github.com/dungphanx/personal-workspace/issues/20) Catalogue seeded from Model Crawler exports (website v0.3.1, API v0.2.0) |

### Later (no milestone yet)

| Priority | Item |
| --- | --- |
| Later | [US-82](https://github.com/dungphanx/personal-workspace/issues/82) Monthly digest of new models and guides (email cost to be approved) |
| Later | [US-83](https://github.com/dungphanx/personal-workspace/issues/83) Owner sees which content brings visitors |
| Deferred | [US-33](https://github.com/dungphanx/personal-workspace/issues/33) User-published parametric models (richer studio parameters are done) |
| Deferred | [US-43](https://github.com/dungphanx/personal-workspace/issues/43) Mobile app in the app stores (today the app is mostly printer control) |

### Done or closed

| Status | Item |
| --- | --- |
| Done | [US-29](https://github.com/dungphanx/personal-workspace/issues/29) Export a customised model as 3MF (website v0.2.0) |
| Done | [US-31](https://github.com/dungphanx/personal-workspace/issues/31) Tested print profiles per printer and filament (website v0.3.0) |
| Done | [US-32](https://github.com/dungphanx/personal-workspace/issues/32) Remixes and "I made this" photos |
| Done | [US-34](https://github.com/dungphanx/personal-workspace/issues/34) Filament spool tracking |
| Done | [US-36](https://github.com/dungphanx/personal-workspace/issues/36) Getting-started guide and printer setup wizard in the product |
| Done | [US-68](https://github.com/dungphanx/personal-workspace/issues/68) Model pages in search and shared previews |
| Done | [US-69](https://github.com/dungphanx/personal-workspace/issues/69) Phone notification when a print finishes or fails |
| Done | [US-70](https://github.com/dungphanx/personal-workspace/issues/70) Likely causes and fixes when a print fails |
| Closed | [US-35](https://github.com/dungphanx/personal-workspace/issues/35) Print history and cost done; print queue dropped (2026-11-28) |
| Closed | [US-30](https://github.com/dungphanx/personal-workspace/issues/30) Direct printing to closed-firmware printers: not planned (2026-11-28) |

## Risks

- Content needs steady writing time; without new guides and collections the site stalls
- Monthly cloud cost creeps up as usage grows
- External sources change their APIs or terms

## Open decisions

- Whether guides are written only by the owner or also by contributors (owner, US-75)
- Timing of the cloud environment (owner, US-2; after there are users)
