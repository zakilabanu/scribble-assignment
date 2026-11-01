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
- **Add about-us page:** `/about-us` renders `AboutPage`; the `AboutPage` test checks the page heading and informational content.

## How to verify
1. Run `cd frontend && npm run dev`.
2. Open `http://localhost:5173/about-us` or select “About us” from the app footer.
3. Run `cd frontend && npm test` and `cd frontend && npm run build`.

## Tests
- Added `AboutPage` test: verifies rendered About Scribble title, descriptive heading, and game explanation — **passed**.
- `cd frontend && npm test` — **passed** (2 files, 3 tests).
- `cd frontend && npm run build` — **passed** (includes TypeScript project build/typecheck and Vite production build).
- `cd backend && npm test` — **passed** (2 files, 4 tests).
- `cd backend && npm run build` — **passed**.
- `git diff --check` — **passed**.
- Lint was not run: neither frontend nor backend defines a lint script.

## Docs updated
- `README.md`: lists the About Us route.
- `docs/changes/EV-1-add-about-us-page.md`: this change note.

## Open questions
- None.
