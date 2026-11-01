# EV-1 — Add About Us page

## Summary
Added a public About Us page for Scribble at `/about-us`, discoverable through a shared footer link.

## What changed
- Added `frontend/src/pages/AboutPage.tsx` with information about Scribble and how to play.
- Registered `/about-us` in `frontend/src/routes/index.tsx` and added the “About us” link to `frontend/src/components/AppShell.tsx`.
- Added page styling in `frontend/src/styles/app.css` and tests in `frontend/src/pages/AboutPage.test.tsx`.
- Updated `README.md` to document the page and include it in quick verification.

## Decisions
- Kept the page static; it does not need API requests or changes to game state.
- Reused the existing `PageHeader`, app shell, and stylesheet conventions rather than introducing a new layout or dependency.
- Used the shared footer for discovery and made the route directly addressable.

## How each criterion is met
- **Add about-us page:** `/about-us` renders the explanatory page. The `renders the about-us page with an explanation of Scribble` test checks the page content; `serves the page at /about-us and exposes a footer link to it` checks the route, page content, and footer link label and destination.

## How to verify
1. Run `cd frontend && npm run dev` and visit `http://localhost:5173/about-us`, or open the “About us” link in the footer.
2. Run `cd frontend && npm test` and `cd frontend && npm run build`.

## Tests
- `cd frontend && npm test` — **passed**: 2 test files, 4 tests, including both About Us tests.
- `cd frontend && npm run build` — **passed**: TypeScript project build/typecheck and Vite production build.
- `cd backend && npm test` — **passed**: 2 test files, 4 tests (regression check).
- `cd backend && npm run build` — **passed**.
- Lint — no lint script is defined in either package (`npm run` confirms available scripts); lint could not be run.
- `git diff --check` — **passed**.
- Root-level npm test/build commands are not available because the repository has no root `package.json`; package-level commands were run instead.

## Docs updated
- `README.md`: documents the About Us route and includes it in quick verification.
- `docs/changes/EV-1-add-about-us-page.md`: updated ticket change note.

## Open questions
- None.
