**English** · [Tiếng Việt](README.vi.md)

# Model Crawler

An internal tool that collects popular and unusual 3D-printing models to seed the [PrintLab](../printlab/README.md) catalogue. Python, no browser, results in SQLite with JSON/CSV export. Snapshot 2026-11-14.

## Sources

| Site | Metadata | Files | Notes |
| --- | --- | --- | --- |
| Printables | Done | Done (free models) | Public API |
| MakerWorld | Done | Needs an account token | |
| MyMiniFactory | Needs an API key | Needs OAuth | |
| Cults3D | Not done | Many paid models | Blocks plain HTTP clients |

Rules: public data only, free models only, rate-limited, no paywall bypass, no redistribution.

## Open items

- Put the tool under version control.
- Feed exported data into the PrintLab catalogue.
- Access for MakerWorld files and MyMiniFactory (depends on PrintLab's public environment for OAuth).

Plan and prioritised backlog: [plan.md](plan.md).
