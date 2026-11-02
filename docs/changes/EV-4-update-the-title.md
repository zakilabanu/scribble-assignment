# EV-4 — Update the home page title

## Summary
Rename the home page heading

## What changed
- Changed the home page heading in `frontend/src/pages/StartPage.tsx` from “Scribble Game” to “Scribble: Draw & Guess”.
- Added a home-page regression test in `frontend/src/pages/StartPage.test.tsx` that checks the rendered `h1`.

## Decisions
- Followed the clarification that the target is the home page title and chose **“Scribble: Draw & Guess”** as the replacement. It retains the Scribble brand while describing the core drawing-and-guessing activity more specifically than the generic “Scribble Game”.
- Kept this change limited to the home page heading; the browser document title and other page headings were not identified as targets.

## How each criterion is met
- **Update the home page title:** `shows the updated title on the home page` in `frontend/src/pages/StartPage.test.tsx` visits `/` and asserts that its rendered `h1` is “Scribble: Draw & Guess”.

## How to verify
1. Run `cd frontend && npm run dev` and visit `http://localhost:5173`; confirm the home page heading reads “Scribble: Draw & Guess”.
2. Run `cd frontend && npm test && npm run build`.

## Tests
- Added `shows the updated title on the home page` in `frontend/src/pages/StartPage.test.tsx`.
- `cd frontend && npm test` — passed: 4 test files, 7 tests.
- `cd frontend && npm run build` — passed: TypeScript project build/typecheck and Vite production build.
- `cd backend && npm test` — passed: 2 test files, 4 tests (regression check).
- `cd backend && npm run build` — passed.
- Lint — not run; neither package defines a lint script.
- `git diff --check` — passed.

## Docs updated
- Added this ticket change note. No README or project instruction changes were needed for a home page copy update.

## Open questions
- None.
