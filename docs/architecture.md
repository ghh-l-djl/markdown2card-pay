# Architecture

This repository is a static GitHub Pages client. It has no server session, database access, privileged Supabase key, or Stripe secret.

## Runtime configuration

`config.js` sets `window.MARKDOWN2CARD_API_BASE`:

- `localhost` and `127.0.0.1` use `http://127.0.0.1:54321/functions/v1`.
- Every other host uses the fixed production Supabase Edge Functions base.

The fallback in `app.js` is deliberately invalid for non-local hosts. A production deployment therefore cannot silently call the buyer's localhost if `config.js` is missing or broken.

## Purchase state flow

1. Language resolves from `?lang=`, saved preference, then browser language.
2. The purchase button creates or reuses a UUID in `sessionStorage`, disables itself, and calls `create-checkout`.
3. The browser follows the returned Stripe-hosted Checkout URL.
4. Stripe returns to this page with `session_id` or `cancelled=1`; no activation code is placed in the URL.
5. The success page calls `claim-checkout` every two seconds, up to 30 attempts.
6. A paid result displays and can copy the code. The Obsidian URI carries only the Session ID so the plugin claims the code itself.
7. An expired result hides all code actions and tells the user to contact support with the Session ID for a new activation code.

## Browser-held data

- `localStorage`: selected language only.
- `sessionStorage`: one Checkout idempotency UUID.
- URL: language, cancellation flag, and opaque Stripe Session ID only.
- DOM/clipboard: activation code only while a paid response is visible and the user explicitly copies it.

The page uses no advertising tracker or behavioral analytics.
