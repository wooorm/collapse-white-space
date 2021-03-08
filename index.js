// `collapse(' \t\nbar \nbaz\t') // ' bar baz '`
export function collapseWhiteSpace(value) {
  return String(value).replace(/\s+/g, ' ')
}
