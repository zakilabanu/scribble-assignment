# SC-4 — Change the title

## Summary

The earlier SC-4 attempt left the browser document title as **Scribble Game**. This update changes the browser tab title to **Scribble**, matching the application brand in the shell and README.

## What changed

This update builds on the earlier attempt by retaining its document-title regression test and README documentation, and correcting the title value:

- Changed the browser document title to `<title>Scribble</title>` in `frontend/index.html`.
- Updated `frontend/src/index.test.ts` to assert the new title.
- Updated the README note to state that the browser tab title is “Scribble.”

## Decisions

The ticket does not specify the replacement text. Chose “Scribble,” the established app brand shown in the shell, instead of preserving the prior attempt’s “Scribble Game.” This change is limited to the browser document title; visible page headings and unrelated branding remain unchanged.

## How each criterion is met (name the test that covers it)

The ticket does not state explicit acceptance criteria beyond “change the title.” Interpreted as changing the browser-tab title:

- The browser document title has changed from “Scribble Game” to “Scribble”: covered by `application document > uses the Scribble browser title` in `frontend/src/index.test.ts`.

## How to verify

From the repository root:

```bash
cd frontend && npm test
cd frontend && npm run build
```

Open the application and confirm the browser tab reads “Scribble.”

## Tests (what you added, and the results of each run)

The earlier title regression test was updated to assert the new value; it parses `frontend/index.html` and checks `document.title`.

- `cd frontend && npm test`: passed — 2 test files, 3 tests.
- `cd frontend && npm run build`: passed — TypeScript project build and Vite production build.
- `cd backend && npm test --if-present`: passed — 2 test files, 4 tests.
- `cd backend && npm run build`: passed — TypeScript build.
- Lint: not available; neither frontend nor backend defines a lint script or configures a lint command.
- Initial npm commands from the repository root could not run because there is no root `package.json`; reran each command in its respective project directory, where all tests and builds passed.

## Docs updated

- `README.md` updated to document the browser title as “Scribble.”
- `docs/changes/SC-4-change-the-title.md` updated from the earlier attempt with the actual change, rationale, test coverage, and current verification results.

## Open questions

- The ticket does not specify exact replacement text. “Scribble” is the chosen title based on the existing product branding; confirm if a different exact title was intended.
