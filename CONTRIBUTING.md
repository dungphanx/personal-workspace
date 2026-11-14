**English** · [Tiếng Việt](CONTRIBUTING.vi.md)

# Contributing

## Workflow

Issue → branch → verify → pull request → review → owner approves → merge.

- Every change starts from an issue. No direct pushes to `main` (it is protected: one approval, approvals are dismissed by new pushes, no force-push or deletion).
- Branch name: `<type>/<issue number>-<slug>`, e.g. `docs/12-evergrove-plan`.
- Merge with a **merge commit** (squash and rebase are disabled); the branch is deleted on merge.

## Issues

- Use a template: **User story** `[US]`, **Task** `[TASK]`, **Bug** `[BUG]`, **Monitor** `[MONITOR]` (something to keep watching). Blank issues are disabled.
- The `Issue key` workflow turns `[TASK] title` into `[TASK-<number>] title`.
- A user story carries the problem, the story, acceptance criteria and what is out of scope. Large features are a parent story with sub-issues.
- One `project:` label per issue. Priority and status live on the project board, not in labels.

## Pull requests

- **Title:** starts with the issue key, e.g. `[TASK-13] Add the Evergrove plan`. CI rejects other titles.
- **Body** (the template provides it), in English:
  1. **Background** – why the PR exists and where it comes from (issue, design, request).
  2. **Verification** – what was checked and the result, including what was not checked.
  3. **Description of changes** – what was applied.
  4. A collapsed `<details>` block with the Vietnamese translation.
- New PRs are assigned to the owner automatically.

## Labels

| Group | Labels |
| --- | --- |
| Type | `type: docs`, `type: fix`, `type: chore` |
| Area | `area: progress`, `area: workspace` |
| Product | `project: printlab`, `project: evergrove`, `project: kim-quoc`, `project: hoang-bao-kim`, `project: model-crawler` |
| Other | `snapshot-update`, `ai-reviewed`, `security: secrets-checked` |

## Writing

- English page `X.md` plus Vietnamese twin `X.vi.md`; update both.
- Pages carry a snapshot date.
- Public repo: no secrets, credentials, personal data, internal hostnames, ports, machine paths or infrastructure details. Describe products at the product level.
- Run `node scripts/check-docs.mjs` before pushing (links, twins, secret patterns). CI runs it too.
