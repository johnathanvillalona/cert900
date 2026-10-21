import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site"

// Shared with prerendered legal-page metadata so the visible date and sitemap agree.
export const LEGAL_EFFECTIVE_DATE = "2026-10-21"
export const LEGAL_EFFECTIVE_LABEL = "October 21, 2026"

function LegalShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-2xl" data-testid="legal-page">
      <h1 className="font-heading text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="text-muted-foreground mt-1 font-mono text-xs">Effective {LEGAL_EFFECTIVE_LABEL}</p>
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
          stays on your device. With an account, we store your profile and synced progress so you
          can study across devices. Newsletter signup is optional and separate from an account.
          This website currently displays no ads, and Grow is paused.
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
            <b className="text-foreground">With an account:</b> we store your name, email address,
            profile picture when provided, sign-in records, and synced practice progress in
            Cloudflare D1. Google sign-in shares a name, email address, and profile picture. Apple
            sign-in in the iOS app can share a name and email address, including a private relay
            address if you choose Hide My Email. When email/password sign-in is available and you
            use it, we store your name, email address, and a password hash.
          </li>
          <li>
            <b className="text-foreground">Reports and security:</b> we store submitted question
            reports and use one-way hashes of IP addresses to limit abuse of reports, sign-in, and
            newsletter signup. Our hosting provider also processes network requests and may retain
            operational or security logs.
          </li>
          <li>
            <b className="text-foreground">Newsletter:</b> if you subscribe, we store your email
            address, confirmation and unsubscribe status, signup time, a confirmation/unsubscribe
            token, and an IP-address hash for abuse prevention. The daily question emails start
            after you confirm your subscription. The unsubscribe link stops future newsletter
            emails; the subscription record remains to honor that choice.
          </li>
        </ul>
      </section>

      <section>
        <h2>Cookies and the app session</h2>
        <p className="mt-2">
          Essential cookies support sign-in, authentication security, and session caching. Browser
          local storage keeps your progress, theme, and settings. Sign-in providers can use their
          own cookies during authentication. The mobile app keeps its session in device secure
          storage; signing out removes that saved session.
        </p>
      </section>

      <section>
        <h2>Analytics</h2>
        <p className="mt-2">
          We use Cloudflare Web Analytics for page counts and performance measurements. Cloudflare
          describes this service as cookieless and without device fingerprinting. Cloudflare also
          provides our website hosting and database services. See{" "}
          <a className="text-brand underline underline-offset-2" href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
            Cloudflare's privacy policy
          </a>
          .
        </p>
        <p className="mt-2">
          Optional Google Analytics 4 loads only after you choose Allow analytics and a Cert900
          measurement stream is configured. It measures pageviews and practice, PBQ, and exam
          starts and completions. Google also processes browser/device information, approximate
          geography, and browser identifiers used to estimate sessions and visitors. This is not
          anonymous tracking. We do not send your name, email, authentication information, answers,
          scores, question text, or command transcripts to Analytics. Reported page addresses omit
          query strings and fragments. Advertising personalization and Google Signals are disabled.
        </p>
        <p className="mt-2">
          Allow and Decline are optional choices in the footer. Use Change preferences there to
          withdraw permission. Your choice is saved on this browser for up to 180 days; if storage
          is unavailable it applies only until this page is reloaded or left. Analytics cookies may last up to
          180 days, subject to browser limits. Withdrawal stops future collection through this
          integration and removes its first-party Analytics cookies; it does not erase data already
          processed by Google. Retention is governed by the Analytics property's settings; aggregate
          reports can remain available longer. Google explains its processing in its{" "}
          <a className="text-brand underline underline-offset-2" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">partner-sites policy</a>.
          {" "}These analytics controls do not authorize advertising. Essential sign-in and progress
          storage, and the disclosed Cloudflare measurements, are separate.
        </p>
      </section>

      <section>
        <h2>Third parties</h2>
        <p className="mt-2">
          Optional provider sign-in is handled by{" "}
          <a className="text-brand underline underline-offset-2" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google</a>
          {" "}or, in our iOS app,{" "}
          <a className="text-brand underline underline-offset-2" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple</a>
          . Their privacy policies apply to those interactions. When email features are enabled,
          verification, password-reset, and newsletter messages are sent through Resend or
          Cloudflare's email service, depending on the configured transport. The delivery provider
          processes recipients' email addresses and message contents. See{" "}
          <a className="text-brand underline underline-offset-2" href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Resend's privacy policy</a>
          {" "}and Cloudflare's policy above.
        </p>
        <p className="mt-2">
          Study-video links open the instructor's website or YouTube. Those services process your
          visit under their own policies. Contacting us by email also shares your message and
          address with our email provider.
        </p>
      </section>

      <section>
        <h2>Advertising and Grow</h2>
        <p className="mt-2">
          Grow by Mediavine is paused, and its script is not loaded by this website. We have added
          a static HTML tag identifying our AdSense account for site verification. It does not
          load Google's advertising JavaScript, request ads, or set advertising cookies. AdSense
          is not currently serving ads here.
        </p>
        <p className="mt-2">
          Before enabling advertising, we will update this policy and put applicable consent and
          privacy choices in place. Google explains its advertising data practices and controls
          in{" "}
          <a className="text-brand underline underline-offset-2" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
            how Google uses information from partner sites and apps
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Deleting your data</h2>
        <p className="mt-2">
          Open the account menu and choose Delete account. A successful deletion removes your
          account and synced progress from the application database. Provider-managed backups and
          logs have separate retention controls. Progress stored locally is removed by clearing
          that browser's site data, or, in the app, with Erase progress on this device.
          Full instructions, including the mobile app and what to do if you cannot sign in, are on
          the{" "}
          <a className="text-brand underline underline-offset-2" href="/delete-account">
            delete your account
          </a>{" "}
          page. Newsletter subscriptions are separate: use the email's unsubscribe link to stop
          delivery, or contact us to request removal of subscription data. Question reports and
          abuse-prevention records are not linked to an account and remain after account deletion.
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
        <h2>From your account menu</h2>
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
          Confirm the deletion and wait for the success message. If a network or sign-in error
          occurs, follow the message to retry or contact us.
        </p>
      </section>

      <section>
        <h2>What deletion removes</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>Your account profile and stored sign-in credentials.</li>
          <li>Practice progress synced to the application database, including scores, exam history, and review progress.</li>
          <li>Server-side sign-in sessions associated with your account.</li>
        </ul>
        <p className="mt-2">
          The application has no account-restore feature. Provider-managed backups and operational
          logs have separate retention controls. Deleting a Cert900 account does not delete your
          independent Google or Apple account.
        </p>
      </section>

      <section>
        <h2>What stays behind</h2>
        <p className="mt-2">
          Progress saved locally in a browser or app you used stays on that device. Clear it by
          clearing that browser's site data, or, in the mobile app, by choosing
          "Also erase progress on this device" after deleting, or "Erase progress on this device"
          from the Account screen. Anonymous question reports are not tied to an account and are not
          affected. Newsletter subscriptions are also separate from your account. Use the
          unsubscribe link in an email to stop delivery, or contact us to request removal of
          subscription data.
        </p>
      </section>

      <section>
        <h2>If you cannot sign in</h2>
        <p className="mt-2">
          Email{" "}
          <a className="text-brand underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}?subject=Delete%20my%20account`}>
            {CONTACT_EMAIL}
          </a>{" "}
          from the address you signed up with and ask us to delete the account. We may need to
          confirm account ownership before acting on the request.
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
          {SITE_NAME} is a free study tool for CompTIA, Cisco, Amazon Web Services, and Microsoft
          certification candidates. It is provided as is, with no guarantee of availability,
          accuracy, or exam results. Passing a practice exam here does not guarantee passing the
          real one.
        </p>
      </section>

      <section>
        <h2>Independent study content</h2>
        <p className="mt-2">
          This site is not affiliated with, endorsed by, or sponsored by CompTIA, Cisco, Amazon Web
          Services, Microsoft, or the instructors whose resources we link. Certification names and
          trademarks belong to their respective owners. Practice questions and simulations are
          original study content written for this site, rather than official examination items.
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
