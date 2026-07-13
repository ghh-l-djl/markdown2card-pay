# Repository Guidelines

## Scope

This public repository is the static bilingual purchase and success page for Markdown2Card. It may contain only browser-safe HTML, CSS, JavaScript, images, and a public Supabase Edge Functions base URL. Stripe, database, encryption, webhook, administrator, and activation-code secrets belong in the private sibling `markdown2card-backend` repository.

## Structure and commands

- `index.html`: purchase, policy, contact, and success-page structure.
- `app.js`: bilingual copy, language selection, Checkout creation, payment polling, rendering, and Obsidian callback.
- `config.js`: public localhost/production API routing only.
- `styles.css`: responsive presentation.
- `tests/app.test.js`: pure browser-flow and copy contracts.
- `npm test`: run all tests.
- `npm run serve`: serve the page at `http://127.0.0.1:4173`.

Use ES modules, two-space indentation, and matching Chinese/English copy keys. Keep language priority as explicit query language, saved preference, then browser language. Do not add a framework or build step unless the static-site constraints materially change.

## Payment and recovery rules

The page sends only UUID idempotency keys, locale, and Stripe Checkout Session IDs to public Edge Functions. Activation codes must never appear in a URL. “Open Obsidian” carries only `session_id`.

The success page polls every two seconds for at most 60 seconds and supports `pending`, `paid`, `cancelled`, `failed`, and `expired`. Only `paid` displays a code. After recovery expires, explain that the page no longer shows the code and direct the buyer to contact support with the Session ID for a new code. Never ask users to send an activation code in feedback.

Localhost routes to local Supabase; all other hosts route to the fixed production Supabase project. Interactive Stripe testing requires the backend's `supabase:serve` command. Its `supabase:serve:test` command intentionally uses a fake Stripe API and is not a browser payment environment.

## Verification and deployment

Run `npm test` and `git diff --check`. Manually verify Chinese and English, cancellation, pending/retry, paid code display, copy, Obsidian callback, expired recovery guidance, both support methods, and mobile layout. Pushes to `main` trigger GitHub Pages; confirm the Pages workflow succeeds and production does not call a buyer's localhost.
