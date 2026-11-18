# SC-2 — Update the background

## Summary
Refresh the app background with warm paper tones

## What changed
- Changed the app-wide background and solid fallback to warm paper, and tinted the existing locally bundled drawing pattern blue.
- Retained the tiled SVG, shared page layout and opaque content surfaces.

## Decisions
- Following the human's instruction to use best judgment, I chose a subtle paper-and-ink look for all pages: it fits a drawing game, complements the existing artwork and avoids a remote asset. The same solid color provides a fallback if the image cannot load.
- Built on the earlier background work recorded in `docs/changes/SC-1-update-the-footer-link.md`. The requested SC-2 note was not present in this checkout, so this note was created without replacing the earlier one.

## How each criterion is met
- **Updated background across the app:** `tiles the local drawing image across the page with a warm fallback color` in `frontend/src/styles/app.test.ts` checks the body-wide image, repeat, height and new palette. The body surrounds the shared app shell on every route.
- **Fallback and readable surfaces:** the same test checks the root and body fallback colors and the opaque white panel, card and game-page surface declarations. Actual visual appearance should also be checked in a browser.

## How to verify
1. Run `cd frontend && npm run dev` and visit the start page and other routes at narrow and wide widths. Check the warm background, subtle blue pattern and readable content.
2. Block the SVG request in the browser's network tools on the dev server and reload; the warm solid background should remain.

## Tests
- Extended `frontend/src/styles/app.test.ts` to check the new fallback and SVG tint, plus the opaque content surfaces.
- Frontend: `npm test` passed (4 files, 7 tests); `npm run build` and `npx tsc --noEmit -p tsconfig.json` passed. Tests emitted React Router v7 future-flag warnings.
- Backend: `npm test` passed (2 files, 4 tests); `npm run build` and `npx tsc --noEmit -p tsconfig.json` passed.
- `npm run lint` could not run in either package: neither defines a lint script.
- An initial root `npm test` failed because the repository has no root package.json; the package suites were run separately above.
- Browser visual and blocked-image checks were not performed.

## Docs updated
- `README.md`: background description and quick verification.
- This change note; no API or agent instruction changes were needed.

## Open questions
- None; the scope and design follow the human's direction to use best judgment.
