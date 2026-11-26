**English** · [Tiếng Việt](README.vi.md)

# Hollies

A personal self-improvement app: see where your time goes, keep a daily top 3, hold reading, exercise and study habits, and get back on track when a day slips. Snapshot 2026-11-26.

- **Stack:** one Flutter codebase for Android, iOS and the web; data stays on the device (no account, no sync yet).
- **Status:** MVP built; the web app is published and can be installed on a phone's home screen. Native apps have their identifier and real notifications; store builds not started.

## Features

| Area | Features |
| --- | --- |
| Time log | One-tap timer for Work, Reading, Exercise or University; today's log and total |
| Top 3 | Up to three things for today with impact and due date; everything else waits in Later; start a task's own timer and see what is next |
| Habits | Daily reading, exercise and study targets with a week strip and streaks; log a habit for an earlier day |
| Counters | Count good and bad habits with one tap; private counters behind a PIN lock; counters can count toward the on-track score |
| Insights | Day and week view: time by category, time per day, habits, streaks, on-track score, log export as CSV; what is improving vs the last 4 weeks; weight log with the weekly exercise line |
| Staying on track | Daily on-track score, evening check-in, identity lines and plan-your-day card in the morning, weekly review with one experiment, nudges in the app and as phone notifications on Android and iOS (at most 3 a day, never in quiet hours), a lighter recovery mode after two off-track days |
| Data | Back up to a file and restore on any device |
| General | English and Vietnamese, light and dark theme, phone and wide-screen layouts |

## Delivered

Scaffold and local storage, time log, priorities, habits, insights, evening check-in and on-track score, morning section, weekly review, nudges, README with screenshots and an EN/VI user guide, web app named Hollies with its own icon, a round of UX fixes (timer first on Today, edit or delete time entries, edit the running timer, clearer check-in, iPhone status bar, active-tab highlight), counters with a PIN lock, tests in a real browser in CI (2026-11-15 to 2026-11-17). Reliability fixes (multi-step undo, re-check the day on resume, lighter time-log refresh), real app identifier, counters in the score, recovery mode, weight log, what is improving, phone notifications (2026-11-24). Backup and restore (2026-11-26).

## Open items

- Store builds for Android and iOS.
- Owner to confirm habit targets and study details.

Plan: [plan.md](plan.md).
