# EV-10 — Add link to Everest gallery

## Summary
Add Everest gallery footer link

## What changed
- Added an “Everest gallery” external link to the shared app footer.
- Opened the gallery in a new tab with `rel="noopener noreferrer"` for tab-opener isolation and referrer privacy.
- Added/updated the regression assertion in `frontend/src/pages/AboutPage.test.tsx` to cover the link label, destination, new-tab target, and both security-related `rel` tokens.
- Updated `README.md` to document the footer link and its destination.

## Decisions
- The requested destination was not specified. Following the human clarification to use best judgment, chose `https://everest.gallery`: the concise, matching domain is the most direct and intuitive destination for an Everest gallery.
- Used a regular external anchor rather than a React Router `Link`, since this leaves the app for an external site.
- Used the shared footer so the link is available throughout the app.

## How each criterion is met
- **Add link to Everest gallery:** the shared footer renders the labeled link to `https://everest.gallery`. The `serves the page at /about-us and exposes footer links` test in `frontend/src/pages/AboutPage.test.tsx` verifies the link label, destination, new-tab target, and `noopener noreferrer` attributes.

## How to verify
1. Run `cd frontend && npm run dev`, open the app, and click “Everest gallery” in the footer; confirm it opens `https://everest.gallery` in a new tab.
2. Run `cd frontend && npm test` and `cd frontend && npm run build`.

## Tests
- `cd frontend && npm test` — **passed**: 3 test files, 6 tests, including the Everest gallery footer-link assertion. React Router emitted existing future-flag warnings.
- `cd frontend && npm run build` — **passed**: TypeScript project build/typecheck and Vite production build.
- `cd backend && npm test` — **passed**: 2 test files, 4 tests (regression check).
- `cd backend && npm run build` — **passed**.
- `cd frontend && npm run lint` and `cd backend && npm run lint` — **not available**: both commands were attempted, but neither package defines a `lint` script.
- `git diff --check` — **passed**.

## Docs updated
- `README.md` — documents the external footer link and its destination in the implementation overview and quick verification.
- `docs/changes/EV-10-add-link-to-everest-gallery.md` — records the implementation and verification.

## Open questions
- None. The URL choice follows the human instruction to use best judgment.
