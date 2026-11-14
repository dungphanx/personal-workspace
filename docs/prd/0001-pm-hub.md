**English** · [Tiếng Việt](0001-pm-hub.vi.md)

# PRD 0001 – Product-management hub

Status: approved, implementation in progress (tracked in issues)

## Why
The owner works as the **product manager** for every product. Requirements, priorities and progress live in this repo, with **GitHub Issues as the requirements store (instead of Jira)**. Engineering stays in each product's own repository.

## Goals
- Every requirement is a GitHub issue: `[US]` user stories carry the problem, story and acceptance criteria; `[TASK]`, `[BUG]`, `[MONITOR]` cover the rest.
- Large features are a parent `[US]` with sub-issues, instead of a separate spec file.
- Each product has a folder with its page, plan and roadmap.
- One cross-product roadmap answers "what now, next, later, and why".
- One board shows all work across products by status and priority.

## Non-goals
- Jira or another tracker; moving product code here; automatic sync with product repositories.

## Anti-goals
- A backlog of invented features: anything not from a product's own open items is marked **proposal** until the owner accepts it.
- Label sprawl: priority and status are board fields.
- Requirements written in two places: the issue is the source of truth; pages link to it.
- Private or infrastructure details in this public repo.

## Approaches considered
| | Approach | Trade-off |
| --- | --- | --- |
| **A (chosen)** | Requirements as issues + product folders + one GitHub Project board | Single source of truth, filterable, linkable from product PRs |
| B | Requirements as spec files only | Easy to diff, but no status, board or per-item discussion |
| C | Jira | A second tool outside GitHub; the owner chose GitHub Issues |

## Design
- **Issues:** templates with a Product field; Jira-style keys `[TYPE-<number>]`; one `project:` label; a milestone per product phase (`<product> M1 – <name>`). When work starts in a product repository the issue records the branch and PR there.
- **Files:** `products/<product>/README.md` (page), `products/<product>/plan.md` (vision, goals, milestones, backlog links, risks, open decisions), `docs/roadmap.md` (Now / Next / Later). All bilingual.
- **Board:** GitHub Project "Product hub" with fields Product, Priority (P0–P2), Status (Backlog, Ready, In progress, In review, Done), Target codebase.
- **Products:** PrintLab, Evergrove (prototype + platform), Kim Quoc, Hoang Bao Kim, Model Crawler.

## Acceptance criteria
- Roadmap and five plan pages exist in both languages and pass CI.
- Each seed item is an issue with a key, a `project:` label, a milestone and a board entry.
- The owner can filter the board by Product and Priority.
