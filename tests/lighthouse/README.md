# Lighthouse performance budget

`pnpm performance:check` audits the pre-rendered English homepage and glossary at a mobile viewport using Lighthouse. It fails when either page falls below the configured performance score.

```bash
pnpm performance:check
```

The default threshold is **60/100**, calibrated against the current static site in the headless CI environment. Increase it for a stricter local check without changing the committed budget:

```bash
LIGHTHOUSE_MIN_SCORE=0.7 pnpm performance:check
```

Reports are written to `tests/lighthouse/current/` for local inspection and are not committed.
