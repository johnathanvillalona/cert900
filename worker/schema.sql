-- Better Auth core schema (sqlite, camelCase columns) + app progress table.
-- Apply: npx wrangler d1 execute comptia-trainer --remote --file=worker/schema.sql
--   (drop --remote to apply to the local dev database)

CREATE TABLE IF NOT EXISTS "user" (
  "id" text NOT NULL PRIMARY KEY,
  "name" text NOT NULL,
  "email" text NOT NULL UNIQUE,
  "emailVerified" integer NOT NULL DEFAULT 0,
  "image" text,
  "createdAt" date NOT NULL,
  "updatedAt" date NOT NULL
);

CREATE TABLE IF NOT EXISTS "session" (
  "id" text NOT NULL PRIMARY KEY,
  "expiresAt" date NOT NULL,
  "token" text NOT NULL UNIQUE,
  "createdAt" date NOT NULL,
  "updatedAt" date NOT NULL,
  "ipAddress" text,
  "userAgent" text,
  "userId" text NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS "session_userId_idx" ON "session" ("userId");

CREATE TABLE IF NOT EXISTS "account" (
  "id" text NOT NULL PRIMARY KEY,
  "accountId" text NOT NULL,
  "providerId" text NOT NULL,
  "userId" text NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
  "accessToken" text,
  "refreshToken" text,
  "idToken" text,
  "accessTokenExpiresAt" date,
  "refreshTokenExpiresAt" date,
  "scope" text,
  "password" text,
  "createdAt" date NOT NULL,
  "updatedAt" date NOT NULL
);
CREATE INDEX IF NOT EXISTS "account_userId_idx" ON "account" ("userId");

CREATE TABLE IF NOT EXISTS "verification" (
  "id" text NOT NULL PRIMARY KEY,
  "identifier" text NOT NULL,
  "value" text NOT NULL,
  "expiresAt" date NOT NULL,
  "createdAt" date,
  "updatedAt" date
);
CREATE INDEX IF NOT EXISTS "verification_identifier_idx" ON "verification" ("identifier");

-- App data: one row per user per exam; blob is the ExamProgress JSON.
CREATE TABLE IF NOT EXISTS "progress" (
  "user_id" text NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
  "exam_id" text NOT NULL,
  "data" text NOT NULL,
  "updated_at" integer NOT NULL,
  PRIMARY KEY ("user_id", "exam_id")
);

-- Question reports from the "Report this question" button (no auth required).
-- ip_hash is a one-way SHA-256 of the client IP, kept only for rate limiting.
--
-- Also carries the credential-endpoint throttle counters, written with the
-- sentinel exam_id '__auth' (see worker/index.ts authThrottled). Reusing this
-- table avoids a migration that would have to land before the worker deploy or
-- auth would 500. ALWAYS exclude the sentinel when reading reports.
--
-- Triage now lives at /admin (owner-only) rather than in the shell, but the
-- equivalent query is:
--   npx wrangler d1 execute comptia-trainer --remote \
--     --command "SELECT exam_id, ref, COUNT(*) n FROM reports WHERE exam_id != '__auth' GROUP BY 1,2 ORDER BY n DESC"
--
-- resolved_at: set when the owner marks a question handled. Nullable, and set
-- on every row for that (exam_id, ref) -- a later report for the same question
-- arrives unresolved, so something that is still broken resurfaces on its own.
CREATE TABLE IF NOT EXISTS "reports" (
  "id" integer PRIMARY KEY AUTOINCREMENT,
  "exam_id" text NOT NULL,
  "ref" text NOT NULL,
  "ip_hash" text NOT NULL,
  "created_at" integer NOT NULL,
  "resolved_at" integer
);
CREATE INDEX IF NOT EXISTS "reports_created_idx" ON "reports" ("created_at");

-- MIGRATION for databases created before resolved_at existed. CREATE TABLE IF
-- NOT EXISTS above is a no-op on a live table, so this file alone does NOT
-- migrate production. Run once, by hand, BEFORE deploying the worker that reads
-- the column (pushing to main IS the deploy):
--   npx wrangler d1 execute comptia-trainer --remote \
--     --command "ALTER TABLE reports ADD COLUMN resolved_at INTEGER"

-- Weekly Reddit scanner output: threads asking about practice tests/PBQs.
-- Read: npx wrangler d1 execute comptia-trainer --remote \
--   --command "SELECT subreddit, title, url FROM leads ORDER BY created_at DESC LIMIT 20"
CREATE TABLE IF NOT EXISTS "leads" (
  "id" text PRIMARY KEY,
  "subreddit" text NOT NULL,
  "title" text NOT NULL,
  "url" text NOT NULL,
  "created_at" integer NOT NULL,
  "found_at" integer NOT NULL
);
