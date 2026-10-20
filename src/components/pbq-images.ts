import type { ConnectorGlyph } from "@/data/types"

/**
 * Photographic assets for the drag-to-connect "bench" (public/pbq/*, served
 * statically so they stay out of the JS bundle and load only in PBQs).
 * Sourced from Wikimedia Commons under free licenses; see public/pbq/CREDITS.md.
 * Scenes carry their intrinsic pixel size so zone x/y/w/h (0-100 x 0-H
 * coordinates, H = 100*height/width) can be laid over the photo precisely.
 */
export const SCENE_IMG: Record<string, { src: string; w: number; h: number; description: string }> = {
  "pc-rear": { src: "/pbq/scene-pc-rear.jpg", w: 960, h: 255, description: "Rear panel of a workstation computer with peripheral ports." },
  "patch-panel": { src: "/pbq/scene-patch-panel.jpg", w: 920, h: 267, description: "Network patch panel and cabling work area." },
  rack: { src: "/pbq/scene-rack.jpg", w: 1053, h: 880, description: "Equipment rack containing network devices and cabling." },
  desk: { src: "/pbq/scene-desk.jpg", w: 960, h: 640, description: "Office workstation and surrounding desk area for a physical security audit." },
  mobo: { src: "/pbq/scene-mobo.jpg", w: 1000, h: 1002, description: "Inside a computer case showing the motherboard and component connections." },
  bench: { src: "/pbq/scene-bench.jpg", w: 1100, h: 575, description: "Electronics workbench for preparing an ESD-safe workspace." },
}

/**
 * Connector/item thumbnails by glyph key. Any glyph missing here (shield,
 * usb3-header, mat, nettap) falls back to the illustrated SVG <Glyph>, so a
 * missing photo can never break a PBQ.
 */
export const GLYPH_IMG: Partial<Record<ConnectorGlyph, string>> = {
  rj45: "/pbq/rj45.jpg",
  rj11: "/pbq/rj11.jpg",
  "usb-a": "/pbq/usb-a.jpg",
  "usb-c": "/pbq/usb-c.jpg",
  hdmi: "/pbq/hdmi.jpg",
  vga: "/pbq/vga.jpg",
  audio: "/pbq/audio.jpg",
  coax: "/pbq/coax.jpg",
  "lc-fiber": "/pbq/lc-fiber.jpg",
  power: "/pbq/power.jpg",
  lock: "/pbq/lock.jpg",
  badge: "/pbq/badge.jpg",
  blocker: "/pbq/blocker.jpg",
  keypad: "/pbq/keypad.jpg",
  sata: "/pbq/sata.jpg",
  "sata-pwr": "/pbq/sata-pwr.jpg",
  "fp-leads": "/pbq/fp-leads.jpg",
  fan: "/pbq/fan.jpg",
  molex: "/pbq/molex.jpg",
  dac: "/pbq/dac.jpg",
  strap: "/pbq/strap.jpg",
  bag: "/pbq/bag.jpg",
  air: "/pbq/air.jpg",
  vacuum: "/pbq/vacuum.jpg",
  bubble: "/pbq/bubble.jpg",
  toner: "/pbq/toner.jpg",
  punchdown: "/pbq/punchdown.jpg",
  crimper: "/pbq/crimper.jpg",
  tester: "/pbq/tester.jpg",
  loopback: "/pbq/loopback.jpg",
  multimeter: "/pbq/multimeter.jpg",
}
