# B1 real-hook tests

Run `npm run test:simulations` with installed Google Chrome. No browser download,
new dependency or lifecycle-script approval is needed.

`harness.html` / `harness.tsx` mount the real session hook under React Strict Mode
with fixture bank slices and in-memory progress. The Vite server has no project
configuration or env loading, listens only on 127.0.0.1:4175 and uses no Worker,
authentication, backend, database or external services. The browser allows only
that origin. These fixture files are outside the production HTML/public roots.
They are not a learner-facing CLI preview and are not shipped in the build.

Tests cover queued action/grade ordering; repeated grading and exactly-once
callbacks; fresh retry; post-grade/post-finish locking; navigation/reset isolation;
frozen definition versions; and existing exam weighting/scaling/progress folding.
Unit model/registry/grading tests live in `src/simulations/foundation.test.ts`.
The virtual DHCP command parser/workspace is the next milestone, B2.

See `docs/pbq-simulator-b1.md` for the rubric and B2 syntax review gate. Existing
PBQ screenshots can be checked on another port without stopping the reviewed
preview: `CERT900_TEST_PORT=4176 npm run test:browser` (build first).
