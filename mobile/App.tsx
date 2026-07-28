import { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import * as Linking from "expo-linking"
import { DarkTheme, NavigationContainer, type LinkingOptions, type Theme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ActivityIndicator } from "react-native"
import { ProgressContext, useProgressStore } from "./src/progress-store"
import { ErrorBoundary } from "./src/ErrorBoundary"
import { HomeScreen } from "./src/screens/HomeScreen"
import { ExamHomeScreen } from "./src/screens/ExamHomeScreen"
import { DrillScreen } from "./src/screens/DrillScreen"
import { ExamScreen } from "./src/screens/ExamScreen"
import { ResultsScreen } from "./src/screens/ResultsScreen"
import { ProgressScreen } from "./src/screens/ProgressScreen"
import { AccountScreen } from "./src/screens/AccountScreen"
import { OnboardingScreen } from "./src/screens/OnboardingScreen"
import { getFlag, setFlag } from "./src/storage"
import type { RootStackParamList } from "./src/navigation"
import { APP_SCHEME } from "./src/config"
import { colors } from "./src/theme"
import { BrandTitle, SyncHeaderButton } from "./src/ui"

const Stack = createNativeStackNavigator<RootStackParamList>()

// Navigation's own theme, driven by src/theme.ts. Without this the container
// paints its default light background for a frame on every push.
const navTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary,
    background: colors.bg,
    card: colors.bg,
    text: colors.text,
    border: colors.border,
    notification: colors.primary,
  },
}

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/"), `${APP_SCHEME}://`],
  // The Better Auth Expo client consumes the OAuth return itself: it reads the
  // session cookie off the WebBrowser result, not off a Linking event. Letting
  // the container route that URL would reset the stack mid sign-in.
  filter: (url) => !url.includes("cookie=") && !url.includes("+expo-auth-session"),
  // Only the screens that mean something cold: the rest need params a URL has
  // no way to carry (a graded QuizOutcome, a review queue's question ids).
  config: { screens: { Exams: "", Account: "account", ExamHome: "exam/:examId" } },
}

export default function App() {
  const store = useProgressStore()
  // `null` = flag not read yet, so neither the walkthrough nor the app flashes
  // before we know which to show.
  const [seenIntro, setSeenIntro] = useState<boolean | null>(null)
  useEffect(() => {
    void getFlag("onboarding").then(setSeenIntro)
  }, [])

  const booting = !store.ready || seenIntro === null
  /** Mark the walkthrough done, whether it finished or fell over. */
  const dismissIntro = () => {
    setSeenIntro(true)
    void setFlag("onboarding")
  }

  return (
    <ProgressContext.Provider value={store}>
      <SafeAreaProvider>
        <View style={styles.root}>
          <StatusBar style="light" />
          {/* Hold interactive UI until the async AsyncStorage load resolves, so
              no answer can be written against an empty in-memory blob and then
              overwritten when the load lands. */}
          {booting ? (
            <View style={styles.loading}>
              <ActivityIndicator color={colors.primary} />
            </View>
          ) : !seenIntro ? (
            // Outside the navigator on purpose: no back gesture into it, and no
            // route that could deep-link a returning user back to the intro.
            //
            // onError skips the walkthrough entirely if it throws. This screen
            // renders before the navigator on a first launch, so without the
            // escape hatch a render bug here would be an unescapable error
            // screen — the app would be unopenable rather than merely missing
            // its intro.
            <ErrorBoundary onError={dismissIntro}>
              <OnboardingScreen onDone={dismissIntro} />
            </ErrorBoundary>
          ) : (
            <ErrorBoundary>
              <NavigationContainer theme={navTheme} linking={linking}>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: colors.bg },
                headerTintColor: colors.text,
                headerTitleStyle: { color: colors.text, fontWeight: "700" },
                headerShadowVisible: false,
                contentStyle: { backgroundColor: colors.bg },
              }}
            >
              <Stack.Screen
                name="Exams"
                component={HomeScreen}
                options={({ navigation }) => ({
                  headerTitle: () => <BrandTitle />,
                  headerRight: () => <SyncHeaderButton onPress={() => navigation.navigate("Account")} />,
                })}
              />
              <Stack.Screen name="Account" component={AccountScreen} options={{ title: "Account" }} />
              <Stack.Screen name="ExamHome" component={ExamHomeScreen} options={{ title: "" }} />
              <Stack.Screen name="Drill" component={DrillScreen} options={{ title: "Drill" }} />
              <Stack.Screen name="Exam" component={ExamScreen} options={{ title: "Full exam" }} />
              <Stack.Screen name="Results" component={ResultsScreen} options={{ title: "Results" }} />
              <Stack.Screen name="Progress" component={ProgressScreen} options={{ title: "Progress" }} />
              </Stack.Navigator>
              </NavigationContainer>
            </ErrorBoundary>
          )}
        </View>
      </SafeAreaProvider>
    </ProgressContext.Provider>
  )
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  loading: { flex: 1, alignItems: "center", justifyContent: "center" },
})
