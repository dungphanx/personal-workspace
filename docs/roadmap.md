**English** · [Tiếng Việt](roadmap.vi.md)

# Roadmap

Snapshot 2026-11-26. Now = in progress or next up; Next = after Now lands; Later = needs a decision or a dependency first. Requirements live in the linked issues; per-product order is in each `products/<product>/plan.md`; live priority and status are on an internal board (private).

## Now

| Product | Item | Why now |
| --- | --- | --- |
| PrintLab | [US-2](https://github.com/dungphanx/personal-workspace/issues/2) Public HTTPS environment | The catalogue is now seeded and many features have shipped; nobody outside can use them until the public environment exists |
| Evergrove | [TASK-5](https://github.com/dungphanx/personal-workspace/issues/5) Choose the codebase to carry forward | The prototype keeps growing while the platform has its ADRs; the choice gets more expensive every week, and the always-on address (US-44) waits for it |
| Kim Quoc | [TASK-12](https://github.com/dungphanx/personal-workspace/issues/12) Protect main, [TASK-13](https://github.com/dungphanx/personal-workspace/issues/13) Search Console, [TASK-46](https://github.com/dungphanx/personal-workspace/issues/46) site-down alert | New service pages need indexing; the health check is merged and only the outside monitor is left after the next deploy |
| Hollies | Store builds for Android and iOS | Health habits, recovery mode, notifications and backup are done; the app identifier is set |

## Next

| Product | Item |
| --- | --- |
| PrintLab | [TASK-3](https://github.com/dungphanx/personal-workspace/issues/3) Release tags for the identity service and mobile; [TASK-42](https://github.com/dungphanx/personal-workspace/issues/42) monitoring and backups for the public environment; [US-41](https://github.com/dungphanx/personal-workspace/issues/41) email confirmation; [US-33](https://github.com/dungphanx/personal-workspace/issues/33) user-published parametric models; [US-35](https://github.com/dungphanx/personal-workspace/issues/35) print queue |
| Evergrove | [US-44](https://github.com/dungphanx/personal-workspace/issues/44) Stable, always-on address; [TASK-6](https://github.com/dungphanx/personal-workspace/issues/6) prototype under a source-control remote; [US-7](https://github.com/dungphanx/personal-workspace/issues/7) Google / verified-email sign-in |
| Kim Quoc | [MONITOR-45](https://github.com/dungphanx/personal-workspace/issues/45) First restore test of the database backups (2026-12-15) |
| Hoang Bao Kim | [US-47](https://github.com/dungphanx/personal-workspace/issues/47) Monthly view of how customers find the site and get in touch |

## Later

| Product | Item | Waiting for |
| --- | --- | --- |
| PrintLab | [US-4](https://github.com/dungphanx/personal-workspace/issues/4) MyMiniFactory catalogue | Public environment |
| PrintLab | [US-30](https://github.com/dungphanx/personal-workspace/issues/30) Direct printing to closed-firmware printers | Test printer assembled |
| PrintLab | [US-43](https://github.com/dungphanx/personal-workspace/issues/43) Mobile app in the app stores | Public environment |
| Model Crawler | MakerWorld files and MyMiniFactory access | PrintLab public environment (OAuth) |
| Evergrove | [US-8](https://github.com/dungphanx/personal-workspace/issues/8) Grave records and reservations on the platform, [TASK-9](https://github.com/dungphanx/personal-workspace/issues/9) web and mobile apps | Codebase decision |
| Hoang Bao Kim | [TASK-18](https://github.com/dungphanx/personal-workspace/issues/18) QR on cards | Owner decision |
| Hollies | Confirmed habit targets and study details | Owner decision |
