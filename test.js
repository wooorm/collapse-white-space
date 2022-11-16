import assert from 'node:assert/strict'
import test from 'node:test'
import {collapseWhiteSpace} from './index.js'

test('collapseWhiteSpace(value)', function () {
  // @ts-expect-error Incorrect `value`.
  assert.equal(collapseWhiteSpace(true), 'true', 'should coerce to string')

  assert.equal(collapseWhiteSpace(' \t\nbar \nbaz\t'), ' bar baz ')
  assert.equal(collapseWhiteSpace('   bar\t\t\tbaz\n\n\n'), ' bar baz ')
  assert.equal(collapseWhiteSpace(' \n bar\t\n\tbaz\r\n'), ' bar baz ')

  assert.equal(collapseWhiteSpace(' \u00A0 ', 'js'), ' ', 'style: js')
  assert.equal(
    collapseWhiteSpace(' \u00A0 ', 'html'),
    ' \u00A0 ',
    'style: html'
  )
  assert.equal(
    collapseWhiteSpace('a \n b  c', {preserveLineEndings: true}),
    'a\nb c',
    '`options.preserveLineEndings: true`'
  )
  assert.equal(
    collapseWhiteSpace('a \n b  c', {preserveLineEndings: false}),
    'a b c',
    '`options.preserveLineEndings: false`'
  )

  assert.equal(
    collapseWhiteSpace(' a  b ', {trim: true}),
    'a b',
    '`options.trim: true`'
  )
  assert.equal(
    collapseWhiteSpace('  ', {trim: true}),
    '',
    '`options.trim: true` (2)'
  )
  assert.equal(
    collapseWhiteSpace(' a ', {trim: false}),
    ' a ',
    '`options.trim: false`'
  )
})
