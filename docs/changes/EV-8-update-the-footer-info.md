# EV-8 — Update the footer info

## Summary
Add current-year Scribble copyright to footer

## What changed
- Added a current-year Scribble copyright notice to the shared footer while preserving the existing About us and Terms and conditions links.
- Arranged footer items with a flexible gap so they wrap neatly on narrow screens.
- Extended the footer regression test and documented the notice in the README.

## Decisions
- The ticket did not specify exact footer copy. Following the human clarification to use best judgment, I chose a standard copyright notice (`© {current year} Scribble`): it adds useful ownership/brand information, stays concise, and automatically remains current without requiring annual edits.
- Built on the existing shared footer and retained its established links rather than replacing or rearranging their destinations.

## How each criterion is met
- **Update the footer info:** the `serves the page at /about-us and exposes footer links` test in `frontend/src/pages/AboutPage.test.tsx` checks for the current-year copyright notice and confirms both existing footer links remain available.

## How to verify
1. Run `cd frontend && npm run dev` and open the app. Confirm the footer shows `© <current year> Scribble`, About us, and Terms and conditions.
2. Run `cd frontend && npm test && npm run build`.
3. Run `cd backend && npm test && npm run build` for regression checks.

## Tests
- Added a current-year copyright assertion to the existing footer route/link test in `frontend/src/pages/AboutPage.test.tsx`.
- `cd frontend && npm test` — passed: 3 test files, 6 tests.
- `cd frontend && npm run build` — passed: TypeScript check and Vite production build.
- `cd backend && npm test` — passed: 2 test files, 4 tests.
- `cd backend && npm run build` — passed: TypeScript build.
- Lint — not run; neither package defines a lint script.
- `git diff --check` — passed.

## Docs updated
- `README.md` — lists the new current-year footer copyright notice and includes it in quick verification.
- `docs/changes/EV-8-update-the-footer-info.md` — records the implementation, decision, and verification.

## Open questions
- None. The human clarification authorized a best-judgment choice; the selected copy is noted above.
