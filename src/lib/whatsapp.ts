// Contact form submissions are handed off to the institute's WhatsApp chat.
// The site is a static export (no backend), so instead of posting to a server
// we build a WhatsApp "click to chat" link with the submission pre-filled and
// open it — the visitor just taps send to reach us.

// Digits only, including country code, no "+" or spaces (wa.me format).
export const WHATSAPP_NUMBER = "923391110171";
// Human-readable version for fallback copy.
export const WHATSAPP_DISPLAY = "+92 339 1110171";

type Field = [label: string, value: string | null | undefined];

/**
 * Build a wa.me URL with the given heading + labelled fields pre-filled as the
 * message. Empty fields are skipped. Labels are bolded using WhatsApp markdown.
 */
export function buildWhatsAppUrl(heading: string, fields: Field[]): string {
  const lines = [heading, ""];
  for (const [label, value] of fields) {
    const v = (value ?? "").trim();
    if (v) lines.push(`*${label}:* ${v}`);
  }
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/**
 * Build the WhatsApp URL and open it in a new tab. Returns the URL so callers
 * can also render a manual fallback link (in case a popup blocker intervenes).
 */
export function openWhatsApp(heading: string, fields: Field[]): string {
  const url = buildWhatsAppUrl(heading, fields);
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return url;
}
