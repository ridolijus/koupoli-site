from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageChops

baseline_dir = Path(sys.argv[1])
current_dir = Path(sys.argv[2])
threshold = 0.002
failures: list[str] = []

for current_path in sorted(current_dir.glob("*.png")):
    baseline_path = baseline_dir / current_path.name
    if not baseline_path.exists():
        failures.append(f"Missing baseline: {baseline_path}")
        continue

    baseline = Image.open(baseline_path).convert("RGB")
    current = Image.open(current_path).convert("RGB")

    if baseline.size != current.size:
        failures.append(f"Dimension mismatch for {current_path.name}: {baseline.size} != {current.size}")
        continue

    diff = ImageChops.difference(baseline, current)
    changed = sum(1 for pixel in diff.get_flattened_data() if pixel != (0, 0, 0))
    ratio = changed / (current.width * current.height)

    if ratio > threshold:
        failures.append(f"{current_path.name}: {ratio:.2%} pixels changed (limit {threshold:.2%})")

if failures:
    print("Visual regression check failed:")
    print("\n".join(f"- {failure}" for failure in failures))
    raise SystemExit(1)

print(f"Visual regression check passed for {len(list(current_dir.glob('*.png')))} captures.")
