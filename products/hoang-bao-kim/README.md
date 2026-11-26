**English** · [Tiếng Việt](README.vi.md)

# Hoang Bao Kim

Website and back office for Hoàng Bảo Kim, a mobile wedding-catering business. Snapshot 2026-11-26.

- **Stack:** serverless worker with a SQL database at the edge; static pages built into the worker; installable web app with offline queueing.
- **Status:** live; deployed automatically when the main branch changes.

## Features

| Area | Features |
| --- | --- |
| Customer site | Services, menu with dish photos, directions map, call/Zalo links, booking form, owner-editable FAQ; server-rendered content and structured data for search and social previews; fast on phones |
| Back office | Overview, customers, menu, settings; contact statistics by source (call, Zalo, map, quote) |
| Labor | Work slips per event, helper directory, roles and rates, monthly totals of days, pay, paid and owed |
| Business cards | Two-sided print-ready card and a social intro image generated in the browser from the shop settings and dish photos |
| Promo | Vertical intro clip covering the main features |

## Delivered

Redesign, SEO, labor tracking, business cards, own domain, landscape share image for Facebook/Zalo, owner-editable FAQ, faster home page on phones, instant search-engine notification (IndexNow), contact tracking by source, self-hosted fonts and lighter cover images, centred back-office tab bar, refreshed promo clip (labor and business-card scenes), automated worker tests, security headers (no embedding in other sites, HSTS), a limit of 5 quote requests per visitor in 10 minutes; all deployed.

## Open items

- Decide whether business cards get a QR code.
- Monthly view of how customers find the site and get in touch (US-47).
- Weekly database backup and a restore test (TASK-59).
- Deposits and balances of confirmed weddings on one calendar (US-60), then profit per wedding and per month (US-61).
- Split the worker into modules (TASK-62).

Plan and prioritised backlog: [plan.md](plan.md).
