# SC-4 — Change the title

## Summary

The existing SC-4 implementation sets the browser document title to **Scribble Game**, consistent with the product name displayed on the start page. The ticket only says “change the title” and does not specify replacement text, so the existing choice is retained.

## What changed

This update builds on the earlier attempt rather than replacing it:

- Kept `<title>Scribble Game</title>` in `frontend/index.html`.
- Kept the regression test in `frontend/src/index.test.ts`.
- Kept the README note clarifying the browser-tab title and that the README describes supported scope.
- Updated this change note with verification results and the remaining ambiguity.

## Decisions

“Scribble Game” matches the existing start-page product name and is documented by the README. Since there is no exact title or additional acceptance criterion in the ticket, no unrelated branding or UI headings were changed. No code change was needed beyond the earlier attempt already present on this branch.

## How each criterion is met (name the test that covers it)

The ticket does not state explicit acceptance criteria beyond “change the title.” Interpreted as changing the browser-tab title:

- The HTML document title is `Scribble Game`: covered by `application document > uses the Scribble Game browser title` in `frontend/src/index.test.ts`.

## How to verify

From the repository root:

```bash
cd frontend && npm test
cd frontend && npm run build
```

Open the application and confirm the browser tab reads “Scribble Game.”

## Tests (what you added, and the results of each run)

The title regression test was already added by the earlier attempt; it parses `frontend/index.html` and checks `document.title`.

- `cd frontend && npm test`: passed — 2 test files, 3 tests.
- `cd frontend && npm run build`: passed — TypeScript project build and Vite production build.
- `cd backend && npm test --if-present`: passed — 2 test files, 4 tests.
- `cd backend && npm run build`: passed — TypeScript build.
- Lint: not run; neither package defines a lint script and no lint command is configured in the project.

## Docs updated

- `README.md` already documents the browser title as “Scribble Game”; retained as part of the earlier attempt.
- `docs/changes/SC-4-change-the-title.md` updated with implementation rationale and the verification performed for this handoff.

## Open questions

- Confirm that “Scribble Game” is the exact intended title. The ticket contains no replacement text or other detailed acceptance criteria.
