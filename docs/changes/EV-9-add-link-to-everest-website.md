# EV-9 — Add link to Everest website

## Summary
Add Everest website link to footer

## What changed
- Added an external “Everest website” link to the shared app footer, pointing to `https://www.everest.engineering/`.
- Configured it to open in a new tab with `noopener noreferrer`.
- Expanded the existing footer regression test and documented the link in the README.

## Decisions
- Followed the human clarifications for both destination (`https://www.everest.engineering/`) and placement (the shared footer).
- Opened the external site in a new tab and applied `noopener noreferrer` for safe tab isolation.
- Reused the existing shared footer rather than adding the link to an individual page.

## How each criterion is met
- **Link to Everest website in the footer:** `serves the page at /about-us and exposes footer links` in `frontend/src/pages/AboutPage.test.tsx` checks the exact external URL, link label, new-tab target, and `rel` attribute.

## How to verify
1. Run `cd frontend && npm run dev` and inspect the footer on any page.
2. Click **Everest website** and confirm it opens `https://www.everest.engineering/` in a new tab.
3. Run `cd frontend && npm test && npm run build`.

## Tests
- `cd frontend && npm test` — passed: 3 test files, 6 tests. The updated footer test confirms the destination and safe new-tab attributes.
- `cd frontend && npm run build` — passed: TypeScript project build/typecheck and Vite production build.
- `cd backend && npm test` — passed: 2 test files, 4 tests (regression check).
- `cd backend && npm run build` — passed.
- Lint — not run; neither frontend nor backend defines a lint script.
- `git diff --check` — passed.

## Docs updated
- `README.md` — added the Everest footer link to the supported app features and quick verification.
- `docs/changes/EV-9-add-link-to-everest-website.md` — recorded implementation and verification details.

## Open questions
- None.
