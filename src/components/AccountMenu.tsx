import { useState } from "react"
import { toast } from "sonner"
import { CloudCheck, CloudOff, LoaderCircle, LogOut, Trash2 } from "lucide-react"
import { useSession, signIn, signOut, deleteUser } from "@/lib/auth-client"
import { CONTACT_EMAIL } from "@/lib/site"
import { useProgress } from "@/hooks/useProgress"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function GoogleMark() {
  // Official multi-color Google "G" (Simple Icons path, brand colors preserved)
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

export function AccountMenu() {
  const { data: session, isPending } = useSession()
  const store = useProgress()
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [deleting, setDeleting] = useState(false)

  if (isPending) return <span className="w-9" />

  if (!session?.user) {
    return (
      <Button
        variant="outline"
        size="sm"
        data-testid="sign-in"
        aria-label="Sign in with Google"
        onClick={() => signIn.social({ provider: "google" })}
        className="gap-2"
      >
        <GoogleMark />
        {/* Label drops below sm: with search added, five controls plus a worded
            button overflowed the landing header at 360px. */}
        <span className="hidden sm:inline">Sign in</span>
      </Button>
    )
  }

  const u = session.user
  const initial = (u.name || u.email || "?").slice(0, 1).toUpperCase()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="cursor-pointer rounded-full outline-offset-2" aria-label="Account menu" data-testid="account-menu">
            <Avatar className="size-8">
              {u.image && <AvatarImage src={u.image} alt="" referrerPolicy="no-referrer" />}
              <AvatarFallback className="text-xs font-semibold">{initial}</AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-60">
          <DropdownMenuLabel>
            <p className="truncate font-medium">{u.name}</p>
            <p className="text-muted-foreground truncate text-xs font-normal">{u.email}</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="flex items-center gap-2 font-normal">
            {store.syncStatus === "syncing" && (
              <>
                <LoaderCircle className="size-3.5 animate-spin" strokeWidth={2} /> Syncing
              </>
            )}
            {store.syncStatus === "synced" && (
              <>
                <CloudCheck className="size-3.5 text-brand" strokeWidth={2} /> Progress synced
              </>
            )}
            {store.syncStatus === "error" && (
              <>
                <CloudOff className="size-3.5 text-destructive" strokeWidth={2} /> Sync error. Retrying on next answer
              </>
            )}
            {store.syncStatus === "local" && (
              <>
                <CloudOff className="size-3.5" strokeWidth={2} /> Local only
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()} data-testid="sign-out">
            <LogOut className="size-4" strokeWidth={2} /> Sign out
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive" onClick={() => setConfirmDelete(true)}>
            <Trash2 className="size-4" strokeWidth={2} /> Delete account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={confirmDelete} onOpenChange={setConfirmDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete your account?</DialogTitle>
            <DialogDescription>
              Removes your account and all synced progress from our servers permanently. Progress
              saved in this browser stays on this device.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDelete(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              disabled={deleting}
              onClick={async () => {
                setDeleting(true)
                try {
                  // 1. Synced progress rows, while the session is still valid. 401 is
                  // deliberately not fatal: it means this cookie can no longer reach the
                  // account, and the delete-user step below cascades the same rows
                  // (schema.sql declares progress.user_id ON DELETE CASCADE).
                  const cleared = await fetch("/api/progress", {
                    method: "DELETE",
                    credentials: "include",
                  })
                  if (!cleared.ok && cleared.status !== 401) {
                    throw new Error(`progress delete failed: ${cleared.status}`)
                  }
                  // 2. The account itself. deleteUser resolves { data, error } rather than
                  // throwing, so leaving it unchecked reports success on every failure,
                  // after step 1 already wiped the progress rows.
                  const res = await deleteUser()
                  if (res?.error) {
                    const expired =
                      res.error.code === "SESSION_EXPIRED" || res.error.status === 401
                    toast(expired ? "Sign in again to delete" : "Could not delete the account", {
                      description: expired
                        ? "Your saved sign-in is no longer valid, so we could not confirm the account is yours. Sign out, sign back in, then delete from here."
                        : `Your synced progress was cleared, but the account itself is still there. Try again, or email ${CONTACT_EMAIL}.`,
                    })
                    return
                  }
                  toast("Account deleted.")
                  setConfirmDelete(false)
                  try {
                    await signOut()
                  } catch {
                    /* the account is already gone; a failed sign-out is cosmetic */
                  }
                } catch {
                  toast("Could not delete the account", {
                    description: `Something went wrong reaching the server. Check your connection and try again, or email ${CONTACT_EMAIL}.`,
                  })
                } finally {
                  setDeleting(false)
                }
              }}
            >
              {deleting ? "Deleting" : "Delete permanently"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
