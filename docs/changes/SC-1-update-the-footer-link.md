# SC-1 — Update the footer link

## Summary
Use a solid background throughout the app

## What changed
- Replaced the tiled drawing pattern with a solid light-gray page background and removed the unused SVG.
- Renamed the footer’s **About us** link to **About Scribble** while retaining its `/about-us` destination.
- Updated the README’s background description and verification steps, retaining the footer label documentation.
- Updated the background regression test; the existing footer-link check still asserts the updated label.

## Decisions
- The human asked us to use best judgment. I chose a solid light gray (#f3f4f6) across all pages instead of the earlier tiled drawing pattern: it provides a quieter backdrop for content and retains the existing color contrast without an image dependency.
- In the earlier footer-link attempt, the ticket did not specify which link to change or the desired replacement. Following the human's direction to use best judgment, I chose the **About us** link and renamed it **About Scribble**. This identifies the destination's subject more clearly and matches the About page's existing title/content, without inventing a new destination or changing page behavior.
- Built on the existing About and Terms footer links and their route coverage; this is a narrow label change only.

## How each criterion is met
- **Update the background:** `uses a solid light gray background across the full page` in `frontend/src/styles/app.test.ts` checks the shared body color, absence of a background image or repeat rule, matching root color, and viewport minimum heights. The app imports this stylesheet globally for all routes.
- **Earlier footer link change:** `serves the page at /about-us and exposes footer links` in `frontend/src/pages/AboutPage.test.tsx` verifies the About link retains `/about-us` and now displays `About Scribble`.

## How to verify
1. Run `cd frontend && npm test && npm run build`, then `npm run dev`.
2. At mobile and desktop widths, visit the Start, Create Room, Join Room, Lobby, Game, About and Terms pages. Confirm the solid light-gray background and readable content, including while scrolling a page taller than the viewport.
3. Confirm **About Scribble** still opens `/about-us`.

## Tests
- Updated `frontend/src/styles/app.test.ts` to check the solid background and viewport coverage.
- `cd frontend && npm test` — passed: 4 files, 7 tests (React Router future-flag warnings).
- `cd frontend && npm run build` and `npx tsc -b --noEmit` — passed.
- `cd backend && npm test` — passed: 2 files, 4 tests.
- `cd backend && npm run build` and `npx tsc -p tsconfig.json --noEmit` — passed.
- Lint — unavailable; neither package defines a lint script (`npm run lint --if-present` did not run a linter).
- An accidental root `npm test` failed because there is no root package.json; both package suites passed as above.
- Visual browser verification was not performed; no browser executable was available.

## Docs updated
- `README.md` — documented the background and verification steps, retaining the earlier footer link update.
- `docs/changes/SC-1-update-the-footer-link.md` — updated this existing ticket note.

## Open questions
- None. The background and earlier label choices follow the human's instruction to use best judgment.
