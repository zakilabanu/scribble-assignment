# EV-1 — Add About Us page

## Summary
Added a public About Us page for Scribble at `/about-us` and a persistent footer link to reach it.

## What changed
- Added `frontend/src/pages/AboutPage.tsx` with concise information about the game and how to play.
- Registered the `/about-us` route in `frontend/src/routes/index.tsx`.
- Added an “About us” footer link in `frontend/src/components/AppShell.tsx` and supporting styles in `frontend/src/styles/app.css`.
- Added a server-rendered content test in `frontend/src/pages/AboutPage.test.tsx`.
- Documented the page in `README.md`.

## Decisions
- Kept this as a static informational page: it requires no API requests or changes to game state.
- Used the existing `PageHeader` component and application styling conventions.
- Linked from the shared footer so the page is discoverable across the app.

## How each criterion is met
- **Add about-us page:** `/about-us` renders `AboutPage`, and the shared footer links to it. `AboutPage` tests the page heading and game explanation; `serves the page at /about-us and exposes a footer link to it` verifies both route rendering and navigation link.

## How to verify
1. Run `cd frontend && npm run dev`.
2. Open `http://localhost:5173/about-us` or select “About us” from the app footer.
3. Run `cd frontend && npm test` and `cd frontend && npm run build`.

## Tests
- `cd frontend && npm test` — **passed** (2 files, 4 tests), including the About Us content test and `serves the page at /about-us and exposes a footer link to it` route/navigation test.
- `cd frontend && npm run build` — **passed** (TypeScript project build/typecheck and Vite production build).
- `npm test` from the repository root — not applicable because there is no root `package.json`; reran tests successfully from each package directory.
- `cd backend && npm test` — **passed** (2 files, 4 tests; unrelated regression check).
- `cd backend && npm run build` — **passed**.
- Lint was checked via `npm run` in each package; neither package defines a lint script, so lint cannot be run.
- `git diff --check` — **passed**.

## Docs updated
- `README.md`: documents the About Us route and adds it to the quick verification flow.
- `docs/changes/EV-1-add-about-us-page.md`: this change note.

## Open questions
- None.
