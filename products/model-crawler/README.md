**English** · [Tiếng Việt](README.vi.md)

# Model Crawler

An internal tool that collects popular and unusual 3D-printing models to seed the [PrintLab](../printlab/README.md) catalogue. Python, no browser, results in SQLite with JSON/CSV export. Snapshot 2026-11-26.

## Sources

| Site | Metadata | Files | Notes |
| --- | --- | --- | --- |
| Printables | Done | Done (free models) | Public API |
| MakerWorld | Done | Needs an account token | |
| MyMiniFactory | Needs an API key | Needs OAuth | |
| Cults3D | Not done | Many paid models | Blocks plain HTTP clients |

Delivered: private shared remote with pull-request review (2026-11-24); CI checks on every pull request, export for the PrintLab catalogue with licences, and a weekly scheduled refresh that counts new, changed and unchanged models and retires models no longer listed (2026-11-25).

Rules: public data only, free models only, rate-limited, no paywall bypass, no redistribution.

## Open items

- Access for MakerWorld files and MyMiniFactory (depends on PrintLab's public environment for OAuth).

Plan and prioritised backlog: [plan.md](plan.md).
