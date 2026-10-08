# Visual regression checks

The visual regression harness builds and pre-renders the public homepage, glossary, and enquiry page at desktop and mobile widths. It compares Chromium captures from the production-like static output with the tracked baseline images using a 0.2% changed-pixel threshold.

```bash
pnpm visual:check
```

Use this before a visual release. It starts a local Vite preview of the pre-rendered output, captures the six views with Chromium, and fails when a change exceeds the threshold.

When an intentional design change is approved, review the new captures in `tests/visual-regression/current/`, then update the committed baseline set:

```bash
pnpm visual:update
```

`current/` is intentionally ignored. Only reviewed images in `baselines/` are committed.
