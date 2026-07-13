# Markdown2Card purchase page

Static bilingual purchase and activation-code recovery page for GitHub Pages. It contains no privileged Stripe or Supabase secret.

## Local test

Run `npm test`, then `npm run serve` and open `http://127.0.0.1:4173`. Localhost automatically uses `http://127.0.0.1:54321/functions/v1` unless `window.MARKDOWN2CARD_API_BASE` overrides it.

For an interactive Stripe Test Mode purchase, the sibling backend must be running with `npm run supabase:serve`, using its ignored real Test Mode environment. `npm run supabase:serve:test` is reserved for deterministic HTTP tests and points Stripe calls at a temporary fake server; it cannot open a real Checkout page.

## Deploy

`config.js` selects localhost only when this page itself is served from `localhost` or `127.0.0.1`; every other host uses the fixed production Edge Functions URL. The URL is public configuration. Never add the service-role key, Stripe secret key, webhook secret, activation-code pepper, recovery encryption key, administrator token, or an activation code here.

See `docs/architecture.md` for the browser flow and `docs/operator-runbook.md` for local and GitHub Pages checks.
