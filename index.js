/**
 * Collapse white space to a single space.
 *
 * @param {string} value
 *   Value to collapse white space in.
 * @returns {string}
 *   Value with collapsed white space.
 */
export function collapseWhiteSpace(value) {
  return String(value).replace(/\s+/g, ' ')
}
