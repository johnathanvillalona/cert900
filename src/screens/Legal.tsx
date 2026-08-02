import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site"

const EFFECTIVE = "July 20, 2026"

function LegalShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-2xl" data-testid="legal-page">
      <h1 className="font-heading text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="text-muted-foreground mt-1 font-mono text-xs">Effective {EFFECTIVE}</p>
      <div className="mt-6 flex flex-col gap-6 text-sm leading-relaxed [&_h2]:font-heading [&_h2]:text-lg [&_h2]:font-semibold [&_p]:text-muted-foreground [&_li]:text-muted-foreground">
        {children}
      </div>
    </main>
  )
}

export function Privacy() {
  return (
    <LegalShell title="Privacy policy">
      <section>
        <h2>The short version</h2>
        <p className="mt-2">
          You can use everything here without an account, and in that case your practice progress
          never leaves your device. If you sign in with Google, or with Apple in our iOS app, we
          store your basic profile and your progress so it can follow you across devices. We do not
          sell data, we do not run tracking cookies, and you can delete everything yourself at any
          time.
        </p>
      </section>

      <section>
        <h2>What we store, and where</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <b className="text-foreground">Without an account:</b> your answers, scores, and
            settings are saved on your own device, in your browser's local storage on the web and in
            the app's local storage on your phone. They are not sent to our servers. Clearing your
            browser's site data removes them on the web; in the app, use Erase progress on this
            device on the Account screen.
          </li>
          <li>
            <b className="text-foreground">With an account:</b> we store the name and email address
            your sign-in provider shares, a profile picture if it provides one, plus your practice
            progress, in our database (Cloudflare D1, hosted in the United States) so your progress
            syncs across devices. Google shares a name, email address, and profile picture. Apple
            shares an email address and, only on the first sign-in, a name; if you choose Hide My
            Email, the address we receive is Apple's private relay address, not your real one.
          </li>
          <li>
            <b className="text-foreground">Question reports:</b> if you report a question, we store
            the report and a one-way hash of your IP address, used only to prevent abuse of the
            report button.
          </li>
        </ul>
      </section>

      <section>
        <h2>Cookies and the app session</h2>
        <p className="mt-2">
          Signed-in users get one session cookie so you stay signed in. There are no advertising or
          cross-site tracking cookies anywhere on this site. The app has no browser and no cookies:
          it keeps the same session in your device's secure storage, the keychain on iOS and the
          keystore on Android, and signing out removes it.
        </p>
        <p className="mt-2">
          Our study-guide articles (the pages linked in the footer) run Grow, a small
          content-sharing widget by Mediavine. It sets a first-party cookie that records only its
          own script version, identifies nobody, and does not follow you across sites. Grow never
          loads inside the practice app itself. If you choose to sign in to Grow to save favorite
          articles, that is a separate, optional account governed by{" "}
          <a
            className="text-brand underline-offset-2 hover:underline"
            href="https://www.mediavine.com/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mediavine's privacy policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Analytics</h2>
        <p className="mt-2">
          We use Cloudflare Web Analytics, which is cookieless and does not fingerprint devices or
          track you across sites. It tells us page counts and performance, not who you are.
        </p>
      </section>

      <section>
        <h2>Third parties</h2>
        <p className="mt-2">
          Sign-in is handled by Google, or by Apple in our iOS app; the provider's own privacy
          policy applies to the sign-in step. The site is served by Cloudflare. Video links open
          Professor Messer's site or YouTube in your browser; we learn nothing about what you do
          there. We never sell or share your data for advertising.
        </p>
      </section>

      <section>
        <h2>Deleting your data</h2>
        <p className="mt-2">
          Open the account menu and choose Delete account. That permanently removes your account and
          all synced progress from our servers, immediately. Progress stored locally is removed by
          clearing that browser's site data, or, in the app, with Erase progress on this device.
          Full instructions, including the mobile app and what to do if you cannot sign in, are on
          the{" "}
          <a className="text-brand underline underline-offset-2" href="/delete-account">
            delete your account
          </a>{" "}
          page.
        </p>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p className="mt-2">
          If this policy changes in a way that matters, the effective date above changes with it.
          Questions or requests:{" "}
          <a className="text-brand underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalShell>
  )
}

/**
 * Standalone deletion instructions. Google Play's Data safety form requires a
 * public web URL for account deletion that a reviewer can open without
 * installing the app, so this has to be its own page and not a paragraph inside
 * the privacy policy.
 */
export function DeleteAccount() {
  return (
    <LegalShell title="Delete your account">
      <section>
        <h2>Delete it yourself, in seconds</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <b className="text-foreground">On the web:</b> sign in at{" "}
            <a className="text-brand underline underline-offset-2" href={SITE_URL}>
              {SITE_URL.replace("https://", "")}
            </a>
            , open the account menu in the top right, and choose Delete account.
          </li>
          <li>
            <b className="text-foreground">In the mobile app:</b> tap Account in the top right of the
            exam list, then Delete account.
          </li>
        </ul>
        <p className="mt-2">
          Both ask you to confirm once, then delete immediately. There is nothing to wait for and no
          request to file.
        </p>
      </section>

      <section>
        <h2>What deletion removes</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>Your account, including the name, email address, and any profile picture your sign-in provider shared.</li>
          <li>All practice progress synced to our servers: answers, scores, exam history, and review queues.</li>
          <li>Your sign-in session, including the copy the app keeps in your device's secure storage. You are signed out everywhere.</li>
        </ul>
        <p className="mt-2">
          This is immediate and permanent. We keep no backup copy of a deleted account, so there is
          no way to restore it afterward.
        </p>
      </section>

      <section>
        <h2>What stays behind</h2>
        <p className="mt-2">
          Progress saved locally in a browser or app you used stays on that device, because it never
          left it. Clear it by clearing that browser's site data, or, in the mobile app, by choosing
          "Also erase progress on this device" after deleting, or "Erase progress on this device"
          from the Account screen. Anonymous question reports are not tied to an account and are not
          affected.
        </p>
      </section>

      <section>
        <h2>If you cannot sign in</h2>
        <p className="mt-2">
          Email{" "}
          <a className="text-brand underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}?subject=Delete%20my%20account`}>
            {CONTACT_EMAIL}
          </a>{" "}
          from the address you signed up with and ask us to delete the account. We will confirm once
          it is done.
        </p>
      </section>
    </LegalShell>
  )
}

export function Terms() {
  return (
    <LegalShell title="Terms of use">
      <section>
        <h2>What this is</h2>
        <p className="mt-2">
          {SITE_NAME} is a free study tool for CompTIA certification candidates. It is provided as
          is, with no guarantee of availability, accuracy, or exam results. Passing a practice exam
          here does not guarantee passing the real one.
        </p>
      </section>

      <section>
        <h2>Not affiliated with CompTIA</h2>
        <p className="mt-2">
          This site is not affiliated with, endorsed by, or sponsored by CompTIA or Professor
          Messer. CompTIA A+ and Network+ are registered trademarks of CompTIA, Inc. All practice
          questions are original work written for this site; they are not real exam questions, and
          using this site never involves exam content disclosure.
        </p>
      </section>

      <section>
        <h2>Fair use</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>Use the site for personal study as much as you like, free of charge.</li>
          <li>Do not scrape, bulk-download, or republish the question bank.</li>
          <li>Do not attack, overload, or attempt to break the service.</li>
          <li>One account per person; accounts that abuse the service may be removed.</li>
        </ul>
      </section>

      <section>
        <h2>Liability</h2>
        <p className="mt-2">
          To the maximum extent permitted by law, this site and its operator are not liable for any
          damages arising from use of the service, including lost progress, lost time, or exam
          outcomes. The service may change or shut down at any time, though we will try to be
          decent about it.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p className="mt-2">
          Questions about these terms:{" "}
          <a className="text-brand underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalShell>
  )
}
