import type { ConnectorGlyph } from "@/data/types"

/**
 * Photographic assets for the drag-to-connect "bench" (public/pbq/*, served
 * statically so they stay out of the JS bundle and load only in PBQs).
 * Sourced from Wikimedia Commons under free licenses; see public/pbq/CREDITS.md.
 * Scenes carry their intrinsic pixel size so zone x/y/w/h (0-100 x 0-H
 * coordinates, H = 100*height/width) can be laid over the photo precisely.
 */
export const SCENE_IMG: Record<string, { src: string; w: number; h: number }> = {
  "pc-rear": { src: "/pbq/scene-pc-rear.jpg", w: 960, h: 255 },
  "patch-panel": { src: "/pbq/scene-patch-panel.jpg", w: 920, h: 267 },
  rack: { src: "/pbq/scene-rack.jpg", w: 1053, h: 880 },
  desk: { src: "/pbq/scene-desk.jpg", w: 960, h: 640 },
}

/**
 * Connector/item thumbnails by glyph key. Any glyph missing here (shield)
 * falls back to the illustrated SVG <Glyph>, so a missing photo can never
 * break a PBQ.
 */
export const GLYPH_IMG: Partial<Record<ConnectorGlyph, string>> = {
  rj45: "/pbq/rj45.jpg",
  rj11: "/pbq/rj11.jpg",
  "usb-a": "/pbq/usb-a.jpg",
  "usb-c": "/pbq/usb-c.jpg",
  hdmi: "/pbq/hdmi.jpg",
  audio: "/pbq/audio.jpg",
  coax: "/pbq/coax.jpg",
  "lc-fiber": "/pbq/lc-fiber.jpg",
  power: "/pbq/power.jpg",
  lock: "/pbq/lock.jpg",
  badge: "/pbq/badge.jpg",
  blocker: "/pbq/blocker.jpg",
}
