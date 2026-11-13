# Summary

Add shared header navigation

## What changed

Added Home, About and Terms links to the shared branded header, with wrapping and keyboard focus styling. The existing footer remains unchanged.

## Decisions

Used React Router links and existing routes; retained the existing header branding rather than adding a second header. The navigation stacks beneath the branding on narrow screens.

## How each criterion is met

- **Add header:** `AppShell header > shows shared navigation and preserves branding and footer links` checks the labeled header, destinations, branding and footer. `AppShell header > navigates between existing pages from the header without remounting the shell` checks navigation from a non-home page and between all three destinations.

## How to verify

Run `cd frontend && npm run dev`, visit the app, use each header link and return Home. Tab through the links to check the focus indicator; inspect the header at desktop and 320px widths for wrapping and overflow. Check the footer links remain available.

## Tests

- Added two AppShell tests for links, destinations, client-side navigation and footer preservation; scoped the existing About footer assertion to the footer.
- Frontend `npm test`: 9 passed; React Router emitted existing v7 future-flag warnings.
- Frontend `npm run build` and `npx tsc --noEmit -p tsconfig.json`: passed.
- Backend `npm test`: 4 passed; `npm run build` and `npx tsc --noEmit -p tsconfig.json`: passed.
- An initial `npm test` from the repository root failed because there is no root package.json; the frontend command was rerun successfully in its directory.
- No lint script or lint configuration is present in either project. `git diff --check` passed.
- Browser layout and keyboard focus were not manually checked: no browser executable was available in the environment.

## Docs updated

Updated README implementation and quick verification guidance. No API or agent instruction changes were needed.

## Open questions

None.
