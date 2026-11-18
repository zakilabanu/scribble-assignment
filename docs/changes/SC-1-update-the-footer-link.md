# SC-1 — Update the footer link

## Summary
Add a Home link to the footer

## What changed
- Added a **Home** link to `/` in the shared footer, with spacing and wrapping for the footer links.
- Added navigation coverage and updated the README.
- Added a locally bundled SVG drawing pattern to the app-wide page background, with a solid-color fallback.
- Renamed the footer’s **About us** link to **About Scribble** while retaining its `/about-us` destination.
- Updated the README’s feature description and verification steps to match the footer label.
- Extended the existing footer-link regression check to assert the updated label.

## Decisions
- For this request, the human asked us to use best judgment. I chose **Home** linking to the existing start page (`/`) because it gives users a clear way back from any screen without inventing a new page or external destination.
- For the earlier background work, the human asked us to use best judgment. I chose a subtle, original drawing-themed SVG tiled across the shared page background: it suits the game, works at different page sizes without cropping, and needs no external image service. Opaque content panels and the existing light fallback keep text readable.
- In the earlier footer-link attempt, the ticket did not specify which link to change or the desired replacement. Following the human's direction to use best judgment, I chose the **About us** link and renamed it **About Scribble**. This identifies the destination's subject more clearly and matches the About page's existing title/content, without inventing a new destination or changing page behavior.
- The earlier label change built on the existing About and Terms footer links and their route coverage.

## How each criterion is met
- **Add a footer link:** `offers a Home link that navigates to the start page from %s` in `frontend/src/components/AppShell.test.tsx` checks its label, URL and navigation from About, Terms and Create Room; it also checks the existing links remain present. `spaces and wraps footer links` in `frontend/src/styles/app.test.ts` checks the layout rules.
- **Add a background image:** `tiles the local drawing image across the page with a fallback color` in `frontend/src/styles/app.test.ts` checks the body rule, repetition, fallback color, and valid SVG asset. The shared body covers all routes.
- **Earlier footer link change:** `serves the page at /about-us and exposes footer links` in `frontend/src/pages/AboutPage.test.tsx` verifies the About link retains `/about-us` and now displays `About Scribble`.

## How to verify
1. Run `cd frontend && npm test && npm run build`, then `npm run dev`.
2. Open About Scribble, Terms and conditions, or Create Room and click **Home** in the footer; confirm the start page opens and the other footer links remain available.
3. Open the app at narrow and wide viewport sizes and visit another route. Confirm the subtle pattern repeats behind readable content. To check the fallback, block the SVG in the browser's network tools and reload; the light background should remain.

## Tests
- Added `frontend/src/components/AppShell.test.tsx`: Home link and navigation from three routes, with existing links preserved.
- Current frontend `npm test` — passed: 5 files, 11 tests. An earlier run passed 10 tests; the first run failed because the Create Room test lacked `RoomStoreProvider`, and a later run failed due to CSSOM property access in the new layout test. Both were fixed and rerun. React Router emitted future-flag warnings.
- Current backend `npm test` — passed: 2 files, 4 tests.
- Current frontend and backend `npm run build` and `npx tsc --noEmit` (backend uses `-p tsconfig.json`) — passed.
- Lint is not configured in either package; `npm run lint --if-present` performed no checks.
- Root `npm test` was attempted twice and failed because there is no root package.json; the package suites above were run instead.
- Earlier work: added `frontend/src/styles/app.test.ts` to check the image, CSS and fallback; enabled CSS processing in Vitest.
- `cd frontend && npm test` — passed: 4 files, 7 tests. Earlier runs failed while configuring CSS loading in the test; corrected and reran.
- `cd frontend && npm run build` — passed (TypeScript and Vite). An intermediate build failed on missing Node types in the test; removed the Node dependency and reran.
- `cd backend && npm test` — passed: 2 files, 4 tests.
- `cd backend && npm run build` — passed (TypeScript).
- Lint — unavailable; neither package defines a lint script.
- `npm ci` succeeded in both packages; an accidental root invocation failed because there is no root lockfile. npm reported existing dependency audit vulnerabilities (14 frontend, 12 backend).
- Visual browser verification has not been performed.

## Docs updated
- `README.md` — documented the Home link and verification steps, retaining the earlier background and footer updates.
- `docs/changes/SC-1-update-the-footer-link.md` — updated this existing ticket note.

## Open questions
- None. The Home link, image and earlier label choices follow the human's instruction to use best judgment.
