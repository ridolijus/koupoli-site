from pathlib import Path
from PIL import Image

source = Path("/home/ubuntu/upload/koupoliseo_logo.jfif")
public = Path("/home/ubuntu/koupoli-site/client/public")
deliverable = Path("/home/ubuntu/webdev-static-assets/koupoli-bird-favicon.png")

source_image = Image.open(source).convert("RGBA")
mark = source_image.crop((0, 0, 100, 75))
pixels = mark.load()

for y in range(mark.height):
    for x in range(mark.width):
        red, green, blue, _ = pixels[x, y]
        if blue > 52 and blue > red * 1.5 and blue > green * 1.2:
            pixels[x, y] = (red, green, blue, 255)
        else:
            pixels[x, y] = (0, 0, 0, 0)

bounds = mark.getbbox()
if not bounds:
    raise RuntimeError("The logo mark could not be extracted from the source image.")

left, top, right, bottom = bounds
padding = 3
mark = mark.crop((max(0, left - padding), max(0, top - padding), min(mark.width, right + padding), min(mark.height, bottom + padding)))
scale = 432 / mark.width
mark = mark.resize((432, round(mark.height * scale)), Image.Resampling.LANCZOS)

canvas = Image.new("RGBA", (512, 512), (0, 0, 0, 0))
offset = ((512 - mark.width) // 2, (512 - mark.height) // 2)
canvas.alpha_composite(mark, offset)

public.mkdir(parents=True, exist_ok=True)
deliverable.parent.mkdir(parents=True, exist_ok=True)
for path in [public / "favicon-512.png", public / "apple-touch-icon.png", deliverable]:
    canvas.save(path, optimize=True)
canvas.resize((32, 32), Image.Resampling.LANCZOS).save(public / "favicon-32x32.png", optimize=True)
canvas.resize((16, 16), Image.Resampling.LANCZOS).save(public / "favicon-16x16.png", optimize=True)
canvas.save(public / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
