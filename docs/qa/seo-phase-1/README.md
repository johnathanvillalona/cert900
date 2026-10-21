# SEO Phase 1 screenshot provenance

These PNGs are native screenshots of the real, ungraded Cert900 renderers at
baseline `39b6f13480c957d4a2d2628df864d92ee810a2b5`. They are not illustrations,
composites, or edited screenshots. `preview-provenance.json` records browser,
viewport, state, dimensions, image hashes, and the captured build-manifest hash.

- Learner-facing desktop images live in `public/pbq-previews/`.
- `*-390.png` files are mobile QA captures, not additional public image assets.
- `pbq-guide-before-320.png` and `pbq-guide-before-1440.png` preserve the original
  landing page before this phase. Do not overwrite these to update a baseline.
- The DHCP capture shows only `ipconfig /all` diagnostics. ACL and Windows show
  their initial policy/overview. The workstation has no connections. No
  screenshot contains graded feedback or a configured solution.

## Reproduce deliberately

Use the existing installed Node, Chrome, and locked development dependencies.
Build first, then start the maintained isolated Worker:

```sh
npm run build
node tools/qa/isolated-worker.mjs --serve --port=4197
```

In another terminal, from the same worktree:

```sh
node --import tsx tools/qa/capture-pbq-previews.mts --base-url=http://127.0.0.1:4197
```

The capture script accepts only a loopback origin. It uses fresh browser
contexts, local-only DNS and request routing, light theme, reduced motion, and
device scale 1. It imports existing PBQ navigation helpers rather than creating
a public testing route. The isolated Worker uses synthetic local D1 and blocks
remote resources. Stop the preview before any subsequent build.

The one-time `--record-before` flag was used for the initial capture and refuses
to overwrite existing before images. Regeneration is an intentional asset
change requiring visual review; it is not a screenshot-baseline update command.

## Workstation photograph attribution

The workstation screenshot includes photographs already used by the simulation.
Keep a visible link to `/pbq/CREDITS.md` next to its public preview, preserving
the existing author, source, and license information. The rear-panel photograph
is **Computer ports.JPG**, by **The High Fin Sperm Whale**, **CC BY-SA 3.0**;
connector photographs have their individual credits and licenses in that file.
The source credits file hash is also recorded in the provenance JSON.

No proprietary certification-exam assets or new image-generation services were
used. Physical-device and screen-reader review remain manual checks.
