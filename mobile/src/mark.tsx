import Svg, { Rect, Path } from "react-native-svg"
import { colors } from "./theme"

/**
 * Dial-9 brand mark: a gauge arc that resolves into the "9" of 900 (the
 * perfect CompTIA score). Same path data as the web favicon / Wordmark and
 * the icon generator — keep all in sync.
 */
export function DialMark({ size = 26 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Rect width={64} height={64} rx={14} fill={colors.card} stroke={colors.border} strokeWidth={3} />
      <Path d="M 44.02 19.11 A 13 13 0 1 1 38.7 14.32" fill="none" stroke={colors.primary} strokeWidth={6} strokeLinecap="round" />
      <Path d="M 44.02 19.11 C 46.02 29.11, 35 46, 27.5 48.5" fill="none" stroke={colors.primary} strokeWidth={6} strokeLinecap="round" />
    </Svg>
  )
}
