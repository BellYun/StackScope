import { randomUUID } from "crypto";

export function createId(prefix: string) {
  const value = randomUUID().replaceAll("-", "").slice(0, 12);
  return `${prefix}_${value}`;
}
