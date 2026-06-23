import { createHash } from "crypto";

export function normalizeText(text: string) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

export function createContentHash(text: string) {
  return createHash("sha256").update(normalizeText(text)).digest("hex");
}
