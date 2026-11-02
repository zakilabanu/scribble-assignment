# EV-2 — Add a Terms and Conditions link

## Summary
Add a Terms and Conditions page and footer link

## What changed
- Updated the shared footer's Terms and conditions item into an internal link to `/terms-and-conditions`.
- Added a Terms and Conditions page with clearly identified dummy/sample content.
- Registered the page with the app routes and added regression tests for its content, route, and footer link.
- Updated the README's supported-page list and quick verification instructions.

## Decisions
- Followed the latest human clarification: create a local page with dummy content and anchor the footer item to it. This supersedes the earlier clarification to leave the item unlinked; that was the state of the existing attempt this change builds on.
- Used `/terms-and-conditions` as the local route and explicitly state that the sample text is not a finalized legal agreement or legal advice.

## How each criterion is met
- **Add a terms and conditions link:** `serves the page at /about-us and exposes footer links` in `frontend/src/pages/AboutPage.test.tsx` asserts that the footer contains an anchor to `/terms-and-conditions`.
- **Provide the requested linked page and dummy content:** `renders sample terms and conditions content` and `serves the terms page at its route` in `frontend/src/pages/TermsPage.test.tsx` verify the page content and `/terms-and-conditions` route.

## How to verify
1. Run `cd frontend && npm run dev` and open `http://localhost:5173`.
2. Select **Terms and conditions** in the footer and confirm it opens the sample terms page. The page can also be visited directly at `http://localhost:5173/terms-and-conditions`.
3. Run `cd frontend && npm test && npm run build`.

## Tests
- `cd frontend && npm test` — passed: 3 test files, 6 tests, including the footer anchor and terms page checks.
- `cd frontend && npm run build` — passed: TypeScript project build/typecheck and Vite production build.
- `cd backend && npm test` — passed: 2 test files, 4 tests.
- `cd backend && npm run build` — passed.
- Lint — not run; neither package defines a lint script.
- `git diff --check` — passed.

## Docs updated
- `README.md` — documents the new route/page and its sample content.
- `docs/changes/EV-2-add-a-terms-and-conditions-link.md` — updated the existing ticket change note to reflect the final implementation and human clarification.

## Open questions
- None for this ticket. The Terms page is explicitly dummy content; legal review and production terms content are outside this change.
