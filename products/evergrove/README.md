**English** · [Tiếng Việt](README.vi.md)

# Evergrove

Cemetery management for families, cemetery boards and the platform owner: find a grave on a map or in 3D, see free plots and reference prices, request a reservation, and manage the cemetery layout. Snapshot 2026-11-14.

## One product, two codebases

| Codebase | What it is | Status |
| --- | --- | --- |
| **Prototype** (Node + PostgreSQL, Kubernetes) | Working multi-cemetery platform, uses the [PrintLab](../printlab/README.md) identity service for sign-in | Feature-complete prototype, runs on a personal machine |
| **Platform** (Go + PostgreSQL + Redis + S3) | Intended production platform with OpenAPI contract and 100% test-coverage gate | Backend skeleton; web and mobile not started |

## Audiences and features (prototype)

- **Families:** find a grave on the map, 3D view of the cemetery, free plots and reference prices, request a single or double plot, memorial page (candles, tributes).
- **Cemetery boards:** build the layout (zone, row, number), set plot status and prices, approve reservation requests, import graves from CSV.
- **Platform owner:** add cemeteries, assign boards by verified email.

Reservations are requests that the board approves; there is no online payment.

## Platform status

- Health endpoints, plot-status state machine, migrations, 100% coverage enforced in CI.
- Full local stack: API, PostgreSQL, Redis, S3-compatible storage, health checks.
- Not started: web app, mobile app, grave records and the reservation flow, architecture decision records.

## Open decisions and items

1. **Which codebase carries the product forward** (prototype or platform), and what moves across.
2. Prototype: source control remote, stable domain, Google sign-in, email verification.
3. Platform: initialise web and mobile, build grave records and reservations, write the first ADRs.

Plan and prioritised backlog: [plan.md](plan.md).
