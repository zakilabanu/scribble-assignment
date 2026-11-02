# EV-3 — Add a review page

## Summary
Added a Reviews page linked from the footer

## What changed
- Added a Reviews page at `/reviews` with a clear empty state while there are no player reviews to display.
- Updated the shared footer’s Reviews link to navigate to `/reviews` instead of a nonexistent page anchor.
- Added route and footer-link coverage in `frontend/src/pages/AboutPage.test.tsx`.
- Updated the README implementation overview and quick verification instructions.

## Decisions
- Followed the human clarification to add a new review page and a footer link.
- Review copy, attributions, ratings, and submission behavior remain unspecified, so the page does not invent testimonials or provide a submission form. It shows an empty state until approved reviews are available.
- Built on the earlier ticket attempt: retained the shared footer link and existing README updates, correcting the Reviews destination from `#reviews` to the new `/reviews` route.

## How each criterion is met
- **Add a review section:** the new `/reviews` page displays the Reviews heading and review empty state. `serves the Reviews page at /reviews` in `frontend/src/pages/AboutPage.test.tsx` verifies the route content.
- The Reviews footer link navigates to `/reviews`. `exposes About us and Reviews footer links` in `frontend/src/pages/AboutPage.test.tsx` checks the link target.

## How to verify
1. Run `cd frontend && npm run dev`.
2. Select “Reviews” in the footer or visit `http://localhost:5173/reviews`; confirm the Reviews page and empty state render.
3. Run `cd frontend && npm test` and `cd frontend && npm run build`.

## Tests
- `cd frontend && npm test` — **passed**: 2 test files, 5 tests, including Reviews route and footer link checks.
- `cd frontend && npm run build` — **passed**: TypeScript project check and Vite production build.
- `cd backend && npm test` — **passed**: 2 test files, 4 tests (regression check).
- `cd backend && npm run build` — **passed**: TypeScript build.
- `npm run` in both app directories — confirmed neither package defines a lint script; lint could not be run.
- `git diff --check` — **passed**.

## Docs updated
- `README.md`: documents the Reviews route and footer link.
- `docs/changes/EV-3-add-a-review-section.md`: updated the earlier change note with the completed route behavior and validation results.

## Open questions
- What approved player reviews, names/attributions, and any rating or submission behavior should be added when review content is ready?
