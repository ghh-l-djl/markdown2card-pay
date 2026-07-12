# Markdown2Card purchase page

Static bilingual purchase and activation-code recovery page for GitHub Pages. It contains no privileged Stripe or Supabase secret.

## Local test

Run `npm test`, then serve this directory at `http://127.0.0.1:4173`. Localhost automatically uses `http://127.0.0.1:54321/functions/v1` unless `window.MARKDOWN2CARD_API_BASE` overrides it.

## Deploy

Before enabling GitHub Pages, replace the public Edge Functions base URL in `config.js` with `https://<project-ref>.supabase.co/functions/v1`. This URL is public configuration; never add the service-role key, Stripe secret key, webhook secret, activation-code pepper, or recovery encryption key here.
