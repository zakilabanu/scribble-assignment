# SC-1 — Update the footer link

## Summary
Clarify the footer’s About link label

## What changed
- Renamed the footer’s **About us** link to **About Scribble** while retaining its `/about-us` destination.
- Updated the README’s feature description and verification steps to match the footer label.
- Extended the existing footer-link regression check to assert the updated label.

## Decisions
- The ticket did not specify which link to change or the desired replacement. Following the human's direction to use best judgment, I chose the **About us** link and renamed it **About Scribble**. This identifies the destination's subject more clearly and matches the About page's existing title/content, without inventing a new destination or changing page behavior.
- Built on the existing About and Terms footer links and their route coverage; this is a narrow label change only.

## How each criterion is met
- **Update the footer link:** `serves the page at /about-us and exposes footer links` in `frontend/src/pages/AboutPage.test.tsx` verifies the About link retains `/about-us` and now displays `About Scribble`.

## How to verify
1. Run `cd frontend && npm test && npm run build`.
2. Open the app and confirm the footer displays **About Scribble**; select it and confirm it still opens `/about-us`.

## Tests
- `cd frontend && npm test` — passed: 3 files, 6 tests, including the updated footer link assertion.
- `cd frontend && npm run build` — passed: TypeScript build and Vite production build.
- `cd backend && npm test` — passed: 2 files, 4 tests.
- `cd backend && npm run build` — passed.
- Lint — not run; neither package defines a lint script.
- `git diff --check` — passed.
- Initial test invocations were blocked because dependencies were not installed. After `npm ci` in both packages, all tests and builds passed.

## Docs updated
- `README.md` — updated footer link labeling in the feature list and quick verification step.
- `docs/changes/SC-1-update-the-footer-link.md` — added this ticket's implementation note.

## Open questions
- None. The label/destination choice is documented above based on the human's instruction to use best judgment.
