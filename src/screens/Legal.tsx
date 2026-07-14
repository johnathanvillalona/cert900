import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site"

const EFFECTIVE = "July 14, 2026"

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
          never leaves your browser. If you sign in with Google, we store your basic profile and
          your progress so it can follow you across devices. We do not sell data, we do not run
          tracking cookies, and you can delete everything yourself at any time.
        </p>
      </section>

      <section>
        <h2>What we store, and where</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <b className="text-foreground">Without an account:</b> your answers, scores, and
            settings are saved in your browser's local storage on your device. They are not sent to
            our servers. Clearing your browser data removes them.
          </li>
          <li>
            <b className="text-foreground">With a Google account:</b> we store the name, email
            address, and profile picture Google shares at sign-in, plus your practice progress, in
            our database (Cloudflare D1, hosted in the United States) so your progress syncs across
            devices.
          </li>
          <li>
            <b className="text-foreground">Question reports:</b> if you report a question, we store
            the report and a one-way hash of your IP address, used only to prevent abuse of the
            report button.
          </li>
        </ul>
      </section>

      <section>
        <h2>Cookies</h2>
        <p className="mt-2">
          Signed-in users get one session cookie so you stay signed in. That is the only cookie we
          set. There are no advertising or cross-site tracking cookies.
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
          Sign-in is handled by Google (their privacy policy applies to the sign-in step). The site
          is served by Cloudflare. Video links open Professor Messer's site in a new tab; we learn
          nothing about what you do there. We never sell or share your data for advertising.
        </p>
      </section>

      <section>
        <h2>Deleting your data</h2>
        <p className="mt-2">
          Open the account menu and choose Delete account. That permanently removes your account and
          all synced progress from our servers, immediately. Progress stored locally in a browser is
          removed by clearing that browser's site data.
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
