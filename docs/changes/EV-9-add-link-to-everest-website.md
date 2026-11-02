# EV-9 — Add link to Everest website

## Summary
Add Everest contact prompt to the footer

## What changed
- Kept the external Everest website link in the shared app footer, pointing to `https://www.everest.engineering/` and opening in a new tab safely.
- Updated the text immediately before the link to “contact everest for more details,” reflecting the latest human request.
- Updated the footer regression test and README verification instructions to assert and describe the final text.

## Decisions
- Followed the clarified placement and destination: shared footer and `https://www.everest.engineering/`.
- Applied the latest wording request (“contact everest for more details”) in place of the earlier “check everest services” request.
- Reused the existing footer and retained its `target="_blank"` and `rel="noopener noreferrer"` attributes.

## How each criterion is met
- **Provide an Everest website link in the footer:** `serves the page at /about-us and exposes footer links` in `frontend/src/pages/AboutPage.test.tsx` checks the exact URL, label, and safe new-tab attributes.
- **Show the requested contact text immediately before the link:** the same test checks the link's immediately preceding sibling for the exact final text, “contact everest for more details”.

## How to verify
1. Run `cd frontend && npm run dev` and inspect the shared footer on any page.
2. Confirm “contact everest for more details” appears immediately before “Everest website”; confirm the link points to `https://www.everest.engineering/` and opens in a new tab.
3. Run frontend tests and build with `cd frontend && npm test && npm run build`.

## Tests
- `cd frontend && npm test` — passed: 3 test files, 6 tests, including the footer regression assertion.
- `cd frontend && npm run build` — passed: TypeScript project build/typecheck and Vite production build.
- `cd backend && npm test` — passed: 2 test files, 4 tests (regression suite).
- `cd backend && npm run build` — passed.
- Lint — not run; neither frontend nor backend defines a lint script.
- `git diff --check` — passed.
- An initial test/build invocation from repository root failed because there is no root `package.json`; commands were rerun from the respective application directories and passed.

## Docs updated
- `README.md` — verification instructions now specify the final footer wording.
- `docs/changes/EV-9-add-link-to-everest-website.md` — updated this existing change note to reflect the final request and verification.

## Open questions
- None.
