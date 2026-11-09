# SC-1 — Change the title

## Summary
Set a descriptive browser-tab title

## What changed
- Set the document title in `frontend/index.html` to `Scribble — Draw and Guess`.
- Retained the earlier branch work: the locally bundled drawing-pattern background and the **About Scribble** footer label.
- Updated the README to describe the browser title and the existing UI details.

## Decisions
- The ticket did not specify which title to change or its replacement. Following the human's instruction to use best judgment, I chose the browser-tab/document title and set it to `Scribble — Draw and Guess`. It keeps the existing brand while making clear that Scribble is a drawing-and-guessing game.
- I retained the earlier background and footer-link work already on this branch rather than removing unrelated prior changes.

## How each criterion is met
- **Change the title:** the `uses a descriptive title for the browser tab` test in `frontend/src/index.test.ts` verifies that the document title is `Scribble — Draw and Guess`.

## How to verify
1. Run `cd frontend && npm test && npm run build`.
2. Run `cd frontend && npm run dev` and confirm the browser tab displays `Scribble — Draw and Guess`.

## Tests
- The existing `frontend/src/index.test.ts` test, `uses a descriptive title for the browser tab`, asserts the exact document title; no additional test was needed for this already-implemented title change.
- `cd frontend && npm test` — passed: 5 files, 8 tests.
- `cd frontend && npm run build` — passed: TypeScript typecheck and Vite production build.
- `cd backend && npm test` — passed: 2 files, 4 tests.
- `cd backend && npm run build` — passed: TypeScript build.
- Lint — not available; neither the frontend nor backend package defines a lint script.
- Running npm commands from the repository root fails because there is no root `package.json`; running from each package directory succeeded.
- Visual browser verification has not been performed.

## Docs updated
- `README.md` — documents the browser-tab title in the implementation overview and verification steps; it also retains prior background/footer details.
- `docs/changes/SC-1-update-the-footer-link.md` — updated the existing change note for this ticket.

## Open questions
- None; the human authorized using best judgment for the unspecified title target and replacement.
