import { Component, type ReactNode } from "react"

interface State {
  error: Error | null
}

/**
 * Last-resort crash screen. Progress lives in localStorage (and D1 when
 * signed in), so a render crash never loses data; say so to the user.
 */
export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <div className="flex min-h-[100dvh] items-center justify-center px-4">
        <div className="w-full max-w-md rounded-lg border bg-card p-8 text-center shadow-sm">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Unexpected error</p>
          <h1 className="mt-2 font-heading text-2xl font-semibold">Something broke.</h1>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            Your progress is safe. It is saved after every answer, so reloading brings you right back.
          </p>
          <button
            onClick={() => window.location.assign("/")}
            className="pressable mt-6 inline-flex cursor-pointer items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-[transform,background-color] duration-200 hover:bg-primary/90"
          >
            Reload the app
          </button>
          <p className="text-muted-foreground mt-4 font-mono text-xs break-all">
            {this.state.error.message}
          </p>
        </div>
      </div>
    )
  }
}
