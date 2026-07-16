// The shared web module ../src/lib/progress.ts references `localStorage` inside
// createLocalStorage(). The mobile app never calls that function (it uses an
// AsyncStorage-backed Storage instead), but the type-checker still parses the
// file. This ambient declaration covers just the subset it touches so the RN
// type lib does not need the full DOM lib.
declare var localStorage: {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}
