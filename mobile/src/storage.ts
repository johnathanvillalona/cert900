import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORE_KEY, validateProgressAll, type ProgressAll } from "@/lib/progress"
import { UPDATED_AT_KEY, type UpdatedAtMap } from "@/lib/sync"

// Same keys and JSON shape as the web app (comptia-trainer-v1 blob +
// comptia-trainer-updated-at map), so a signed-in user's cloud data round-trips
// identically. localStorage is replaced by AsyncStorage; the web's synchronous
// Storage interface is not implemented because AsyncStorage is async — the store
// loads once into memory at startup and persists in the background on change.

export async function loadAll(): Promise<ProgressAll> {
  try {
    const raw = await AsyncStorage.getItem(STORE_KEY)
    if (raw) return validateProgressAll(JSON.parse(raw))
  } catch {
    /* corrupt or unavailable — start fresh */
  }
  return {}
}

export async function saveAll(all: ProgressAll): Promise<void> {
  try {
    await AsyncStorage.setItem(STORE_KEY, JSON.stringify(all))
  } catch {
    /* quota/unavailable — keep going in memory */
  }
}

export async function loadUpdatedAt(): Promise<UpdatedAtMap> {
  try {
    return JSON.parse((await AsyncStorage.getItem(UPDATED_AT_KEY)) ?? "{}")
  } catch {
    return {}
  }
}

export async function saveUpdatedAt(m: UpdatedAtMap): Promise<void> {
  try {
    await AsyncStorage.setItem(UPDATED_AT_KEY, JSON.stringify(m))
  } catch {
    /* in-memory only */
  }
}

/**
 * Removes both progress keys from the device. Only these two: other AsyncStorage
 * keys are not ours, and the auth session lives in SecureStore, not here.
 */
export async function clearLocal(): Promise<void> {
  try {
    await AsyncStorage.multiRemove([STORE_KEY, UPDATED_AT_KEY])
  } catch {
    /* unavailable — the in-memory reset below is still what the user sees */
  }
}
