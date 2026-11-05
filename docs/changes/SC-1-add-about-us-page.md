# SC-1 — Add About Us page

## Summary
Add the Scribble About Us page

## What changed
- Confirmed the existing `AboutPage` presents an overview of Scribble and how to play.
- Confirmed `/about-us` is registered and the shared footer exposes an “About us” link.
- Added this SC-1 change note. The implementation and targeted tests were already present in the starting tree, so no application code needed changing.

## Decisions
- Reused the existing About Us implementation instead of duplicating an already-satisfied feature.
- Kept the page static and linked through the existing app shell, consistent with the current design.

## How each criterion is met
- **Add an about-us page:** `renders the about-us page with an explanation of Scribble` checks the page content; `serves the page at /about-us and exposes footer links` checks the route, content, and footer link.

## How to verify
1. Run `cd frontend && npm run dev` and navigate to `http://localhost:5173/about-us`, or use the “About us” footer link.
2. Run `cd frontend && npm test && npm run build`.

## Tests
- `cd frontend && npm test` — passed: 3 test files, 6 tests (includes both About Us tests).
- `cd frontend && npm run build` — passed: TypeScript project check and Vite production build.
- `cd backend && npm test` — passed: 2 test files, 4 tests.
- `cd backend && npm run build` — passed.
- Lint — not run; neither app defines a lint script (`npm run` confirmed available scripts).
- `git diff --check` — passed.

## Docs updated
- Added `docs/changes/SC-1-add-about-us-page.md`.
- The existing `README.md` already documents the `/about-us` page and quick verification steps; no further README change was necessary.

## Open questions
- None.
