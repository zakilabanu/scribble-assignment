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
- **Add about-us page:** `/about-us` renders `AboutPage`, which explains Scribble and how to play. The `renders the about-us page with an explanation of Scribble` test checks the content. The `serves the page at /about-us and exposes a footer link to it` test checks that the route renders the page and that the shared footer exposes the route link.

## How to verify
1. Run `cd frontend && npm run dev`.
2. Open `http://localhost:5173/about-us` or select “About us” from the app footer.
3. Run `cd frontend && npm test` and `cd frontend && npm run build`.

## Tests
- `cd frontend && npm test` — **passed** (2 files, 4 tests). The About Us tests `renders the about-us page with an explanation of Scribble` and `serves the page at /about-us and exposes a footer link to it` both passed; the existing API tests also passed.
- `cd frontend && npm run build` — **passed**; runs `tsc -b` (TypeScript typecheck) and the Vite production build.
- `cd backend && npm test` — **passed** (2 files, 4 tests; regression check).
- `cd backend && npm run build` — **passed**.
- Lint — checked available scripts using `npm run` in both packages; neither package defines a lint script, so no lint command is available.
- `git diff --check` — **passed**.
- Root-level `npm test`/`npm run build` — **not applicable**: these commands were attempted but failed because the repository has no root `package.json`; the package-level commands above were used instead.

## Docs updated
- `README.md`: documents the About Us route and adds it to the quick verification flow.
- `docs/changes/EV-1-add-about-us-page.md`: this change note.

## Open questions
- None.
