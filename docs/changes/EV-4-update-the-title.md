# EV-4 — Update the home page title

## Summary
Set the home page title to Hello world

## What changed
- Updated the home page heading in `frontend/src/pages/StartPage.tsx` from “Scribble: Draw & Guess” to “Hello world”.
- Updated the home-page regression test in `frontend/src/pages/StartPage.test.tsx` to assert the new heading.

## Decisions
- The human clarified that the target is the home page heading, then explicitly requested **“Hello world”**. This exact wording supersedes the earlier best-judgment option (“Scribble: Draw & Guess”).
- Kept the change limited to the home page heading; the browser document title and other page headings were not identified as targets.

## How each criterion is met
- **Update the home page title to “Hello world”:** `shows the updated title on the home page` in `frontend/src/pages/StartPage.test.tsx` renders `/` and asserts that the `h1` text is “Hello world”.

## How to verify
1. Run `cd frontend && npm run dev` and visit `http://localhost:5173`; confirm the home page heading reads “Hello world”.
2. Run `cd frontend && npm test && npm run build`.

## Tests
- `cd frontend && npm test` — passed: 4 test files, 7 tests.
- `cd frontend && npm run build` — passed: TypeScript project build/typecheck and Vite production build.
- `cd backend && npm test` — passed: 2 test files, 4 tests (regression check).
- `cd backend && npm run build` — passed.
- Lint — not run; neither package defines a lint script.
- `git diff --check` — passed.

## Docs updated
- Updated this ticket change note. No README or project instruction changes were needed for a home page copy update.

## Open questions
- None.
