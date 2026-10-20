# Vendored shadcn stylesheet

`shadcn-tailwind.css` is an unmodified, byte-for-byte copy of
`package/dist/tailwind.css` from the published `shadcn@4.13.0` npm archive.
`shadcn-LICENSE.md` is the unmodified accompanying MIT license, copyright
2023 shadcn. The license notice is also retained in the importing source
stylesheet. The existing production CSS pipeline removes this comment, so
`public/licenses/shadcn-MIT.txt` also contains the exact license and is copied
into the production assets at `/licenses/shadcn-MIT.txt`. Keep the license
with any redistribution of this vendored source or compiled styles.

- Upstream: https://github.com/shadcn-ui/ui (package directory: `packages/shadcn`)
- Archive: https://registry.npmjs.org/shadcn/-/shadcn-4.13.0.tgz
- Archive SHA-512 integrity: `sha512-5fuJ4jI/GcPeA/iTL4cJivCZuYQGXz/N3bIzyd+Gd/FM6xUCy2MxGG+LaDQuw2cjNy9zGPSFPTEmI048UwPTZA==`
- Stylesheet SHA-256: `bc7d83425702955b4cb67cb14ede9d603f9d912376d57a2d81d661094d2a782a`
- License SHA-256: `1564074e13439397221ffd522e2e504d56561994a23d371aa5e3ad43e4f5423f`

On 2026-10-20 the published archive was checked against the original lockfile
integrity, and both files were compared byte-for-byte with the installed files.
The CSS contains no imports, plugin references, URLs, or external assets. It
requires the existing Tailwind CSS 4 compiler, its theme variables, the app's
dark variant, and component state/size variables where relevant. It does not
require the shadcn CLI or its JavaScript dependencies at runtime.

Keep the rules unchanged when maintaining this vendored copy. Any future update
should record its source version, license, checksums, and styling verification.
