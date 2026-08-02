import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { ErrorBoundary } from "./components/ErrorBoundary.tsx"

// A tab left open across a deploy still references the old build's lazy chunks,
// which no longer exist on the server. One reload picks up the new build; the
// timestamp guard prevents a reload loop if the failure is something else.
window.addEventListener("vite:preloadError", (event) => {
  const KEY = "chunk-reload-at"
  try {
    const last = Number(sessionStorage.getItem(KEY) ?? 0)
    if (Date.now() - last < 30_000) return
    sessionStorage.setItem(KEY, String(Date.now()))
  } catch {
    // No storage means no loop guard: skip the auto-reload and let the
    // error surface through the boundary as before.
    return
  }
  event.preventDefault()
  window.location.reload()
})

// Marks "the SPA booted" for CSS. The prerendered guide pages ship zero JS, so
// this class can never appear there -- index.css uses it to hide Grow's widget
// inside the app (the gated homepage snippet survives client-side navigation)
// without touching the guides, which share the same stylesheet.
document.documentElement.classList.add("spa")

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
