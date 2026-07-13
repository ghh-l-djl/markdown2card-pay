export const COPY = {
  zh: {
    eyebrow: "一笔很小的支持，一份很长的动力",
    headline: "不到一杯奶茶的钱，让好工具一直生长",
    lead: "Markdown2Card 的维护来自一个独立开发者。你的打赏不只是在关闭提醒，更是在告诉我：这个插件值得继续认真做下去。金额很少，但每一份支持都会让我非常感动，也会成为持续修复、优化和创作的动力。",
    once: "一次支持 · 永久有效",
    permanent: "一次付费，永久关闭支持提醒",
    devices: "不限设备数量，换电脑也能继续使用",
    recovery: "付款后请立即保存激活码；成功页可在 2 小时内恢复",
    refund: "付款后 7 天内可申请全额退款",
    paymentMethods: "银行卡、支付宝或微信支付是否显示，以 Stripe 结账页和你的所在地区为准。邮箱不是权益条件，但 Stripe 可能按支付方式要求联系信息。",
    checkout: "前往 Stripe 安全支付",
    creating: "正在创建安全支付页面…",
    createFailed: "暂时无法创建支付页面，请稍后重试。",
    successEyebrow: "感谢你的支持",
    confirming: "正在确认付款",
    confirmingDetail: "请保持页面打开，我们正在向 Stripe 确认付款状态。",
    paid: "付款成功，请保存激活码",
    pending: "付款仍在处理中",
    cancelled: "本次支付未完成",
    expired: "激活码已超过恢复期限",
    expiredDetail: "出于安全原因，原激活码已无法恢复。请通过下方邮箱或小红书联系支持，并附上 Session ID 申请重置。",
    failed: "暂时无法确认付款",
    retry: "重新检查",
    copy: "复制激活码",
    copied: "已复制",
    openObsidian: "打开 Obsidian 并自动激活",
    openHint: "推荐：一键返回插件完成激活；如果浏览器没有响应，再复制激活码。",
    saveWarning: "不要把完整激活码发送给任何人。关闭页面前请妥善保存。",
    support: "遇到异常？请附上支付时间和下方 Session ID 联系：",
    xiaohongshu: "小红书",
    privacy: "请勿在反馈中发送完整激活码。邮箱不用于营销。"
  },
  en: {
    eyebrow: "A small contribution, lasting motivation",
    headline: "Less than a coffee, useful for a lifetime",
    lead: "Markdown2Card is maintained by one independent developer. Your HK$20 does more than hide a reminder—it tells me this tool is worth caring for. Every contribution genuinely means a lot and helps motivate continued fixes, refinement, and new work.",
    once: "one-time support · permanent",
    permanent: "Pay once and permanently hide support reminders",
    devices: "Use on any number of devices",
    recovery: "Save the activation code immediately; this page can recover it for 2 hours",
    refund: "Request a full refund within 7 days",
    paymentMethods: "Cards, Alipay, and WeChat Pay appear only when eligible in Stripe Checkout. Email is not an entitlement requirement, though Stripe may request contact details for a payment method.",
    checkout: "Continue to secure Stripe Checkout",
    creating: "Creating a secure checkout…",
    createFailed: "Checkout is temporarily unavailable. Please try again.",
    successEyebrow: "Thank you for supporting the project",
    confirming: "Confirming your payment",
    confirmingDetail: "Keep this page open while we confirm the payment with Stripe.",
    paid: "Payment confirmed—save your activation code",
    pending: "Your payment is still processing",
    cancelled: "This payment was not completed",
    expired: "Activation-code recovery has expired",
    expiredDetail: "For security, the original code cannot be recovered. Contact support below with the Session ID to request a replacement.",
    failed: "We couldn't confirm the payment yet",
    retry: "Check again",
    copy: "Copy activation code",
    copied: "Copied",
    openObsidian: "Open Obsidian and activate",
    openHint: "Recommended: return to the plugin and activate in one click. Copy the code only if your browser cannot open Obsidian.",
    saveWarning: "Never send the full activation code to anyone. Save it before closing this page.",
    support: "Need help? Include the payment time and Session ID below when contacting:",
    xiaohongshu: "Xiaohongshu",
    privacy: "Do not include the activation code in support messages. Email is not used for marketing."
  }
};

export function resolveLanguage({ queryLanguage, savedLanguage, browserLanguage }) {
  if (queryLanguage === "zh" || queryLanguage === "en") return queryLanguage;
  if (savedLanguage === "zh" || savedLanguage === "en") return savedLanguage;
  return String(browserLanguage || "").toLowerCase().startsWith("zh") ? "zh" : "en";
}

export async function pollPayment(sessionId, requestStatus, options = {}) {
  const intervalMs = options.intervalMs ?? 2000;
  const maxAttempts = options.maxAttempts ?? 30;
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const result = await requestStatus(sessionId);
    if (result.status !== "pending") return result;
    if (attempt < maxAttempts - 1) await new Promise((resolve) => setTimeout(resolve, intervalMs));
  }
  return { status: "pending" };
}

export function obsidianActivationUri(sessionId) {
  return `obsidian://markdown2card-activate?session_id=${encodeURIComponent(sessionId)}`;
}

export function resolveApiBase({ override, hostname }) {
  if (override) return override.replace(/\/$/, "");
  if (hostname === "localhost" || hostname === "127.0.0.1") return "http://127.0.0.1:54321/functions/v1";
  return "https://api.markdown2card.invalid/functions/v1";
}

const API_BASE = resolveApiBase({
  override: window.MARKDOWN2CARD_API_BASE,
  hostname: window.location.hostname
});
const params = new URLSearchParams(window.location.search);
let language = resolveLanguage({
  queryLanguage: params.get("lang"),
  savedLanguage: localStorage.getItem("markdown2card-language"),
  browserLanguage: navigator.language
});
let paymentResult = null;

function translate() {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = COPY[language][element.dataset.i18n] || "";
  });
  if (paymentResult) renderPaymentStatus(paymentResult);
}

document.getElementById("language-toggle").addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  localStorage.setItem("markdown2card-language", language);
  translate();
});

async function post(path, body) {
  const response = await fetch(`${API_BASE}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!response.ok) throw new Error("request failed");
  return response.json();
}

const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", async () => {
  checkoutButton.disabled = true;
  document.getElementById("purchase-status").textContent = COPY[language].creating;
  const idempotencyKey = sessionStorage.getItem("markdown2card-checkout-key") || crypto.randomUUID();
  sessionStorage.setItem("markdown2card-checkout-key", idempotencyKey);
  try {
    const result = await post("create-checkout", {
      idempotencyKey,
      locale: language,
      origin: `${window.location.origin}${window.location.pathname}`
    });
    window.location.assign(result.url);
  } catch {
    checkoutButton.disabled = false;
    document.getElementById("purchase-status").textContent = COPY[language].createFailed;
  }
});

async function requestStatus(sessionId) {
  return post("claim-checkout", { sessionId });
}

async function showPaymentStatus(sessionId) {
  const retryButton = document.getElementById("retry-button");
  retryButton.hidden = true;
  retryButton.disabled = true;
  let result;
  try {
    result = await pollPayment(sessionId, requestStatus);
  } catch {
    result = { status: "failed" };
  }
  paymentResult = result;
  renderPaymentStatus(result);
}

function renderPaymentStatus(result) {
  const retryButton = document.getElementById("retry-button");
  const title = document.getElementById("success-title");
  const message = document.getElementById("success-message");
  title.textContent = COPY[language][result.status] || COPY[language].failed;
  if (result.status === "paid" && result.activationCode) {
    document.getElementById("activation-code").textContent = result.activationCode;
    document.getElementById("activation-result").hidden = false;
    message.textContent = COPY[language].saveWarning;
    document.getElementById("open-obsidian-button").href = obsidianActivationUri(params.get("session_id"));
    document.getElementById("open-obsidian-action").hidden = false;
    retryButton.disabled = false;
    retryButton.hidden = true;
    return;
  }
  document.getElementById("activation-result").hidden = true;
  document.getElementById("open-obsidian-action").hidden = true;
  message.textContent = result.status === "pending"
    ? COPY[language].confirmingDetail
    : result.status === "expired"
      ? COPY[language].expiredDetail
      : "";
  retryButton.hidden = false;
  retryButton.disabled = false;
}

document.getElementById("retry-button").addEventListener("click", () => showPaymentStatus(params.get("session_id")));
document.getElementById("copy-button").addEventListener("click", async () => {
  await navigator.clipboard.writeText(document.getElementById("activation-code").textContent);
  document.getElementById("copy-button").textContent = COPY[language].copied;
});

translate();
const sessionId = params.get("session_id");
if (sessionId) {
  document.getElementById("purchase-view").hidden = true;
  document.getElementById("success-view").hidden = false;
  document.getElementById("session-id").textContent = sessionId;
  showPaymentStatus(sessionId);
} else if (params.get("cancelled") === "1") {
  document.getElementById("purchase-status").textContent = COPY[language].cancelled;
}
