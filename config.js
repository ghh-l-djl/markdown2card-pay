// Public configuration only. This contains no privileged Supabase key.
const LOCAL_API_BASE = "http://127.0.0.1:54321/functions/v1";
const PRODUCTION_API_BASE = "https://ikjspgriynhsnjilmmds.supabase.co/functions/v1";
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1", "[::1]"]);

export function resolveApiBase({ override, hostname }) {
  if (LOCAL_HOSTS.has(hostname)) return override ? override.replace(/\/$/, "") : LOCAL_API_BASE;
  if (hostname === "ghh-l-djl.github.io") return PRODUCTION_API_BASE;
  throw new Error("unsupported site origin");
}
