/* Segment-level 404 for the English group, for any `notFound()` raised inside
 * it. The app-wide 404 that unmatched URLs get is `app/global-not-found.tsx`;
 * both render the same body so they can't drift. */

import { NotFoundBody } from "@/components/NotFoundBody";

export default function NotFound() {
  return <NotFoundBody />;
}
