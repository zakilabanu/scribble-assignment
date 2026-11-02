# EV-2 — Add a Terms and Conditions link

## Summary
Added a Terms and Conditions footer item without a destination.

## What changed
- Added “Terms and conditions” to the shared app footer.
- Updated the footer regression test to confirm the text is displayed but is not an anchor.
- Updated `README.md` to document the footer item and its current behavior.

## Decisions
- Followed the human clarification: show the Terms and Conditions item, but do not anchor it yet.
- Did not create a Terms and Conditions page or invent a destination/content.

## How each criterion is met
- **Add a terms and conditions link:** the shared footer displays “Terms and conditions.” The `serves the page at /about-us and exposes a footer link to it` test verifies the item is present and not inside an anchor, as requested.

## How to verify
1. Run `cd frontend && npm run dev` and inspect the shared footer; it should display “Terms and conditions” next to the About us link, without acting as a link.
2. Run `cd frontend && npm test` and `cd frontend && npm run build`.

## Tests
- `cd frontend && npm test` — **passed**: 2 test files, 4 tests; includes the footer assertion in `src/pages/AboutPage.test.tsx`.
- `cd frontend && npm run build` — **passed**: TypeScript build/typecheck and Vite production build.
- `cd backend && npm test` — **passed**: 2 test files, 4 tests (regression check).
- `cd backend && npm run build` — **passed**.
- Lint — no lint script is defined in either package, so lint could not be run.
- `git diff --check` — **passed**.

## Docs updated
- `README.md`: documents the new footer text and notes that it has no destination yet.
- `docs/changes/EV-2-add-a-terms-and-conditions-link.md`: ticket change note.

## Open questions
- None; the destination is intentionally omitted per the human clarification.
