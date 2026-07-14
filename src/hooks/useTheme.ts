import { useCallback, useSyncExternalStore } from "react"

const THEME_KEY = "trainer-theme"
let listeners: Array<() => void> = []

function current(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

function apply(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark")
  document.documentElement.setAttribute("data-theme", theme)
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#151b29" : "#f8fafc")
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch {
    /* fine — theme just won't persist */
  }
  listeners.forEach((l) => l())
}

export function useTheme() {
  const theme = useSyncExternalStore(
    (cb) => {
      listeners.push(cb)
      return () => {
        listeners = listeners.filter((l) => l !== cb)
      }
    },
    current,
    () => "light" as const,
  )
  const toggle = useCallback(() => apply(current() === "dark" ? "light" : "dark"), [])
  return { theme, toggle }
}
