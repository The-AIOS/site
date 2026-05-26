import en from "./en";
import es from "./es";
import pt from "./pt";
import type { Locale, Messages } from "./types";

export const MESSAGES: Record<Locale, Messages> = { en, es, pt };

export function getMessages(locale: Locale): Messages {
  return MESSAGES[locale];
}

export * from "./types";
