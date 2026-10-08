# Navigation interaction checks

`pnpm interaction:check` opens the pre-rendered site in Chromium and verifies the primary navigation behaves as intended.

The checks cover:

- Desktop navigation to Projects opens at the top of the page.
- English to Croatian language switching preserves the matching About route.
- Croatian to English language switching preserves the matching Projects route.
- Mobile navigation opens, navigates to Projects, and starts at the top of the destination page.

The same command runs in the GitHub Pages workflow before deployment.
