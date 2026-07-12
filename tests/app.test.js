import assert from "node:assert/strict";
import test from "node:test";

globalThis.window = { location: { search: "", origin: "http://localhost", pathname: "/", hostname: "localhost", assign() {} } };
globalThis.document = { getElementById: () => ({ addEventListener() {}, hidden: false, dataset: {} }), querySelectorAll: () => [], documentElement: {} };
globalThis.localStorage = { getItem: () => null, setItem() {} };
globalThis.sessionStorage = { getItem: () => null, setItem() {} };
Object.defineProperty(globalThis, "navigator", {
  value: { language: "en", clipboard: { writeText: async () => undefined } },
  configurable: true
});

const { COPY, pollPayment, resolveApiBase, resolveLanguage } = await import("../app.js");

test("language priority is query, saved preference, then browser language", () => {
  assert.equal(resolveLanguage({ queryLanguage: "zh", savedLanguage: "en", browserLanguage: "en-US" }), "zh");
  assert.equal(resolveLanguage({ queryLanguage: null, savedLanguage: "en", browserLanguage: "zh-CN" }), "en");
  assert.equal(resolveLanguage({ queryLanguage: null, savedLanguage: null, browserLanguage: "zh-CN" }), "zh");
  assert.equal(resolveLanguage({ queryLanguage: null, savedLanguage: null, browserLanguage: "fr-FR" }), "en");
});

test("production never silently calls the buyer's localhost", () => {
  assert.equal(resolveApiBase({ hostname: "localhost" }), "http://127.0.0.1:54321/functions/v1");
  assert.equal(resolveApiBase({ hostname: "ghh-l-djl.github.io" }), "https://api.markdown2card.invalid/functions/v1");
  assert.equal(resolveApiBase({ override: "https://project.supabase.co/functions/v1/", hostname: "ghh-l-djl.github.io" }), "https://project.supabase.co/functions/v1");
});

test("payment polling stops on paid and returns the activation code", async () => {
  const responses = [{ status: "pending" }, { status: "pending" }, { status: "paid", activationCode: "M2C-TEST" }];
  const result = await pollPayment("cs_test_123", async () => responses.shift(), { intervalMs: 0, maxAttempts: 30 });
  assert.deepEqual(result, { status: "paid", activationCode: "M2C-TEST" });
});

test("payment polling remains pending after sixty seconds worth of attempts", async () => {
  let attempts = 0;
  const result = await pollPayment("cs_test_123", async () => {
    attempts += 1;
    return { status: "pending" };
  }, { intervalMs: 0, maxAttempts: 30 });
  assert.equal(attempts, 30);
  assert.deepEqual(result, { status: "pending" });
});

test("both languages disclose the permanent entitlement and recovery terms", () => {
  for (const language of ["zh", "en"]) {
    const copy = COPY[language];
    assert.match(copy.devices, /不限|any number/i);
    assert.match(copy.permanent, /永久|permanent/i);
    assert.match(copy.recovery, /2 hours|2 小时/i);
    assert.match(copy.refund, /7 days|7 天/i);
  }
});
