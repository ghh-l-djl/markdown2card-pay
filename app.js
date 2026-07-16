import { resolveApiBase } from "./config.js";

export const BUSINESS = Object.freeze({
  merchantName: "ai-vibe",
  supportPhone: "+86 198 4612 4356",
  supportPhoneHref: "tel:+8619846124356"
});

export const COPY = {
  zh: {
    eyebrow: "Obsidian 插件永久授权",
    headline: "购买 Markdown2Card 永久授权",
    lead: "Markdown2Card 是一款将 Markdown 内容转换为便于分享的图片卡片的 Obsidian 插件。一次付费即可获得永久授权，不包含订阅或自动续费。",
    once: "一次性付费 · 永久授权",
    permanent: "一次付费，永久使用并关闭支持提醒",
    devices: "不限设备数量，换电脑也能继续使用",
    recovery: "付款成功后立即显示激活码；成功页可在 2 小时内恢复",
    refund: "付款成功后 7 天内可申请全额退款",
    paymentMethods: "银行卡、支付宝或微信支付是否显示，以 Stripe 结账页和你的所在地区为准。邮箱不是权益条件，但 Stripe 可能按支付方式要求联系信息。",
    checkout: "购买永久授权",
    navProduct: "产品说明",
    navPolicies: "购买政策",
    navContact: "联系我们",
    productEyebrow: "产品与交付",
    productTitle: "你购买的是什么",
    productDescription: "Markdown2Card 将 Obsidian 中的 Markdown 内容转换为图片卡片，适合将笔记、摘录和长文内容整理成便于分享的视觉形式。",
    productUseTitle: "使用权益",
    productUse: "付款后获得个人永久授权，可在多台个人设备上使用，无订阅费。",
    productDeliveryTitle: "数字交付",
    productDelivery: "Stripe 确认付款后，本页会立即显示激活码，并提供返回 Obsidian 完成激活的入口。",
    productPreviewCaption: "Markdown2Card 实际导出效果：将一篇 Markdown 笔记自动分页为多张图片卡片。",
    productLink: "查看产品说明与源代码",
    policiesEyebrow: "透明购买",
    policiesTitle: "交付、退款与数据政策",
    deliveryTitle: "数字商品交付",
    deliveryPolicy: "本商品不需要物流。付款成功后，激活码会立即显示在成功页。请在关闭页面前保存；如交付异常，请携带支付时间和 Session ID 联系客服。",
    refundTitle: "7 天退款政策",
    refundPolicy: "付款成功后 7 天内，购买者可通过下方联系方式申请全额退款。请提供支付时间和 Stripe Session ID，不要发送完整激活码。确认后退款将原路返回，到账时间以支付渠道为准。",
    privacyTitle: "隐私政策",
    privacyPolicy: "付款信息由 Stripe 安全处理；本页不存储银行卡、支付宝或微信支付账户详情。我们会处理完成交付、激活、限时激活码恢复和客服所需的交易状态、Session ID 与激活交付数据。客服联系信息不用于营销。",
    termsTitle: "服务条款",
    termsPolicy: "此交易为一次性个人使用授权，不是订阅，不会自动续费。激活码不得转售、公开或与他人共享。产品会持续维护，具体功能可随版本更新。",
    merchantLabel: "商家名称",
    merchantName: BUSINESS.merchantName,
    supportPhoneLabel: "客服电话",
    supportPhone: BUSINESS.supportPhone,
    supportEmailLabel: "客服邮箱",
    securePayment: "支付由 Stripe Checkout 安全处理。",
    creating: "正在创建安全支付页面…",
    createFailed: "暂时无法创建支付页面，请稍后重试。",
    successEyebrow: "感谢购买 Markdown2Card",
    confirming: "正在确认付款",
    confirmingDetail: "请保持页面打开，我们正在向 Stripe 确认付款状态。",
    paid: "付款成功，请保存激活码",
    pending: "付款仍在处理中",
    cancelled: "本次支付未完成",
    expired: "激活码现在已经不支持通过网页查看",
    expiredDetail: "如果没有及时保存，请通过下方邮箱或小红书联系支持，并附上 Session ID 申请获得新的激活码。",
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
    eyebrow: "Permanent Obsidian plugin licence",
    headline: "Purchase a permanent Markdown2Card licence",
    lead: "Markdown2Card is an Obsidian plugin that turns Markdown content into shareable image cards. A single payment gives you a permanent licence with no subscription or automatic renewal.",
    once: "one-time payment · permanent licence",
    permanent: "Pay once for permanent use and no support reminders",
    devices: "Use on any number of devices",
    recovery: "Receive an activation code immediately; recover it from this page for 2 hours",
    refund: "Request a full refund within 7 days of payment",
    paymentMethods: "Cards, Alipay, and WeChat Pay appear only when eligible in Stripe Checkout. Email is not an entitlement requirement, though Stripe may request contact details for a payment method.",
    checkout: "Purchase permanent licence",
    navProduct: "Product",
    navPolicies: "Policies",
    navContact: "Contact",
    productEyebrow: "Product and fulfilment",
    productTitle: "What you are purchasing",
    productDescription: "Markdown2Card converts Markdown content in Obsidian into image cards, helping you turn notes, excerpts, and longer writing into visual formats that are easy to share.",
    productUseTitle: "Licence entitlement",
    productUse: "Payment provides a permanent personal licence for use on multiple personal devices, with no subscription fee.",
    productDeliveryTitle: "Digital delivery",
    productDelivery: "After Stripe confirms payment, this page immediately displays an activation code and provides a link back to Obsidian to complete activation.",
    productPreviewCaption: "An actual Markdown2Card export: one Markdown note automatically paginated into multiple image cards.",
    productLink: "View product details and source code",
    policiesEyebrow: "Transparent purchase",
    policiesTitle: "Delivery, refund, and data policies",
    deliveryTitle: "Digital product delivery",
    deliveryPolicy: "No physical shipping is required. Your activation code appears on the success page immediately after payment. Save it before closing the page. For delivery issues, contact support with the payment time and Session ID.",
    refundTitle: "7-day refund policy",
    refundPolicy: "You may request a full refund within 7 days of successful payment using the contact details below. Include the payment time and Stripe Session ID, but never send your full activation code. Approved refunds return to the original payment method; arrival time depends on the payment provider.",
    privacyTitle: "Privacy policy",
    privacyPolicy: "Stripe securely processes payment information. This page doesn't store card, Alipay, or WeChat Pay account details. We process transaction status, the Session ID, and activation-delivery data needed for payment fulfilment, activation, time-limited code recovery, and support. Support contact details aren't used for marketing.",
    termsTitle: "Terms of service",
    termsPolicy: "This is a one-time personal-use licence, not a subscription, and it doesn't renew automatically. Activation codes may not be resold, published, or shared with others. The product is maintained over time and features may change between versions.",
    merchantLabel: "Merchant",
    merchantName: BUSINESS.merchantName,
    supportPhoneLabel: "Support phone",
    supportPhone: BUSINESS.supportPhone,
    supportEmailLabel: "Support email",
    securePayment: "Payments are securely processed by Stripe Checkout.",
    creating: "Creating a secure checkout…",
    createFailed: "Checkout is temporarily unavailable. Please try again.",
    successEyebrow: "Thank you for purchasing Markdown2Card",
    confirming: "Confirming your payment",
    confirmingDetail: "Keep this page open while we confirm the payment with Stripe.",
    paid: "Payment confirmed—save your activation code",
    pending: "Your payment is still processing",
    cancelled: "This payment was not completed",
    expired: "Your activation code is no longer available on this page",
    expiredDetail: "If you did not save it, contact support below by email or Xiaohongshu and include your Session ID to request a new activation code.",
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
document.getElementById("support-phone-link").href = BUSINESS.supportPhoneHref;
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
  document.getElementById("primary-nav").hidden = true;
  document.getElementById("success-view").hidden = false;
  document.getElementById("session-id").textContent = sessionId;
  showPaymentStatus(sessionId);
} else if (params.get("cancelled") === "1") {
  document.getElementById("purchase-status").textContent = COPY[language].cancelled;
}
