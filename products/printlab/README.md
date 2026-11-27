**English** · [Tiếng Việt](README.vi.md)

# PrintLab

A platform for 3D-printer users: a parametric model library, 3D preview and customisation, STL download, G-code generation, printing over USB or the network, accounts, sharing, comments, stars and a catalogue of popular models. Snapshot 2026-11-28.

## Architecture

```
web / mobile app ─► website (Next.js) ─┬─ /backend ─► API (Go, GraphQL + REST) ─┐
                                        └─ /auth    ─► identity service (Go) ────┴─► MongoDB
```

| Component | Role | Stack |
| --- | --- | --- |
| API | GraphQL for app features, REST for STL/G-code files, model crawler | Go |
| Identity service | Reusable sign-in: email/password, Google, Ethereum wallet; short-lived JWTs with rotating refresh tokens, public JWKS | Go |
| Website | Library, 3D studio, model page, printer, share, favourites; Vietnamese + English, light/dark | Next.js, React, three.js |
| Mobile app | Library, favourites, network printers, account | Flutter |
| Deploy | Docker Compose, Kubernetes manifests, Terraform | |

The identity service is product-neutral and is reused by [Evergrove](../evergrove/README.md).

## Features and status

| Feature | Status |
| --- | --- |
| Parametric templates sliced to G-code on the server (spiral vase, ribbed planter, wave lampshade); five more generated in the browser | Done |
| Save designs; upload/download STL and G-code | Done |
| Network printers (OctoPrint, Klipper/Moonraker): status, send, print | Done |
| USB printing from the browser (Web Serial), with a simulated printer | Done (web only) |
| Share models with a licence, comments, stars, favourites | Done |
| Popular-models catalogue from Thingiverse and MyMiniFactory | Built; MyMiniFactory needs an OAuth app with a public HTTPS address |
| Sign-in with email, Google, Ethereum wallet | Done (mobile: no wallet yet) |
| CI with checks, coverage gate, images built on release tags | Done |
| Delivery workflow (spec → PR → AI review → merge → release tag) | Released 2026-11-13 |
| Website UX/UI polish | Released 2026-11-15 (website v0.1.0) |
| Getting-started guide for first-time printer owners | Released 2026-11-21 |
| Export a customised model as 3MF for your own slicer | Released 2026-11-21 (website v0.2.0) |
| Tested print profiles per printer and filament; richer studio parameters | Released 2026-11-22 (website v0.3.0, API v0.1.0) |
| Print history and cost per print | Released 2026-11-22 (print queue dropped 2026-11-28) |
| In-product guide and printer setup wizard | Released 2026-11-22 |
| Remixes and "I made this" posts; filament spool tracking | Released 2026-11-22 |
| Catalogue seeded from Model Crawler exports, with licences | Released 2026-11-25 (website v0.3.1, API v0.2.0) |
| Public on existing hosting, with moderation of reported posts | Live since 2026-11-26 (monitoring and backups open) |
| Model pages in search and shared previews; phone notifications for finished or failed prints; help when a print fails | Released 2026-11-27 and 2026-11-28 |
| **Public environment** (single small cloud node, Kubernetes, automatic HTTPS, deploy from released images) | Later, once there are users |

## Open items

Since 2026-11-28 PrintLab focuses on content (models, guides, learning material, community posts, search) instead of printer control: the printer makers' own apps already handle printing well. Shipped printer features stay and get fixes, but no new work.

- Now: step-by-step guides (US-75), one consistent brand starting with the favicon (TASK-77), search for guides and collections (US-76), email confirmation before community posts (US-41).
- Next: model collections (US-78), material guides (US-79), community build logs (US-80), richer model pages (US-81), MyMiniFactory models (US-4); monitoring and backups (TASK-42).
- Later: monthly digest (US-82), content analytics (US-83), the cloud environment. Deferred: user-published parametric models (US-33), the mobile app in the stores (US-43).
- Closed: the print queue (US-35) and direct printing to closed-firmware printers (US-30).

Plan and prioritised backlog: [plan.md](plan.md).
