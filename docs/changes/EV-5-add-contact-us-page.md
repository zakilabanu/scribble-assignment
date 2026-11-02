# EV-5 — Add a Contact Us page

## Summary
Add a Contact Us page with clear support guidance

## What changed
- Added a Contact Us page at `/contact-us` with guidance for contacting the course or project organizer and details useful when reporting an issue.
- Added a Contact us link to the shared app footer.
- Added page and route/footer regression tests.
- Updated the README's supported-page list and quick verification steps.

## Decisions
- Following the human clarification to use best judgment, the page transparently explains that this demo has no dedicated support inbox or form and directs users to the organizer's existing communication channel. This avoids inventing a support address or presenting an unconnected form as functional.
- The contact page includes brief guidance about what details to provide, while cautioning users not to share sensitive information.

## How each criterion is met
- **Add contact-us page:** `renders contact guidance without inventing a support destination` in `frontend/src/pages/ContactPage.test.tsx` verifies meaningful contact content and honest channel disclosure.
- **Make the page accessible through the app:** `serves the page at /contact-us and exposes its footer link` in `frontend/src/pages/ContactPage.test.tsx` verifies the route and footer navigation.

## How to verify
1. Run `cd frontend && npm run dev` and open `http://localhost:5173/contact-us`, or choose **Contact us** from the app footer.
2. Confirm the page gives organizer contact guidance and does not imply an email address or form is available.
3. Run `cd frontend && npm test && npm run build`.

## Tests
- `cd frontend && npm test` — passed: 4 test files, 8 tests, including both new ContactPage tests.
- `cd frontend && npm run build` — passed: TypeScript project build/typecheck and Vite production build.
- `cd backend && npm test` — passed: 2 test files, 4 tests.
- `cd backend && npm run build` — passed.
- Lint — unavailable; neither package defines a lint script (`npm run` checked in frontend).
- `git diff --check` — passed.

## Docs updated
- `README.md` — documents the new contact route, footer link, and verification step.
- `docs/changes/EV-5-add-contact-us-page.md` — records the change, decision, verification, and test results.

## Open questions
- None blocking. The project does not supply a dedicated support destination; the page clearly directs users to the communication channel provided by their course or project organizer.
