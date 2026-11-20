**English** · [Tiếng Việt](README.vi.md)

# personal-workspace

The product-management hub for my products: what each product is, where it stands, what comes next, and the requirements behind it. Engineering happens in each product's own repository; this repo is where decisions, priorities and requirements live.

## Products

| Product | What it is | Stage |
| --- | --- | --- |
| [PrintLab](products/printlab/README.md) | Platform for 3D-printer users: parametric models, 3D studio, G-code, printing | Built, preparing a public environment |
| [Evergrove](products/evergrove/README.md) | Cemetery management: grave records, maps and 3D, plot reservations | Working prototype + platform skeleton |
| [Kim Quoc](products/kim-quoc/README.md) | Website and back office for a roller-shutter business | Live |
| [Hoang Bao Kim](products/hoang-bao-kim/README.md) | Website and back office for a mobile wedding-catering business | Live |
| [Model Crawler](products/model-crawler/README.md) | Collector of popular 3D-printing models for PrintLab | Internal tool |
| [Hollies](products/hollies/README.md) | Personal self-improvement app: time log, daily top 3, habits, staying on track | MVP built; web app published |

Each product folder also has a **plan** (`plan.md`). Roadmap across products: [docs/roadmap.md](docs/roadmap.md). Priority and status for every item are tracked on an internal board (private, not visible to the public). Overall status and timeline: [docs/progress.md](docs/progress.md).

## How this repo works

- **Requirements are GitHub Issues**, keyed Jira-style: `[US-12]`, `[TASK-13]`, `[BUG-14]`, `[MONITOR-15]` (the number is the issue number). Pick an issue template; a workflow adds the number.
- **Each product folder** holds the product page and, as it grows, its plan and roadmap.
- **Pull requests** follow [CONTRIBUTING.md](CONTRIBUTING.md): issue key in the title, Background → Verification → Description of changes, Vietnamese summary in a collapsed block.
- **Bilingual:** English is primary; every page has a Vietnamese twin `*.vi.md`.
- **Design of the hub:** [docs/prd/0001-pm-hub.md](docs/prd/0001-pm-hub.md).

## Repository layout

```
products/<product>/README.md   product page (features, status, open items)
products/<product>/plan.md     vision, goals, milestones, prioritised backlog (issue links)
docs/roadmap.md                Now / Next / Later across products
docs/progress.md               cross-product status and timeline
docs/prd/                      designs for this repo itself
.github/                       issue/PR templates, workflows
scripts/check-docs.mjs         CI: links, bilingual twins, secret scan
```
