# EV-7 — Update background image

## Summary
Added a subtle Scribble-themed background image

## What changed
- Added `frontend/public/scribble-background.svg`, a locally-hosted, repeating doodle pattern with drawing and game-inspired marks.
- Applied it to the page body in `frontend/src/styles/app.css`, retaining the existing light gray background color as a fallback and using a low-opacity pattern so foreground content remains readable.
- Extended `README.md` to mention the background image.
- Added a stylesheet/asset regression test in `frontend/src/styles/app.test.ts`.

## Decisions
- The request did not specify a screen or replacement asset, and the human asked for best judgment. Chose a subtle, all-page doodle pattern because Scribble is a drawing game and a shared page backdrop is the most consistent interpretation of “background image.”
- Created a small local SVG rather than linking a remote image, avoiding network dependency and keeping the artwork lightweight and available offline.
- Preserved the existing palette and light surface background; low-opacity artwork should remain decorative instead of reducing text contrast.
- Built on the branch's existing visual styling and retained its palette and layout; limited this change to the background treatment, relevant README note, and test.

## How each criterion is met
- **Show a new background image:** `app background artwork > uses the local Scribble doodle image as a repeating body background` checks that the stylesheet applies the local SVG as a repeating body background and that the expected SVG asset exists.

## How to verify
1. Run `cd frontend && npm run dev` and view any page. The light canvas should have a subtle repeating drawing-themed doodle pattern behind the panels.
2. Run `cd frontend && npm test` and `cd frontend && npm run build`.

## Tests
- `cd frontend && npm test` — **passed**: 4 test files, 7 tests. `app background artwork > uses the local Scribble doodle image as a repeating body background` verifies the applied asset path, repeat behavior, and SVG asset.
- `cd frontend && npm run build` — **passed**: TypeScript project typecheck and Vite production build.
- `cd backend && npm test` — **passed**: 2 test files, 4 tests (regression check).
- `cd backend && npm run build` — **passed**.
- `cd frontend && npm run` and `cd backend && npm run` — confirmed no lint script is configured in either package, so lint could not be run.
- `git diff --check` — **passed**.

## Docs updated
- `README.md`: mentioned the repeating Scribble doodle background.
- `docs/changes/EV-7-update-background-image.md`: recorded the chosen interpretation, implementation, criteria, and verification.

## Open questions
- None. The human authorized best judgment for the unspecified target and image.
