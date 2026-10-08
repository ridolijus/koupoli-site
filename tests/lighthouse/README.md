# Lighthouse performance budget

`pnpm performance:check` audits the pre-rendered English homepage and glossary at a mobile viewport using Lighthouse. It fails when either page falls below the configured performance score.

```bash
pnpm performance:check
```

The default local threshold is **60/100**. The GitHub Pages workflow runs the same check with a **50/100** threshold and a three-minute time limit. GitHub-hosted Chromium can hang while starting Lighthouse, so the CI result is advisory and cannot block a static-site deployment. Local validation remains mandatory before release; raise the workflow threshold after several stable GitHub runs.

Use a stricter local check without changing the committed budget:

```bash
LIGHTHOUSE_MIN_SCORE=0.7 pnpm performance:check
```

Reports are written to `tests/lighthouse/current/` for local inspection and are not committed.
