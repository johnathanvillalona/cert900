import { Moon, Sun } from "lucide-react"

/** Sun/moon cross-fade + rotate, driven purely by the .dark class. */
export function ThemeIcon() {
  return (
    <span className="relative inline-flex size-4" aria-hidden>
      <Sun
        strokeWidth={2}
        className="absolute inset-0 size-4 rotate-0 opacity-0 transition-[opacity,transform] duration-150 ease-out-strong dark:rotate-0 dark:opacity-100 not-dark:-rotate-90"
      />
      <Moon
        strokeWidth={2}
        className="absolute inset-0 size-4 opacity-100 transition-[opacity,transform] duration-150 ease-out-strong dark:rotate-90 dark:opacity-0"
      />
    </span>
  )
}
