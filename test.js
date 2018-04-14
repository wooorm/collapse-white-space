'use strict';

var test = require('tape');
var collapse = require('.');

test('collapseWhiteSpace(value)', function (t) {
  t.equal(collapse(true), 'true', 'should coerce to string');

  t.equal(collapse(' \t\nbar \nbaz\t'), ' bar baz ');
  t.equal(collapse('   bar\t\t\tbaz\n\n\n'), ' bar baz ');
  t.equal(collapse(' \n bar\t\n\tbaz\r\n'), ' bar baz ');

  t.end();
});
