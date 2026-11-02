# EV-3 — Add a Reviews footer link

## Summary
Added a Reviews link to the shared footer

## What changed
- Added a “Reviews” link alongside “About us” in the shared app footer. It points to the `#reviews` anchor on the About Us route.
- Expanded the existing footer-link test to verify the new label and destination.
- Updated the README implementation overview and quick verification instructions.

## Decisions
- Followed the human clarification to add only a footer link; review copy, ratings, and submission behavior were not specified and were not invented.
- Used `#reviews` as the link destination pending further product clarification.
- The ticket change-note path did not exist in the working tree, so this note was created with the required sections.

## How each criterion is met
- **Add a review section:** the shared footer includes a “Reviews” link. `serves the page and exposes About us and Reviews footer links` in `frontend/src/pages/AboutPage.test.tsx` checks that the link renders and points to the review anchor.

## How to verify
1. Run `cd frontend && npm run dev` and inspect the footer; it should show “About us” and “Reviews”.
2. Run the frontend tests and build using the commands below.

## Tests
- `cd frontend && npm test` — **passed**: 2 test files, 4 tests. The footer-link test verifies the Reviews label and anchor destination.
- `cd frontend && npm run build` — **passed**: TypeScript project check and Vite production build.
- `cd backend && npm test` — **passed**: 2 test files, 4 tests (regression check).
- `cd backend && npm run build` — **passed**: TypeScript build.
- `npm run` in `frontend` and `backend` — confirmed neither package defines a lint script; lint could not be run.
- `git diff --check` — **passed**.

## Docs updated
- `README.md`: documents the Reviews footer link and includes it in quick verification.
- `docs/changes/EV-3-add-a-review-section.md`: added this ticket change note.

## Open questions
- The human said further details would follow. Confirm the intended review content/behavior and final link destination before building a full reviews section; the current link points to an anchor that does not yet have content.
