# EV-9 — Add link to Everest website

## Summary
Add Everest services prompt before footer link

## What changed
- Added the exact text “check everest services” immediately before the existing Everest website link in the shared footer.
- Preserved the link destination (`https://www.everest.engineering/`) and safe new-tab behavior.
- Updated the README verification steps and extended the footer regression test to check the prompt's position.

## Decisions
- Followed the human clarifications: use `https://www.everest.engineering/`, place the link in the footer, and add “check everest services” before it.
- Reused the shared footer and retained the existing `target="_blank"` and `rel="noopener noreferrer"` attributes.

## How each criterion is met
- **Provide a footer link to the Everest website:** `serves the page at /about-us and exposes footer links` in `frontend/src/pages/AboutPage.test.tsx` checks the exact external URL, link label, and safe new-tab attributes.
- **Place “check everest services” before the link:** the same test asserts that the link's immediately preceding sibling contains the exact requested text.

## How to verify
1. Run `cd frontend && npm run dev` and inspect the shared footer on any page.
2. Confirm “check everest services” appears immediately before “Everest website”; click the link and confirm it opens `https://www.everest.engineering/` in a new tab.
3. Run `cd frontend && npm test && npm run build`.

## Tests
- `cd frontend && npm test` — passed: 3 test files, 6 tests; includes verification of the text before the link and the link's URL/attributes.
- `cd frontend && npm run build` — passed: TypeScript build/typecheck and Vite production build.
- `cd backend && npm test` — passed: 2 test files, 4 tests (regression check).
- `cd backend && npm run build` — passed.
- Lint — not available; neither package defines a lint script.
- `git diff --check` — passed.
- An initial test/build invocation from the repository root could not run because the root has no `package.json`; rerunning both suites from their respective `frontend` and `backend` directories passed.

## Docs updated
- `README.md` — verification now calls out the requested text immediately before the footer link.
- `docs/changes/EV-9-add-link-to-everest-website.md` — updated this existing change note with the complete final implementation and verification.

## Open questions
- None.
