# Lighthouse performance budget

`pnpm performance:check` audits the pre-rendered English homepage and glossary at a mobile viewport using Lighthouse. It fails when either page falls below the configured performance score.

```bash
pnpm performance:check
```

The default local threshold is **60/100**. The GitHub Pages workflow uses **50/100**, calibrated from the initial GitHub-hosted baseline rather than the faster local runner. This prevents a deployment failure caused by runner variance while still blocking a material regression. Raise the workflow threshold after several stable GitHub runs.

Use a stricter local check without changing the committed budget:

```bash
LIGHTHOUSE_MIN_SCORE=0.7 pnpm performance:check
```

Reports are written to `tests/lighthouse/current/` for local inspection and are not committed.
