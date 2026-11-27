// The translator for the office's components: the office language is the page's <html lang>, which the entry sets
// from ?lang= before the first render.
import { createT, pickLang } from './index.js';

export function getLang(): string {
  return pickLang(document.documentElement.lang);
}
export function getT() {
  return createT(getLang());
}
