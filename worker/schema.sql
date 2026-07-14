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
-- Read them with: npx wrangler d1 execute comptia-trainer --remote \
--   --command "SELECT exam_id, ref, COUNT(*) n FROM reports GROUP BY 1,2 ORDER BY n DESC"
CREATE TABLE IF NOT EXISTS "reports" (
  "id" integer PRIMARY KEY AUTOINCREMENT,
  "exam_id" text NOT NULL,
  "ref" text NOT NULL,
  "ip_hash" text NOT NULL,
  "created_at" integer NOT NULL
);
CREATE INDEX IF NOT EXISTS "reports_created_idx" ON "reports" ("created_at");
