# SC-2 — Add about-us

## Summary
Refresh the About Scribble page copy

## What changed
- Refreshed the headline, introduction, and two body sections in `frontend/src/pages/AboutPage.tsx`.
- Updated content and direct-route assertions, and added a footer navigation regression test in `frontend/src/pages/AboutPage.test.tsx`.
- Clarified the About page's scope in the README.

## Decisions
- Reused the existing About Us page rather than adding a duplicate. Kept `/about-us`, the “About Scribble” label, semantic structure, CSS classes, and shared footer links unchanged.
- Proposed wording for review: “A little imagination, a lot of fun together”; introduction: “The idea behind Scribble is simple: bring people together through drawing and guessing.” The sections “A sketch starts the conversation” and “Better together” explain the concept and welcome creativity without requiring artistic skill.
- Reviewed copy against the README's implementation scope: removed claims about turn-taking, scoring, and quick rounds. Added no company history, team facts, or promises about unfinished features.
- Kept the page static with no API, state, backend, styling, or dependency changes. No new failure paths were introduced.

## How each criterion is met
The ticket supplies only “Add about-us”; the planner's proposed scope is a refresh of the existing page.
- **About Us content:** `renders the about-us page with an explanation of Scribble` checks the label, revised headline, introduction, section headings, and explanatory body copy.
- **Existing route and footer preserved:** `serves the page at /about-us and exposes footer links` checks the actual page headline at the direct route and both footer destinations and labels.
- **Footer navigation:** `opens the about-us page from the shared footer` clicks the link from the start page and checks the resulting URL and headline.
- Layout and styling are unchanged by inspection of the diff; visual wrapping still needs browser verification.

## How to verify
1. Run `cd frontend && npm run dev`.
2. Open `/`, click “About Scribble” in the footer, and confirm the revised headline and both sections. Also load `/about-us` directly.
3. Check readable text wrapping at narrow (375px) and wide (1280px) widths, and confirm the shared footer still includes “Terms and conditions”.
4. Run `cd frontend && npm test && npm run build` and `cd backend && npm test && npm run build`.

## Tests
- Initial root `npm test && npm run build` attempt failed because there is no root `package.json`; reran in the package directories.
- Frontend first run: **passed**, 4 files / 7 tests; TypeScript and Vite build **passed**.
- Frontend final run after adding the footer-click test: **passed**, 4 files / 8 tests; TypeScript and Vite build **passed**. React Router emitted future-flag warnings.
- Backend regression suite: **passed**, 2 files / 4 tests; TypeScript build **passed**.
- Typechecking is included in both build scripts.
- Lint: unavailable; neither package defines a lint script and no lint configuration was found. No tooling was added for this copy-only change.
- `git diff --check`: **passed**.
- Manual narrow/wide browser inspection: **not performed**; no browser tool or Chromium/Chrome executable was available. Footer navigation is covered in jsdom, not a visual browser.
- Existing `.gitignore` covers dependencies, build output, and TypeScript caches.

## Docs updated
- `README.md`: clarified that the About page explains the game concept, not implemented gameplay features.
- `docs/changes/SC-2-add-about-us.md`: this change note, including proposed wording and verification results.

## Open questions
- None blocking. Proposed copy is ready for editorial review; visual verification remains outstanding.
