import { describe, expect, it } from "vitest"
import { LEGAL_PATHS, GUIDE_PATHS, STUDY_PATHS, EXAM_SUBPATHS } from "../data/routes"
import { EXAM_IDS } from "../data/exam-ids"
import { LEGAL_METADATA, NOT_FOUND_METADATA, homeMetadata, metadataForPath, metadataMarkup } from "./page-metadata"

describe("public legal and private application metadata policy", () => {
  it("explicitly keeps only public legal policies/instructions indexable with self canonicals", () => {
    expect(Object.keys(LEGAL_METADATA)).toEqual([...LEGAL_PATHS])
    for (const path of LEGAL_PATHS) {
      const meta = metadataForPath(path)!
      expect(meta.indexable).toBe(true)
      expect(meta.canonical).toBe(`https://cert900.com${path}`)
      expect(meta.title).not.toContain("Free CompTIA")
      expect(meta.description.length).toBeGreaterThan(70)
      expect(metadataForPath(`${path}/`)).toEqual(meta)
    }
    expect(LEGAL_METADATA["/delete-account"].description).toContain("Public instructions")
  })

  it("leaves all existing educational paths to their own prerendered metadata", () => {
    for (const path of ["/", ...Object.values(GUIDE_PATHS), ...STUDY_PATHS]) {
      expect(metadataForPath(path), path).toBeNull()
    }
  })

  it("excludes private/app URLs and every supported exam subroute without echoing personal data", () => {
    const paths = ["/progress", "/plan", "/exams", "/admin",
      ...EXAM_IDS.flatMap(id => EXAM_SUBPATHS.map(sub => `/exam/${id}${sub ? `/${sub}` : ""}`))]
    for (const path of paths) {
      const meta = metadataForPath(path)!
      expect(meta.indexable, path).toBe(false)
      expect(meta.canonical, path).toBeNull()
      expect(metadataMarkup(meta)).not.toContain('rel="canonical"')
      expect(metadataMarkup(meta)).not.toContain('property="og:url"')
      expect(metadataMarkup(meta)).toContain('content="noindex, follow"')
    }
    expect(metadataForPath("/admin")?.title).toBe("Cert900")
  })

  it.each(["/login", "/account", "/auth/callback", "/unknown", "//privacy", "/privacy//", "/privacy?token=PRIVATE", "/privacy#private", "https://elsewhere.invalid/"])("uses non-revealing 404 metadata for %s", path => {
    expect(metadataForPath(path)).toEqual(NOT_FOUND_METADATA)
    expect(metadataMarkup(metadataForPath(path)!)).not.toContain("PRIVATE")
  })

  it("keeps cold exam/results fallback metadata stable across the existing menu restoration", () => {
    for (const id of EXAM_IDS) {
      expect(metadataForPath(`/exam/${id}/quiz`)).toEqual(metadataForPath(`/exam/${id}`))
      expect(metadataForPath(`/exam/${id}/results`)).toEqual(metadataForPath(`/exam/${id}`))
    }
  })

  it("renders one coherent set of tags and safely escapes text/attribute delimiters", () => {
    const meta = homeMetadata('Title < & " >')
    const html = metadataMarkup({ ...meta, description: 'Description "</script><script> & \'quoted\'' })
    expect(html).toContain('Title &lt; &amp; &quot; &gt;')
    expect(html).toContain('&quot;&lt;/script&gt;&lt;script&gt; &amp; &#39;quoted&#39;')
    expect(html).not.toContain('<script>')
    expect(html.match(/<title>/g)).toHaveLength(1)
    expect(html.match(/rel="canonical"/g)).toHaveLength(1)
    for (const field of ['name="description"', 'name="robots"', 'property="og:title"', 'property="og:description"', 'property="og:url"', 'name="twitter:title"', 'name="twitter:description"']) {
      expect(html.split(field)).toHaveLength(2)
    }
  })
})
