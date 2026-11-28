**English** · [Tiếng Việt](progress.vi.md)

# Progress overview

Snapshot **2026-11-26**. Details on each product page.

## At a glance

| Product | Stage | Recently done | Open |
| --- | --- | --- | --- |
| [PrintLab](../products/printlab/README.md) | Built; public since 2026-11-26; content-first since 2026-11-28 | Model pages in search, print notifications, help when a print fails (2026-11-27 and 2026-11-28); before that catalogue seeding, 3MF export, print profiles, history and cost, remixes, spools | Guides, consistent brand, search for guides and collections, email confirmation; then collections, material guides, community build logs |
| [Evergrove](../products/evergrove/README.md) | Working prototype + platform skeleton | Platform: first seven ADRs. Prototype: 3D visits, password reset, directions, real-time with fallback | Choose which codebase carries the product forward; prototype source-control remote |
| [Kim Quoc](../products/kim-quoc/README.md) | Live | Outside monitor emails the owner when the site is down; before that health check and recovery guide, security headers, DB backups, service pages with FAQ | Phone alert for new bookings; returning customers and warranty follow-up; branch protection; Search Console; first backup restore test |
| [Hoang Bao Kim](../products/hoang-bao-kim/README.md) | Live | Tab bar fixed, refreshed promo clip, automated worker tests, security headers, quote-form rate limit | Weekly database backup; deposits and balances of confirmed weddings, then profit per wedding; split the worker into modules; QR decision; monthly view of how customers find the site |
| [Model Crawler](../products/model-crawler/README.md) | Internal tool | Private shared remote, CI checks, export to the PrintLab catalogue, weekly scheduled refresh | Alert when the weekly refresh fails or shrinks; access for MakerWorld files and MyMiniFactory (after PrintLab's public environment) |
| [Hollies](../products/hollies/README.md) | MVP built; web app published | Health habits (what is improving vs the last 4 weeks, weight log, counters in the score), recovery mode, phone notifications, backup and restore, reliability fixes | Store builds; habit targets (owner) |

## Timeline

| Date | Event |
| --- | --- |
| 2026-11-13 | PrintLab split into components with a delivery workflow; Evergrove prototype designed and built; PrintLab public-environment spec written |
| 2026-11-14 | Hoang Bao Kim: SEO, labor tracking, business cards deployed; own domain live; share image and FAQ. Kim Quoc: domain, one-time-code login, rename, SEO. This hub created |
| 2026-11-15 | Hoang Bao Kim: faster mobile pages, IndexNow, contact tracking, self-hosted fonts. Kim Quoc: advanced SEO and production site-address fix. PrintLab: website v0.1.0 (UX/UI polish). Evergrove prototype hardened. Hollies started: scaffold to evening check-in |
| 2026-11-16 | Hollies: morning, weekly review, nudges, user guide, web app, rename to Hollies, UX fixes, counters and PIN lock. Hollies added to this hub |
| 2026-11-17 | Hollies: counters fixed on the web; tests run in a real browser in CI. Kim Quoc: coverage and promo clip merged. Hoang Bao Kim: refreshed promo clip |
| 2026-11-18 | Evergrove platform: first seven ADRs. Hoang Bao Kim: tab bar fixed, worker tests, security headers. Model Crawler under local version control |
| 2026-11-19 | Hoang Bao Kim: quote-form rate limit |
| 2026-11-20 | Kim Quoc: security headers, backups, booking-form limit, service pages with FAQ, service pre-selected in the form. New PrintLab stories researched (US-29 to US-36) |
| 2026-11-21 | PrintLab: getting-started guide, 3MF export (website v0.2.0). Evergrove prototype: 3D visits, bowing gestures, other visitors |
| 2026-11-22 | PrintLab: print profiles, richer parameters, print history and cost, in-product guide, remixes, filament spools (website v0.3.0, API v0.1.0) |
| 2026-11-24 | Hollies: reliability fixes, real app identifier, counters in the score, recovery mode, weight log, what is improving, phone notifications. Model Crawler on a private shared remote. New work items for every product (US-41 to US-52) |
| 2026-11-25 | PrintLab: catalogue seeded from Model Crawler exports (website v0.3.1, API v0.2.0). Model Crawler: CI checks and a weekly scheduled refresh. Kim Quoc: health check and recovery guide for the site-down alert |
| 2026-11-26 | Hollies: back up to a file and restore on any device. Kim Quoc: outside monitor live with email alerts. Evergrove: codebase comparison and recommendation posted on TASK-5. New work items for Kim Quoc, Hoang Bao Kim and Model Crawler (US-57 to MONITOR-63) |

## Decisions waiting for the owner

1. Evergrove: which codebase carries the product forward (comparison and recommendation on TASK-5: the Node prototype).
2. PrintLab: timing of the public environment (small monthly cloud cost).
3. Hoang Bao Kim: QR code on business cards.
4. Hollies: habit targets and study details.
5. PrintLab: direct printing to closed-firmware printers (after the test printer is assembled).
