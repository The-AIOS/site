import type { Locale } from "@/messages";
import type { StandardsCopy } from "./types";
import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";

export const STANDARDS_COPY: Record<Locale, StandardsCopy> = { en, es, pt };

export const STANDARDS_PATHS: Record<Locale, string> = { en: "/standards", es: "/es/standards", pt: "/pt/standards" };
