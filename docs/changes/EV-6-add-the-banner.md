# Add a site-wide room creation banner

## Summary
Add a site-wide room creation banner

## What changed
- Added a prominent banner to the shared app shell so it appears on every page.
- The banner invites visitors to play and links directly to `/create-room`.
- Added responsive styling that stacks the message and link on narrow screens.
- Updated the README to include the banner in the current UI description.

## Decisions
The request left the content and placement unspecified, and the human asked me to use my best judgment. I chose a friendly, non-intrusive site-wide play invitation with a direct “Create a room” call to action. Putting it in the shared shell makes it consistently discoverable without obscuring page content, and creating a room is the clearest next step for a new visitor. No image or external link is needed.

## How each criterion is met
- **The banner is shown throughout the app, including non-home pages:** the `AppShell` test renders the shell with `/about-us` as the current location and asserts the accessible banner exists.
- **Banner copy and action are clear and actionable:** the `AppShell` test checks the invitation copy and the “Create a room” link target `/create-room`.
- **The banner accommodates narrow screens:** responsive CSS stacks its content in the existing mobile breakpoint; verify using the steps below.

## How to verify
1. Run `cd frontend && npm run dev` and open the app.
2. Confirm the banner appears above page content on the start page and a secondary page (for example `/about-us`).
3. Select “Create a room” and confirm navigation to the create-room page.
4. At a viewport width of 720px or less, confirm the banner message and link stack vertically and remain readable.

## Tests
- Added `src/components/AppShell.test.tsx`: **passed**; asserts banner accessibility label, copy, room-creation destination, and preservation of page content on a non-home location.
- `cd frontend && npm test`: **passed**, 4 test files and 7 tests.
- `cd frontend && npm run build`: **passed**; includes the TypeScript project build/typecheck and Vite production build.
- `cd backend && npm run build`: **passed**.
- Lint: **not available**; `frontend` has no lint script and `npm run` lists only dev, build, preview, and test scripts.

## Docs updated
- `README.md` — recorded the site-wide play banner in the current UI list.
- `docs/changes/EV-6-add-the-banner.md` — ticket change note.

## Open questions
None. The human authorized using best judgment for the unspecified banner requirements.
