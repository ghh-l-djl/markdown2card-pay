// Public configuration only. This contains no privileged Supabase key.
window.MARKDOWN2CARD_API_BASE = ["localhost", "127.0.0.1"].includes(window.location.hostname)
  ? "http://127.0.0.1:54321/functions/v1"
  : "https://ikjspgriynhsnjilmmds.supabase.co/functions/v1";
