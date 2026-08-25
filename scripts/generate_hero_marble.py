# -*- coding: utf-8 -*-
"""Create a slow Ken Burns video from the white marble hero image."""

import os

import imageio
import numpy as np
from PIL import Image


ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(ROOT, "public", "assets")
SRC = os.path.join(ASSETS, "hero-marble.jpg")
OUT = os.path.join(ASSETS, "hero-bg.mp4")
POSTER = os.path.join(ASSETS, "hero-poster.jpg")

W, H, FPS, SECONDS = 1280, 720, 24, 6


def ease_in_out(t):
    return t * t * (3 - 2 * t)


def main():
    img = Image.open(SRC).convert("RGB")
    iw, ih = img.size
    arr = np.asarray(img).astype(np.float32)
    # Subtle warm marble grade so it sits well inside the dark-gold theme.
    arr[..., 0] = np.clip(arr[..., 0] * 1.06, 0, 255)
    arr[..., 2] = np.clip(arr[..., 2] * 0.96, 0, 255)
    base = Image.fromarray(arr.astype(np.uint8))

    frames = FPS * SECONDS
    writer = imageio.get_writer(
        OUT,
        fps=FPS,
        codec="libx264",
        quality=8,
        pixelformat="yuv420p",
        ffmpeg_params=["-preset", "veryfast", "-crf", "24"],
    )

    for f in range(frames):
        t = ease_in_out(f / (frames - 1))
        cw = 1120 + 160 * t
        ch = cw * H / W
        cx = iw * (0.50 - 0.02 * t)
        cy = ih * (0.56 - 0.18 * t)
        left = max(0, min(iw - cw, cx - cw / 2))
        top = max(0, min(ih - ch, cy - ch / 2))
        crop = base.crop((int(left), int(top), int(left + cw), int(top + ch)))
        frame = crop.resize((W, H), Image.LANCZOS)
        writer.append_data(np.asarray(frame))

    writer.close()
    print("video written:", OUT, os.path.getsize(OUT))

    # 16:9 poster for fast first paint / fallback.
    poster_w, poster_h = 1280, 720
    cw = 1680
    ch = cw * poster_h / poster_w
    cx = iw / 2
    cy = ih * 0.48
    left = max(0, min(iw - cw, cx - cw / 2))
    top = max(0, min(ih - ch, cy - ch / 2))
    poster = base.crop((int(left), int(top), int(left + cw), int(top + ch)))
    poster = poster.resize((poster_w, poster_h), Image.LANCZOS)
    poster.save(POSTER, "JPEG", quality=76, optimize=True, progressive=True)
    print("poster written:", POSTER, os.path.getsize(POSTER))


if __name__ == "__main__":
    main()
