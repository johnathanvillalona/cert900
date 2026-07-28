import { useRef, useState } from "react"
import { Dimensions, FlatList, Pressable, StyleSheet, Text, View, type ViewToken } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { EXAM_ORDER } from "@/data/meta"
import { AppButton } from "../ui"
import { colors, radius, space } from "../theme"

/**
 * First-launch walkthrough.
 *
 * Testers asked for one: the app dropped straight into an exam list with no
 * explanation of drills vs timed exams, the review queue, or why sign-in is
 * optional. Shown once, gated on a local flag (see storage.ts `getFlag`), and
 * always skippable — a walkthrough you cannot escape is worse than none.
 *
 * Rendered instead of the navigator rather than as a stack screen, so there is
 * no back gesture into it and no route to deep-link to it by accident.
 */
const CARDS = [
  {
    title: `${EXAM_ORDER.length} certifications, all free`,
    body: "CompTIA, Cisco, AWS, and Microsoft. Every question, every timed exam, and every performance-based question is free, with no account and no paywall.",
  },
  {
    title: "Drill short, or sit the real thing",
    body: "Drills are quick adaptive rounds that explain each answer as you go. Full exams are timed, use the real question mix, and are scored on that exam's actual scale and pass line.",
  },
  {
    title: "Your misses come back",
    body: "Anything you get wrong returns on a spaced schedule until it sticks, and every question links to a free training video for that exact topic.",
  },
  {
    title: "Works offline. Sign-in is optional",
    body: "Everything runs on the device and your progress is saved here. Signing in only adds syncing, so you can practice on your phone and review on the web.",
  },
]

const { width } = Dimensions.get("window")

export function OnboardingScreen({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0)
  const listRef = useRef<FlatList>(null)
  const last = index === CARDS.length - 1

  const onViewable = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    const first = viewableItems[0]
    if (first?.index != null) setIndex(first.index)
  }).current

  const next = () => {
    if (last) onDone()
    else listRef.current?.scrollToIndex({ index: index + 1, animated: true })
  }

  return (
    <SafeAreaView style={styles.root} testID="onboarding">
      <View style={styles.skipRow}>
        <Pressable onPress={onDone} testID="onboarding-skip" accessibilityRole="button">
          <Text style={styles.skip}>Skip</Text>
        </Pressable>
      </View>

      <FlatList
        ref={listRef}
        data={CARDS}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(c) => c.title}
        onViewableItemsChanged={onViewable}
        viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
        getItemLayout={(_, i) => ({ length: width, offset: width * i, index: i })}
        renderItem={({ item }) => (
          <View style={[styles.card, { width }]}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
      />

      <View style={styles.dots}>
        {CARDS.map((c, i) => (
          <View key={c.title} style={[styles.dot, i === index && styles.dotOn]} />
        ))}
      </View>

      <View style={styles.footer}>
        <AppButton
          label={last ? "Start practicing" : "Next"}
          onPress={next}
          testID={last ? "onboarding-done" : "onboarding-next"}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  skipRow: { alignItems: "flex-end", paddingHorizontal: space.lg, paddingTop: space.sm },
  skip: { color: colors.muted, fontSize: 15, fontWeight: "600", padding: space.xs },
  card: { flex: 1, justifyContent: "center", paddingHorizontal: space.lg },
  title: { color: colors.text, fontSize: 26, fontWeight: "800", lineHeight: 32 },
  body: { color: colors.muted, fontSize: 16, lineHeight: 24, marginTop: space.md },
  dots: { flexDirection: "row", justifyContent: "center", gap: space.sm, paddingVertical: space.lg },
  dot: {
    width: 7,
    height: 7,
    borderRadius: radius.sm,
    backgroundColor: colors.border,
  },
  dotOn: { backgroundColor: colors.primary },
  footer: { paddingHorizontal: space.lg, paddingBottom: space.lg },
})
