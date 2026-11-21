**English** · [Tiếng Việt](progress.vi.md)

# Progress overview

Snapshot **2026-11-22**. Details on each product page.

## At a glance

| Product | Stage | Recently done | Open |
| --- | --- | --- | --- |
| [PrintLab](../products/printlab/README.md) | Built; public environment in progress | 3MF export, print profiles, richer parameters, print history and cost, in-product guide, remixes, filament spools (website v0.3.0, API v0.1.0) | Public environment; user-published models; print queue; tags for identity service and mobile |
| [Evergrove](../products/evergrove/README.md) | Working prototype + platform skeleton | Platform: first seven ADRs. Prototype: 3D visits, password reset, directions, real-time with fallback | Choose which codebase carries the product forward; prototype source-control remote |
| [Kim Quoc](../products/kim-quoc/README.md) | Live | Coverage ~95%, promo clip, security headers, DB backups, form rate limit, service pages with FAQ | Branch protection; Search Console |
| [Hoang Bao Kim](../products/hoang-bao-kim/README.md) | Live | Tab bar fixed, refreshed promo clip, automated worker tests, security headers, quote-form rate limit | QR decision |
| [Model Crawler](../products/model-crawler/README.md) | Internal tool | Local version control started | Shared remote; feed PrintLab catalogue |
| [Hollies](../products/hollies/README.md) | MVP built; web app published | Renamed to Hollies (live); UX fixes; counters with PIN lock; browser tests in CI | Health habits (progress vs last 4 weeks, weight log); recovery mode; native notifications |

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

## Decisions waiting for the owner

1. Evergrove: which codebase carries the product forward.
2. PrintLab: timing of the public environment (small monthly cloud cost).
3. Hoang Bao Kim: QR code on business cards.
4. Hollies: habit targets and store app identifiers.
5. PrintLab: direct printing to closed-firmware printers (after the test printer is assembled).
