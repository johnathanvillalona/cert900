import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import Constants from "expo-constants"
import { ProgressContext, useProgressStore } from "./src/progress-store"
import { HomeScreen } from "./src/screens/HomeScreen"
import { DrillScreen } from "./src/screens/DrillScreen"
import { colors } from "./src/theme"

type Screen = { kind: "home" } | { kind: "drill"; examId: string }

export default function App() {
  const store = useProgressStore()
  const [screen, setScreen] = useState<Screen>({ kind: "home" })

  return (
    <ProgressContext.Provider value={store}>
      <View style={styles.root}>
        <StatusBar style="light" />
        {screen.kind === "home" ? (
          <HomeScreen onStart={(examId) => setScreen({ kind: "drill", examId })} />
        ) : (
          <DrillScreen examId={screen.examId} onExit={() => setScreen({ kind: "home" })} />
        )}
      </View>
    </ProgressContext.Provider>
  )
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg, paddingTop: Constants.statusBarHeight },
})
