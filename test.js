import test from 'tape'
import {collapseWhiteSpace} from './index.js'

test('collapseWhiteSpace(value)', function (t) {
  // @ts-ignore runtime
  t.equal(collapseWhiteSpace(true), 'true', 'should coerce to string')

  t.equal(collapseWhiteSpace(' \t\nbar \nbaz\t'), ' bar baz ')
  t.equal(collapseWhiteSpace('   bar\t\t\tbaz\n\n\n'), ' bar baz ')
  t.equal(collapseWhiteSpace(' \n bar\t\n\tbaz\r\n'), ' bar baz ')

  t.end()
})
