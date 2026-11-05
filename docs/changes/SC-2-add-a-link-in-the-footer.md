# SC-2 — Add a link in the footer

## Summary
Add a Privacy Policy link to the footer

## What changed
- Added a **Privacy policy** link to the shared footer, targeting `/privacy-policy`.
- Added and registered a sample Privacy Policy page, clearly marked as placeholder content.
- Added tests for the footer link, page content, and route.
- Updated the README's supported-page list and quick verification steps.

## Decisions
- Chose **Privacy policy** at `/privacy-policy` as the new link because it complements the existing About us and Terms and conditions links and provides a useful third destination without relying on an invented external service or contact address.
- As there was no existing `docs/changes/SC-2-add-a-link-in-the-footer.md` in the branch, created this required ticket change note with the implementation status.
- Clearly labeled the privacy content as sample placeholder text rather than implying that it is a reviewed, production policy.

## How each criterion is met
- **Provide a new footer link:** `serves the page at /about-us and exposes footer links` in `frontend/src/pages/AboutPage.test.tsx` asserts the footer has a “Privacy policy” anchor to `/privacy-policy`.
- **Make the destination usable:** `serves the privacy policy at its route` in `frontend/src/pages/PrivacyPage.test.tsx` renders the policy at `/privacy-policy`.
- **Present the privacy page content as a sample:** `renders sample privacy policy content` in `frontend/src/pages/PrivacyPage.test.tsx` checks the heading, content section, and dummy-content notice.

## How to verify
1. Run `cd frontend && npm run dev` and visit `http://localhost:5173`.
2. Select **Privacy policy** in the footer; confirm it opens the sample page. You can also visit `http://localhost:5173/privacy-policy` directly.
3. Run `cd frontend && npm test && npm run build`.

## Tests
- Added `frontend/src/pages/PrivacyPage.test.tsx` for sample page content and its route.
- Updated `frontend/src/pages/AboutPage.test.tsx` to assert the footer link label and destination.
- `cd frontend && npm test` — passed: 4 test files, 8 tests.
- `cd frontend && npm run build` — passed: TypeScript project check and Vite production build.
- `cd backend && npm test` — passed: 2 test files, 4 tests.
- `cd backend && npm run build` — passed.
- Lint — not run; neither frontend nor backend defines a lint script.
- `git diff --check` — passed.

## Docs updated
- `README.md` — documents the privacy route and how to verify it.
- `docs/changes/SC-2-add-a-link-in-the-footer.md` — records the change and decision.

## Open questions
- None. The page explicitly identifies its privacy text as placeholder content; production privacy terms require review outside this ticket.
