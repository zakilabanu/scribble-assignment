# SC-1 — Add Contact Us link

## Summary
Add a Contact us footer link

## What changed
- Added a shared-footer “Contact us” link that opens the repository's GitHub issue form in a new tab.
- Added a regression assertion for the link destination, label, and safe new-tab attributes.
- Documented the contact link in the README's implementation overview and quick verification steps.

## Decisions
- Following the human's direction to use best judgment, selected the project's public GitHub issue form as the contact destination. No support email or in-app contact page was documented; the repository issue form is an existing, discoverable channel and avoids inventing an email address or implying a support page exists.
- Open the external destination in a new tab with `rel="noreferrer"` so users do not lose their game and the destination does not receive referrer information.

## How each criterion is met
- **Add Contact Us link:** the `serves the page at /about-us and exposes footer links` test in `frontend/src/pages/AboutPage.test.tsx` verifies the Contact us label, GitHub issue-form destination, and new-tab safety attributes.

## How to verify
1. Install dependencies with `npm install` in `frontend`.
2. Run `cd frontend && npm test && npm run build`.
3. Run the frontend and select **Contact us** in the footer. Confirm the GitHub new-issue form opens in a new tab.

## Tests
- Added the Contact us footer assertion to `frontend/src/pages/AboutPage.test.tsx`.
- `cd frontend && npm test` — could not start: installed dependencies are missing (`@vitejs/plugin-react` and `vitest` could not be resolved).
- `cd frontend && npm run build` — could not typecheck: missing `vite/client` type definitions.
- `cd backend && npm test` — could not start: installed dependencies are missing (`vitest` could not be resolved).
- `cd backend && npm run build` — could not typecheck: missing `node` type definitions.
- Lint — not run; neither package defines a lint script.
- `git diff --check` — passed.
- The initial test invocations from the repository root also failed because there is no root `package.json`; reruns were made in each app directory.

## Docs updated
- `README.md` — describes the Contact us link and its destination in the quick verification steps.
- `docs/changes/SC-1-add-contact-us-link.md` — this ticket change note.

## Open questions
- None. The selected GitHub issue form is the documented contact route; an official support email could replace it if one is established later.
