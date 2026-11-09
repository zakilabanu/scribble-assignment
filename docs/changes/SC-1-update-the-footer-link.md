# SC-1 — Update the footer link

## Summary
Set a descriptive browser-tab title

## What changed
- Changed the browser-tab title in `frontend/index.html` from `Scribble` to `Scribble — Draw and Guess`.
- Added a locally bundled SVG drawing pattern to the app-wide page background, with a solid-color fallback.
- Renamed the footer’s **About us** link to **About Scribble** while retaining its `/about-us` destination.
- Updated the README’s feature description and verification steps for the browser title and existing footer label.
- Extended the existing footer-link regression check to assert the updated label.

## Decisions
- The title target and replacement were unspecified. Following the human's instruction to use best judgment, I chose the browser-tab/document title and made it `Scribble — Draw and Guess`, retaining the existing brand while clarifying what the game is.
- The human asked us to use best judgment for the earlier background change. I chose a subtle, original drawing-themed SVG tiled across the shared page background: it suits the game, works at different page sizes without cropping, and needs no external image service. Opaque content panels and the existing light fallback keep text readable.
- In the earlier footer-link attempt, the ticket did not specify which link to change or the desired replacement. Following the human's direction to use best judgment, I chose the **About us** link and renamed it **About Scribble**. This identifies the destination's subject more clearly and matches the About page's existing title/content, without inventing a new destination or changing page behavior.
- Built on the existing About and Terms footer links and their route coverage; this is a narrow label change only.

## How each criterion is met
- **Change the title:** `uses a descriptive title for the browser tab` in `frontend/src/index.test.ts` verifies the document title is `Scribble — Draw and Guess`.
- **Earlier background change:** `tiles the local drawing image across the page with a fallback color` in `frontend/src/styles/app.test.ts` checks the body rule, repetition, fallback color, and valid SVG asset. The shared body covers all routes.
- **Earlier footer link change:** `serves the page at /about-us and exposes footer links` in `frontend/src/pages/AboutPage.test.tsx` verifies the About link retains `/about-us` and now displays `About Scribble`.

## How to verify
1. Run `cd frontend && npm test && npm run build`, then `npm run dev`.
2. Confirm the browser tab says `Scribble — Draw and Guess`. Open the app at narrow and wide viewport sizes, and visit another route. Confirm the subtle pattern repeats behind the readable content and footer.
3. Confirm **About Scribble** still opens `/about-us`. To check the fallback, block the SVG in the browser's network tools when running the dev server and reload; the light background should remain.

## Tests
- Added `frontend/src/index.test.ts` to assert the chosen browser-tab title. The earlier `frontend/src/styles/app.test.ts` checks the background asset, CSS and fallback.
- `cd frontend && npm test` — passed: 5 files, 8 tests.
- `cd frontend && npm run build` — passed (TypeScript and Vite).
- `cd backend && npm test` — passed: 2 files, 4 tests.
- `cd backend && npm run build` — passed (TypeScript).
- Lint — unavailable; neither package defines a lint script. TypeScript checks passed as part of both builds.
- Visual browser verification has not been performed.

## Docs updated
- `README.md` — documented the browser title, background and verification steps, retaining the earlier footer link update.
- `docs/changes/SC-1-update-the-footer-link.md` — updated this existing ticket note.

## Open questions
- None. The browser-title, image and earlier footer-label choices follow the human's instruction to use best judgment.
