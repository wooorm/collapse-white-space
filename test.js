import test from 'tape'
import {collapseWhiteSpace} from './index.js'

test('collapseWhiteSpace(value)', function (t) {
  // @ts-expect-error Incorrect `value`.
  t.equal(collapseWhiteSpace(true), 'true', 'should coerce to string')

  t.equal(collapseWhiteSpace(' \t\nbar \nbaz\t'), ' bar baz ')
  t.equal(collapseWhiteSpace('   bar\t\t\tbaz\n\n\n'), ' bar baz ')
  t.equal(collapseWhiteSpace(' \n bar\t\n\tbaz\r\n'), ' bar baz ')

  t.equal(collapseWhiteSpace(' \u00A0 ', 'js'), ' ', 'style: js')
  t.equal(collapseWhiteSpace(' \u00A0 ', 'html'), ' \u00A0 ', 'style: html')
  t.equal(
    collapseWhiteSpace('a \n b  c', {preserveLineEndings: true}),
    'a\nb c',
    '`options.preserveLineEndings: true`'
  )
  t.equal(
    collapseWhiteSpace('a \n b  c', {preserveLineEndings: false}),
    'a b c',
    '`options.preserveLineEndings: false`'
  )

  t.equal(
    collapseWhiteSpace(' a  b ', {trim: true}),
    'a b',
    '`options.trim: true`'
  )
  t.equal(
    collapseWhiteSpace('  ', {trim: true}),
    '',
    '`options.trim: true` (2)'
  )
  t.equal(
    collapseWhiteSpace(' a ', {trim: false}),
    ' a ',
    '`options.trim: false`'
  )

  t.end()
})
