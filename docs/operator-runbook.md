# Operator runbook

## Static checks

```bash
npm test
npm run serve
```

Open `http://127.0.0.1:4173/?lang=zh` and repeat with `lang=en`. Confirm the page calls local Supabase and that all purchase, policy, recovery, and support copy remains bilingual.

## Interactive Stripe Test Mode

The sibling backend must be running with:

```bash
npm run supabase:start
npm run supabase:reset
npm run supabase:serve
```

Its ignored `supabase/functions/.env` must use an `sk_test_...` key, set this page as `PURCHASE_PAGE_URL`, and omit `STRIPE_API_BASE`. Do not use `supabase:serve:test`; that command expects the automated test process to provide a fake Stripe API on port 8787.

Complete a test Checkout and verify:

- Stripe returns with only `session_id` and `lang`.
- Pending polling stops on paid and shows one code.
- Refreshing or reopening the same success URL within two hours shows the same code.
- “Open Obsidian” produces a URI containing only the Session ID.
- After locally forcing `recovery_expires_at` to `now()`, the page hides code actions and shows support/reset guidance.

## GitHub Pages deployment

Push `main`, then confirm the `pages-build-deployment` workflow succeeds. On the deployed page, inspect the network destination and verify it uses the production Supabase host, never `127.0.0.1` or `api.markdown2card.invalid`.

If old copy remains visible after a successful deployment, hard-refresh the browser cache. If production calls the wrong host, check `config.js` first; it is loaded before `app.js` and is the production override.
