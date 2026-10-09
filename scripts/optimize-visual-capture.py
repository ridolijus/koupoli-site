from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

path = Path(sys.argv[1])
image = Image.open(path).convert("RGB")
image.quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(path, optimize=True)
