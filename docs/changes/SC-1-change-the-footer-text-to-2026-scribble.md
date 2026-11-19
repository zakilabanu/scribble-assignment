# SC-1: Change the footer text to © 2026 Scribble

## Summary
Add © 2026 Scribble to the shared footer

## What changed
- Added a dedicated copyright paragraph to `frontend/src/components/AppShell.tsx`.
- Kept the About Scribble and Terms and conditions links unchanged.
- Extended the existing footer test to check the exact copyright text and scope both link assertions to the footer.

## Decisions
- Use the literal year 2026, not a date-derived year, to match the requested text.
- Reuse the shared app shell and existing footer styling so all pages receive the change without unrelated refactoring.

## How each criterion is met
- **Change the footer text to © 2026 Scribble:** the shared footer renders exactly that text in its own paragraph. Covered by `AboutPage > serves the page at /about-us with footer copyright and links` in `frontend/src/pages/AboutPage.test.tsx`, which asserts exact `textContent` and retains both link checks.

## How to verify
- Run `cd frontend && npm test && npm run build`.
- Run `cd backend && npm test && npm run build`.
- Start the frontend with `npm run dev`; check the footer on the start, About, and Terms pages at desktop and narrow mobile widths. Confirm the copyright is readable and both links still navigate correctly. Browser visual verification was not performed in this run.

## Tests
- Updated the existing footer integration test with an exact copyright assertion; no new failure paths were introduced.
- Frontend `npm test`: passed, 7 tests across 4 files. React Router emitted future-flag warnings.
- Backend `npm test`: passed, 4 tests across 2 files.
- Frontend `npm run build`: passed, including TypeScript checking and Vite production build.
- Backend `npm run build`: passed, including TypeScript checking.
- `npm run lint` in both packages: unavailable; neither package defines a lint script.
- Root `npm test && npm run build`: could not run because the repository has no root `package.json`; package-level commands above passed.
- `git diff --check`: passed.
- Existing `.gitignore` excludes dependencies, build output, caches, and TypeScript build metadata; no changes needed.

## Docs updated
- `README.md`: documented the shared footer copyright under Current Implementation.
- Added this change note. No API or contributor instruction changes were needed.

## Open questions
None.
