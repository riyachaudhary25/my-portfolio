/**
 * Scrolls the page smoothly to a section by its href (e.g., "#about").
 * Reusable utility to avoid duplicating this logic across components.
 *
 * @param {string} href - The section href (e.g., "#projects")
 * @param {object} [options] - Optional scroll options
 * @param {function} [onComplete] - Optional callback after scroll completes
 */
export const scrollToSection = (href, options = {}, onComplete) => {
  const id = href.startsWith("#") ? href.slice(1) : href;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", ...options });
    onComplete?.();
  }
};