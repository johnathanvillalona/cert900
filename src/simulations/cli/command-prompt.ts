/** Pure, bounded Command Prompt primitives. Never delegates to a host shell. */
export const MAX_COMMAND_LENGTH = 1024
export const HISTORY_LIMIT = 200
export type ConsoleEntry = { id: number; command: string; output: string; status: "info" | "success" | "error" }
export type ConsoleState = { nextId: number; visibleAfter: number; showBanner: boolean }
export type CommandResult<S> = { state: S; output: string; status: ConsoleEntry["status"]; clear?: boolean }
export type TokenizedCommand = { tokens: string[]; error?: never } | { tokens?: never; error: string }
export function tokenizeCommandPrompt(input: string): TokenizedCommand {
  if (input.length > MAX_COMMAND_LENGTH) return { error: `Simulator limit: commands may contain at most ${MAX_COMMAND_LENGTH} characters.` }
  if (/[\r\n\x00-\x08\x0b-\x1f\x7f]/.test(input)) return { error: "Simulator limit: enter one command on a single line." }
  if (/[|&<>^%!()]/.test(input)) return { error: "Simulator limit: pipelines, redirection, expansion, escaping and scripts are not supported." }
  const tokens: string[] = []
  let token = "", quoted = false, started = false
  for (const char of input) {
    if (char === '"') { quoted = !quoted; started = true }
    else if (/\s/.test(char) && !quoted) {
      if (started) tokens.push(token)
      token = ""; started = false
    } else { token += char; started = true }
  }
  if (quoted) return { error: 'The syntax of the command is incorrect.\nSimulator: close the double quote around the adapter name.' }
  if (started) tokens.push(token)
  return { tokens }
}
/** Linear wildcard matching; asterisk only. No user-supplied regular expressions. */
export function adapterMatches(pattern: string, adapter: string): boolean {
  const p = pattern.toLowerCase(), name = adapter.toLowerCase()
  let i = 0, j = 0, star = -1, match = 0
  while (j < name.length) {
    if (p[i] === name[j]) { i++; j++ }
    else if (p[i] === "*") { star = i++; match = j }
    else if (star !== -1) { i = star + 1; j = ++match }
    else return false
  }
  while (p[i] === "*") i++
  return i === p.length
}
export function appendConsole<S extends { history: readonly ConsoleEntry[]; console: ConsoleState }>(state: S, command: string, result: CommandResult<S>): S {
  const id = state.console.nextId
  const entry: ConsoleEntry = { id, command: command.trim().slice(0, MAX_COMMAND_LENGTH), output: result.output, status: result.status }
  return { ...result.state, history: [...state.history, entry].slice(-HISTORY_LIMIT), console: {
    nextId: id + 1, visibleAfter: result.clear ? id : state.console.visibleAfter,
    showBanner: result.clear ? false : state.console.showBanner,
  } }
}
