import { METADATA_SELECTORS, metadataMarkup, type PageMetadata } from "./page-metadata"

// Only metadata presentation state. Never touches history, focus, quiz state or analytics.
let homeGraph: string | undefined
export function updateDocumentHead(meta: PageMetadata, home: boolean): void {
  homeGraph ??= document.querySelector('script[data-home-jsonld]')?.outerHTML ?? ""
  document.querySelectorAll(METADATA_SELECTORS).forEach(element => element.remove())
  document.head.insertAdjacentHTML("beforeend", metadataMarkup(meta))
  document.querySelectorAll('script[data-home-jsonld]').forEach(element => element.remove())
  if (home && homeGraph) document.head.insertAdjacentHTML("beforeend", homeGraph)
}
