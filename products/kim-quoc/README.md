**English** · [Tiếng Việt](README.vi.md)

# Kim Quoc

Website and back office for Kim Quoc, a roller-shutter installation and repair business. Snapshot 2026-11-26.

- **Stack:** a single Node server with no external libraries and built-in SQLite; runs in Docker.
- **Status:** live.

## Features

| Area | Features |
| --- | --- |
| Customer site | Services, price list, FAQ, hotlines, Zalo and Facebook links, booking / quote request form, search-engine and social-preview metadata |
| Back office | Orders (status, technician, appointment, quote), day calendar, technicians, warranties, stock of motors and parts, price list, shop settings; phone-friendly |
| Sign-in | Single access code or a one-time code generated at start-up; 30-day signed session; lockout after repeated failures |

## Delivered

Working process, two hotlines + Facebook, rename to Kim Quoc, one-time-code login, code clean-up, code-based login, guide fixes, README, SEO (sitemap, robots, social cards, structured data, caching), advanced SEO (canonical site address, no-index for private pages, proper 404 page, redirects, service catalogue in structured data, compression), site address passed to the production deployment, branch coverage about 95%, promo clip scripts, security headers (no embedding in other sites, HSTS), automatic database backups, a limit on booking-form submissions, a page per service with FAQ structured data, service pre-selected in the form when coming from a service page, a health check with an outside monitor that emails the owner when the site is down, and a recovery guide.

## Open items

- Protect the main branch of the code repository.
- Submit the sitemap to Google Search Console; refresh cached social previews.
- Phone notification for every new booking (US-57).
- Returning customers' history and warranties that end soon (US-58).
- First restore test of the database backups (2026-12-15).

Plan and prioritised backlog: [plan.md](plan.md).
