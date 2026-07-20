import { Component, type ReactNode } from "react"
import { StyleSheet, Text, View } from "react-native"
import { colors, radius, space } from "./theme"
import { AppButton } from "./ui"

// The mobile app had no error boundary, so any render throw -- a malformed deep
// link handing an unknown exam id to EXAMS[id], a bad progress blob -- was an
// unrecoverable white screen. React Native's own redbox only shows in dev.
interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <View style={styles.root}>
        <Text style={styles.title}>Something went wrong</Text>
        <Text style={styles.body}>
          The app hit an unexpected error. Your saved progress is safe on this device.
        </Text>
        <AppButton label="Try again" onPress={() => this.setState({ error: null })} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center",
    padding: space.lg,
    gap: space.md,
  },
  title: { color: colors.text, fontSize: 20, fontWeight: "800" },
  body: { color: colors.muted, fontSize: 14, lineHeight: 20, textAlign: "center", maxWidth: 320 },
})
