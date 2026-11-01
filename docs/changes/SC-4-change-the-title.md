# SC-4 — Change the title

## Summary

Updated the browser tab title from “Scribble” to “Scribble Game,” matching the existing start-page product name.

## What changed

- Changed the document `<title>` in `frontend/index.html`.
- Added a frontend test that asserts the rendered HTML document title.
- Documented the browser title in `README.md`.

## Decisions

The ticket did not provide the requested replacement title. I used “Scribble Game,” which already appears in the start page and describes the application without introducing new branding.

## How each criterion is met (name the test that covers it)

- The browser document title is “Scribble Game”: covered by `application document > uses the Scribble Game browser title` in `frontend/src/index.test.ts`.

## How to verify

Run `cd frontend && npm test` and open the application; the browser tab should read “Scribble Game.”

## Tests (what you added, and the results of each run)

- Added `frontend/src/index.test.ts` to assert the title from the app's HTML document.
- `cd frontend && npm test`: passed (2 test files, 3 tests).
- `cd frontend && npm run build`: passed; includes the TypeScript project typecheck and Vite production build.
- Lint: not run; the frontend package has no lint script or configured lint command.

## Docs updated

- `README.md`: noted the browser tab title.
- `docs/changes/SC-4-change-the-title.md`: this change note.

## Open questions

- Please confirm “Scribble Game” is the intended title; the ticket did not specify the replacement text.
